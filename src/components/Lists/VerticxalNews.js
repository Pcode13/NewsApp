import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import FlatCard from '../Cards/FlatCard';
import Title from '../Common/Title';


const VerticxalNews = ({title, data}) => {
  return (
    <View>
      {title && <Title>{title}</Title>}
      <View style={styles.container}>
        {data.map(item => (
          <FlatCard item={item} key={item.id} />
        ))}
      </View>
    </View>
  );
};

export default VerticxalNews;

const styles = StyleSheet.create({
  container: {
    marginVertical: 15,
  },
});
