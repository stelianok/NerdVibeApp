import React from 'react';
import { FlatList, Text, View } from 'react-native';
import GlobalStyles from '../../GlobalStyles';
import Item from './Item';
import styles from './styles';
const { container, title, itemsContainer, itemsFlatlist } = styles;

interface IProps {
  sectionTitle: string;
  products: IProduct[];
}
export default function Items({ sectionTitle, products }: IProps) {
  return (
    <View style={container}>
      <Text style={[title, GlobalStyles.h6]}>{sectionTitle}</Text>
      <View style={itemsContainer}>
        <FlatList
          horizontal
          data={products}
          renderItem={({ item }) => <Item product={item} />}
          keyExtractor={item => item.name}
          style={itemsFlatlist}
        />
      </View>
    </View>
  );
}
