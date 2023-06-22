import {StyleSheet, ActivityIndicator, View} from 'react-native';
import React from 'react';

const Loader = () => {
  return (
    <View style={styles.Indicator}>
      <ActivityIndicator size={'large'} />
    </View>
  );
};

export default Loader;

const styles = StyleSheet.create({
  Indicator: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
