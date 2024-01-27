/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  useColorScheme,
} from 'react-native';

import tw from './tailwind';
import { Home } from './screens';

export const backgroundStyle = "bg-neutral-300 dark:bg-slate-900"


function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <SafeAreaView style={tw`${backgroundStyle}`}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
      />
      <Home />
    </SafeAreaView>
  );
}

export default App;
