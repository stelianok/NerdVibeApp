import React from 'react';
import { View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Header from '../../../components/Header';
import ItemsGrid from '../../../components/ItemsGrid';
import Items from '../../../components/Items';
import styles from './styles';

const { container, body } = styles;

export default function Home() {
  const data: IProduct[] = [
    {
      imageURL:
        'https://cdn.shopify.com/s/files/1/1375/9903/products/threefaces_finalvendetta_blackt-shirt_pl_1_720x720.jpg?v=1657776237',
      name: 'Camisa Braba',
      price: 80,
      isOnSale: true,
      discount: 0.85,
    },
    {
      imageURL:
        'https://cdn.shopify.com/s/files/1/1375/9903/products/jetsetradio_hoodie_1_1024x1024.jpg?v=1657837433',
      name: 'Moletom',
      price: 275,
      isOnSale: false,
      discount: 0.8,
    },
    {
      imageURL:
        'https://cdn.shopify.com/s/files/1/1375/9903/products/ns563678stw_1_720x720.jpg?v=1657866244',
      name: 'Meia daora',
      price: 8,
      isOnSale: false,
    },
    {
      imageURL:
        'https://cdn.shopify.com/s/files/1/1375/9903/products/hd162783spn1_720x720.jpg?v=1657844625',
      name: 'Moletom miranha',
      price: 250,
      isOnSale: true,
      discount: 0.85,
    },
    {
      imageURL:
        'https://cdn.shopify.com/s/files/1/1375/9903/products/ts223330sky_600x.jpg?v=1657862996',
      name: 'Skyrim T-Shirt',
      price: 60,
      isOnSale: true,
      discount: 0.5,
    },
  ];

  return (
    <View style={container}>
      <Header />
      <View style={body}>
        <ScrollView>
          <ItemsGrid />
          <Items sectionTitle="Recently Added" products={data} />
          <Items sectionTitle="Popular right now" products={data} />
          <Items sectionTitle="On Sale" products={data} />
        </ScrollView>
      </View>
    </View>
  );
}
