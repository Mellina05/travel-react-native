import React from 'react';
import { View, Text} from 'react-native';
import commonStyles from "./styles/CommonStyles";

/**
 * To chat with other users.
 */

const ChatPage = () => {

    return (
        <View style={commonStyles.page}>
            <View style={commonStyles.titleContainer}>
                <Text style={commonStyles.title}>Chat</Text>
            </View>
        </View>
    );
}

export default ChatPage;