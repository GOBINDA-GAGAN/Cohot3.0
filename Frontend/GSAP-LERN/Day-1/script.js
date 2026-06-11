// gsap.to('#box1',{
//     x:500,
//     duration:4,
//     delay:2,
//     rotate:"360deg",
//     transform:`translate(200px ,400px)`,
//     borderRadius:"50%",
//     backgroundColor:"#ffff",
//     scrub:2
// })
// gsap.from('#box2',{
//     x:500,
//     y:300,
//     duration:4,
//     delay:2,
//     rotate:"360deg",
//     transform:`translate(200px ,400px)`,
//     borderRadius:"50%",
//     backgroundColor:"#ffff",
//     scrub:2
// })

const t1=gsap.timeline();
t1.to('#box1',{
    x:500,
    duration:4,
    delay:2,
    rotate:"360deg",
    transform:`translate(200px ,400px)`,
    borderRadius:"50%",
    backgroundColor:"#ffff",
    scrub:2
})
t1.from('#box2',{
    x:500,
    y:300,
    duration:4,
    delay:0,
    rotate:"360deg",
    transform:`translate(200px ,400px)`,
    borderRadius:"50%",
    backgroundColor:"#ffff",
    scrub:2
})


console.log("hello");
