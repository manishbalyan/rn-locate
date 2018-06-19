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
        <Modal
            onRequestClose={props.onModalClose}
            visible={props.selectedPlace !== null}
            animationType="slide">
            <View style={styles.modalConatiner}>
                {modalContent}
                <View>
                    <Button title="Delete" color="red" onPress={props.onItemDeleted} />
                    <Button title="Close" color="green" onPress={props.onModalClose} />
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