var numProjects = 6;

gsap.registerPlugin(ScrollTrigger);

// Hero Section
let t1 = gsap.timeline({
     scrollTrigger: {
          trigger: '.hero',
          // start: 'top 80%',
          // end: 'bottom 20%',
          toggleActions: 'restart reverse restart reverse',
     }
});
t1.from('.about h4', {
     duration: 1,
     x: '100%',
     opacity: 0,
}, '0');
t1.from('.about h1', {
     duration: 1,
     y: '-100%',
     opacity: 0,
}, '0');
t1.from('.about h5', {
     duration: 1,
     x: '-100%',
     opacity: 0,
}, '0.5');
t1.from('.about button', {
     duration: 1,
     y: '100%',
     opacity: 0,
     stagger: 0.1
}, '1');
t1.from('.profile', {
     duration: 2,
     y: '-200%',
     opacity: 0,
     ease: Bounce.easeOut,
}, '0');
t1.from('.profile', {
     duration: 2,
     x: '200%',
     ease: Power1.easeOut,
}, '0');

// Projects Title
gsap.from('.projects h2', {
     duration: 1,
     x: '-100%',
     opacity: 0,
     scrollTrigger: {
          trigger: '.project',
          toggleActions: 'restart none none reverse'
     },
});

// Project Animations
for (var i = 1; i<=numProjects; i++) {
     var t2 = gsap.timeline({
          scrollTrigger: {
               trigger: '.p'+i.toString(),
               // start: 'top 90%',
               // end: 'bottom 10%',
               toggleActions: 'restart none none reverse',
          }
     });

     t2.from('.p'+i.toString(), {
          duration: 1,
          opacity: 0,
     }, '0');

     t2.from('.p'+i.toString()+' .project-left', {
          duration: 1,
          opacity: 0,
          x: '-100%',
     }, '0');

     t2.from('.p'+i.toString()+' .project-right', {
          duration: 1,
          opacity: 0,
          x: '100%',
     }, '0');
}