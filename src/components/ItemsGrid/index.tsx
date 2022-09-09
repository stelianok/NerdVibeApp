import React from 'react';
import { FlatList, Image, TouchableOpacity, View } from 'react-native';
import { BorderlessButton, RectButton } from 'react-native-gesture-handler';
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
          <Category />
          <Category />
        </View>
      </View>
      <View style={categoriesContainer}>
        <View style={rowContainer}>
          <Category />
          <Category />
        </View>
      </View>
    </View>
  );
}
