import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import React from 'react';

const SectionItem = props => {
  const data = props.item;
  return (
    <TouchableOpacity
      onPress={() => props.navigation.navigate('DetailPage',{data : data})}
      style={styles.itemContainer}>
      <Text style={{fontWeight: 'bold', color: 'black'}}>ID {data.id}</Text>
      <Text>Name {data.name}</Text>
    </TouchableOpacity>
  );
};

export default SectionItem;

const styles = StyleSheet.create({
  itemContainer: {
    height: 100,
    width: '95%',
    margin: 5,
    backgroundColor: 'lightgrey',
    borderRadius: 5,
    justifyContent: 'center',
    paddingHorizontal: 5,
  },
});
