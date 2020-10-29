import portugues_br from './pt_br'
import english from './en'

const local = (local) => {
    switch(local){        
        case 'pt':
            return portugues_br
        default:
            return english
    }
}


export default local