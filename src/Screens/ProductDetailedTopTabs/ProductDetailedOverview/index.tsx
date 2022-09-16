import React from 'react';
import { View, Text, ScrollView } from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';
import ImageCarousel from '../../../components/ImageCarousel';
import GlobalStyles from '../../../GlobalStyles';
import styles from './styles';

const {
  container,
  header,
  body,
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
          <ImageCarousel data={data} />
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
                  color={'#f3994a'}
                  size={26}
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
