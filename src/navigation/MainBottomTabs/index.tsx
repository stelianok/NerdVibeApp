import React from 'react';
import { Text } from 'react-native';

import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

import Icon from 'react-native-vector-icons/FontAwesome';

import HomeStack from '../HomeStack';
import Categories from '../../Screens/MainTabs/Categories';
import Favorites from '../../Screens/MainTabs/Favorites';
import Profile from '../../Screens/MainTabs/Profile';

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

const Tab = createMaterialBottomTabNavigator();

export default function MainTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      activeColor="#191919"
      inactiveColor="#808080"
      barStyle={barStyle}>
      <Tab.Screen
        name="HomeTab"
        component={HomeStack}
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
