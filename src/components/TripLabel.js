import React, {useState} from 'react';
import { View, Text, TouchableOpacity, Image, ImageBackground, StyleSheet} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

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
    const [isSaved, setSaved] = useState(false);
    const [starColor, setStarColor] = useState("#999999");
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
                <View style={{flexDirection: "row", justifyContent: "space-between"}}>
                    <Text style={styles.tripLabelName}>{element.name}</Text>
                    {
                        !publicTrip ?
                        null:
                        <View style={{flexDirection: "row", marginTop: 10}}>
                            <TouchableOpacity
                                onPress = {() => {
                                    if (isSaved) {
                                        setStarColor("#F1D334");
                                    } else {
                                        setStarColor("#999999")
                                    }
                                    setSaved(!isSaved);
                                    console.log("Saved? " + isSaved + ", color: " + starColor);
                                }}
                            >
                                <FontAwesome name={"star-o"} size={20} color={starColor}/>
                            </TouchableOpacity>
                            <Text style={{color: starColor, marginLeft: 6, marginRight: 15, fontSize: 16, fontFamily: "Helvetica Neue"}}>{!isSaved ? element.stars + 1 : element.stars}</Text>
                        </View>
                    }    
                </View>
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