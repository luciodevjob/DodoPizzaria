import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { useTheme } from 'styled-components';
import Margarita from '../../assets/margarita.png'

import { Container, Content, ContentCart, Ingredients, Name, PizzaImg, Price, Properties } from './styles';

interface props {
    name: string;
    choosesize: string;
    addOns: string;
    priceTotal: number;
    style: string;
}
export function CartRequest({name, choosesize, style, addOns, priceTotal} : props){
    const theme = useTheme()
  /*  pedido :{ 
        name: string; 
     choosesize: { name: string; price: string; }; 
     selectCrust: { name: string; price: string; }; 
     addOns: { name: string; price: string; }; 
     priceTotal: number; }
    }*/
  return (
    <Container>
  <ContentCart>
         <LinearGradient style={{borderRadius: 13}} colors={[theme.colors.background_locale,theme.colors.background_primary]} start={[0, 1]} end={[1, 0]}>
        <Content>
            

            <PizzaImg source={Margarita}/>
            <Properties>
                <Name>{name}</Name>
            
                <Ingredients>
                 {choosesize} |{'\n'}
                 {style}
                </Ingredients>
                <Ingredients>
                 {addOns}
                </Ingredients>
                <Price>R$  {priceTotal}</Price>
            </Properties>
           
           
        </Content>
        </LinearGradient> 
        </ContentCart>
    </Container>
  );
}