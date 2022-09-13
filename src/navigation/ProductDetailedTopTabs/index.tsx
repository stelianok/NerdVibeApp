import React from 'react';

import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import ProductDetailedOverview from '../../Screens/ProductDetailedTopTabs/ProductDetailedOverview';
import ProductDetailedDescription from '../../Screens/ProductDetailedTopTabs/ProductDetailedDescription';

const Tab = createMaterialTopTabNavigator();

export default function ProductDetailedTopTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Overview" component={ProductDetailedOverview} />
      <Tab.Screen name="Description" component={ProductDetailedDescription} />
    </Tab.Navigator>
  );
}
