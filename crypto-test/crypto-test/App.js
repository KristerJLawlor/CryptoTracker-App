import React, { useState, useEffect } from 'react';

import { View,
         StyleSheet,
         Platform,
         StatusBar,
         FlatList,
         Button,
         Alert,
         TouchableOpacity
} from 'react-native'; 

import { TextInput } from 'react-native-paper';

import { Provider } from 'react-redux';
import Store from './src/redux/Store';

import { Head } from './src/components/Head';
import { CardContainer } from './src/components/CardContainer';
import { Card } from './src/components/Card';
import { cryptos } from './cryptos';

export default function App() {
  const [cryptolist, setCryptolist] = useState( [] );
  const [addcoin, setAddcoin] = useState( '' );
  const [data, setData] = useState( [] );

  // Set the dummy list for visual purposes
  useEffect (() => {
    //setCryptolist(cryptos)
    },[]);
  
  const url = 'https://data.messari.io/api/v1/assets';

  // When the app loads, execute this
  useEffect(() => {
    LoadData()
  }, []);

  // Fetch the cryptocurrency data from the url
  const LoadData = async () => { 
    
    try {
      const result = await fetch(url);
      const json = await result.json();
      
      // Set the data state with the data portion of the json object
      setData(json.data)
    } catch (e) {
      console.warn(e);
    }
    
  };

  // Define how we will display the information
  const renderItem = ({item}) => 
    <TouchableOpacity onLongPress={handleDelete}>
      <Card
        name={item.name}
        symbol={item.symbol}
        price_usd={item.metrics.market_data.price_usd.toFixed(2)} 
        percent_change_usd_last_24_hours={item.metrics.market_data.percent_change_usd_last_24_hours.toFixed(2)}  
      />
    </TouchableOpacity>
      
    // Handle the text value entered in to the text input
    const handleConfirm = () => {
          //for each, addcoin to lowercase
        const filteredList = data.filter(
            e =>
            e.name.toLowerCase() === addcoin.toLowerCase() ||
            e.symbol.toLowerCase() === addcoin.toLowerCase(),
        );
          //check if array is > 0
        if (filteredList.length > 0) {
          const checkCryptolist = cryptolist.filter(
            e =>
              e.name.toLowerCase() === addcoin.toLowerCase() ||
              e.symbol.toLowerCase() === addcoin.toLowerCase(),
        );
          //if asset is already in the array
          if (checkCryptolist.length > 0) {
            alert('Asset already added');
          } 
          //if asset is not in array yet, concatenate it to the existing array
          else {
            const newAsset = cryptolist.concat(filteredList[0]);
            setCryptolist(newAsset);  
          } 
        } else {
          alert('No asset found');
        }    
  };

  const handleDelete = () => {}

  // Update the Text input value
  const onEditCoin = (value) => 
  {
    setAddcoin(value);
    console.log(addcoin);
  }

  return (

        <View style={styles.container}>
          <>
            <Head />
            <FlatList style={styles.list}
                      data={cryptolist}
                      renderItem={renderItem}
                      keyExtractor={(item, index) => index.toString()}
            />
            <View style={styles.add}>
              <TextInput label= {"Add a Cryptocurrency"}
                         style={{justifyContent: 'center'}}
                         onChangeText={onEditCoin} 
                         autoCapitalize={'characters'} 
                         value={addcoin}
              />
              <Button title="Confirm" 
                      color="#123456" 
                      style={{justifyContent: 'center'}}
                      onPress={handleConfirm}
              />
            </View>
          </>
        </View>

    );
  }

  const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    backgroundColor: '#123456',
    borderBottomEndRadius: 800/2,
    borderTopLeftRadius: 800/2
  },
  list: {
    backgroundColor: 'transparent',
    flex: 1,
    padding: 10,
    width: '100%',
  }
  ,
  add: {
    flexWidth: 1,
    width:'100%' ,
    //flexDirection: 'row',
    justifyContent: 'center',
    paddingBottom: 5,
    backgroundColor: '#000'
  }
});