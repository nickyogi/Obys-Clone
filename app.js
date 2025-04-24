locomotiveWithScroll = function () {
  gsap.registerPlugin(ScrollTrigger);

  // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

  const locoScroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true,
  });
  // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
  locoScroll.on("scroll", ScrollTrigger.update);

  // tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
  ScrollTrigger.scrollerProxy("#main", {
    scrollTop(value) {
      return arguments.length
        ? locoScroll.scrollTo(value, 0, 0)
        : locoScroll.scroll.instance.scroll.y;
    }, // we don't have to define a scrollLeft because we're only scrolling vertically.
    getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight,
      };
    },
    // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
    pinType: document.querySelector("#main").style.transform
      ? "transform"
      : "fixed",
  });

  // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll.
  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

  // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
  ScrollTrigger.refresh();
};

locomotiveWithScroll();

function loadCounter() {
  let counter = document.querySelector("#counter");

  let count = 0;
  let t = setInterval(() => {
    if (count < 100) {
      counter.textContent = count++;
    } else {
      counter.textContent = "100";
      clearInterval(t);
    }
  }, 30);

  gsap.to("#loader", {
    opacity: 0,
    display: "none",
    duration: 0.8,
    delay: 4,
    stagger: 0.2,
    scrub: 3,
  });

  gsap.from("#line-first", {
    opacity: 0,
    duration: 0.5,
    // delay: 0.2,
    scrub: 3,
  });

  gsap.to("#loader h1", {
    top:0,
    duration: 0.8,
    // delay: 0.2,
    stagger: 0.2,
    scrub: 3,
  });
}

loadCounter();

function page1Animation() {
  gsap.to("#main", {
    top: 0,
    duration: 1.2,
    // ease: "expo.in",
    delay: 4.2,
    stagger: 0.2,
    scrub: 5,
  });

  gsap.from("#page1-main .line", {
    opacity: 0,
    duration: 0.5,
    delay: 4.5,
    stagger: 0.2,
    scrub: 3,
  });

  gsap.from("#page1-main .up", {
    y: 500,
    duration: 0.8,
    delay: 4.5,
    stagger: 0.2,
    scrub: 3,
  });

  document.addEventListener("mousemove", function (dets) {
    gsap.to("#cursor", {
      left: dets.x,
      top: dets.y,
      duration:0.1
    });
  });

  
}

page1Animation();

function flagHover() {
  let hoverElement = document.querySelector("#flagHover");
  let pageMain = document.querySelector("#page1-main");
  let flagImg = document.querySelector("#flag");

  pageMain.addEventListener("mouseenter", function () {
    hoverElement.addEventListener("mousemove", function (dets) {
      gsap.to("#flag", {
        top: dets.y - 100,
        left: dets.x,
        opacity: 1,
      });
    });
  });

  hoverElement.addEventListener("mouseleave", () => {
    gsap.to("#flag", {
      opacity: 0,
    });
  });
}

flagHover();

function videoPlay() {
  let videoPlayer = document.querySelector("#video-player");
  let video = document.querySelector("#vdo");
  let play = document.querySelector("#play");

  if(window.screen.width > 600) {
    videoPlayer.addEventListener("mouseenter", function () {
      videoPlayer.addEventListener("mousemove", function (dets) {
        gsap.to("#play", {
          top: dets.y - 150,
          left: dets.x - 400,
          duration: 0.1,
        });
        gsap.to("#cursor", {
          opacity: 0,
          duration: 0.1,
        });
      });
    });
    videoPlayer.addEventListener("mouseleave", function () {
      gsap.to("#play", {
        top: "0%",
        left: "80%",
      });
      gsap.to("#cursor", {
        opacity: 1,
        duration: 0.1,
      });
    });
  }

  let flag = 0;

  videoPlayer.addEventListener("click", function () {
    if (flag == 0) {
      video.play();
      video.style.opacity = 1;
      play.innerHTML = `<i class="ri-pause-mini-line"></i>`;
      play.style.scale = 0.8;
      flag = 1;
    } else {
      video.pause();
      video.style.opacity = 0;
      play.innerHTML = `<i class="ri-google-play-fill"></i>`;
      play.style.scale = 1;
      flag = 0;
    }
  });
}

videoPlay();

function sheryAnimation() {
  Shery.makeMagnet("#nav-part2 h3" /* Element to target.*/, {});
  Shery.makeMagnet("#nav-icons span svg" /* Element to target.*/, {});
}

sheryAnimation()

function lineAnimation() {
  gsap.from("#thin-line1", {
    left: "60%",
    opacity: 0,
    scrollTrigger: {
      trigger: "#thin-line1",
      scroller: "#main",
      start: "top 210%",
      end: "top 150%",
      scrub: 3,
    },
  });

  gsap.from("#thin-line2", {
    left: "60%",
    opacity: 0,
    scrollTrigger: {
      trigger: "#thin-line2",
      scroller: "#main",
      start: "top 210%",
      end: "top 150%",
      scrub: 3,
    },
  });

  gsap.from("#thin-line3", {
    left: "60%",
    opacity: 0,
    scrollTrigger: {
      trigger: "#thin-line3",
      scroller: "#main",
      start: "top 210%",
      end: "top 150%",
      scrub: 3,
    },
  });

  gsap.from("#thin-line5", {
    left: "60%",
    opacity: 0,
    scrollTrigger: {
      trigger: "#thin-line5",
      scroller: "#main",
      start: "top 210%",
      end: "top 150%",
      scrub: 3,
    },
  });

  gsap.from("#thin-line4", {
    left: "60%",
    opacity: 0,
    scrollTrigger: {
      trigger: "#thin-line4",
      scroller: "#main",
      start: "top 220%",
      end: "top 180%",
      scrub: 3,
    },
  });
}

lineAnimation();

function textAnimation() {
    let clutter = ""
    let clutter2 = ""
    document.querySelector("#fadeAnimation").textContent.split("").forEach(function (elem) {
      clutter += `<span>${elem}</span>`
    })
    document.querySelector("#fadeAnimation").innerHTML = clutter
    document.querySelector("#fadeAnimation2").textContent.split("").forEach(function (elem) {
      clutter2 += `<span>${elem}</span>`
    })
    document.querySelector("#fadeAnimation2").innerHTML = clutter2
  
  
    document.querySelector("#footer-text").addEventListener("mouseenter", function () {
      gsap.to("#fadeAnimation span", {
        duration:0.2,
        opacity: 0,
        stagger: 0.05
      })
      gsap.to("#fadeAnimation2 span", {
        duration:0.2,
        delay: 0.35,
        opacity: 1,
        stagger: 0.05
      })
    })
    document.querySelector("#footer-text").addEventListener("mouseleave", function () {
      gsap.to("#fadeAnimation span", {
        duration:0.2,
        opacity: 1,
        stagger: 0.05,
        delay: 0.35,
  
      })
      gsap.to("#fadeAnimation2 span", {
        duration:0.2,
        opacity: 0,
        stagger: 0.05
      })
    })
  }

textAnimation();
