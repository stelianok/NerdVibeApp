import React from 'react';
import { Image, Text, View } from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';

import { BorderlessButton, RectButton } from 'react-native-gesture-handler';
import styles from './styles';
import GlobalStyles from '../../../GlobalStyles';

const {
  container,
  imageContainer,
  itemImage,
  favoriteButton,
  infoContainer,
  itemName,
  PriceText,
} = styles;

interface IProps {
  imageURL: string;
  name: string;
  price: string;
}
export default function Item({ imageURL, name, price }: IProps) {
  return (
    <RectButton rippleColor={'#DEDEDE'} onPress={() => {}} style={container}>
      <View style={imageContainer}>
        <Image
          source={{
            uri: imageURL,
          }}
          style={itemImage}
          resizeMode={'cover'}
        />
        <BorderlessButton
          rippleColor={'#DEDEDE'}
          onPress={() => {}}
          style={favoriteButton}>
          <Icon name={'heart'} size={24} color={'red'} />
        </BorderlessButton>
      </View>
      <View style={infoContainer}>
        <Text style={[itemName, GlobalStyles.subtitle1]}>{name}</Text>
        <Text style={[PriceText, GlobalStyles.subtitle1]}>R$ {price}</Text>
      </View>
    </RectButton>
  );
}
