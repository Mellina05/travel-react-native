import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import PlanStack from './src/screens/PlanStack';
import ChatPage from './src/screens/ChatPage';
import DiscoverStack from './src/screens/DiscoverStack';
import ProfileStack from './src/screens/ProfileStack';

const BottomTab = createBottomTabNavigator();

const App = function() {
    return (
        <NavigationContainer>
            <BottomTab.Navigator
                screenOptions={({ route }) => ({
                    tabBarIcon: ({ focused, color, size }) => {
                      let iconName;
                      if (route.name === 'Plan') {
                        iconName = 'train';
                      } else if (route.name === 'Chat') {
                        iconName = 'comments-o';
                      } else if (route.name === 'Discover') {
                        iconName = 'safari';
                      } else if (route.name === 'Profile') {
                        iconName = 'user';
                      }
                      return <FontAwesome name={iconName} size={25}/>;
                    },
                  })}
                tabBarOptions={{
                    activeTintColor: '#111111',
                    inactiveTintColor: '#999999',
                    showLabel: true,
                    style: {height:95}
                }}>
                <BottomTab.Screen name="Plan" component={PlanStack} />
                <BottomTab.Screen name="Chat" component={ChatPage} />
                <BottomTab.Screen name="Discover" component={DiscoverStack} />
                <BottomTab.Screen name="Profile" component={ProfileStack} />
            </BottomTab.Navigator>
        </NavigationContainer> 
    ); 
};

export default App;
