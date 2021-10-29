import React from "react";
import { 
  Amount,
  CartPadding,
  Container, Divider, Header, HeaderLogo, Title, YourRequests, 
 
  } from "./styles";
import { useTheme } from "styled-components";
import Logo from '../../assets/logo.svg';
import { RFValue } from "react-native-responsive-fontsize";
import { Ionicons } from '@expo/vector-icons';
import { CartRequest } from "../CartRequest";
import { PropRequest } from "../../screens/Home";
import { ScrollView } from "react-native";
import { FoofWapper } from "../../screens/Home/styles";

interface props {
  request: PropRequest[]
}
export function Cart({request} : props) {
 
  const theme = useTheme();

  return (
   
       <Container>
         
         <Header>
         <Ionicons
              style={{paddingLeft: 24}}
              name="close-circle-sharp" 
              size={24} 
              color={theme.colors.Carts}/>
          <HeaderLogo>
         <Logo width={RFValue(183)} height={30}/>
         </HeaderLogo>
         </Header>
         <Divider/> 
         
          <YourRequests>
         <Title>Seus Pedidos</Title>
         <Amount>{request.length} pedidos </Amount>
         </YourRequests>
         
         <ScrollView
         showsVerticalScrollIndicator={false}
         >
           <CartPadding>
           {
            request.map(item => (
                <CartRequest
                key={item.id}
                name={item.pedido.name}
                choosesize={item.pedido.tamanho.name}
                addOns={item.pedido.adicionar.name}
                style={item.pedido.estilo.name}
                priceTotal={item.pedido.total}
                />
             ))
           }
           </CartPadding>
         </ScrollView>
        
       

       </Container>
      
         
   
  );
};

