import React from 'react';
import { View, Text, TouchableOpacity, Image, ImageBackground, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    tripLabel: {
        height: 226,
        marginLeft: 24,
        marginRight: 24,
        marginTop: 12,
        backgroundColor: "#F7F7F7",
        borderRadius: 12,
    },
    tripLabelImage: {
        width: undefined,
        height: 168, 
        borderTopLeftRadius: 12, 
        borderTopRightRadius: 12
    },
    tripLabelName: {
        marginTop: 10,
        marginLeft: 16,
        fontFamily: 'Helvetica Neue',
        fontSize: 16,
        fontWeight: '500'
    },
    tripLabelText: {
        fontSize: 12,
        marginLeft: 16,
        marginTop: 2
    },
    tripUser: {
        width: 32,
        height: 32,
        marginLeft: 6
    }
  });

const TripLabel = (props) => {
    const element = props.tripData;
    const publicTrip = props.public;
    return (
        <View key={element.key}>
            <TouchableOpacity style={styles.tripLabel} onPress={()=>console.log(element.name)}>
                <ImageBackground source={element.image} style={styles.tripLabelImage} imageStyle={{borderTopLeftRadius: 12, borderTopRightRadius: 12}}>
                    {
                        !publicTrip ? 
                        [
                            <View style={{flexDirection: "row", paddingLeft: 10, paddingTop: 128}}>
                            <Image source={require('../screens/assets/user1.png')} style={styles.tripUser} />
                            <Image source={require('../screens/assets/user1.png')} style={styles.tripUser} />
                            <Image source={require('../screens/assets/user1.png')} style={styles.tripUser} />
                            </View>
                        ] : null
                    }
                </ImageBackground>
                <Text style={styles.tripLabelName}>{element.name}</Text>
                {
                    !publicTrip ? 
                    <Text style={styles.tripLabelText}>{element.location + " • " + element.startDate + " - " + element.endDate}</Text>
                    :
                    <Text style={styles.tripLabelText}>{element.location + " • " + element.duration + " Days • " + element.members + " Travellers"}</Text>
                }
            </TouchableOpacity>
        </View>
    );
}

export default TripLabel;