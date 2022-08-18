import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { colors } from '../utils/colors';

export const Head = () => {

  const photo = "https://cdn.pixabay.com/photo/2016/05/13/12/19/face-1389832_960_720.jpg";
  
    return (
      <View style={styles.header}>
        <Text style={styles.headerTitle}>CryptoTracker Pro</Text>
        <Image style={styles.image} source={{uri: photo}} />
      </View>
    );
  }

const styles = StyleSheet.create({
  header: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    height: 90,
    elevation: 5,
    backgroundColor: colors.darkBlue,
    shadowColor: '#999',
    shadowOffset: {width: 2, height: 2},
  },
  headerTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    fontStyle: 'italic',
    marginTop: 10,
    marginLeft: 30,
    color: colors.white,
    textShadowColor: '#555',
    textShadowOffset: {width: -3, height: 2},
    elevation: 5
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 50/2,
    marginLeft: 40,
  }
});
