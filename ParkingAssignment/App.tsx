import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';

import Provider from './src/contexts/AppContext';
import Navigation from './src/naviagation/Navigation';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Provider>
        <Navigation />
      </Provider>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
