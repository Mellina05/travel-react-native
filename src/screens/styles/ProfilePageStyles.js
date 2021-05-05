import {StyleSheet, Dimensions} from 'react-native';

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

export default styles;