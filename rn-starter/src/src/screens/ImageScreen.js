import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import ImageDetail from '../components/ImageDetail';


const ImageScreen = ()  => {
    return(
     <View>
         <ImageDetail title='Forest'
                    imagesource = {require('../../../assets/forest.jpg')}
                    imagescore= {9}></ImageDetail>
         <ImageDetail title='Beach'
                    imagesource = {require('../../../assets/beach.jpg')}
                    imagescore= {5}></ImageDetail>
         <ImageDetail title='Mountain'
                    imagesource = {require('../../../assets/mountain.jpg')}
                    imagescore= {7}></ImageDetail>
     </View>   
    
    );
}



export default ImageScreen;