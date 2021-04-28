import 'react-native-gesture-handler';
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import DiscoverPage from './DiscoverPage';
import TripDetailPage from './TripsPages/TripDetailPage';

const Stack = createStackNavigator();

const DiscoverStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                options={{
                    headerShown: false
                }}
                name="Discover"
                component={DiscoverPage}
            />
            <Stack.Screen 
                name="TripDetail" 
                component={TripDetailPage} 
            />
        </Stack.Navigator>
    );
};

export default DiscoverStack;