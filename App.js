
import React from "react";
//import firebase from "firebase/app";
import firebase from "@react-native-firebase/app";
import firestore from "@react-native-firebase/firestore";

//import { createStore, combineReducers, compose } from "redux";
import { ReduxFirestoreProvider } from "react-redux-firebase";

import { createFirestoreInstance, firestoreReducer } from "redux-firestore"; // <- needed if using firestore
import createButterflyStore from "./createButterflyStore";
import { Provider } from "react-redux";

const initialState = {};
var store = createButterflyStore(initialState);

const fbConfig = {};

// react-redux-firebase config
const rrfConfig = {
  userProfile: "users",
  useFirestoreForProfile: true // Firestore for Profile instead of Realtime DB
  // enableClaims: true // Get custom claims along with the profile
};

const rrfProps = {
  firebase,
  config: rrfConfig,
  dispatch: store.dispatch,
  createFirestoreInstance // <- needed if using firestore
};

// Setup react-redux so that connect HOC can be used
export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <ReduxFirestoreProvider {...rrfProps}></ReduxFirestoreProvider>
      </Provider>
    );
  }
}
