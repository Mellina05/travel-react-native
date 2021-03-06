import {StyleSheet} from 'react-native';
const commonStyles = StyleSheet.create({
    titleContainer: {
        flexDirection: "row", 
        justifyContent: "space-between",
        marginTop: 68, 
        marginLeft: 24,
        marginRight: 23
    },
    title: {
        fontFamily: 'Helvetica Neue',
        fontWeight: '700',
        fontSize: 24,
        lineHeight: 29,
        letterSpacing: 0,
        textAlign: "left",
    },
    page: {
        backgroundColor: "#FFFFFF"
    }
});

export default commonStyles;
