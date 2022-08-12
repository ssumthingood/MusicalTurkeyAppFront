import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import MainScreen from './screens/Main';
import CommunityScreen from './screens/Community';
import CustomScreen from './screens/Custom';
import MessagesScreen from './screens/Messages';
import MypageScreen from './screens/MyPage';
import RecommendScreen from './screens/Recommend';
import StartScreen from './screens/Start';
import AlbumScreen from './screens/Album';
import SignupScreen from './screens/Signup';

export type StackParamList = {
  Start: undefined;
  Signup: undefined;
  Main: undefined;
  Album: {
    albumNumber: number;
  };
  Community: undefined;
  Custom: undefined;
  Messages: undefined;
  Mypage: undefined;
  Recommend: undefined;
  Splash: undefined;
};

const Stack = createStackNavigator<StackParamList>();

const StackNavigation = () => {
  return (
    <Stack.Navigator initialRouteName="Start">
      <Stack.Screen
        name="Start"
        component={StartScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Main"
        component={MainScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen name="Signup" component={SignupScreen} />
      <Stack.Screen name="Album" component={AlbumScreen} />
      <Stack.Screen name="Community" component={CommunityScreen} />
      <Stack.Screen name="Custom" component={CustomScreen} />
      <Stack.Screen name="Messages" component={MessagesScreen} />
      <Stack.Screen name="Mypage" component={MypageScreen} />
      <Stack.Screen name="Recommend" component={RecommendScreen} />
    </Stack.Navigator>
  );
};

export default StackNavigation;
