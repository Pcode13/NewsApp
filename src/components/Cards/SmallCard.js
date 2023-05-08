import {Dimensions, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import BlockCard from './BlockCard';

const {width} = Dimensions.get('window');

const SmallCard = ({item}) => {
  return (
    <BlockCard item={item} style={styles.container} imageStyle={styles.image} />
  );
};

export default SmallCard;

const styles = StyleSheet.create({
  container: {
    width: width / 2,
    marginRight: 15,
    height: 200,
  },
  image: {
    height: 100,
  },
});
