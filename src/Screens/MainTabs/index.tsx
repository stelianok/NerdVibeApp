import React from 'react';
import { Text } from 'react-native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Categories from './Categories';
import Favorites from './Favorites';
import Home from './Home';
import Profile from './Profile';
import ShoppingCart from './ShoppingCart';

import Icon from 'react-native-vector-icons/FontAwesome';

const Tab = createMaterialBottomTabNavigator();

import styles from './styles';
import GlobalStyles from '../../GlobalStyles';

const { labelText, barStyle } = styles;
const { overline } = GlobalStyles;
interface LabelTextProps {
  text: string;
}
function LabelText({ text }: LabelTextProps) {
  return <Text style={[labelText, overline]}>{text}</Text>;
}

export default function MainTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      activeColor="#191919"
      inactiveColor="#808080"
      barStyle={barStyle}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: <LabelText text={'home'} />,
          tabBarIcon: ({ color }) => (
            <Icon name="home" color={color} size={22} />
          ),
        }}
      />
      <Tab.Screen
        name="Categories"
        component={Categories}
        options={{
          tabBarLabel: <LabelText text={'categories'} />,
          tabBarIcon: ({ color }) => (
            <Icon name="th-large" color={color} size={22} />
          ),
        }}
      />

      <Tab.Screen
        name="Favorites"
        component={Favorites}
        options={{
          tabBarLabel: <LabelText text={'Favorites'} />,
          tabBarIcon: ({ color }) => (
            <Icon name="heart" color={color} size={22} />
          ),
        }}
      />
      <Tab.Screen
        name="ShoppingCart"
        component={ShoppingCart}
        options={{
          tabBarLabel: <LabelText text={'Cart'} />,
          tabBarIcon: ({ color }) => (
            <Icon name="shopping-cart" color={color} size={22} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarLabel: <LabelText text={'Profile'} />,
          tabBarIcon: ({ color }) => (
            <Icon name="user-circle-o" color={color} size={22} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
