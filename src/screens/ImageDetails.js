import React from 'react';
import { Text, StyleSheet, View, FlatList, Button } from 'react-native';
import Cards from '../components/card';
const ImageDetails = () => {
    const imagesList = [
        {
            url: "https://media.istockphoto.com/id/1403500817/photo/the-craggies-in-the-blue-ridge-mountains.jpg?b=1&s=170667a&w=0&k=20&c=-UWLqQI8oIx2-sOdWemeJ4Hy1hGZi1UPy-qcivJXgyM=",
            description: "Forest1"
        },
        {
            url: "https://media.istockphoto.com/id/1403500817/photo/the-craggies-in-the-blue-ridge-mountains.jpg?b=1&s=170667a&w=0&k=20&c=-UWLqQI8oIx2-sOdWemeJ4Hy1hGZi1UPy-qcivJXgyM=",
            description: "Forest2"
        },
        {
            url: "https://media.istockphoto.com/id/1403500817/photo/the-craggies-in-the-blue-ridge-mountains.jpg?b=1&s=170667a&w=0&k=20&c=-UWLqQI8oIx2-sOdWemeJ4Hy1hGZi1UPy-qcivJXgyM=",
            description: "Forest3"
        },
    {
            url: "https://media.istockphoto.com/id/1403500817/photo/the-craggies-in-the-blue-ridge-mountains.jpg?b=1&s=170667a&w=0&k=20&c=-UWLqQI8oIx2-sOdWemeJ4Hy1hGZi1UPy-qcivJXgyM=",
            description: "Forest4"
        }
    ]
    return (
        <View>
            <Text>Forests List</Text>
            <Cards url={imagesList[0].url} description={imagesList[0].description} />
        </View>

    );

};

const styles = StyleSheet.create({
    text: {
        color: 'black',
        fontSize: 30
    }
});

export default ImageDetails;
