let ticking = false;

document.addEventListener("wheel", doSomething, true);

function doSomething(event) {
  console.log("test", parseInt(event.deltaY));

  let scrollVar = parseInt(event.deltaY);

  let oldVar =
    parseFloat(document.getElementById("scroll-1").style.opacity) || 0;

  let newVar;

  if (scrollVar > 0) {
    newVar = Math.min(1, oldVar + 0.1);
  } else {
    newVar = Math.max(0, oldVar - 0.1);
  }

  let scroll = document.getElementsByClassName("content");

  for (let elem of scroll) {
    elem.style.opacity = newVar;
  }

  if (!ticking) {
    setTimeout(() => {
      doSomething(event);
      ticking = false;
    }, 20);

    ticking = true;
  }
}

document.removeEventListener("wheel", doSomething);
