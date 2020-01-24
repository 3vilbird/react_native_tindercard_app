
import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';
import { Container, Header, Left, Body, Right, Button, Icon, Title,  } from 'native-base';

export default class HeaderCustom extends Component {
  render() {
    return (
      <Header>
         <Left>
           <Button transparent>
             <Icon name='menu' />
           </Button>
         </Left>
         <Body>
           <Title>My tinder card </Title>
         </Body>
         <Right>
           <Button transparent>
           <Icon name='camera' />
           </Button>
         </Right>
       </Header>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
