gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector(".main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the ".main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy(".main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector(".main").style.transform ? "transform" : "fixed"
});




// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();




let tl = gsap.timeline()
tl.from(".page1 h1",{
    y:100,
    opacity:0,
    delay:0.5,
    duration:0.5,
    stagger:0.3
}) 
tl.from(".page1 img",{
    opacity:0,
})
tl.from(".page2 .card",{
  opacity:0,
  scale:0,
  duration:0.5,
  // scrollTrigger:{
  //   trigger: ".page2 .card",
  //   scroller:"body",
  //   scrub:2,
  //   markers:true
    
  // }
})

var videocon = document.querySelector(".vdo-content");
var playbtn = document.querySelector(".cursor");
videocon.addEventListener("mouseenter", function () {
  gsap.to(playbtn, {
    scale: 1,
    opacity: 1,
  })})
videocon.addEventListener("mouseleave", function () {
  gsap.to(playbtn, {
    scale: 0,
    opacity: 0,
  })})
videocon.addEventListener("mousemove", function (dets) {
  gsap.to(playbtn, {
    left:dets.x-50,
    top:dets.y+400
  })})


var con = document.querySelector(".page3");
var btn = document.querySelector(".lol");
con.addEventListener("mouseenter", function () {
  gsap.to(btn, {
    scale: 1,
    opacity: 0.5,
  })})
con.addEventListener("mouseleave", function () {
  gsap.to(btn, {
    scale: 0,
    opacity: 0,
  })})
con.addEventListener("mousemove", function (dets) {
    console.log("hello");
  gsap.to(btn, {
    left:dets.x-70,
    top:dets.y+1850
  })})