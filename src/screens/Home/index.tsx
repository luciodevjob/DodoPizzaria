import React, { useEffect, useState } from 'react';
import { RFValue } from 'react-native-responsive-fontsize';
import Logo from '../../assets/logo.svg';
import { FontAwesome5 } from '@expo/vector-icons';

import { ButtonCarts, Container, FoofWapper, Header, HeaderContent, Localization, LocalizationContent, TextLocation,} from './styles';
import { useTheme } from 'styled-components';
import { Alert, FlatList, ImageProps, StatusBar } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { FoodCarts } from '../../components/FoodCarts';

import { Ionicons } from '@expo/vector-icons';
import { Menu } from '../../components/Menu';

import logopizza from '../../assets/Pizza.png'
import salada from '../../assets/salada.png'
import fritas from '../../assets/fritas.png'
import sobremesa from '../../assets/sobremesa.png'
import drinks from '../../assets/bebidas.png'
import Margarita from '../../assets/margarita.png'
import pepperoni from '../../assets/pepperoni.png'
import frango from '../../assets/Frango.png'
import vegentariana from '../../assets/vegetariana.png'
import calabresa from '../../assets/calabresa.png'
import { MenuWapper } from '../../components/Menu/styles';
import { api } from '../../services/api';
import { foodDTOS } from '../../components/dtos/FoodDTOS';
import { getFoodImagens } from '../../Utis/getFoodImagens';



interface MenuCard {
  key: any,
  img: any,
  title: any,
}

interface foodCarts {

    key: string,
    type: string,
    img: string,
    title: string,
    description: string,
    price: number,

}


export function Home(){
  const theme = useTheme();
  const [foodMenu, setFoodMenu] = useState<foodDTOS[]>([])
  const [food, setFood] = useState<foodCarts[]>([])
  const [categories, setCategories] = useState('pizza')

  useEffect(() => {
    try {
    async function fetchCar() {
      const response = await api.get('/food')
      const responseMenu = await api.get('/foodMenu')
      setFoodMenu(response.data)
      setFood(responseMenu.data)
    
    }
    fetchCar()
  }
  catch (error) {}
   
  },[]);
  
function handleCategorySelect(categoryId: string){
 
  setCategories(categoryId)
}

  const pizza =[{
    key: '1',
    type: 'pizza',
    img: Margarita,
    title: 'Margarita',
    description: 
    'Médio | Queijo, cebola e tomate puro',
    price: 12
   },
   {
    key: '2',
    type: 'pizza',
    img: pepperoni,
    title: 'Pepperoni clássica',
    description: 
    'Médio | Queijo, pimenta húngara, paneer, pimentão e cebola',
    price: 12
   },
   {
    key: '3',
    type: 'pizza',
    img: frango,
    title: 'Frango Supremo',
    description: 
    'Médio | Queijo, pimenta húngara, paneer, pimentão e cebola',
    price: 12
   },
   {
    key: '4',
    type: 'pizza',
    img: vegentariana,
    title: 'Vegentariana',
    description: 
    'Médio | Queijo, pimenta húngara, paneer, pimentão e cebola',
    price: 12
   },
   {
    key: '5',
    type: 'pizza',
    img: calabresa,
    title: 'Calabresa',
    description: 
    'Médio | Queijo, pimenta húngara, paneer, pimentão e cebola',
    price: 12
   },
   {
     key: '6',
     type: 'fritas',
     img: fritas,
     title: 'Batata Frita',
     description: 'Brizola empanado com abacaxi',
     price: 12
   },
   {
    key: '7',
    type: 'fritas',
    img: fritas,
    title: 'Batata Frita',
    description: 'Brizola empanado com abacaxi',
    price: 12
  },
  {
    key: '8',
    type: 'fritas',
    img: fritas,
    title: 'Batata Frita',
    description: 'Brizola empanado com abacaxi',
    price: 12
  },
  {
    key: '9',
    type: 'fritas',
    img: fritas,
    title: 'Batata Frita',
    description: 'Brizola empanado com abacaxi',
    price: 12
  },
  {
    key: '10',
    type: 'fritas',
    img: fritas,
    title: 'Batata Frita',
    description: 'Brizola empanado com abacaxi',
    price: 12
  },
  {
    key: '11',
    type: 'fritas',
    img: fritas,
    title: 'Batata Frita',
    description: 'Brizola empanado com abacaxi',
    price: 12
  }
  ]

  
  return (
    <Container>
        <Header>
        <StatusBar
         barStyle="dark-content"
         backgroundColor="transparent"
         translucent
         />
          <HeaderContent>
            <Logo width={RFValue(183)} height={30}/>
            <ButtonCarts onPress={() => Alert.alert('to funcionando porra')}>
            <FontAwesome5 
              name="shopping-cart" 
              size={24} 
              color={theme.colors.Carts}/>
            </ButtonCarts>
          </HeaderContent>
          <Localization>
            <LocalizationContent>
              <TextLocation>Alameda Francisco de Miranda 244</TextLocation>
              <Ionicons 
                name="location-sharp" 
                size={16} 
                color={theme.colors.Carts} />
            </LocalizationContent>
          </Localization>

         <ScrollView
         horizontal
         showsHorizontalScrollIndicator={false}
         >
           {
             foodMenu.map(item => (
               <Menu 
               key={item.key}
               title={item.title}
               img={getFoodImagens(item.img)}
               cheked={item.title === categories}
               onPress={() => handleCategorySelect(item.title)}
               />
             ))
           }
         </ScrollView>
           
        </Header>

        <ScrollView
         showsVerticalScrollIndicator={false}
         >
            <FoofWapper>
           {
          
              food.map(item => (
              <FoodCarts
              cheked={item.type === categories}
              key={item.key}
              img={getFoodImagens(item.img)}
              title={item.title}
              description={item.description}
              price={item.price}
              />
             ))
           }
           </FoofWapper>
         </ScrollView>
      
       
    </Container>
  );
}