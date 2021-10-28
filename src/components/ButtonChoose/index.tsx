import React, { useState } from 'react';
import { Alert, TouchableOpacityProps } from 'react-native';
import { useTheme } from 'styled-components';

import { ButtonContainer, Choose, ChooseOneButton, ChooseOneButtonSelect, ChoosePrice, ChooseProps, ChooseText, Container, Divider } from './styles';

interface Props extends TouchableOpacityProps{
    name: string;
    price?: string;
    divider: boolean;
    add?: string;
    checked?: boolean;
    options?: boolean
}
export function ButtonChoose({name, price, divider, checked, add, options, ...rest}: Props) {

 
  return (
    
        <ButtonContainer 
        {...rest}>
         <Choose>
           <ChooseProps>

         
          <ChooseOneButtonSelect options={options} selected={checked}>
          { checked && <ChooseOneButton selected={checked} options={options}/>}
           </ChooseOneButtonSelect> 
          
        
           <ChooseText>{name}</ChooseText>
           </ChooseProps>
          
           { price !== '0' &&
             <ChoosePrice>{add}R$ {price}</ChoosePrice> 
            }

           {
               divider &&
               <Divider divider={divider}/> 
           }
         </Choose>
         
         </ButtonContainer>
  
  );
}