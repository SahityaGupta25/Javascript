let timeline = gsap.timeline()
timeline.from("#nav",{
    opacity: 0,
    delay: 0.5
})
timeline.from("#nav h1,h4,h3",{
    y:-80,
    duration:0.5,
    delay: 0.5,
    opacity: 0,
    stagger: 0.3
})

timeline.from("#left h1",{
    x: -766,
    duration: 0.4,
    delay: 0.5,
    stagger: 0.5,
})
timeline.from("#right img",{
    scale: 2,
    opacity: 0 ,
    duration: 0.5
})



gsap.from("#page2 .box",{
    scale: 0,
    duration: 0.5,
    opacity:0 , 
    stagger: 0.4,
    scrollTrigger:{
        trigger: "#page2 .box",
        scroll: "body",
    }
    
})