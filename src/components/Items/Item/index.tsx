import React, { useState, useEffect, useCallback } from 'react';
import { Image, Text, View } from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';

import { BorderlessButton, RectButton } from 'react-native-gesture-handler';
import styles from './styles';
import GlobalStyles from '../../../GlobalStyles';
import { useNavigation } from '@react-navigation/native';

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

interface IProps {
  product: IProduct;
}
export default function Item({ product }: IProps) {
  const [onSale, setOnSale] = useState(true);
  const [updatedPrice, setUpdatedPrice] = useState(0);
  const [favorite, setFavorite] = useState(false);

  const navigation = useNavigation();

  const { imageArray, name, price, isOnSale, discount } = product;

  const toggleFavorite = useCallback(() => {
    if (favorite) {
      setFavorite(false);
    } else {
      setFavorite(true);
    }
  }, [favorite]);

  useEffect(() => {
    setOnSale(isOnSale);
    if (discount) {
      setUpdatedPrice(price * discount);
    } else {
      setUpdatedPrice(price);
    }
  }, [discount, isOnSale, price]);

  return (
    <RectButton
      rippleColor={'#DEDEDE'}
      onPress={() => {
        navigation.navigate('ProductDetailed', {
          screen: 'Overview',
          params: { product: product },
        });
      }}
      style={container}>
      <View style={imageContainer}>
        <Image
          source={{
            uri: imageArray[0].imageURL,
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
          onPress={toggleFavorite}
          style={favoriteButton}>
          {favorite ? (
            <Icon name={'heart'} size={28} color={'red'} />
          ) : (
            <Icon name={'heart-o'} size={28} color={'black'} />
          )}
        </BorderlessButton>
      </View>
    </RectButton>
  );
}
