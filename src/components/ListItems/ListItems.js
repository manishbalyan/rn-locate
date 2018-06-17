import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Image } from 'react-native'


const listItems = (props) => (
    <TouchableOpacity onPress={props.onItemPressed}>
        <View style={styles.listItems}>
            <Image source={props.image} resizeMode="contain" style={styles.placeImage} />
            <Text style={styles.itemText}>{props.placeName}</Text>
        </View>
    </TouchableOpacity>
)

const styles = StyleSheet.create({
    listItems: {
        width: "100%",
        marginBottom: 5,
        backgroundColor: "#eee",
        padding: 5,
        flexDirection: 'row',
        alignItems: 'center'
    },
    itemText: {
        color: 'black'
    },
    placeImage: {
        marginRight: 10,
        height: 30,
        width: 30
    }
})


export default listItems