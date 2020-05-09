import React, {useReducer} from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import ColorCounter from '../components/ColorCounter';

const COLOR_INCREMENT = 30; 

//defining reducer function (has it's own state. action object tells how to change state).
const reducer = (state, action) => {
    //state === {red: number, green: number, blue; number}
    //action === {type: 'change_Red' || 'change_green' || 'change_blue', payload :   15|| -15}

    switch (action.type){
        case 'change_red':
            //never going to do e.g. state.red = state.red -15;
            console.log(state);
            
            if (state.red + action.payload>255 || state.red + action.payload<0){                    //if lausekkeella..
                return state;
            } else {
                return {...state, red: state.red + action.payload};   
            }
                    
                    

        case 'change_green':
            return state.green + action.payload >255 || state.green + action.payload <0             //Tertiary statementeilla
                    ? state
                    : {...state, green: state.green + action.payload};

        case 'change_blue':
            return state.blue + action.payload >255 || state.blue + action.payload <0
                    ? state
                    : {...state, blue: state.blue + action.payload};
    

        default:
            return state;
    }

}





const SquareScreen_reducer = () => {
    //reducer call. dispatch on funktio joka ajaa reducerin. 
    const [state, dispatch] = useReducer(reducer, { red:0, green:0, blue:0 }); //annetaan myös aloitusarvot
    const {red, green, blue} = state; //dekonstruoidaan background coloria varten..

    return(
    <View>
        <ColorCounter 
            onIncrease ={() => dispatch({ type: 'change_red', payload: COLOR_INCREMENT})}
            onDecrease ={() => dispatch({ type: 'change_red', payload: -1 * COLOR_INCREMENT})}
            color ="Red" />

        <ColorCounter 
            onIncrease ={() => dispatch({ type: 'change_green', payload: COLOR_INCREMENT})}
            onDecrease ={() => dispatch({ type: 'change_green', payload: -1 * COLOR_INCREMENT})}
            color ="Green" />

        <ColorCounter 
            onIncrease ={() => dispatch({ type: 'change_blue', payload: COLOR_INCREMENT})}
            onDecrease ={() => dispatch({ type: 'change_blue', payload: -1 * COLOR_INCREMENT})}
            color ="Blue" />

        <View
            style= {{
                height: 150,
                width: 150,
                backgroundColor: `rgb(${red}, ${green}, ${blue})`
                }}>
        </View>
    </View>
    )
};

const styles= StyleSheet.create({});

export default SquareScreen_reducer;