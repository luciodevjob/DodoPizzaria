import React, { useEffect, useState } from "react";
import { Alert, Modal, } from "react-native";
import { 
  Add, 
  AddConfirm, 
  Background,
  ButtonClose, 
  ButtonConfirm, 
  Carts, 
  Container, 
  Divider, 
  Footer, 
  FooterPrice, 
  HeaderView, 
  RequireBackground, 
  RequireText, 
  SubTitle, 
  SubTitleContent, 
  Title,
  TotalPrice,
  TotalText,
  ViewModal,
  } from "./styles";
import { AntDesign } from '@expo/vector-icons'
import { useTheme } from "styled-components";
import { ButtonChoose } from "../ButtonChoose";
import { api } from "../../services/api";
import { PropsResquest } from "../../screens/Home";

interface Props {
   name: string;
   setRequest: PropsResquest
}
interface PropsPrice {
  price: string;
}
interface ChooseProps {
  key: string,
  name: string, 
  add?: string,
  price?: string,
  divider: boolean,
}
interface AddProps {
  key: string,
  name: string,
  price: string,
  add: string,
  opcional: boolean,
  divider: boolean,
}

interface PropsPrices {
    "name": string
    "price": string
}

export function AddCarts({name, setRequest}: Props) {
 
  const [modalVisible, setModalVisible] = useState(false);
  const theme = useTheme();

  const [selected, setSelected] = useState('2')
  const [chooseToDough, setChooseToDough] = useState('1')
  const [extra, setExtra] = useState('')


  const [selectPrice, setSelectPrice] = useState('12')
  const [choosePrice, setChoosePrice] = useState('0')
  const [extraPrice, setPriceExtra] = useState('')


  const [choosesize, setchoosesize] = useState({
    name: "Media - 10”",
    price: "12"})
  const [selectCrust, setSelectCrust] = useState({
    
      name: "Massa Classica",
      price: "0"
    })
  const [addOns, setAddOns] = useState({})



  function handleSelect(selectID: string, priceSelect: string, item: PropsPrices){
    setSelected(selectID)
    setSelectPrice(priceSelect)
    setchoosesize(item)
  }

 function handleChooseToDough(selectID: string, priceSelect: string, item: PropsPrices){
  setChooseToDough(selectID)
  setChoosePrice(priceSelect)
  setSelectCrust(item)
 }

 function handleExtra(selectID: string, priceSelect: string, item: PropsPrices){
   selectID === extra ? setExtra('') : setExtra(selectID)
   setPriceExtra(priceSelect)
   setAddOns(item)
 }

 const priceTotal = Number(selectPrice) + Number(choosePrice) + Number(extraPrice)

function confirmOrder() {
  
  setRequest({
    pedido: { 
     name,
     tamanho: choosesize,
     estilo: selectCrust,
     adicionar: addOns,
     total:  priceTotal,
    }}) as PropsResquest
  setModalVisible(false)
}


  const size = [{
    key: '1',
    name: "Pequena - 6”",
    price: '8',
    divider: true,
  },
  { 
    key: '2',
    name: "Media- 10”",
    price: '12',
    divider: true
  },
  { 
    key: '3',
    name: "Grande - 14”", 
    price: '16',
    divider: false,
  }
]

const choice = [{
  key: '1',
  price: '0',
  name: "Massa Classica",
  divider: true,
},
{ 
  key: '2',
  price: '0',
  name: "Massa Fina",
  divider: true
},
{ 
  key: '3',
  name: "Recheada com queijo", 
  add: "+",
  price: '1.50',
  divider: false,
}
]

const add = [{
  
  key: '1',
  name: "Adicionar queijo extra",
  price: '2.50',
  add: '+',
  opcional: true,
  divider: true,
},
{ 
  key: '2',
  name: "Adicionar marshmallow",
  price: '2.50',
  add: '+',
  opcional: true,
  divider: false
},
]

  return (
    <ViewModal>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
       <Container>
         <HeaderView>
         <Title>{name}</Title>
         <ButtonClose onPress={() => setModalVisible(false)}>
          <AntDesign
          name="close" 
          size={24} 
          color={theme.colors.Title_Black}
          />
          </ButtonClose>
         </HeaderView>
        

        {/* INICIO ESCOLHA O TAMANHO */}

         <SubTitleContent>
         <SubTitle>
            Escolha um Tamanho
         </SubTitle>

         <RequireBackground>
           <RequireText>
           obrigatório
           </RequireText>
         </RequireBackground>
         </SubTitleContent>

         {size.map(item => (
               <ButtonChoose
               key={item.key}
               name={item.name}
               price={item.price}
               divider= {item.divider}
               checked={item.key === selected}
               onPress={() => handleSelect(item.key, item.price,{name: item.name, price: item.price})}
               
               />
            ))}
         {/* FINAL ESCOLHA O TAMANHO */}



         {/* INICIO ESCOLHA O ESTILO */}

         <SubTitleContent>
         <SubTitle>
            Escolha um Estilo
         </SubTitle>

         <RequireBackground >
           <RequireText>
           obrigatório
           </RequireText>
         </RequireBackground>
         </SubTitleContent>

         
        

         {choice.map(item => 
         <ButtonChoose
         key={item.key}
         name={item.name}
         price={item.price}
         add={item.add}
         divider={item.divider}
         checked={item.key === chooseToDough}
         onPress={() => handleChooseToDough(item.key, item.price, {name: item.name, price: item.price}) }
         />)}

         {/* FINAL ESCOLHA O ESTILO */}

         {/* INICIO EXTRAS */}

         <SubTitleContent>
         <SubTitle>
            Adicione Extras
         </SubTitle>

         <RequireBackground opcional={true}>
           <RequireText opcional={true}>
           Opcional
           </RequireText>
         </RequireBackground>
         </SubTitleContent>

         {add.map(item => 
          <ButtonChoose
          key={item.key}
          name={item.name}
          price={item.price}
          add={item.add}
          divider= {item.divider}
          options={item.opcional}

          checked={item.key === extra}
          onPress={() => handleExtra(item.key, item.price,  {name: item.name, price: item.price})}

          />
          
          )}

         {/* FINAL EXTRAS */}

         <Divider/>
         <Footer>
         <ButtonConfirm  onPress={() => confirmOrder()} >
          <AddConfirm>
            + Adicionar ao carrinho
          </AddConfirm>
         </ButtonConfirm>

         <FooterPrice> 
         <TotalText>Item Total</TotalText>
         <TotalPrice>R$ {priceTotal }</TotalPrice>
         </FooterPrice>
         </Footer>
        
        
       </Container>
      </Modal>
         <Carts onPress={() => setModalVisible(true)}>
                <Background>
                <Add>+ Add</Add>
                </Background>
            </Carts>
    </ViewModal>
  );
};

