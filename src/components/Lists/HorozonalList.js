import {FlatList, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Title from '../Common/Title';
import SmallCard from '../Cards/SmallCard';

const HorozonalList = ({title, data}) => {
  return (
    <>
      <Title size={20}>{title}</Title>
      <View style={{marginVertical: 16}}>
        <FlatList
          data={data}
          keyExtractor={item => item.id}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          renderItem={({item}) => <SmallCard item={item} />}
        />
      </View>
    </>
  );
};

export default HorozonalList;

const styles = StyleSheet.create({});
