import React from 'react';
import { View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Header from '../../../components/Header';
import ItemsGrid from '../../../components/Items';
import Items from '../../../components/ItemsGrid';
import styles from './styles';

const { container, body } = styles;

export default function Home() {
  return (
    <View style={container}>
      <Header />
      <ScrollView>
        <View style={body}>
          <ItemsGrid />
          <Items />
        </View>
      </ScrollView>
    </View>
  );
}
