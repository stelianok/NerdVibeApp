import React from 'react';
import { View, TouchableOpacity, Image, Text } from 'react-native';
import GlobalStyles from '../../../GlobalStyles';
import styles from './styles';

const { categoryContainer, imageContainer, categoryImage, categoryTitle } =
  styles;

interface IProps {
  name: string;
  imageURL: string;
}
export default function Category({ imageURL, name }: IProps) {
  return (
    <View style={categoryContainer}>
      <TouchableOpacity onPress={() => {}} style={imageContainer}>
        <Image
          source={{
            uri: imageURL,
          }}
          style={categoryImage}
          resizeMode={'cover'}
        />
      </TouchableOpacity>
      <Text style={[categoryTitle, GlobalStyles.subtitle1]}>{name}</Text>
    </View>
  );
}
