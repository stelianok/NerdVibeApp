import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Icon from 'react-native-vector-icons/FontAwesome';

import { BorderlessButton } from 'react-native-gesture-handler';

import Home from '../../Screens/MainTabs/Home';
import Search from '../../Screens/Search';
import ShoppingCart from '../../Screens/ShoppingCart';

import styles from './styles';
import ProductDetailedTopTabs from '../ProductDetailedTopTabs';

const { shoppingCartButton } = styles;

function ShoppingCartButton() {
  return (
    <BorderlessButton
      rippleColor={'gray'}
      onPress={() => {}}
      style={shoppingCartButton}>
      <Icon name={'shopping-bag'} color={'black'} size={18} />
    </BorderlessButton>
  );
}

const Stack = createNativeStackNavigator();

export default function HomeStack() {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen name="ShoppingCart" component={ShoppingCart} />
      <Stack.Screen
        name="ProductDetailed"
        component={ProductDetailedTopTabs}
        options={{
          headerBackTitleVisible: false,
          headerTitle: '',
          headerShadowVisible: false,
          headerRight: () => ShoppingCartButton(),
        }}
      />
      <Stack.Screen name="Search" component={Search} />
    </Stack.Navigator>
  );
}
