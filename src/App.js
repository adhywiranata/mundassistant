import React from 'react';
import { StackNavigator } from 'react-navigation';
import { Provider } from 'react-redux';
import Realm from 'realm';

import { commandSchema } from './realmSchemas';
import store from './store/configureStore';

import SplashScreen from './screens/Splash';
import HomeScreen from './screens/Home';
import ChatScreen from './screens/Chat';

const MainNavigator = StackNavigator({
  Home: { screen: HomeScreen },
  Chat: { screen: ChatScreen },
  Splash: { screen: SplashScreen },
});

// const parseRealmObject = realmObj => JSON.parse(JSON.stringify(realmObj));

export default class extends React.Component {
  componentDidMount() {
    Realm.open({ schema: [commandSchema] })
      .then((realm) => {
        try {
          realm.write(() => {
            // realm.create('Command', { name: 'Gojek', template: 'mantap' });
          });
        } catch (e) {
          console.error(e);
        }
      });
  }

  render() {
    // console.log(this.state.realm);
    // if (this.state.realm) {
    //   const commands = this.state.realm.objects('Command').filtered('template = "test"');
    //   console.log(commands);
    //   console.log(parseRealmObject(commands[0]));
    //   console.log(parseRealmObject(commands));
    // }
    return (
      <Provider store={store}>
        <MainNavigator />
      </Provider>
    );
  }
}
