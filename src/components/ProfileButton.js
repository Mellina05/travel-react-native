import React from 'react';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { View, Text, TouchableOpacity, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    text: {
        fontFamily: 'Helvetica Neue',
        fontSize: 16,
        fontWeight: '400',
        lineHeight: 29,
        paddingLeft: 8
    },
    buttonContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        height: 51,
        paddingLeft: 24,
        paddingRight: 24,
        paddingTop: 16,
        borderColor: "#EAEAEA",
        borderTopWidth: 1
    }
});

const renderIcon = (buttonKey) => {
    let iconName = "";
    let iconColor = "";
    if (buttonKey === "savedTrips") {
        iconName = "star";
        iconColor = "#F1D334";
    } else if (buttonKey === "joinedTrips") {
        iconName = "users";
        iconColor = "#AA3640";
    } else if (buttonKey === "publishedTrips") {
        iconName = "globe";
        iconColor = "#3E90DB";
    } else {
        iconName = "wrench";
        iconColor = "#AAAAAA";
    }
    return <FontAwesome name={iconName} size={22} color={iconColor} />
};

const ProfileButton = (props) => {
    const data = props.data;
    return (   
            <TouchableOpacity 
                style={styles.plusButton}
                onPress={()=>console.log(data.name)}>
                <View key={data.key} style={styles.buttonContainer}>
                    <View style={{flexDirection: "row"}}>
                        {renderIcon(data.key)}
                        <Text style={styles.text}>{data.name}</Text>
                    </View>      
                    <FontAwesome name={"chevron-right"} size={22} color={"#777777"} />
                </View>
            </TouchableOpacity>
    );
}

export default ProfileButton;