import React from 'react';
import { View, Text } from 'react-native';
import GlobalStyles from '../../../GlobalStyles';
import styles from './styles';

const { body } = styles;
const { h3 } = GlobalStyles;
export default function Home() {
  return (
    <View style={body}>
      <Text style={[{ color: '#000', ...h3 }]}>h3</Text>
    </View>
  );
}
