import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import SearchBar from '../components/SearchBar';
import useResults from '../hooks/useResults';
import ResultsList from '../components/ResultsList';

const SearchScreen = () => {
    const [term, setTerm] = useState('');
    const [searchApi, results, errorMessage] = useResults();

    const filterResultsByPrice = (price) => {
        return results.filter(result => {
            return result.price === price;
        });
    };

    return (
        <View style={styles.background}>
        <SearchBar 
            term={term} 
            onTermChange={setTerm}
            onTermSubmit={() => searchApi(term)} 
        />
        {errorMessage ? <Text>{errorMessage}</Text> : null}
        <ScrollView>
        <ResultsList 
            style={styles.container}
            results={filterResultsByPrice('$')} 
            title="Cost Effective"
        />
        <ResultsList 
            results={filterResultsByPrice('$$')} 
            title="Bit Pricier"
        />
        <ResultsList 
            results={filterResultsByPrice('$$$')} 
            title="Big Spender"
        />
        </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    background: {
        backgroundColor: "#EEEEEE"
    },
    container: {
        backgroundColor: "#f1d8d8",
        position: 'absolute'
    }
});

export default SearchScreen;