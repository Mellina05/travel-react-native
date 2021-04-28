import 'react-native-gesture-handler';
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import ProfilePage from './ProfilePage';
import TripsListPage from './TripsPages/TripsListPage';
import SettingsPage from './UtilPages/SettingsPage';

const Stack = createStackNavigator();

const ProfileStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                options={{
                    headerShown: false
                }}
                name="Profile"
                component={ProfilePage}
            />
            <Stack.Screen 
                name="TripsList" 
                component={TripsListPage} 
            />
            <Stack.Screen 
                name="Settings"
                component={SettingsPage}
            />
        </Stack.Navigator>
    );
};

export default ProfileStack;