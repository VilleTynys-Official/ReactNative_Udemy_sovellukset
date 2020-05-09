import React, {useState} from 'react';
import {View, Text, StyleSheet, Button, FlatList} from 'react-native';


const ColorScreen = () =>{
    const [colors, setColors] =useState([]);
    console.log(colors);


    return(
    <View>
        <Button title='Add a color'
            onPress = {() =>{
            setColors([...colors, randomRgb()]);        //copy everything in colors to a new [] and add randomRbg
        }}       
        />

        <FlatList 
                    keyExtractor = {item => item}
                    data = {colors}
                    renderItem={({item}) =>{        //flatlist has multiple elements and we want item
                        return(
                        <View
                            style= {{ height:100, width: 100, backgroundColor: item }}
                        />
                        );
                    }}
                    
        
        />
    </View>
    )
};



const randomRgb = () => {
    const red = Math.floor(Math.random()*255);
    const green = Math.floor(Math.random()*255);
    const blue = Math.floor(Math.random()*255);
    console.log(red, green, blue);
    return `rgb(${red}, ${green}, ${blue})`         //use backticks!! ``
};




const styles= StyleSheet.create({});
export default ColorScreen;