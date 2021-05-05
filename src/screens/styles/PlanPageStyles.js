import {StyleSheet, Dimensions} from 'react-native';

const windowWidth = Dimensions.get('window').width;
const styles = StyleSheet.create({
    plusButton: {
        width: 22,
        height: 21,
        marginTop: 3
    },
    centeredView: {
        flex: 1,
        alignItems: "center",
        backgroundColor: "#999999",
        opacity: 0.8
    },
    modalView: {
        margin: 178,
        paddingLeft: 18,
        paddingRight: 18,
        paddingTop: 18,
        backgroundColor: "#FFFFFF",
        width: windowWidth - 48,
        height: 200
    },
    modalText: {
        flexDirection: "row", 
        justifyContent: "space-between"
    },
    modalTextInput: {
        marginTop: 24
    },
    modalInput: {
        fontFamily: 'Helvetica Neue',
        fontWeight: '400',
        fontSize: 16,
        lineHeight: 20,
    },
    modalTitle: {
        fontFamily: 'Helvetica Neue',
        fontWeight: '500',
        fontSize: 16,
        lineHeight: 20,
    }
});

export default styles;