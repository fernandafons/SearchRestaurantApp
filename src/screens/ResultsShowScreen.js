import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, Image } from 'react-native';
import yelp from '../api/yelp';

const ResultsShowScreen = ({ navigation }) => {
    const [result, setResult] = useState(null);
    const id = navigation.getParam('id');

    console.log(result)

    const getResult = async (id) => {
        const response = await yelp.get(`/${id}`);
        setResult(response.data);
    };
    useEffect(() => {
        getResult(id);
    }, []);

    if (!result) {
        return null;
    }

    return (
        <View style={{ flex: 1 }} >
            <Text style={styles.title} >{result.name}</Text>
            <Text style={styles.info} >Contact: </Text>
            <Text>{result.display_phone}</Text>
            <Text style={styles.info} >Adress: </Text>
            <Text>{result.location.address1}</Text>
            {result.is_closed === true ? <Text style={styles.info}>Open now</Text> : <Text style={styles.info}>Closed now</Text> }
            <FlatList 
                data={result.photos}
                keyExtractor={(photo) => photo}
                renderItem={({ item }) => {
                    return <Image style={styles.image} source={{ uri: item }} />
                }}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    image: {
        height: 300,
        width: 400,
        margin: 4,
        borderRadius: 5,
        alignSelf: 'center'
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold' 
    },
    info: {
       fontWeight: 'bold' 
    }
});

export default ResultsShowScreen;