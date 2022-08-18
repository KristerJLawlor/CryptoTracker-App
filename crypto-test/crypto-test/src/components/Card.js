import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

import { Images } from './CryptoIcon';


export const Card = ({ symbol, name, price_usd, percent_change_usd_last_24_hours }) => {
    return (

        <View style={styles.container}>
          <>
              <Image
                  style={styles.image}
                  source={{uri : Images[symbol] }}
              />
            <View style={styles.coin}>
                <Text>
                  {name}
                </Text>
              
                <Text>
                  {symbol}
                </Text>
            </View>
            <View style={styles.data}>
                <Text>
                 $ {price_usd}
                </Text>
                <Text>
                  {percent_change_usd_last_24_hours} %
                </Text>
            </View>
          </>
        </View>

    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        borderColor: '#323232',
        borderWidth: 5,
        padding: 10,
        marginVertical: 5,
        backgroundColor: '#fff',
        flexDirection: 'row',
        width: '100%',
        borderRadius: 50/2,
        elevation: 9,
        shadowColor: '#222222',
        shadowOffset: {width: -3, height: 3},
    },
    image : {
        height: 40,
        width: 40,
    },
    coin : {
      flex: 1,
        backgroundColor: 'transparent',
        paddingLeft: 20,
    },
    data : {
      flex: 1,
        backgroundColor: 'transparent',
        paddingLeft: 40,
        textAlign: 'right',
    }
})
