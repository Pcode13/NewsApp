import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import BlockCard from './Cards/BlockCard';

const Featurednews = ({item}) => {
  return <BlockCard item={item} style={styles.card} />;
};

export default Featurednews;

const styles = StyleSheet.create({
  card: {
    marginVertical: 15,
  },
});
