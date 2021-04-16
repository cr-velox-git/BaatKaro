import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs'

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import TabOneScreen from '../screens/TabOneScreen';
import TabChatScreen from '../screens/ChatScreen';
import { MainTabParamList, TabOneParamList, ChatsParamList } from '../types';

import { Entypo } from '@expo/vector-icons'; 
import { Dimensions } from 'react-native';

const MainTopTab = createMaterialTopTabNavigator<MainTabParamList>();

export default function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <MainTopTab.Navigator
      initialRouteName="Chats"
       
      tabBarOptions={{ 
     
          
        activeTintColor: 'white',
        style: {
          backgroundColor: Colors.light.tint,
        } ,
        indicatorStyle: {
          backgroundColor: Colors.light.background,
          height: 3,

        },
        
        labelStyle: {
          fontWeight: 'bold'
        },
        showIcon: 'true'
        
        }}>
      <MainTopTab.Screen
        name="Camera"
        component={TabOneNavigator}
        options={{
          tabBarIcon: ({ color }) => <Entypo name="camera" size={24} color={color} />,
          tabBarLabel: () => null,    
      
        }}
      />
      <MainTopTab.Screen
        name="Chats"
        component={chatScreen}
   
      />
        <MainTopTab.Screen
        name="Status"
        component={TabOneNavigator}
    
      />
        <MainTopTab.Screen
        name="Calls"
        component={TabOneNavigator}
      />
    </MainTopTab.Navigator>
    
  );
}

// You can explore the built-in icon families and icons on the web at:
// https://icons.expo.fyi/
function TabBarIcon(props: { name: React.ComponentProps<typeof Ionicons>['name']; color: string }) {
  return <Ionicons size={30} style={{ marginBottom: -3 }} {...props} />;
}

// Each tab has its own navigation stack, you can read more about this pattern here:
// https://reactnavigation.org/docs/tab-based-navigation#a-stack-navigator-for-each-tab
const TabOneStack = createStackNavigator<TabOneParamList>();

function TabOneNavigator() {
  return (
    <TabOneStack.Navigator >
      <TabOneStack.Screen
        name="TabOneScreen"
        component={TabOneScreen}
        options={{ headerTitle: 'Tab One Title' }}
      
        
      />
    </TabOneStack.Navigator>
  );
}

const ChatTabStack = createStackNavigator<ChatsParamList>();

function chatScreen() {
  return (
    <ChatTabStack.Navigator>
      <ChatTabStack.Screen
        component={TabChatScreen}
        name="ChatScreen"
        options={{headerShown: false}}
      />
    </ChatTabStack.Navigator>
  );
}
