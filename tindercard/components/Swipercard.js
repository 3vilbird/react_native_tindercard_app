/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
} from 'react-native';
import { Container, Header, DeckSwiper, Card, CardItem, Thumbnail, Left, Body, Icon } from 'native-base';

const cards =[
  {
    text:'card one',
    name : 'one',
    image:require('./img/0.jpg'),
  },
  {
    text:'card two',
    name : 'two',
    image:require('./img/a.jpg'),
  },
  {
    text:'card three',
    name : 'three',
    image:require('./img/de.jpg'),
  },
  {
    text:'card four',
    name : 'four',
    image:require('./img/images.jpg'),
  },
  {
    text:'card four',
    name : 'four',
    image:require('./img/l1.jpg'),
  },

];

export default class Swipercard extends Component {
  render() {
    return (
      <DeckSwiper
           dataSource={cards}
           renderItem={item =>
             <Card style={{ elevation: 3 }}>
               <CardItem>
                 <Left>
                   <Thumbnail source={item.image} />
                   <Body>
                     <Text>{item.text}</Text>
                     <Text note>nice image</Text>
                   </Body>
                 </Left>
               </CardItem>
               <CardItem cardBody>
                 <Image style={{ height: 300, flex: 1 }} source={item.image} />
               </CardItem>
               <CardItem>
                 <Icon name="heart" style={{ color: '#ED4A6A' }} />
                 <Text>{item.name}</Text>
               </CardItem>
             </Card>
           }
         />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
