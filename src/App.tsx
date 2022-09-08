import React from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';

import MainTabs from './Screens/MainTabs';

const App = () => {
  return (
    <NavigationContainer>
      <GestureHandlerRootView style={{ flex: 1 }}>
        {<MainTabs />}
      </GestureHandlerRootView>
    </NavigationContainer>
  );
};

export default App;
