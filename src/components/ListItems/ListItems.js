import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native'


const listItems = (props) => (
    <TouchableOpacity onPress={props.onItemPressed}>
        <View style={styles.listItems}>
            <Text style={styles.itemText}>{props.placeName}</Text>
        </View>
    </TouchableOpacity>
)

const styles = StyleSheet.create({
    listItems: {
        width: "100%",
        marginBottom: 5,
        backgroundColor: "#eee",
        padding: 5
    },
    itemText: {
        color: 'black'
    }
})


export default listItems