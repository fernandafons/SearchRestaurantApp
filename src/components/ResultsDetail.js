import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';
import { Entypo } from '@expo/vector-icons';

const ResultsDetail = ({ result }) => {
    return (
        <View style={styles.container} >
            <Image style={styles.image} source={result.image_url ? { uri: result.image_url } : null} />
            <Text style={styles.name} >{result.name}{"\n"}
            {result.rating}<Entypo name="star" size={14} color="#303D38" />{"\n"}
            {result.review_count} Reviews</Text>
        </View>
    );
};

const styles=StyleSheet.create({
    container: {
        marginLeft: 15,
        borderRadius: 20,
        marginBottom: 5,
        flexDirection: 'row'
    },
    image: {
        width: 80,
        height: 80,
        borderRadius: 50,
        margin: 12
    },
    name: {
        fontWeight: 'bold',
        alignSelf: 'flex-start',
        color: "#303D38",
        margin: 10
    },
    text: {
        alignSelf: 'flex-start',
        color: "#7D7474",
    }
});

export default ResultsDetail;