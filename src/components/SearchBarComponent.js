import React, {useState} from 'react';
import { View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import { SearchBar } from 'react-native-elements';

const searchList = ["Amsterdam", "Hawaii", "Paris", "Shanghai"];

const styles = StyleSheet.create({
    searchBarBackground: {
        backgroundColor: "#FFFFFF",
        borderTopWidth: 0,
        borderBottomWidth: 0,
        marginTop: 12
    },
    searchBar: {
        backgroundColor: "#EEEEEE",
        borderRadius: 20,
        height: 32,
        marginLeft: 15,
        marginRight: 15
    },
    text: {
        fontFamily: 'Helvetica Neue',
        fontWeight: '400',
        fontSize: 16,
        lineHeight: 19,
        marginLeft: 12
    },
    leftIcon: {
        width: 18,
        height: 18,
        marginLeft: 12,
        color: "#AAAAAA"
    },
    popularSearch: {
        fontFamily: 'Helvetica Neue',
        fontWeight: '400',
        color: "#777777",
        fontSize: 12,
        lineHeight: 14,
        paddingLeft: 24
    },
    searchRecommendation: {
        flexDirection: "row",
        marginTop: 6,
        marginLeft: 18
    },
    searchRecommendationElement: {
        borderWidth:1,
        borderStyle: 'dashed',
        borderColor: "#777777",
        borderRadius: 20,
        paddingLeft: 8,
        paddingRight: 8,
        marginLeft: 6
    },
    searchRecommendationText: {
        fontFamily: 'Helvetica Neue',
        fontWeight: '400',
        color: "#777777",
        fontSize: 12,
        lineHeight: 14,
    }
});

const SearchBarComponent = (props) => {
    const placeholderInput = (props.placeholder) ? props.placeholder : "";
    const placeholderValue = "Search " + placeholderInput; 

    const [searchQuery, setSearchQuery] = useState('');

    const fillSearchBar = (value) => {
        setSearchQuery(value);
        console.log(value);
    };
    const onChangeSearch = (query) => {
        setSearchQuery(query);
        console.log(query);
    };
    return (
        <View>
            <SearchBar
            placeholder={placeholderValue}
            placeholderTextColor="#AAAAAA"
            containerStyle={styles.searchBarBackground}
            inputContainerStyle={styles.searchBar}
            inputStyle={styles.text}
            leftIconContainerStyle={styles.leftIcon}
            onChangeText={onChangeSearch}
            value={searchQuery}
            />
            {
                (props.showRecommendation && searchList.length > 0) ? 
                <Text style={styles.popularSearch}>Popular search:</Text>
                : null
            }
            {
                props.showRecommendation ? 
                <View style={styles.searchRecommendation}>
                    {searchList.map((element) => (
                        <TouchableOpacity 
                            onPress={()=>fillSearchBar(element)}
                            style={styles.searchRecommendationElement}>
                            <Text style={styles.searchRecommendationText}>{element}</Text>
                        </TouchableOpacity >
                    ))}
                </View> : null
            }
        </View>
    );
}

export default SearchBarComponent;