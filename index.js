import { AppRegistry } from 'react-native';
import React from 'react';
import App from './App';
import { Provider } from 'react-redux'
import configureStore from './src/store/configureStore'


const store = configureStore();
const RNRedux = () => (
    <Provider store={store}>
        <App />
    </Provider >
)
AppRegistry.registerComponent('rncourse', () => RNRedux);
