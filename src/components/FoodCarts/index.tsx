import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { ImageProps } from 'react-native';
import { RectButtonProps } from 'react-native-gesture-handler';
import { useTheme } from 'styled-components';
import { PropRequest } from '../../screens/Home';
import { AddCarts } from '../AddCarts';




import { Container, Content, PizzaImg, Properties, Name, Ingredients, Price, Carts, Add, Background, AddContainer, } from './styles';

interface PropsResquest {
     pedido: { 
        pedido: { name: string,
            tamanho: string
            estilo: string
            adicionar: string
            total:  string}
          
          }
    }
  

interface Props extends RectButtonProps{
    img: ImageProps,
    title: string,
    description: string,
    price: number,
    cheked: boolean,
    setRequest: React.Dispatch<React.SetStateAction<PropRequest[] | undefined>> 
    
    
}

export function FoodCarts({img, title, description, price, cheked, setRequest}: Props,  ) {
    const theme = useTheme()
    
  return (
    <Container cheked={cheked}>
        {cheked &&
    <LinearGradient style={{borderRadius: 13}} colors={[theme.colors.background_locale,theme.colors.background_primary]} start={[0, 1]} end={[1, 0]}>
        <Content>

            <PizzaImg source={img}/>
            <Properties>
                <Name>{title}</Name>
            
                <Ingredients>
                   {description}
                </Ingredients>
                <Price>R$ {price}</Price>
            </Properties>
            
           
            <AddCarts name={title}  setRequest={setRequest}/>
           
           
        </Content>
        </LinearGradient> 
}
    </Container>
  );
}

