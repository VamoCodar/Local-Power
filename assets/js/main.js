import Dom from './modules/constructors.js'; //selecionar elementos e gerenciar classe
import animacaoHome from './modules/animation.js'; //animacao full scroll da home
import menu from './modules/menu.js'; //js do menu
import * as config from './modules/swiper__props.js'; //Configs do Swiper

menu() //executa function do menu

//  PAGES
const pageHome = new Dom().el("#page__home")
const pageProdutoSolar = new Dom().el("#page__produto-solar")
const pageEmpresa = new Dom().el("#page__empresa")
const pageFranquias = new Dom().el("#page__franquias")
const pageRepresentantes = new Dom().el("#page__representantes")
const pageContato = new Dom().el("#page__contato")
const pageOrcamento = new Dom().el("#page__orcamento")
// produtos
const pageProdutoAssistencia = new Dom().el("#page__produto-assistencia")
const pageProdutoResidencial = new Dom().el("#page__produto-residencial")
const pageProdutoCorporativo = new Dom().el("#page__produto-corporativo")

function escopoPages() {

    if (pageHome) { //page HOME
        animacaoHome()
        new Dom().bodyClass("body__home")

    } else if (pageEmpresa) { //page EMPRESA
        new Dom().bodyClass("body__empresa")

    } else if (pageFranquias) { //page FRANQUIA
        new Dom().bodyClass("body__franquias")
        new Swiper(".swiper-container", config.props);

    } else if (pageContato) { //page CONTATO 
        new Dom().bodyClass("body__contato")

    }

    // PRODUTOS ===
    else if (pageProdutoSolar) { //page PRODUTO SOLAR
        new Dom().bodyClass("body__produto-solar")

    } else if (pageProdutoAssistencia) { //page PRODUTO ASSISTENCIA
        new Dom().bodyClass("body__produto-assistencia")

    } else if (pageProdutoResidencial) { //page PRODUTO RESIDENCIAL
        new Dom().bodyClass("body__produto-residencial")

    } else if (pageProdutoCorporativo) { //page PRODUTO CORPORATIVO
        new Dom().bodyClass("body__produto-corporativo")

    } else if (pageRepresentantes) { //page REPRESENTANTES
        new Dom().bodyClass("body__representantes")

    } else if (pageOrcamento) { //page REPRESENTANTES
        new Dom().bodyClass("body__orcamento")

    }

}
escopoPages()