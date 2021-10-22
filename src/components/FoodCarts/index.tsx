import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { ImageProps } from 'react-native';
import { RectButtonProps } from 'react-native-gesture-handler';
import { useTheme } from 'styled-components';



import { Container, Content, PizzaImg, Properties, Name, Ingredients, Price, Carts, Add, Background} from './styles';

interface Props extends RectButtonProps{
    img: ImageProps,
    title: string,
    description: string,
    price: number,
    cheked: boolean,
    
}

export function FoodCarts({img, title, description, price, cheked}: Props) {
    const theme = useTheme()
   
  return (
    <Container cheked={cheked}>
        {cheked ?
    <LinearGradient colors={[theme.colors.background_locale,theme.colors.background_primary]} start={[0, 1]} end={[1, 0]}>
        <Content>

            <PizzaImg source={img}/>
            <Properties>
                <Name>{title}</Name>
            
                <Ingredients>
                   {description}
                </Ingredients>
                <Price>R$ {price}</Price>
            </Properties>
            <Carts>
                <Background>
                <Add>+ Add</Add>
                </Background>
            </Carts>
        </Content>
        </LinearGradient> : null
}
    </Container>
  );
}

