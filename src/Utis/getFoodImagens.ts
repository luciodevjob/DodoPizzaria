import logopizza from '../../assets/Pizza.png'
import salada from '../../assets/salada.png'
import fritas from '../../assets/fritas.png'
import sobremesa from '../../assets/sobremesa.png'
import drinks from '../../assets/bebidas.png'

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
    }
  }