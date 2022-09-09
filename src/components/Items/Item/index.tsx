import React from 'react';
import { Image, Text, View } from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';

import { BorderlessButton, RectButton } from 'react-native-gesture-handler';
import styles from './styles';
import GlobalStyles from '../../../GlobalStyles';

const {
  container,
  itemsContainer,
  imageContainer,
  itemImage,
  favoriteButton,
  infoContainer,
  itemName,
  PriceText,
} = styles;
export default function Item() {
  return (
    <RectButton style={container}>
      <View style={imageContainer}>
        <Image
          source={{
            uri: 'https://2.bp.blogspot.com/-_Cz_Ih4m8iY/Ujc-j5Zcf9I/AAAAAAAABW4/u5P8XM1RWXk/s1600/BB+5140314+Fall+of+WW.png',
          }}
          style={itemImage}
          resizeMode={'cover'}
        />
        <BorderlessButton>
          <Icon name={'heart'} size={24} color={'red'} />
        </BorderlessButton>
      </View>
      <View style={infoContainer}>
        <Text style={itemName}>Item</Text>
        <Text>R$ 27.00</Text>
      </View>
    </RectButton>
  );
}
