import { useNavigation, useRoute } from '@react-navigation/native';
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
  priceText,
  productTitle,
  reviewContainer,
  reviewIcon,
  reviewText,
} = styles;

interface IProps extends IProduct {}

export default function ProductDetailedOverview() {
  const navigation = useNavigation();
  const route = useRoute();
  const { product } = route.params;

  const { imageArray, price, name, rating }: IProduct = product;
  return (
    <View style={container}>
      <ScrollView>
        <View style={header}>
          <ImageCarousel data={imageArray} />
        </View>
        <View style={body}>
          <View style={mainInfoContainer}>
            <View style={rowInfo}>
              <View style={TitleInfoContainer}>
                <Text style={[priceText, GlobalStyles.h5]}>
                  ${price.toString()}
                </Text>
                <Text style={[productTitle, GlobalStyles.h4]}>{name}</Text>
              </View>
              <View style={reviewContainer}>
                <Icon
                  name={'star'}
                  color={'#f3994a'}
                  size={26}
                  style={reviewIcon}
                />
                <Text style={[reviewText, GlobalStyles.h4]}>{rating}</Text>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
