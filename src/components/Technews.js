import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import HorozonalList from './Lists/HorozonalList';

const Technews = ({data}) => {
  return <HorozonalList title="Tech  news" data={data} />;
};

export default Technews
