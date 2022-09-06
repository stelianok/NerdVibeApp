import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';

const { Title, TitleWithPoppins } = styles;
export default function Home() {
  return (
    <View>
      <Text style={Title}>Home</Text>
      <Text style={TitleWithPoppins}>Home</Text>
    </View>
  );
}
