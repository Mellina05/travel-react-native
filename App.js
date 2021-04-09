import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import PlanPage from './src/screens/PlanPage';
import ChatPage from './src/screens/ChatPage';
import DiscoverPage from './src/screens/DiscoverPage';
import ProfilePage from './src/screens/ProfilePage';

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
                      return <FontAwesome name={iconName} size={25} color={color} />;
                    },
                  })}
                tabBarOptions={{
                    activeTintColor: '#111111',
                    inactiveTintColor: '#999999',
                    showLabel: false,
                    style: {height:95}
                }}>
                <BottomTab.Screen name="Plan" component={PlanPage} />
                <BottomTab.Screen name="Chat" component={ChatPage} />
                <BottomTab.Screen name="Discover" component={DiscoverPage} />
                <BottomTab.Screen name="Profile" component={ProfilePage} />
            </BottomTab.Navigator>
        </NavigationContainer> 
    ); 
};

export default App;
