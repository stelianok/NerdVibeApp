import React from 'react';
import { View, Text, Image, Dimensions, ScrollView } from 'react-native';

import Swiper from 'react-native-swiper';

import Icon from 'react-native-vector-icons/FontAwesome';
import GlobalStyles from '../../../GlobalStyles';
import styles from './styles';

const {
  container,
  header,
  body,
  carouselContainer,
  imageStyle,
  mainInfoContainer,
  rowInfo,
  TitleInfoContainer,
  price,
  productTitle,
  reviewContainer,
  reviewIcon,
  reviewText,
} = styles;

interface IData {
  id: string;
  imageURL: string;
}
const data: IData[] = [
  {
    id: '1',
    imageURL:
      'https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/91d6AcW-krL._SX385_.jpg',
  },
  {
    id: '2',
    imageURL:
      'https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/61B8Lq5NXmL._AC_SY450_.jpg',
  },

  {
    id: '3',
    imageURL:
      'https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/91d6AcW-krL._SX385_.jpg',
  },
  {
    id: '4',
    imageURL:
      'https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/91d6AcW-krL._SX385_.jpg',
  },
  {
    id: '5',
    imageURL:
      'https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/61B8Lq5NXmL._AC_SY450_.jpg',
  },

  {
    id: '6',
    imageURL:
      'https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/91d6AcW-krL._SX385_.jpg',
  },
];

export default function ProductDetailedOverview() {
  return (
    <View style={container}>
      <ScrollView>
        <View style={header}>
          <Swiper containerStyle={carouselContainer}>
            <Image
              source={{ uri: data[0].imageURL }}
              style={imageStyle}
              resizeMode={'contain'}
            />
            <Image
              source={{ uri: data[1].imageURL }}
              style={imageStyle}
              resizeMode={'contain'}
            />
            <Image
              source={{ uri: data[2].imageURL }}
              style={imageStyle}
              resizeMode={'contain'}
            />
            <Image
              source={{ uri: data[3].imageURL }}
              style={imageStyle}
              resizeMode={'contain'}
            />
          </Swiper>
        </View>
        <View style={body}>
          <View style={mainInfoContainer}>
            <View style={rowInfo}>
              <View style={TitleInfoContainer}>
                <Text style={[price, GlobalStyles.h5]}>$ 200</Text>
                <Text style={[productTitle, GlobalStyles.h4]}>
                  Produto oficial
                </Text>
              </View>
              <View style={reviewContainer}>
                <Icon
                  name={'star'}
                  color={'yellow'}
                  size={32}
                  style={reviewIcon}
                />
                <Text style={[reviewText, GlobalStyles.h4]}>4.8</Text>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
