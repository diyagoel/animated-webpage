var crsr=document.querySelector
("#cursor")
var blr=document.querySelector
("#cursorblr")
document.addEventListener("mousemove",function(dets){
    crsr.style.left=dets.x+"px"
    crsr.style.top=dets.y+"px"
    blr.style.left=dets.x-150+"px"
    blr.style.top=dets.y-150+"px"
})

// var h4all = document.querySelectorAll("#nav h4")
// h4all.forEach(function(elem){
//     elem.addEventListener("mouseenter",function(){
//        crsr.style.scale=2
//        crsr.style.border="1px solid white"
//        crsr.style.backgroundColor="transparent"
//     })
//     elem.addEventListener("mouseleave",function(){
//         crsr.style.scale=1
//         crsr.style.border="0px solid #95C11E"
//         crsr.style.backgroundColor="#95C11E"
//      })
// })


gsap.to ("#nav",{
    backgroundColor:"#000",
    height:"4.5rem",
    duration:0.5,
    scrollTrigger:{
        trigger:"#nav",
        scroller:"body",
        start:"top -10%",
        end:"top -11%",
        scrub:2,
    }
})

gsap.to("#main",{
    backgroundColor:"#000",
    scrollTrigger:{
        trigger:"#main",
        scroller:"body",
        // markers:true,
        start:"top -25%",
        end:"top -70%",
        scrub:2,
    }
})

gsap.from("#about-us img, #about-us-in",{
    y: 90,
    opacity: 0,
    duration: 1,
    scrollTrigger: {
      trigger: "#about-us",
      scroller: "body",
      // markers:true,
      start: "top 70%",
      end: "top 65%",
      scrub: 2,
    }
})

gsap.from("#colon1",{
    y:-70,
    x:-70,
    scrollTrigger:{
        trigger:"#colon1",
        scroller:"body",
        start:"top 55%",
        end:"top 40%",
        scrub:4,
    }
})
gsap.from("#colon2", {
    y: 70,
    x: 70,
    scrollTrigger: {
      trigger: "#colon1",
      scroller: "body",
      start: "top 55%",
      end: "top 45%",
      scrub: 4,
    },
  });
  gsap.from("#page4 h1", {
    y: 30,
    scrollTrigger: {
      trigger: "#page4 h1",
      scroller: "body",
      // markers:true,
      start: "top 80%",
      end: "top 70%",
      scrub: 3,
    },
  });