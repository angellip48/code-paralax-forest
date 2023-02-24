
 import '../styles/main.scss'
 import '../index.html'
 import '../js/gsap/gsap.min'
 import '../js/gsap/ScrollSmoother.min'
 import '../js/gsap/ScrollTrigger.min'


 window.addEventListener('scroll', e => {
    document.body.style.setProperty('--scrollTop', `${globalThis.scrollY}px`)
 })
 
 gsap.registerPlugin(ScrollTrigger, ScrollSmoother)
 ScrollSmoother.create({
    wrapper: '.wrapper',
    content: '.content'
 })
 

