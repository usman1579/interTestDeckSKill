import React, {useState, useEffect} from 'react';
import {
  Text,
  SectionList,
  TouchableOpacity,
  StyleSheet,
  View,
} from 'react-native';
import SectionItem from '../component/SectionItem';
import DatePicker from 'react-native-date-picker';
import {formatDate, getData, searchByDate} from '../Api';
import {mockData} from '../mockData';
import Loader from '../component/Loader';

const MySectionList = props => {
  const data = mockData.near_earth_objects; // Using Mock data to app shows Data on th Application

  const listData = Object.entries(data).map(([title, data]) => ({
    title,
    data,
  }));

  const sortedData = Object.entries(data)
    .sort(([dateA], [dateB]) => dateA.localeCompare(dateB))
    .map(([date, items]) => ({
      date,
      items: items.sort((a, b) => a.name.localeCompare(b.name)),
    }));

  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);

  const [fetchData, setFetchData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    let mount = true;

    // For Calling API But Using Mock Data
    getData()
      .then(resp => {
        if (resp.error) {
          //   alert(resp.error.message);
        } else {
          setFetchData(resp);
        }
        // setLoading(true);
      })
      .catch(err => alert(err))
      .finally(() => setLoading(true));

    return () => {
      mount = false;
    };
  }, []);

  const LoadMore = async () => {
    // This Function To load More Data from APi due to API Limit Using MockData
    await getData(data.links.next)
      .then(resp => {
        if (resp.error) {
          alert(resp.error.message);
        } else {
          setFetchData(resp);
        }
      })
      .catch(err => alert(err));
  };

  const renderItem = ({item}) => <SectionItem {...props} item={item} />;

  const renderSectionHeader = ({section: {title}}) => (
    <Text style={styles.header}>{title}</Text>
  );

  const chooseDate = date => {
    setOpen(false);
    setDate(date);
    searchByStartDate(formatDate(date));
  };

  const searchByStartDate = async date => {
    await searchByDate(date)
      .then(result => {
        if (result.error) {
          alert(result.error.message);
        } else {
          setFetchData(result);
        }
      })
      .catch(err => alert(err));
  };

  return (
    <>
      {loading ? (
        <>
          <DatePicker
            modal
            mode={'date'}
            open={open}
            date={date}
            onConfirm={date => chooseDate(date)}
            onCancel={() => {
              setOpen(false);
            }}
          />

          <SectionList
            sections={listData} // Using MockData Due to APi Limit
            keyExtractor={(item, index) => item.id} // Assuming 'id' is a unique identifier
            renderItem={renderItem}
            renderSectionHeader={renderSectionHeader}
            onEndReachedThreshold={0.4}
            onEndReached={props.onEndReached}
            ListHeaderComponent={<SearchDate onPress={() => setOpen(true)} />}
          />
        </>
      ) : (
        <Loader testID="activityIndicator" />
      )}
    </>
  );
};

export default MySectionList;

const styles = StyleSheet.create({
  header: {
    fontWeight: 'bold',
    fontSize: 20,
    margin: 10,
  },
});

const SearchDate = props => (
  <TouchableOpacity onPress={props.onPress} style={{margin: 10}}>
    <Text style={{color: 'blue'}}>Search by Date</Text>
  </TouchableOpacity>
);
