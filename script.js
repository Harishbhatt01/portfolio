// smooth scrolling 
// const lenis = new Lenis()
// lenis.on('scroll', (e) => {
//   console.log(e)
// })
// function raf(time) {
//   lenis.raf(time)
//   requestAnimationFrame(raf)
// }
// requestAnimationFrame(raf)

// bar icon funcsnality 
const barIcon = document.getElementById('bar-icon');
const xbarIcon = document.getElementById('xbar-icon');
const navItems = document.querySelector('.nav-items');
const logo = document.querySelector('.logo');
barIcon.addEventListener('click', ()=>{
    barIcon.style.display = 'none';
    logo.style.display = 'none';
    xbarIcon.style.display = 'block'
    navItems.style.display = 'block'
})

xbarIcon.addEventListener('click',()=>{
    barIcon.style.display = 'block';
    logo.style.display = 'block';
    xbarIcon.style.display = 'none';
    navItems.style.display = 'none';
})

// number counting animation
const counterNumber = document.querySelectorAll('.increase');
const speed = 50
counterNumber.forEach((currentElement)=>{
    setTimeout(()=>{
        const updateNumber =() => {
            const targetNumber = parseInt(currentElement.dataset.value);
            // console.log(targetNumber)
            const intialData = parseInt(currentElement.innerText);
            // console.log(intialData)
            const incrementNumber = Math.floor(targetNumber/speed)
            // console.log(incrementNumber)
            if(intialData<targetNumber){
                currentElement.innerText= `${intialData+incrementNumber} +`;    
                setTimeout(updateNumber, 10)
            }
        };
        updateNumber()
    },2000)
})


//gsap code 
gsap.from('#main',{
    y : 1500,
    duration: 1.5
},'animation')
gsap.from('#dawnload-btn',{
    rotate: 360,
    repeat: 3
})


//  var tl = gsap.timeline({scrollTrigger:{
//     trigger: "#fifth-section",
//     start: "0% 50%",
//     end: "70% 70%",
//     scrub: true,
//     // markers: true,
// }})

// tl.from('.amitab',{
//     x: -500,
//     y: 300,
//     duration: 2,
// },'nam')

// tl.from('.narendr',{
//     x: 600,
//     y: -300,
//     duration: 2,
// },'nam')