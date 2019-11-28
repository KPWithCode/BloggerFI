import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack'
import IndexScreen from './src/screens/indexScreen';


const navigator = createStackNavigator({
  Index: IndexScreen
}, {
  initialRouterName:'Index',
  defaultNavigationOptions: {
    title: 'Blogs'
  }
});

const App = createAppContainer(navigator)

export default () => {
  return <App/>;
}