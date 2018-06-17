import React from 'react'
import { Modal, View, Text, Button, Image, StyleSheet } from 'react-native';


const PlaceDetail = props => {
    let modalContent = null;
    if (props.selectedPlace) {
        modalContent = (
            <View>
                <Image source={props.placeImage} />
                <Text>
                    {props.placeName}
                </Text>
            </View>
        );
    }
    return (
        <Modal visible={props.selectedPlace !== null} animationType="slide">
            <View style={styles.modalConatiner}>
                {modalContent}
                <View>
                    <Button title="Delete" />
                    <Button title="Close" />
                </View>
            </View>
        </Modal>
    )
}


const styles = StyleSheet.create({
    modalConatiner: {
        margin: 22
    }
})

export default PlaceDetail;