import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const TextComponent = props => {
  return (
    <View style={{margin: 10}}>
      <Text style={styles.text1}>
        {props.title}
        {'  '}
        <Text style={styles.text2}>{props.value}</Text>
      </Text>
    </View>
  );
};

export default TextComponent;

const styles = StyleSheet.create({
  text1: {
    fontWeight: 'bold',
    fontSize: 16,
    color: 'black',
    paddingHorizontal: 10,
  },
  text2: {
    fontWeight: '400',
    color: 'grey',
    fontSize: 12,
  },
});
