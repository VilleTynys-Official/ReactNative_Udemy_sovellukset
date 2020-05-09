import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

/*
props:
imagesource, title, imagescore
*/

const ImageDetail = (props) => {
    console.log(props);
    return(
        <View>
            <Image source={props.imagesource}/>
            <Text>{props.title}</Text>
            <Text>The score of this image is: {props.imagescore}</Text>
        </View>
    );

};

const styles =StyleSheet.create({});

export default ImageDetail;