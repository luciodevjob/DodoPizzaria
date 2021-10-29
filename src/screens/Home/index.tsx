import React, { useEffect, useState } from 'react';
import { RFValue } from 'react-native-responsive-fontsize';
import Logo from '../../assets/logo.svg';
import { FontAwesome5 } from '@expo/vector-icons';

import { BackgroundLenght, ButtonCarts, Container, FoofWapper, Header, HeaderContent, Localization, LocalizationContent, TextLocation, Title,} from './styles';
import { useTheme } from 'styled-components';
import { Alert, Modal, StatusBar } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { FoodCarts } from '../../components/FoodCarts';

import { Ionicons } from '@expo/vector-icons';
import { Menu } from '../../components/Menu';

import { api } from '../../services/api';
import { foodDTO, } from '../../components/dtos/FoodDTO';
import { getFoodImagens } from '../../Utis/getFoodImagens';
import { AddCarts } from '../../components/AddCarts';
import { Cart } from '../../components/Cart';



interface MenuCard {
  key: string,
  img: string,
  title: string,
}

export interface PropRequest {
   pedido: {
        name: string,
        tamanho: {
          name: string
          price: string
        },
        estilo: {
          name: string
          price: string
        },
        adicionar: {
          name: string
          price: string
        },
        total: number,
      },
      id: number,
    }


interface foodCarts {

    key: string,
    type: string,
    img: string,
    title: string,
    description: string,
    price: number,
    setRequest: React.Dispatch<React.SetStateAction<PropRequest | undefined>>
    

}

interface propsFood {
  data: foodDTO[],
}
interface Props {
  data: foodCarts
}


export function Home(){
  const theme = useTheme();
  const [foodMenu, setFoodMenu] = useState<foodDTO[]>([])
  const [food, setFood] = useState<foodCarts[]>([])
  const [categories, setCategories] = useState('pizza')
  const [cartModal, setCartModal] = useState(false)
  const [categorySelect, setCategorySelect]  = useState(false)

  const [request, setRequest] = useState<PropRequest[]>([])
  const [requestCart, setRequestCart] = useState()
  //console.log(request)
 
  function openModal() {
    setCategorySelect(true);
}

function closeModal() {
    setCategorySelect(false);
}

  useEffect(() => {
   
    try {
    async function fetchCar() {
      const response = await api.get('/food') 
      const responseMenu = await api.get('/foodMenu') 
     

      setFoodMenu(response.data as foodDTO[])
      setFood(responseMenu.data as foodCarts[])
      
     
    
    }
    fetchCar()
   
  }
  catch (error) {}
   
  },[]);
  
  console.log(request)
function handleCategorySelect(categoryId: string){
 
  setCategories(categoryId)
}
  
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
            
            <ButtonCarts onPress={() => openModal()}>
           
            <FontAwesome5 
            
              name="shopping-cart" 
              size={24} 
              color={theme.colors.Carts}/>
               {
                request.length > 0 &&
                <BackgroundLenght>
               <Title>{request.length}</Title>
              </BackgroundLenght>}
            
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
              setRequest={setRequest as React.Dispatch<React.SetStateAction<PropRequest[] | undefined>>}
              request={request}
              />
             ))
           }
           </FoofWapper>
         </ScrollView>
         
         <Modal 
         animationType="slide"
        transparent={true}
        visible={categorySelect}
        onRequestClose={() => {
        Alert.alert("Modal has been closed.");
        setCategorySelect(!categorySelect);
        }}>
            <Cart  request={request}/>
        </Modal>
    </Container>
  );
}

