import React from 'react';
import { View, Text, TouchableOpacity, Image} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import ProfileButton from '../components/ProfileButton';
import commonStyles from "./styles/CommonStyles";
import styles from "./styles/ProfilePageStyles";

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