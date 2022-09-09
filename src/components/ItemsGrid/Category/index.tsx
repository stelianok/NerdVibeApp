import React from 'react';
import { View, TouchableOpacity, Image, Text } from 'react-native';
import GlobalStyles from '../../../GlobalStyles';
import styles from './styles';

const { categoryContainer, imageContainer, categoryImage, categoryTitle } =
  styles;

export default function Category() {
  return (
    <View style={categoryContainer}>
      <TouchableOpacity onPress={() => {}} style={imageContainer}>
        <Image
          source={{
            uri: 'https://2.bp.blogspot.com/-_Cz_Ih4m8iY/Ujc-j5Zcf9I/AAAAAAAABW4/u5P8XM1RWXk/s1600/BB+5140314+Fall+of+WW.png',
          }}
          style={categoryImage}
          resizeMode={'cover'}
        />
      </TouchableOpacity>
      <Text style={[categoryTitle, GlobalStyles.subtitle1]}>Categoria</Text>
    </View>
  );
}
