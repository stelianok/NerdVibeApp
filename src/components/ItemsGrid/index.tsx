import React from 'react';
import { FlatList, Image, View } from 'react-native';
import { Text } from 'react-native-paper';
import GlobalStyles from '../../GlobalStyles';
import styles from './styles';

// const {h3,h4, h5,h6, } = GlobalStyles;

const {
  container,
  title,
  categoriesContainer,
  rowContainer,
  categoryContainer,
  imageContainer,
  categoryImage,
  categoryTitle,
} = styles;
export default function Items() {
  return (
    <View style={container}>
      <Text style={[title, GlobalStyles.h4]}>Categories</Text>
      <View style={categoriesContainer}>
        <View style={rowContainer}>
          <View style={categoryContainer}>
            <View style={imageContainer}>
              <Image
                source={{
                  uri: 'https://2.bp.blogspot.com/-_Cz_Ih4m8iY/Ujc-j5Zcf9I/AAAAAAAABW4/u5P8XM1RWXk/s1600/BB+5140314+Fall+of+WW.png',
                }}
                style={categoryImage}
                resizeMode={'cover'}
              />
            </View>
            <Text style={[categoryTitle, GlobalStyles.subtitle1]}>
              Categoria
            </Text>
          </View>
          <View style={categoryContainer}>
            <View style={imageContainer}>
              <Image
                source={{
                  uri: 'https://2.bp.blogspot.com/-_Cz_Ih4m8iY/Ujc-j5Zcf9I/AAAAAAAABW4/u5P8XM1RWXk/s1600/BB+5140314+Fall+of+WW.png',
                }}
                style={categoryImage}
                resizeMode={'cover'}
              />
            </View>
            <Text style={[categoryTitle, GlobalStyles.subtitle1]}>
              Categoria
            </Text>
          </View>
        </View>
      </View>
      <View style={categoriesContainer}>
        <View style={rowContainer}>
          <View style={categoryContainer}>
            <View style={imageContainer}>
              <Image
                source={{
                  uri: 'https://2.bp.blogspot.com/-_Cz_Ih4m8iY/Ujc-j5Zcf9I/AAAAAAAABW4/u5P8XM1RWXk/s1600/BB+5140314+Fall+of+WW.png',
                }}
                style={categoryImage}
                resizeMode={'cover'}
              />
            </View>
            <Text style={[categoryTitle, GlobalStyles.subtitle1]}>
              Categoria
            </Text>
          </View>
          <View style={categoryContainer}>
            <View style={imageContainer}>
              <Image
                source={{
                  uri: 'https://2.bp.blogspot.com/-_Cz_Ih4m8iY/Ujc-j5Zcf9I/AAAAAAAABW4/u5P8XM1RWXk/s1600/BB+5140314+Fall+of+WW.png',
                }}
                style={categoryImage}
                resizeMode={'cover'}
              />
            </View>
            <Text style={[categoryTitle, GlobalStyles.subtitle1]}>
              Categoria
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
}
