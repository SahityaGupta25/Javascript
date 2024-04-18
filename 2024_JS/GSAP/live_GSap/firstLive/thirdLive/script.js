gsap.from("#page1 .box",{
    scale: 0 ,
    rotate: 360,
    duration: 0.8,
    delay:0.5,
    scrollTrigger: {
        trigger:"#page1 .box",
        scroller: "body",
        markers: true,
        start: "top 50%",
        end: "top 30%",
        scrub: true
    }
})
gsap.from("#page2 .box",{
    scale: 0 ,
    rotate: 360,
    duration: 0.8,
    delay:0.5,
    scrollTrigger: {
        trigger:"#page2 .box",
        scroller: "body",
        markers: true,
        start: "top 50%",
        end: "top 20%",
        scrub: true
    }
})
gsap.from("#page3 .box",{
    scale: 0 ,
    rotate: 360,
    duration: 0.8,
    delay:0.5,
    // scrollTrigger: "#page3 .box"
    scrollTrigger: {
        trigger:"#page3 .box",
        scroller: "body",
        markers: true,
        start: "top 50%",
        end: "top 30%",
        scrub: true
    }
})