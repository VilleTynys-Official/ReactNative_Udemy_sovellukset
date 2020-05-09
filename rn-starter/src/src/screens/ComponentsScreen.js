import React, { Component } from 'react';
import {Text, StyleSheet, View} from 'react-native';


const ComponentsScreen = () => {

    const greeting =["this is a greeting made", " by using a list"]
    const greeting_element = <Text>this is a greeting that is made with an JSX element</Text>;
    const name = "Ville";

        return (
            <View>
                <Text styles={styles.text}>Getting started with React Native!!</Text>
                {/* <Text styles={styles.text}>Getting started with React Native!!</Text>
                <Text>{greeting}</Text>
                {greeting_element}
                <Text styles={styles.subheaderStyle}>Hi {name}, this greeting is using subheaderStyle</Text> */}
            </View>
            );
};  



//styles are not working because of <view>??
const styles = StyleSheet.create({
    text:{
        fontSize: 45,
        color: "blue"
    },
    subheaderStyle:{
        fontSize: 20
    }

  });


export default ComponentsScreen;