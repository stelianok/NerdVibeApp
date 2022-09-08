import React from 'react';
import { View, Text } from 'react-native';
import Header from '../../../components/Header';
import GlobalStyles from '../../../GlobalStyles';
import styles from './styles';

const { container, body, titleBody } = styles;
const { h3 } = GlobalStyles;

export default function Home() {
  return (
    <View style={container}>
      <Header />
      <View style={body}>
        <Text style={[titleBody, h3]}>h3</Text>
      </View>
    </View>
  );
}
