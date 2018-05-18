import React from 'react';
import { Text, View, StyleSheet } from 'react-native'
import ListItems from '../ListItems/ListItems'


const placeList = (props) => {

    const placesOutput = props.places.map((place, index) => (
        <ListItems
            placeName={place}
            key={index}
        />
    ))
    return (
        <View style={styles.listContainer}>
            {placesOutput}
        </View>
    )
}

const styles = StyleSheet.create({
    listContainer: {
        width: '100%'
    }
})


export default placeList