
var tl = gsap.timeline()


tl.from("#nav img,#nav h3,#nav h4 ,#nav button",{
    y: -166,
    duration: 0.5,
    delay: 0.6,
    opacity: 0,
    stagger: 0.2
}) 

tl.from("#main h1",{
    y:200,
    stagger: 0.3,
    opacity: 0,

})
tl.from("#main>img",{
    scale:0,
    stagger: 0.3,
    opacity: 0,

})
tl.from("h5",{
    scale: 0,
    opacity: 0,
    duration:0.3,
    delay: 0.5,

})
tl.to("h5",{
    y: 66,
    repeat: -1,
    yoyo: true
})