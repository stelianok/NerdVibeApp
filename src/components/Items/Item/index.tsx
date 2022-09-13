import React, { useState, useEffect } from 'react';
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
  priceContainer,
  priceTextOnSale,
  priceTextOnSaleDisabled,
  PriceText,
  favoriteButton,
} = styles;

interface IProps extends IProduct {}
export default function Item({
  imageURL,
  name,
  price,
  isOnSale,
  discount,
}: IProps) {
  const [onSale, setOnSale] = useState(true);
  const [updatedPrice, setUpdatedPrice] = useState(0);

  useEffect(() => {
    setOnSale(isOnSale);
    if (discount) {
      setUpdatedPrice(price * discount);
    } else {
      setUpdatedPrice(price);
    }
  }, [discount, isOnSale, price]);

  return (
    <RectButton rippleColor={'#DEDEDE'} onPress={() => {}} style={container}>
      <View style={imageContainer}>
        <Image
          source={{
            uri: imageURL,
          }}
          style={itemImage}
          resizeMode={'contain'}
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
          <View style={priceContainer}>
            <Text
              numberOfLines={1}
              ellipsizeMode={'tail'}
              style={[
                onSale ? priceTextOnSaleDisabled : PriceText,
                GlobalStyles.subtitle1,
              ]}>
              $ {price.toFixed(2).toString()}
            </Text>
            {onSale && (
              <Text
                numberOfLines={1}
                ellipsizeMode={'tail'}
                style={[priceTextOnSale, GlobalStyles.subtitle1]}>
                $ {updatedPrice.toFixed(2).toString()}
              </Text>
            )}
          </View>
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
