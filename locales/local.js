import portugues_br from './pt_br'
import english from './en'

const local = (local) => {
    switch(local){        
        case 'pt':
            return portugues_br
        case 'pt-BR':
            return portugues_br
        default:
            return english
    }
}

/*
 Mixin para colocar em todo o app
 Feito para já selecionar automaticamnete os termos referentes à rota aessada
*/
const traducao_mixin = {
    data()
        {
            return{
                l:local(localStorage.lang)[this.$route.name]
            }
        }
    }

export default traducao_mixin