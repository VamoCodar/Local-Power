function verificaFullPage() {

    const tamanho = window.matchMedia('(min-width: 992px)')
    
    let alturaTela = window.innerHeight;
    if (alturaTela > 640 && alturaTela < 1000 && tamanho) {
        new fullpage('#fullpage', {
            //options here
            autoScrolling: true,
            scrollHorizontally: true
        });
    } else {
        document.body.classList.add("no__animation")
    }

}
verificaFullPage()




// fullpage_api.setAllowScrolling(false);

// //CONTROLLER 
// let controller = new ScrollMagic.Controller();
// const timeline = new TimelineMax();



// var wipeAnimation = new TimelineMax()
//     .staggerFromTo(".animate", 1, {
//         y: "-100%"
//     }, {
//         y: "0%",
//         ease: Linear.easeNone
//     }); // in from top

// var wipeAnimation2 = new TimelineMax()
//     .fromTo(".animate", 1, {
//         y: "-100%"
//     }, {
//         y: "0%",
//         ease: Linear.easeNone
//     }); // in from top


// //FIXADO SECAO CELULAR SCENE ==================================
// var sceneFix = new ScrollMagic.Scene({
//         triggerElement: "#page__home", 
//         triggerHook: "onLeave",
//         duration: "300%"
//     })
//     .setPin("#page__home")
//     .setTween(wipeAnimation)
//     .addIndicators() // add indicators (requires plugin)
//     .addTo(controller);


// //controlador 
// controller.addScene([
//     sceneFix,

// ]);