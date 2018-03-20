import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import manageBand from './reducers/manageBand';
import { ConnectedUsers, Users }  from '../src/components/Users';

// we wrap store in a function for testing purposes
export const configureStore = () => {
  return createStore(manageBand, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
};

let store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <ConnectedUsers />
  </Provider>,
  document.getElementById('root')
);

/* Note:
In the above example, the connected users and users component is imported to the file.
We import the createStore function from the redux library along with the provider method from react-redux.
The provider function is a redux middlewear that connects components to the redux store thus rerender the component when state changes occur but not all components, the components whoses connected
state value changes. 
*/
