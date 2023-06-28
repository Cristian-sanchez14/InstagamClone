/* eslint-disable react/react-in-jsx-scope */
import {StyleSheet, View} from 'react-native';
import Homescreen from './src/screens/HomeScreen/HomeScreen';

const App = () => {
  return (
    <View style={styles.app}>
      <Homescreen />
    </View>
  );
};

const styles = StyleSheet.create({
  app: {
    flex: 1,
    paddingTop: 35,
  },
});

export default App;
