let toggleBtn = document.querySelector(".toggle-btn");
let closeBtn = document.querySelector(".close-btn");
let navMenu = document.querySelector(".center-nav");


toggleBtn.addEventListener('click', () => {
    if(toggleBtn) {
        navMenu.classList.add("show-nav");
    }
})

 closeBtn.addEventListener('click', () => {
    if(closeBtn) {
        navMenu.classList.remove("show-nav");
    }
})









gsap.from(".nav",{
    y:-100,
    duration:1,
    delay:.5,
    opacity:0,
    stagger:0.5
})


gsap.from(".text,.text h5",{
    x:-100,
    duration:1.8,
    delay:.5,
    opacity:0,
    stagger:.7
})


gsap.from(".buttons",{
    y:100,
    duration:1.8,
    delay:.5,
    opacity:0
})
 gsap.from(".image-gsap",{
  
    duration:1,
    opacity:0,
    scale:.2
    
 }
 )


 gsap.from(".page2 .project, .text5 h1,.text5 h5",{

    opacity:0,
    duration:1,
delay:.478,
stagger:.3,
    
    scrollTrigger:{
trigger:".page2 .project",
scroll:"body"
}

  })



  gsap.from(".page1 .left,.right",{
    opacity:0,
    duration:1,
delay:.5,
       stagger:.8,
    scrollTrigger:{
trigger:".page1 .left,.right",
scroll:"body"
    }

  })

gsap.from(".page3 .left1,.left1 h1,.left h5,.about-loc,.about-email",{
    scale:0.7,
    duration:1.5,
    delay:.5,
    opacity:0,
    stagger:.8,
    scrollTrigger:".page3 .left1"
})



// sr.reveal(.nav, .section-title, {delay: 600})
// sr.reveal(.home-foot, {delay: 700})
// sr.reveal(.home_image, {delay: 900, origin: 'top'})

// sr.reveal(.sponsor-image, .products-card, .footer-logo, .footer-content, .footer-copy, {origin: 'top', interval: 100})
// sr.reveal(.specs-data, .discount-animate, {origin: 'left', interval: 100})
// sr.reveal(.specs-img, .discount-img, {origin: 'right'})
// sr.reveal(.case-img, {origin: 'top'})
// sr.reveal(.case-data);