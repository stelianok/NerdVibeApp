import React from 'react';
import { FlatList, Text, View } from 'react-native';
import GlobalStyles from '../../GlobalStyles';
import Item from './Item';
import styles from './styles';

const { container, title, itemsContainer, itemsFlatlist } = styles;

const data = [
  {
    imageURL:
      'https://cdn.shopify.com/s/files/1/1375/9903/products/threefaces_finalvendetta_blackt-shirt_pl_1_720x720.jpg?v=1657776237',
    name: 'Camisa Braba',
    price: '27.00',
  },
  {
    imageURL:
      'https://cdn.shopify.com/s/files/1/1375/9903/products/jetsetradio_hoodie_1_1024x1024.jpg?v=1657837433',
    name: 'Moletom',
    price: '275.00',
  },
  {
    imageURL:
      'https://cdn.shopify.com/s/files/1/1375/9903/products/ns563678stw_1_720x720.jpg?v=1657866244',
    name: 'Meia daora',
    price: '3.00',
  },
  {
    imageURL:
      'https://cdn.shopify.com/s/files/1/1375/9903/products/hd162783spn1_720x720.jpg?v=1657844625',
    name: 'Moletom miranha',
    price: '250.00',
  },
  {
    imageURL:
      'https://cdn.shopify.com/s/files/1/1375/9903/products/ts223330sky_600x.jpg?v=1657862996',
    name: 'Monke',
    price: '375.00',
  },
];

interface IProps {
  sectionTitle: string;
}
export default function Items({ sectionTitle }: IProps) {
  return (
    <View style={container}>
      <Text style={[title, GlobalStyles.h6]}>{sectionTitle}</Text>
      <View style={itemsContainer}>
        <FlatList
          horizontal
          data={data}
          renderItem={({ item }) => (
            <Item
              imageURL={item.imageURL}
              name={item.name}
              price={item.price}
            />
          )}
          keyExtractor={item => item.name}
          style={itemsFlatlist}
        />
      </View>
    </View>
  );
}
