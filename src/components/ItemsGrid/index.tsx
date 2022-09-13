import React from 'react';
import { View } from 'react-native';
import { Text } from 'react-native-paper';
import GlobalStyles from '../../GlobalStyles';
import Category from './Category';
import styles from './styles';

// const {h3,h4, h5,h6, } = GlobalStyles;

const { container, title, categoriesContainer, rowContainer } = styles;

export default function Items() {
  return (
    <View style={container}>
      <Text style={[title, GlobalStyles.h4]}>Categories</Text>
      <View style={categoriesContainer}>
        <View style={rowContainer}>
          <Category
            name="Apparel"
            imageURL="https://scene7.zumiez.com/is/image/zumiez/product_main_medium_2x/DGK-Zen-White-Hoodie-_340128-front-US.jpg"
          />
          <Category
            name="Games"
            imageURL="https://twinfinite.net/wp-content/uploads/2021/06/Elden-Ring-18-1536x864.jpg"
          />
        </View>
      </View>
      <View style={categoriesContainer}>
        <View style={rowContainer}>
          <Category
            name="Hardware"
            imageURL="https://www.hd-tecnologia.com/imagenes/articulos/2020/07/El-negocio-de-hardware-para-PC-Gamer-aumentar%C3%A1-en-3.600-millones-de-d%C3%B3lares-en-2020-debido-a-la-pandemia-de-COVID-19-2.jpg"
          />
          <Category
            name="Action Figures"
            imageURL="https://ae01.alicdn.com/kf/Hd6eaef458aa2486796e6c5a513fe6227v/Dem-nio-assassino-anime-figura-kamado-tanjirou-nezuko-kimetsu-n-o-yaiba-pvc-figura-de-a.jpg_Q90.jpg_.webp"
          />
        </View>
      </View>
    </View>
  );
}
