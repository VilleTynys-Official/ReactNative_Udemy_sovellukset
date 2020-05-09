import React, {useReducer} from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

//This CounterScreen is using reducer for managing the states.



//define the reducer
const reducer = (state, action) => {
    //state === {count: number}
    //action === {type: "increase_number" || "decrease_number", payload: 1 || -1"}

    switch (action.type){

        case 'increase_number':
            //console.log(state);
            return {...state, count: state.count + action.payload }; //adds a new count value to state['count']
        
        case 'decrease_number':
            //console.log(state);
            return {...state, count: state.count + action.payload };

        default:
            console.log('default value of reducer');
            return state;

    }
    
};







const CounterScreen = () =>{
    //setup to track a state with useState
    const [state, dispatch] = useReducer(reducer, {count: 0});


    return(
    <View>
        <Button title= 'Increase'
        onPress={() => {
            dispatch({ type: 'increase_number', payload: 1})
            }}
        />
        <Button title= 'Decrease'
        onPress={() => {
            dispatch({type: 'decrease_number', payload: -1})
            }}
        />
        <Text>Current count:{state.count}</Text>
    </View>
    )


};



const styles= StyleSheet.create({});

export default CounterScreen;