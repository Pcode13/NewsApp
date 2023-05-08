import {View, StyleSheet, Image, TouchableWithoutFeedback} from 'react-native';
import React from 'react';
import Title from '../Common/Title';
import Subtitle from '../Common/Subtitle';
const BlockCard = ({style, imageStyle, onPress, item}) => {
  const {thumbnail, title, desc} = item;

  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={[styles.container, style]}>
        <Image source={{uri: thumbnail}} style={[styles.image, imageStyle]} />
        <View style={styles.contentContainer}>
          <Title>{title}</Title>
          <Subtitle>{desc}</Subtitle>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default BlockCard;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 300,
    borderRadius: 8,
    overflow: 'hidden',
    backgroundColor: '#fff',
  },
  image: {
    width: '100%',
    height: 200,
  },
  contentContainer: {
    padding: 5,
  },
});
