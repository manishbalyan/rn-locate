import React from 'react';
import { StyleSheet, ScrollView, FlatList } from 'react-native'
import ListItems from '../ListItems/ListItems'


const placeList = (props) => {

    // const placesOutput = props.places.map((place, index) => (
    //     <ListItems
    //         placeName={place}
    //         key={index}
    //         onItemPressed={() => props.onItemDeleted(index)}
    //     />
    // ))
    return (
        <FlatList
            style={styles.listContainer}
            data={props.places}
            renderItem={(place) => {
                return <ListItems
                    placeName={place.item.name}
                    image={place.item.image}
                    onItemPressed={() => props.onItemSelected(place.item.key)}
                />
            }}
        >
        </FlatList>
    )


}

const styles = StyleSheet.create({
    listContainer: {
        width: '100%'
    }
})


export default placeList