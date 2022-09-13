import React from 'react';
import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { BorderlessButton } from 'react-native-gesture-handler';

import GlobalStyles from '../../GlobalStyles';
import styles from './styles';
import { useNavigation } from '@react-navigation/native';

const { container, logo, buttonContainer, button } = styles;
const { h5 } = GlobalStyles;

export default function Header() {
  const navigation = useNavigation();

  return (
    <View style={container}>
      <Text style={[logo, h5]}>Nerd Vibes</Text>
      <View style={buttonContainer}>
        <BorderlessButton
          style={button}
          rippleColor={'#808080'}
          onPress={() => {
            navigation.navigate('Search');
          }}>
          <Icon name={'search'} size={22} color={'black'} />
        </BorderlessButton>
        <BorderlessButton
          style={button}
          rippleColor={'#808080'}
          onPress={() => {
            navigation.navigate('ShoppingCart');
          }}>
          <Icon name={'shopping-bag'} size={22} color={'black'} />
        </BorderlessButton>
      </View>
    </View>
  );
}
