import React, {useState} from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';


//NOTES: 
//TextInput has some automatic spelling checks etc. that differ between iOS&A (and we want to turn off)
//"the whole issue is about giving textdata to the child (TextInput)"
//"shove the state into the child!!!!!!!"
//updating state always renders the component


const TextScreen = () =>{
    const [password, setPassword]= useState('');

    return (
    <View>
        <Text>Enter password (min 5 letters):</Text>
        <TextInput 
            style= {styles.input}
            autoCapitalize="none"
            autoCorrect={false}
            value={password}
            onChangeText={(newValue) => setPassword(newValue)}
        />
        
        <Text>{password.length>4? 'Salasana on nyt riittävän pitkä' : `Vielä tarvitaan ${5-password.length} kirjainta lisää`}</Text>
    </View>
    )

}


const styles = StyleSheet.create({
    input: {
        margin: 15,
        borderColor: 'black',
        borderWidth: 1
    }



});

export default TextScreen;