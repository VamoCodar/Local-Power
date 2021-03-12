//  PAGES
const pageHome = document.querySelector("#page__home")
const pageProdutoSolar = document.querySelector("#page__produto-solar")
const pageEmpresa = document.querySelector("#page__empresa")
const pageFranquias = document.querySelector("#page__franquias")
const pageRepresentantes = document.querySelector("#page__representantes")
const pageContato = document.querySelector("#page__contato")
const pageOrcamento = document.querySelector("#page__orcamento")


// produtos
const pageProdutoAssistencia = document.querySelector("#page__produto-assistencia")
const pageProdutoResidencial = document.querySelector("#page__produto-residencial")
const pageProdutoCorporativo = document.querySelector("#page__produto-corporativo")




function escopoPages() {

    //page HOME ========================
    if (pageHome) {
        document.body.classList.add("body__home")
        // 
    }
    //page EMPRESA ====================
    else if (pageEmpresa) {
        document.body.classList.add("body__empresa")
        // 
    }

    //page FRANQUIAS ====================
    else if (pageFranquias) {
        document.body.classList.add("body__franquias")

        // 
    }

    //page CONTATO ====================
    else if (pageContato) {
        document.body.classList.add("body__contato")

        // 
    }

    // PRODUTOS
    //page PRODUTO SOLAR ====================
    else if (pageProdutoSolar) {
        document.body.classList.add("body__produto-solar")
        // 
    }
    //page PRODUTO ASSISTENCIA ====================
    else if (pageProdutoAssistencia) {
        document.body.classList.add("body__produto-assistencia")
        // 
    }
    //page PRODUTO RESIDENCIAL ====================
    else if (pageProdutoResidencial) {
        document.body.classList.add("body__produto-residencial")
        // 
    }
    //page PRODUTO CORPORATIVO ====================
    else if (pageProdutoCorporativo) {
        document.body.classList.add("body__produto-corporativo")
        // 
    }

    //page REPRESENTANTES ====================
    else if (pageRepresentantes) {
        document.body.classList.add("body__representantes")

        // 
    }
     //page REPRESENTANTES ====================
     else if (pageOrcamento) {
        document.body.classList.add("body__orcamento")

        // 
    }

}

escopoPages()




//  SCRIPT GERAIS DAS PAGES ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// menu preenchido 
function menuPreenchido() {
    const menuFixo = document.querySelectorAll(".menu");

    menuFixo.forEach((i) => {
        if (window.pageYOffset >= 20) {
            document.body.classList.add("ativo__scroll");

        } else if (window.pageYOffset < 50) {
            document.body.classList.remove("ativo__scroll");
        }
    });
}
menuPreenchido();


/* abre & fecha menu  */
const menuItem = document.querySelectorAll(".menu__icon-click")
const linksMenu = document.querySelectorAll(".atalhos")
const mediaQuery = window.matchMedia('(min-width: 992px)')

function menuMobile() {
    if (!document.body.classList.contains("menu__open")) {
        document.body.classList.add("menu__open");

    } else if (document.body.classList.contains("menu__open")) {

        linksMenu.forEach((i) => {
            i.setAttribute(
                "style",
                "animation: voltaMenu 250ms both ease-out;"
            );
            setTimeout(() => {
                i.removeAttribute("style", "animation");
                document.body.classList.remove("menu__open");
            }, 250);
        })
    }
}


/* FECHA MENU SE CLICAR PARTE PRETA */
function fechaMenuMobile(click) {
    const partePreta = document.querySelector(".fundo__black")
    if (document.body.classList.contains("menu__open") && click.target === partePreta) {

        linksMenu.forEach((i) => {
            i.setAttribute(
                "style",
                "animation: voltaMenu 250ms both ease-out;"
            );
            setTimeout(() => {
                i.removeAttribute("style", "animation");
                document.body.classList.remove("menu__open");
            }, 250);
        })
    }

}


// add classe DROP MOBILE 
const dropMobile = document.querySelectorAll(".dropdown__menu")

dropMobile.forEach((i) => {
    i.addEventListener("click", function (event) {
        event.preventDefault();
        i.classList.toggle("abre")
    })
})

//eventos
menuItem.forEach((i) => {
    i.addEventListener("click", menuMobile)
})
document.body.addEventListener("click", fechaMenuMobile)
window.addEventListener("scroll", menuPreenchido);