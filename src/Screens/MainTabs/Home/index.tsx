import React from 'react';
import { View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Header from '../../../components/Header';
import ItemsGrid from '../../../components/ItemsGrid';
import Items from '../../../components/Items';
import styles from './styles';

const { container, body } = styles;

export default function Home() {
  return (
    <View style={container}>
      <Header />
      <View style={body}>
        <ScrollView>
          <ItemsGrid />
          <Items sectionTitle="Recently Added" />
          <Items sectionTitle="Popular right now" />
          <Items sectionTitle="On Sale" />
        </ScrollView>
      </View>
    </View>
  );
}
