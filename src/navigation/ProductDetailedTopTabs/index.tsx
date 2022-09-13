import React from 'react';

import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import ProductDetailedOverview from '../../Screens/ProductDetailedTopTabs/ProductDetailedOverview';
import ProductDetailedDescription from '../../Screens/ProductDetailedTopTabs/ProductDetailedDescription';
import GlobalStyles from '../../GlobalStyles';
import CustomTabBarIndicator from '../../components/CustomTabBarIndicator';

const Tab = createMaterialTopTabNavigator();

const PADDING_HORIZONTAL = 55;
export default function ProductDetailedTopTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarLabelStyle: [GlobalStyles.buttonFont, { color: '#000' }],
        tabBarStyle: {},
        tabBarItemStyle: {
          // these properties are important for this method to work !!
          width: 'auto',
          marginHorizontal: 0, // this is to make sure that the spacing of the item comes only from the paddingHorizontal!.
          paddingHorizontal: PADDING_HORIZONTAL, // the desired padding for the item .. stored in a constant to be passed in the custom Indicator
        },
        tabBarIndicator: props => {
          return (
            <CustomTabBarIndicator
              // the default props
              getTabWidth={props.getTabWidth}
              jumpTo={props.jumpTo}
              layout={props.layout}
              navigationState={props.state}
              position={props.position}
              width={props.width}
              style={{
                left: PADDING_HORIZONTAL,
                backgroundColor: 'black',
                marginBottom: 10,
              }}
              // this is an additional property we will need to make the indicator exactly
              tabBarItemPadding={PADDING_HORIZONTAL}
            />
          );
        },
      }}>
      <Tab.Screen name="Overview" component={ProductDetailedOverview} />
      <Tab.Screen name="Description" component={ProductDetailedDescription} />
    </Tab.Navigator>
  );
}
