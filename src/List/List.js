import React, {useEffect, useState} from 'react';
import {SafeAreaView} from 'react-native';
import MySectionList from './SectionList';

const List = props => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <MySectionList //Section List to Show Data with Dates
        {...props}
      />
    </SafeAreaView>
  );
};

export default List;
