import logopizza from '../assets/Pizza.png'
import salada from '../assets/salada.png'
import fritas from '../assets/fritas.png'
import sobremesa from '../assets/sobremesa.png'
import drinks from '../assets/bebidas.png'

import Margarita from '../assets/margarita.png'
import pepperoni from '../assets/pepperoni.png'
import frango from '../assets/Frango.png'
import vegentariana from '../assets/vegetariana.png'
import calabresa from '../assets/calabresa.png'

export function getFoodImagens(type: string) {
    switch (type) {
      case 'logopizza':
        return logopizza
      case 'salada':
        return salada
      case 'fritas':
        return fritas
      case 'sobremesa':
        return sobremesa
      case 'drinks':
        return drinks


        case 'Margarita':
            return Margarita
          case 'pepperoni':
            return pepperoni
          case 'frango':
            return frango
          case 'vegentariana':
            return vegentariana 
          case 'calabresa':
            return calabresa
    }
  }