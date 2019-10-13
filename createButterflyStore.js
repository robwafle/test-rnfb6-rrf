// @flow
// import { AsyncStorage } from "react-native";
//import devTools from "remote-redux-devtools";
//import { createStore, applyMiddleware, compose } from "redux";

//import thunk from "redux-thunk";
//import { persistStore } from "redux-persist";
//import rootReducer from "./reducers/rootReducer";
//import { getFirebase } from "react-redux-firebase";

//import { createLogger } from "redux-logger";

//import { reduxFirestore, getFirestore } from "redux-firestore";
import { configureStore } from "redux-starter-kit";
//import ReactReduxFirebaseProvider from "react-redux-firebase/lib/ReactReduxFirebaseProvider";
//import firebaseReducer from "react-redux-firebase/lib/reducer";
//import { createFirestoreInstance, firestoreReducer } from "redux-firestore"; // <- needed if using fir

//import { compose, createStore } from "redux";
import firebase from "@react-native-firebase/app";
import firestore from "@react-native-firebase/firestore";
import { reactReduxFirebase } from "react-redux-firebase";
//import thunk from "redux-thunk";
//import makeRootReducer from "./reducers";

/*
export default function configureStore(onCompletion: () => void): any {
  const enhancer = compose(
    applyMiddleware(thunk.withExtraArgument({getFirebase, getFireStore})),
    reduxFirestore(fbConfig), 
    reactReduxFirebase(fbConfig),
    createLogger(),
    devTools({
      name: "nativestarterkit",
      realtime: true
    })
  );

  const store = createStore(rootReducer, enhancer);
  //persistStore(store, onCompletion);

  return store;
}
*/

// ======================================================
// Middleware Configuration
// ======================================================

export default (initialState = { firebase: {} }) => {
  // initialize firebase
  //firebase.firestore();

  const reactNativeFirebaseConfig = {
    debug: true
  };

  const reduxFirebaseConfig = {
    userProfile: "users" // save users profiles to 'users' collection
  };

  const middleware = [
    //thunk.withExtraArgument({ getFirebase, getFirestore }),
    // reactReduxFirebase(firebase, reduxFirebaseConfig)
    // This is where you add other middleware like redux-observable
  ];

  const enhancers = [];

  var testReducer = (state = 0, action) => state
  var store = configureStore({
    reducer: testReducer,
    middleware: middleware,
    initialState,
    enhancers: enhancers
  });

  /*if (process.env.NODE_ENV !== "production" && module.hot) {
    module.hot.accept("./reducers", () => store.replaceReducer(rootReducer));
  }*/

  return store;
};

{
  /*
const reactNativeFirebaseConfig = {
 debug: true
};

const reduxFirebaseConfig = {
 userProfile: 'users', // save users profiles to 'users' collection
};

export default (initialState = { firebase: {} }) => {
 // initialize firebase
 const firebase = RNFirebase.initializeApp(reactNativeFirebaseConfig);

 const store = createStore(
   makeRootReducer(),
   initialState,
   compose(
    reactReduxFirebase(firebase, reduxFirebaseConfig), // pass initialized react-native-firebase app instance
    // applyMiddleware can be placed here
   )
 );

 return store;
};
*/
}
