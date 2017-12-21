import React from 'react';
import { Provider } from 'react-redux';

import Router from '../router/Routes';
import { createStore } from 'redux'
import reducer from '../reducers/Index'

const store = createStore(reducer);

const Root = () => {
  return (
    <Provider store={store}>
        <Router />
    </Provider>
  );
};

export default Root;
