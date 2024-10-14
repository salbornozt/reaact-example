import { Text, View, StyleSheet } from "react-native";
import { Image } from "expo-image";
import { Link } from 'expo-router';
import Button from '@/components/Button';

const PlaceholderImage = require('@/assets/images/background-image.png');
// Every file inside app directory is either a layout file or a route file. 

import ImageViewer from "@/components/ImageViewer";


export default function Index() {
  return (
    <View
      style = {styles.container}
    >
      <View style={styles.imageContainer}>
      <ImageViewer imgSource={PlaceholderImage} />
      </View>
      <View style={styles.footerContainer}>
        <Button label="Choose a photo" />
        <Button label="Use this photo" theme={'primary'}/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create(
  {
    container: {
      flex: 1,
      backgroundColor: '#25292e',
      alignItems: 'center',
      justifyContent: 'center',
    },
    text: {
      color: '#fff',
    }
    ,
  imageContainer: {
    flex: 1, // This particular setting means that the component should take up all available space
  },
    button: {
      fontSize: 20,
      textDecorationLine : 'underline',
      color : '#fff'
    },
    image: {
     width: 320,
     height: 440,
     borderRadius: 18,
   },
  footerContainer: {
    flex: 1 / 3,
    alignItems: 'center',
  },
  }
);
