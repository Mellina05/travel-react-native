import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet, Dimensions} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import ProfileButton from '../components/ProfileButton';
import commonStyles from "./styles/CommonStyles";

const windowHeight = Dimensions.get('window').height; //844

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
        borderColor: "#EAEAEA",
        borderBottomWidth: 1
    },
    logoutContainer: {
        backgroundColor: "#EEEEEE",
        bottom: -(windowHeight - 600)
    },
    logoutText: {
        fontFamily: 'Helvetica Neue',
        fontWeight: '400',
        fontSize: 16,
        lineHeight: 19,
        textAlign: "center",
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
            <View>
                <View style={commonStyles.titleContainer}>
                    <Text style={commonStyles.title}>Profile</Text>
                    <TouchableOpacity 
                        onPress={()=>console.log('Edit profile')}>
                        <FontAwesome name={"edit"} size={25} />
                    </TouchableOpacity>
                </View>
                <View style={{paddingBottom: 24, backgroundColor: "#FFFFFF", borderBottomColor: "#EAEAEA", borderBottomWidth: 1}}>
                    <Image source={user.profileImage} style={styles.profileImage}/>
                    <Text style={styles.username}>
                        {user.userName}
                    </Text>
                </View>
                <View style={{marginTop: 12, borderBottomColor: "#EAEAEA", borderBottomWidth: 1}}>
                    {TripButtonList.map((element) => (
                        <ProfileButton data={element}></ProfileButton>
                    ))}
                </View>
                <View style={{marginTop: 12, borderBottomColor: "#EAEAEA", borderBottomWidth: 1}}>
                    <ProfileButton data={settingButton}></ProfileButton>
                </View>
            </View>
            <TouchableOpacity
                style={styles.logoutContainer}
                onPress={()=>console.log('Log out')}>
                <Text style={styles.logoutText}>Log Out</Text>
            </TouchableOpacity>
        </View>
    );
}

export default ProfilePage;