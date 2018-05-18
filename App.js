import React from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import PlaceList from './src/components/PlaceList/PlaceList'

export default class App extends React.Component {

  state = {
    placeName: "",
    places: []
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
        places: prevState.places.concat(prevState.placeName),
        placeName: ''
      }
    })
  }

  render() {
    return (
      <View style={styles.container}>
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
