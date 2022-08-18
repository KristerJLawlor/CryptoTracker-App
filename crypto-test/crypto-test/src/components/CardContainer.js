import React from 'react';
import { StyleSheet, Text, View, FlatList, Image } from 'react-native';

import { colors } from '../utils/colors';
import Card from './Card';

export const CardContainer = ({ cryptolist }) => 
{
    const renderItem = ({item}) => <Card>item.name</Card>
    return (
      <View styles={styles.container}>
      <Text> Flatlist TOP </Text>
        <FlatList style={{flex: 1, width: '100%', marginTop: 200}}
       // <>
        data={cryptolist}
        renderItem={renderItem}
       // </>
        />
        <Text> Flatlist BOTTOM </Text>
      </View>
    );
  }

const styles = StyleSheet.create({
  container: { 
    backgroundColor: '#FFF',
    flex: 1,
    padding: 20,
  }
});



