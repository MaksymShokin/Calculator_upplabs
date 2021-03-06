import React, { useState } from 'react';
import MainNavigator from './navigation/navigator';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';
import userReducer from './store/reducers/userReducer';
import formReducer from './store/reducers/formReducer';
import timeReducer from './store/reducers/timeReducer';
import audioReducer from './store/reducers/audioReducer';
import errorReducer from './store/reducers/errorReducer';
import {
  applyMiddleware,
  combineReducers,
  createStore
} from 'redux';
import ReduxThunk from 'redux-thunk';
import { Provider } from 'react-redux';

const rootReducer = combineReducers({
  user: userReducer,
  form: formReducer,
  time: timeReducer,
  audio: audioReducer,
  error: errorReducer
});

const store = createStore(rootReducer, applyMiddleware(ReduxThunk));

const fetchFonts = () => {
  return Font.loadAsync({
    'raleway': require('./assets/fonts/Raleway-Medium.ttf'),
    'raleway-bold': require('./assets/fonts/Raleway-Bold.ttf')
  })
};

export default function App() {
  const [dataLoaded, setDataLoaded] = useState(false);

  if (!dataLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={()=>setDataLoaded(true)}
        onError={err=>console.log(err)}
      />
    )
  }

  return (
    <Provider store={store}>
      <MainNavigator/>
    </Provider>
  );
}
