import 'react-native-gesture-handler';
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import PlanPage from './PlanPage';
import TripDetailPage from './TripsPages/TripDetailPage';
import CreateTripPage from './TripsPages/CreateTripPage';

const Stack = createStackNavigator();

const PlanStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Trips"
                component={PlanPage}
            />
            <Stack.Screen 
                name="TripDetail" 
                component={TripDetailPage} 
            />
            <Stack.Screen 
                name="CreateTrip"
                component={CreateTripPage}
            />
        </Stack.Navigator>
    );
};

export default PlanStack;