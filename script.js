var crsr = document.querySelector(`#cursor`)
var blur = document.querySelector(`#cursor-blur`)


document.addEventListener("mousemove",(dets)=>{
    crsr.style.left= dets.x+"px"
    crsr.style.top= dets.y+"px"
     blur.style.left= dets.x - 150+"px"
    blur.style.top= dets.y-150+"px"
   
})


gsap.to("#nav" ,{
    backgroundColor:"#000" ,
   height:"80px",
   duration:0.5,
   scrollTrigger:{
    trigger:"#nav",
    scroller:"body",
    markers:true,
    start:"top -10%",
    end:"top -11%",
    scrub:1
   }
})


gsap.to("#main" ,{
    backgroundColor:"#000",
    scrollTrigger:{
     trigger:"#main",
     scroller:"body",
       markers:true,
       start:"top -25%",
       end:"top -70%",
       scrub:2
    }
})

gsap.from("#about-us img, #about-us-in" ,{
    y:50,
    opacity:0,     
    duration:1,
    // stagger:0.4,
    scrollTrigger:{
     trigger:"#about-us",
     scroller:"body",
        //  markers:true,
         start:"top 70%",
         end:"top 65%",
         scrub:1
     }
})
gsap.from(".card", {
  scale: 0.8,
  opacity: 0,
  duration: 1,
  stagger: 0.1,
  immediateRender: false,
  scrollTrigger: {
    trigger: ".card",
    scroller: "body",
    start: "top 80%",
    toggleActions: "play none none reverse" // ✅ instead of scrub
  }
});


gsap.from("#colon1", {
    y:-70,
    x:-70,
    scrollTrigger:{
        trigger:"#colon1",
        scroller:"body",
        // markers:true,
        start:"top 80%",
        end:"top 75%",
        scrub:5,
    }
})

gsap.from("#colon2", {
    y:70,
    x:70,
    scrollTrigger:{
        trigger:"#colon2",
        scroller:"body",
        // markers:true,
        start:"top 80%",
        end:"top 75%",
        scrub:5,
    }
})

gsap.from("#page4 h1", {
    y:50,
    scrollTrigger:{
        trigger:"#page4 h1",
        scroller:"body",
        // markers:true,
        start:"top 75%",
        end:"top 70%",
        scrub:3,
    }
})
    
// Animate Each Footer Section (f1, f2, f3, f4)
gsap.from("#footer div", {
  y: 50,
  opacity: 0,
  stagger: 0.2,
  duration: 0.8,
  scrollTrigger: {
    trigger: "#footer",
    scroller: "body",
    start: "top 85%",
    end: "top 70%",
  },
});

// Logo rotation or pulse effect (for f1 image)
// gsap.to("#f1 img", {
//   rotate: 360,
//   duration: 5,
//   repeat: -1,
//   ease: "none",
// });


// Scale & Glow Effect on Hover
document.querySelectorAll("#footer div").forEach((elem) => {
  elem.addEventListener("mouseenter", () => {
    gsap.to(elem, {
      scale: 1.1,
      boxShadow: "0 0 20px #95C11E",
      duration: 0.3,
      ease: "power2.out",
    });
  });

  elem.addEventListener("mouseleave", () => {
    gsap.to(elem, {
      scale: 1,
      boxShadow: "0 0 0px transparent",
      duration: 0.3,
      ease: "power2.in",
    });
  });
});

window.addEventListener("load", () => {
  ScrollTrigger.refresh();
});


