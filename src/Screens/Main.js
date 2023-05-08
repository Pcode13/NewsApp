import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';

import SearchBar from '../components/SearchBar';
import BlockCard from '../components/Cards/BlockCard';
import Featurednews from '../components/Featurednews';
import SmallCard from '../components/Cards/SmallCard';
import BreakingNew from '../components/BreakingNew';

import data from '../../fakeData';

import Technews from '../components/Technews';
import FlatCard from '../components/Cards/FlatCard';

import PoliticalNews from '../components/PoliticalNews';
import EntertainmentNews from '../components/EntertainmentNews';
const Main = () => {
  const BreakingNews = data.filter(item => item.category === 'breaking-news');
  const TechNew = data.filter(item => item.category === 'tech');
  const PNews = data.filter(item => item.category === 'political');
  const ENews = data.filter(item => item.category === 'entertainment');

  const fakeDt = {
    id: '2',
    title: 'This is the title no two.',
    desc: 'Desc is the short form of description and this format is the actual same as our real database.',
    thumbnail: 'http://lorempixel.com/400/200/',
    category: 'breaking-news',
  };

  return (
    <View style={styles.container}>
      <View style={styles.search}>
        <SearchBar />
        <ScrollView style={{marginBottom:50}}>
          <Featurednews item={fakeDt} />
          <BreakingNew data={BreakingNews} />
          <PoliticalNews data={PNews}/>
          <Technews data={TechNew} />
          <EntertainmentNews data={ENews}/>
        </ScrollView>
      </View>
    </View>
  );
};

export default Main;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF8DE',
    
  },
  search: {
    marginHorizontal: 10,
    marginTop: 10,
  },
});
