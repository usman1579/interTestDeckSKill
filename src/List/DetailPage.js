import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import TextComponent from '../component/TextComponent';

const TextHeader = 'Close Approach Data';

const DetailPage = props => {
  const item = props.route.params.data;

  return (
    <View style={styles.container}>
      <ScrollView>
        <TextComponent title={'ID'} value={item.id} />
        <TextComponent title={'Name'} value={item.name} />
        <TextComponent title={'URL'} value={item.links.self} />
        <TextComponent title={'NASA JPL URL'} value={item.nasa_jpl_url} />
        <TextComponent
          title={'NEO REFERENCE ID'}
          value={item.neo_reference_id}
        />
        <TextComponent
          title={'is_potentially_hazardous_asteroid'}
          value={item.neo_reference_id}
        />

        <Text style={styles.Header}>{TextHeader}</Text>

        <TextComponent
          title={'close_approach_date'}
          value={item.close_approach_data[0].close_approach_date}
        />
      </ScrollView>
    </View>
  );
};

export default DetailPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  Header: {
    fontSize: 20,
    fontWeight: 'bold',
    margin: 20,
  },
});
