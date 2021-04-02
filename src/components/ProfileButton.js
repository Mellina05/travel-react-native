import React from 'react';
import { Button } from 'react-native';
import { View, Text, Image, StyleSheet} from 'react-native';

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
        height: 51,
        paddingLeft: 18,
        paddingTop: 18
    }
});

const ProfileButton = (props) => {
    const data = props.data;
    return (
        <View key={data.key} style={styles.buttonContainer}>
            <Image source={data.icon}/>
            <Text style={styles.text}>{data.name}</Text>
            <Button title="Click"/>   
        </View>
    );
}

export default ProfileButton;