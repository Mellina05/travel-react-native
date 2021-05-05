import React, {useState} from 'react';
import { View, Text, Modal, TextInput, TouchableOpacity, TouchableWithoutFeedback} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import TripLabel from "../components/TripLabel";
import commonStyles from "./styles/CommonStyles";
import styles from "./styles/PlanPageStyles";

const TripList = [
    {key: "trip1", name: "Girl's Trip", location: "Valleta(Malta)", startDate: "01/01/2021", endDate: "08/01/2021", image: require('./assets/trip1.jpeg')},
    {key: "trip2", name: "Family Chill Weekend Trip", location: "Giethoorn", startDate: "06/03/2021", endDate: "07/03/2021", image: require('./assets/trip2.jpeg')}
]

/**
 * To view plans with ownership.
 */
const PlanPage = () => {
    const [modalVisible, setModalVisible] = useState(false);
    const [text, onChangeText] = useState("Trip Name");
    return (
        <View style={commonStyles.page}>
            <View style={commonStyles.titleContainer}>
            <Text style={commonStyles.title}>My Trips</Text>
            <TouchableOpacity 
                style={styles.plusButton}
                onPress={() => setModalVisible(true)}>
                <FontAwesome name={"plus"} size={22} />
            </TouchableOpacity>
            </View>
            <Modal
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    console.log("Modal closed")
                    setModalVisible(!modalVisible);
                }}
                style={{height: 200, width: 340}}
            >
                <TouchableOpacity 
                    style={{flex:1}}
                    onPressOut={() => setModalVisible(!modalVisible)}>
                    <View style={styles.centeredView}>
                        <TouchableWithoutFeedback>
                            <View style={styles.modalView}>
                                <View style={styles.modalText}>
                                <Text style={styles.modalTitle}>Create My New Trip</Text>
                                <TouchableOpacity onPress={() => setModalVisible(!modalVisible)}>
                                    <FontAwesome name={"remove"} size={30} color={"#000000"} />
                                </TouchableOpacity>
                                </View>
                                <View style={styles.modalTextInput}>
                                <TextInput
                                    onChangeText={onChangeText}
                                    value={text}
                                    placeholder="Trip Name"
                                    style={styles.modalInput}
                                />
                                </View>
                            </View>
                        </TouchableWithoutFeedback>
                    </View> 
                </TouchableOpacity>
            </Modal>
            <View style={{marginTop: 24}}>
                {TripList.map((element) => (
                    <TripLabel key={element.key} tripData={element}></TripLabel>
                ))}
            </View>
      </View>
    );
}

export default PlanPage;