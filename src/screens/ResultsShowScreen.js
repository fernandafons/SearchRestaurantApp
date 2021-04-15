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
            <View style={styles.line}></View>
            {result.is_closed === true ? <Text style={styles.openInfo}>Open now </Text> : <Text style={styles.openInfo}>Closed now </Text> }
            <View style={styles.container}>
            <Text style={styles.infoTitle} >Contact </Text>
            <Text style={styles.info} >{result.display_phone}</Text>
            </View>
            <View style={styles.container}>
            <Text style={styles.infoTitle} >Adress </Text>
            <Text style={styles.info} >{result.location.address1}</Text>
            </View>
            <View style={styles.line}></View>
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
        height: 250,
        width: 350,
        margin: 10,
        borderRadius: 5,
        alignSelf: 'center'
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        paddingLeft: 20,
        paddingTop: 15,
        paddingEnd: 10,
        color: "#303D38"
    },
    line: {
        borderBottomColor: '#daae36',
        borderBottomWidth: 3,
        marginLeft: 20,
        marginRight: 20,
        padding: 3
    },
    infoTitle: {
        marginLeft: 20,
        fontWeight: 'bold',
        color: "#303D38",
        fontSize: 16
    },
    info: {
        marginLeft: 20, 
    },
    openInfo: {
        textAlign: 'right',
        fontWeight: 'bold',
        color: "#303D38",
        marginRight: 25,
        paddingTop: 15
    },
    container: {
        backgroundColor: "#d6d6d6",
        margin: 8,
        borderRadius: 10,
        padding: 5

        // position: 'absolute'
    }
});

export default ResultsShowScreen;