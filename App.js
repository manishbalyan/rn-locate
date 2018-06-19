import React from 'react';
import { StyleSheet, Text, View, TextInput, Button, Keyboard } from 'react-native';
import PlaceList from './src/components/PlaceList/PlaceList'
import PlaceDetail from './src/components/PlaceDetail/PlaceDetail';
// import placeImage from './src/assets/demo.jpg'

export default class App extends React.Component {

  state = {
    placeName: "",
    places: [],
    selectedPlace: null
  }

  placeNameChangeHandler = (val) => {
    this.setState({
      placeName: val

    })
  }

  placeSubmitHandler = () => {
    if (this.state.placeName.trim() === '') {
      return;
    }
    this.setState(prevState => {
      return {
        places: prevState.places.concat({
          key: Math.random().toString(),
          name: prevState.placeName,
          image: {
            uri: "data:image/jpeg;base64,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"
          }
        }),
        // placeName: ''
      }
    })
    // Keyboard.dismiss();
  }

  placeDeleteHandler = (key) => {
    this.setState(prevState => {
      return {
        places: prevState.places.filter((place) => {
          return place.key !== key
        })
      }
    })
  }

  onItemSelected = (key) => {
    this.setState(prevState => {
      return {
        selectedPlace: prevState.places.find(place => {
          return place.key === key;
        })
      }
    })
  }

  onItemDeleted = () => {
    this.setState(prevState => {
      return {
        places: prevState.places.filter(place => {
          return place.key !== prevState.selectedPlace.key;
        }),
        selectedPlace: null
      }
    })
  }

  onModalClose = () => {
    this.setState({
      selectedPlace: null
    })
  }

  render() {
    const { selectedPlace } = this.state
    return (
      <View style={styles.container}>
        <PlaceDetail
          selectedPlace={selectedPlace}
          onItemDeleted={this.onItemDeleted}
          onModalClose={this.onModalClose} />
        <View style={styles.inputContainer}>
          <TextInput
            value={this.state.placeName}
            onChangeText={this.placeNameChangeHandler}
            style={styles.placeInput}
            placeholder='An awesome place'
          />
          <Button
            style={styles.placeButton}
            title="Add"
            onPress={this.placeSubmitHandler}
          />
        </View>
        <PlaceList
          places={this.state.places}
          // onItemDeleted={this.placeDeleteHandler}
          onItemSelected={this.onItemSelected}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: 20
  },
  inputContainer: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  placeInput: {
    width: '70%',

  },
  placeButton: {
    width: '30%'
  }
});
