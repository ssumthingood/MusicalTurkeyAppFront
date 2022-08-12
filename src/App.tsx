import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import StackNavigation from './NavStack';
import SplashScreen from 'react-native-splash-screen';

const App = () => {
  // React.useEffect(() => {
  //   SplashScreen.hide();
  // });
  return (
    <NavigationContainer>
      <StackNavigation />
    </NavigationContainer>
  );
};

export default App;
