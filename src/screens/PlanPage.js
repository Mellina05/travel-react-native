import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import TripLabel from "../components/TripLabel";
import commonStyles from "./styles/CommonStyles";

const styles = StyleSheet.create({
    plusButton: {
        width: 22,
        height: 21,
        marginTop: 3
    }
});

const TripList = [
    {key: "trip1", name: "Girl's Trip", location: "Valleta(Malta)", startDate: "01/01/2021", endDate: "08/01/2021", image: require('./assets/trip1.jpeg')},
    {key: "trip2", name: "Family Chill Weekend Trip", location: "Giethoorn", startDate: "06/03/2021", endDate: "07/03/2021", image: require('./assets/trip2.jpeg')}
]

/**
 * To view plans with ownership.
 */
const PlanPage = () => {
    return (
        <View style={commonStyles.page}>
            <View style={commonStyles.titleContainer}>
            <Text style={commonStyles.title}>My Trips</Text>
            <TouchableOpacity 
                style={styles.plusButton}
                onPress={()=>console.log('Create trip')}>
                <FontAwesome name={"plus"} size={22} />
            </TouchableOpacity>
            </View>
            <View style={{marginTop: 24}}>
                {TripList.map((element) => (
                    <TripLabel key={element.key} tripData={element}></TripLabel>
                ))}
            </View>
      </View>
    );
}

export default PlanPage;