import * as React from 'react';
import './App.css';
import store from './store';
import Page from './containers/Page';
import { Provider } from 'redux-zero/react';

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Page />
      </Provider>
    );
  }
}

export default App;
