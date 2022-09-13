import React from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';

import { StatusBar } from 'react-native';
import MainTabs from './navigation/MainBottomTabs';

const App = () => {
  return (
    <NavigationContainer>
      <GestureHandlerRootView style={{ flex: 1 }}>
        {
          <>
            <StatusBar backgroundColor={'#fff'} barStyle={'dark-content'} />
            <MainTabs />
          </>
        }
      </GestureHandlerRootView>
    </NavigationContainer>
  );
};

export default App;
