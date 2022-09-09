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
  infoContainer,
  infoTextContainer,
  itemName,
  PriceText,
  favoriteButton,
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
      </View>
      <View style={infoContainer}>
        <View style={infoTextContainer}>
          <Text
            style={[itemName, GlobalStyles.subtitle1]}
            numberOfLines={2}
            ellipsizeMode={'tail'}>
            {name}
          </Text>
          <Text
            numberOfLines={1}
            ellipsizeMode={'tail'}
            style={[PriceText, GlobalStyles.subtitle1]}>
            R$ {price}
          </Text>
        </View>
        <BorderlessButton
          rippleColor={'#DEDEDE'}
          onPress={() => {}}
          style={favoriteButton}>
          <Icon name={'heart-o'} size={24} color={'black'} />
        </BorderlessButton>
      </View>
    </RectButton>
  );
}
