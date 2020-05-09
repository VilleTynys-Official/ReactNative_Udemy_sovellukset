import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

/*
PERUS PALIKAT
content, padding, border, margin

FLEXBOX PARENT PROPERTIES:
alignItems, flexDirection, justifyContent (esim. tasainen space-between)


FLEXBOX CHILD PROPERTIES:
flex (hakee kaiken tilan), AlignSelf(overwrites parent element flex)

POSITION:
"ignoring siblings.. eli ei välitä muista childreneistä"

position, top, left, right, bottom
...absoluteFillObject (täyttää koko ruudun childrenillä)

*/

const BoxScreen = () =>{
    return (
    <View style={styles.parentStyle}>
        <View style={styles.viewStyleOne}></View>
        <View style={styles.viewStyleTwo}></View>
        <View style={styles.viewStyleThree}></View>
    </View>
    )

}


const styles = StyleSheet.create({
        parentStyle:{
            borderWidth: 1,
            borderColor: 'black',

            
            
            //justifyContent: 'center',
            //flexDirection: 'row'
            //alignItems: 'flex-end'
            //flexDirection: 'row',  
            
    },        
    
        viewStyleOne:{
            borderWidth: 3,
            borderColor: 'black',
            height: 100,
            width: 100,
            alignSelf: 'flex-start',
            backgroundColor: 'blue'
            
            
            //justifyContent: 'center',
            //flexDirection: 'row'
            //alignItems: 'flex-end'
            //flexDirection: 'row',  
            
        },
        viewStyleTwo:{
            borderWidth: 3,
            borderColor: 'black',
            height: 100,
            width: 100,
            alignSelf: 'center',
            backgroundColor: 'gray'
            //justifyContent: 'center',
            //flexDirection: 'row'
            //alignItems: 'flex-end'
            //flexDirection: 'row',  
            
        },  
        viewStyleThree:{
            borderWidth: 3,
            borderColor: 'black',
            height: 100,
            width: 100,
            alignSelf: 'flex-end',
            bottom: 200,
            backgroundColor: 'azure'
            
            //justifyContent: 'center',
            //flexDirection: 'row'
            //alignItems: 'flex-end'
            //flexDirection: 'row',  
            
        }
 
});






// TESTING VERSION
//
//const BoxScreen = () =>{
//     return (
//     <View style={styles.viewStyle}>
//         <Text style= {styles.textOneStyle}>child 1</Text>
//         <Text style= {styles.textTwoStyle}>child 2</Text>
//         <Text style= {styles.textThreeStyle}>child 3</Text>
//     </View>
//     )

// }


// const styles = StyleSheet.create({
//     viewStyle:{
//         borderWidth: 3,
//         borderColor: 'black',
//         height: 200,
//         //justifyContent: 'center',
//         //flexDirection: 'row'
//         //alignItems: 'flex-end'
//         //flexDirection: 'row',  
        
//     },
//     textOneStyle: {
//         borderWidth: 3,
//         borderColor: 'red',  
//         //flex: 0.80
//     },
//     textTwoStyle: {
//         borderWidth: 3,
//         borderColor: 'red',
//         position: 'absolute',
//         ...StyleSheet.absoluteFillObject        //can be used to fill up the parent
    
//         //or same thing manually:
//         // top:10,
//         // left:10,
//         // right: 10,
//         // bottom: 10


//         //position: 'absolute' //ignoring siblings
//         //alignSelf: 'stretch'
//         //flex: 0.20
//     },
//     textThreeStyle: {
//         borderWidth: 3,
//         borderColor: 'red',
//         //flex: 0.20
//     }

// });

export default BoxScreen;