import React, {useState} from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import ColorCounter from '../components/ColorCounter';

//Kerroin jolla säädetään värien muutosnopeutta
const COLOR_INCREMENT = 30; 

//statet väreille
const SquareScreen_basic = () =>{
    const [red, setRed] = useState(0);
    const [blue, setBlue] = useState(0);
    const [green, setGreen] = useState(0);



    //funktio joka varmistaa et värit ei mene nollaan.
    const setColor =(color, change) => {
        switch (color) {
            case 'red':
                red + change > 255 || red + change < 0 ? null: setRed(red+change);      //   <onks eka true> ? <älä tee mitään> : <muuten tee tämä>
                return;

            case 'blue':
                blue + change > 255 || blue + change < 0 ? null: setBlue(blue+change);
                return;

            case 'green':
                green + change > 255 || green + change < 0 ? null: setGreen(green+change);
                return;         
            
            default:
                return;
        } 
    };

    return(
    <View>
        <ColorCounter 
            onIncrease ={() => setColor('red', COLOR_INCREMENT)}
            onDecrease ={() => setColor('red', -1 * COLOR_INCREMENT)}
            color ="Red" />

        <ColorCounter 
            onIncrease ={() => setBlue(blue +COLOR_INCREMENT)}
            onDecrease ={() => setBlue(blue -COLOR_INCREMENT)}
            color ="Blue" />

        <ColorCounter 
            onIncrease ={() => setGreen(green +COLOR_INCREMENT)}
            onDecrease ={() => setGreen(green -COLOR_INCREMENT)}
            color ="Green" />

        <View
            style= {{
                height: 150,
                width: 150,
                backgroundColor: `rgb(${red}, ${blue}, ${green})`
                }}>
        </View>
    </View>


    )
};

const styles= StyleSheet.create({});

export default SquareScreen_basic;