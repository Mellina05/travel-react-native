import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import ProfileButton from '../components/ProfileButton';
import commonStyles from "./styles/CommonStyles";

const styles = StyleSheet.create({
    profileImage: {
        width: 60,
        height: 60,
        marginLeft: "43%",
        marginTop: 12,
    },
    username: {
        fontFamily: 'Helvetica Neue',
        fontWeight: '500',
        fontSize: 18,
        lineHeight: 22,
        textAlign: "center",
    },
    border: {
        borderColor: "#EAEAEA"
    }
});

const TripButtonList = [
    {key: "savedTrips", name: "My Saved Trips", navigateTo: "savedTripsPage", icon: require('./assets/plus-button.png')},
    {key: "joinedTrips", name: "My Joined Trips", navigateTo: "joinedTripsPage", icon: require('./assets/plus-button.png')},
    {key: "publishedTrips", name: "My Published Trips", navigateTo: "publishedTripsPage", icon: require('./assets/plus-button.png')}]
const settingButton = {key: "settings", name: "Settings", navigateTo: "settings", icon: require('./assets/plus-button.png')}

/**
 * To view or modify user settings.
 */
const ProfilePage = () => {
    const user = {
        key: "user1",
        userName: "Natasha Lee",
        profileImage: require('./assets/user1.png')
    }

    return (
        <View style={commonStyles.page}>
            <View style={commonStyles.titleContainer}>
                <Text style={commonStyles.title}>Profile</Text>
                <TouchableOpacity 
                    onPress={()=>console.log('Edit profile')}>
                    <FontAwesome name={"edit"} size={25} />
                </TouchableOpacity>
            </View>
            <View style={{paddingBottom: 24, backgroundColor: "#FFFFFF", borderBottomColor: "#EAEAEA"}}>
                <Image source={user.profileImage} style={styles.profileImage}/>
                <Text style={styles.username}>
                    {user.userName}
                </Text>
            </View>
            <View style={{backgroundColor: "F7F7F7", height: 12}}>
            </View>
            <View>
                {TripButtonList.map((element) => (
                    <ProfileButton data={element}></ProfileButton>
                ))}
            </View>
            <View style={{backgroundColor: "F7F7F7", height: 12}}>
            </View>
            <View>
                <ProfileButton data={settingButton}></ProfileButton>
            </View>
        </View>
    );
}

export default ProfilePage;