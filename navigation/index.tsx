import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import { ColorSchemeName, useColorScheme } from 'react-native';
import { View } from '../components/Themed';
import Colors from '../constants/Colors';

import NotFoundScreen from '../screens/NotFoundScreen';
import { RootStackParamList } from '../types';
import BottomTabNavigator from './MainTabNavigator';
import LinkingConfiguration from './LinkingConfiguration';
import ChatRoomScreen from '../screens/ChatRoomScreen';

//icons import
import { Feather, FontAwesome5, MaterialIcons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';

// If you are not familiar with React Navigation, we recommend going through the
// "Fundamentals" guide: https://reactnavigation.org/docs/getting-started
export default function Navigation({ colorScheme }: { colorScheme: ColorSchemeName }) {
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <RootNavigator />
    </NavigationContainer>
  );
}

// A root stack navigator is often used for displaying modals on top of all other content
// Read more here: https://reactnavigation.org/docs/modal
const Stack = createStackNavigator<RootStackParamList>();

function RootNavigator() {
  return (
    <Stack.Navigator screenOptions={{
      headerStyle: {
        backgroundColor: Colors.light.tint,
        shadowOpacity: 0,
        elevation: 0,
      },
      headerTintColor: Colors.light.background,
      headerTitleAlign: 'left',
      headerTitleStyle: {
        fontWeight: 'bold',
        fontSize: 30
      }
    }}>
      <Stack.Screen name="Root" component={BottomTabNavigator}
        options={{
          title: "BaatKaro",
          headerRight: () => (
            <View style={{
              backgroundColor: Colors.light.tint,
              flexDirection: 'row',
              width: 60,
              marginRight: 10,
              justifyContent: 'space-between',
            }}>
              <Feather name="search" size={24} color="white" />
              <Entypo name="dots-three-vertical" size={24} color="white" />
            </View>
          )
        }} />
      <Stack.Screen
        name="ChatRoomScreen"
        component={ChatRoomScreen}
        options={({ route }) => ({
          title: route.params.name,
          headerRight: () => (
            <View style={{
              backgroundColor: Colors.light.tint,
              flexDirection: 'row',
              width: 100,
              marginRight: 10,
              justifyContent: 'space-between',
            }}>
              <MaterialIcons name="call" size={22} color={'white'}  />
              <FontAwesome5 name="video" size={22} color={'white'} />
              <Entypo name="dots-three-vertical" size={22} color={'white'} />
            </View>
          ),
        })}
      />
      <Stack.Screen name="NotFound" component={NotFoundScreen} options={{ title: 'Oops!' }} />
    </Stack.Navigator>
  );
}
