import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import HorozonalList from './Lists/HorozonalList';

const BreakingNew = ({data}) => {
  return <HorozonalList title="Breaking  news" data={data} />;
};

export default BreakingNew;
