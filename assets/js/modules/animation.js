export default

function animacaoHome() {
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