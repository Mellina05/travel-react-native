import React from 'react';
import { View, Text} from 'react-native';
import TripLabel from "../components/TripLabel";
import commonStyles from "./styles/CommonStyles";

/**
  * To view public trips.
 */

const DiscoverPage = () => {
    const TripList = [
        {key: "trip10", name: "Magic!!!!", location: "London(UK)", duration: 4, members: 3, startDate: "01/01/2021", endDate: "08/01/2021", image: require('./assets/trip10.png')},
        {key: "trip21", name: "Beeeach Time", location: "Hawaii(US)", duration: 10, members: 4, startDate: "06/03/2021", endDate: "07/03/2021", image: require('./assets/trip21.png')}
    ]

    return (
        <View style={commonStyles.page}>
            <View style={commonStyles.titleContainer}>
                <Text style={commonStyles.title}>Discover</Text>
            </View>
            <View style={{marginTop: 24}}>
                {TripList.map((element) => (
                    <TripLabel key={element.key} tripData={element} public={true}></TripLabel>
                ))}
            </View>
        </View>
    );
}

export default DiscoverPage;