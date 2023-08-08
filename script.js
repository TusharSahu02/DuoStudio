function init() {
  gsap.registerPlugin(ScrollTrigger);

  const locoScroll = new LocomotiveScroll({
    el: document.querySelector(".main"),
    smooth: true,
  });
  locoScroll.on("scroll", ScrollTrigger.update);

  ScrollTrigger.scrollerProxy(".main", {
    scrollTop(value) {
      return arguments.length
        ? locoScroll.scrollTo(value, 0, 0)
        : locoScroll.scroll.instance.scroll.y;
    },
    getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight,
      };
    },
    pinType: document.querySelector(".main").style.transform
      ? "transform"
      : "fixed",
  });

  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

  ScrollTrigger.refresh();
}
init();

var crsr = document.querySelector(".cursor");
// var main = document.querySelector(".main");
document.addEventListener("mousemove", function (dets) {
  crsr.style.left = dets.x + 10 + "px";
  crsr.style.top = dets.y + 10 + "px";
});

var tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".page1 h1",
    scroller: ".main",
    start: "top 31%",
    end: "top 0",
    scrub: 3,
  },
});
tl.to(
  ".page1 h1",
  {
    x: -400,
    duration: 1,
  },
  "heading"
);
tl.to(
  ".page1 h2",
  {
    x: 400,
    duration: 1,
  },
  "heading"
);
tl.to(
  ".page1 video",
  {
    width: "95vw",
    marginTop: "-30vh",
  },
  "heading"
);
tl.to(
  ".page1 p",
  {
    y: 200,
  },
  "heading"
);

var tl2 = gsap.timeline({
  scrollTrigger: {
    trigger: ".page1 h1",
    scroller: ".main",
    start: "top -90%",
    end: "top -40%",
    scrub: 3,
  },
});
tl2.to(".main", {
  backgroundColor: "#fff",
});

var tl3 = gsap.timeline({
  scrollTrigger: {
    trigger: ".page1 h1",
    scroller: ".main",
    start: "top -350%",
    end: "top -355%",
    scrub: 3,
  },
});
tl3.to(".main", {
  backgroundColor: "#0F0D0D",
});

// var head = document.querySelectorAll(".head");
// head.forEach(function (a) {
//   a.addEventListener("mouseenter", function () {
//     crsr.style.width = "200px";
//     crsr.style.height = "200px";
//     crsr.style.borderRadius = "50%";
//   });
//   a.addEventListener("mouseleave", function () {
//     crsr.style.width = "20px";
//     crsr.style.height = "20px";
//     crsr.style.borderRadius = "50%";
//   });
// });

var boxes = document.querySelectorAll(".box");
boxes.forEach(function (elem) {
  elem.addEventListener("mouseenter", function () {
    // elem.style.backgroundColor = "red"
    var att = elem.getAttribute("data-image");
    crsr.style.width = "470px";
    crsr.style.height = "350px";
    crsr.style.borderRadius = "0";
    crsr.style.backgroundImage = `url(${att})`;
  });
  elem.addEventListener("mouseleave", function () {
    elem.style.backgroundColor = "transparent";
    crsr.style.width = "20px";
    crsr.style.height = "20px";
    crsr.style.borderRadius = "50%";
    crsr.style.backgroundImage = `none`;
  });
});
