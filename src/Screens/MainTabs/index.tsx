import React from 'react';
import { Text } from 'react-native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Categories from './Categories';
import Favorites from './Favorites';
import Home from './Home';
import Profile from './Profile';

import Icon from 'react-native-vector-icons/FontAwesome';

const Tab = createMaterialBottomTabNavigator();

import styles from './styles';
import GlobalStyles from '../../GlobalStyles';
import ShoppingCart from '../ShoppingCart';
import Search from '../Search';
import ProductDetailed from '../ProductDetailed';
import { BorderlessButton } from 'react-native-gesture-handler';

const { labelText, barStyle, shoppingCartButton } = styles;
const { overline } = GlobalStyles;

interface LabelTextProps {
  text: string;
}
function LabelText({ text }: LabelTextProps) {
  return <Text style={[labelText, overline]}>{text}</Text>;
}

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
const HomeStack = createNativeStackNavigator();

function HomeStackNavigator() {
  return (
    <HomeStack.Navigator initialRouteName="Home">
      <HomeStack.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
        }}
      />
      <HomeStack.Screen name="ShoppingCart" component={ShoppingCart} />
      <HomeStack.Screen
        name="ProductDetailed"
        component={ProductDetailed}
        options={{
          headerBackTitleVisible: false,
          headerTitle: '',

          headerRight: () => ShoppingCartButton(),
        }}
      />
      <HomeStack.Screen name="Search" component={Search} />
    </HomeStack.Navigator>
  );
}

export default function MainTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      activeColor="#191919"
      inactiveColor="#808080"
      barStyle={barStyle}>
      <Tab.Screen
        name="HomeTab"
        component={HomeStackNavigator}
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
