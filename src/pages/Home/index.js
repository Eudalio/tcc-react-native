import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';

import RNImage from '../../assets/react-native-logo.png';
import FlutterImage from '../../assets/flutter-icon.png';

function HomeScreen({navigation}) {
  return (
    <View style={styles.container}>
      <View style={styles.images_row}>
        <Image source={FlutterImage} style={styles.image} />
        <Image source={RNImage} style={styles.image} />
      </View>
      <View style={styles.images_caption}>
        <Text style={styles.text_caption}>Flutter</Text>
        <Text style={styles.text_caption}>React Native</Text>
      </View>
      <View style={styles.buttons_col}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Usuário')}>
          <Text style={styles.text}>Consultar API - GitHub</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Câmera')}>
          <Text style={styles.text}>Tirar uma foto</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Localização')}>
          <Text style={styles.text}>Localização</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  images_row: {
    flexDirection: 'row',
    marginTop: 20,
    alignItems: 'flex-end',
  },
  images_caption: {
    flexDirection: 'row',
    marginTop: 5,
    marginBottom: 50,
  },
  buttons_col: {
    flexDirection: 'column',
  },
  image: {
    width: 150,
    height: 180,
    marginHorizontal: 20,
    backgroundColor: '#f7f7f7',
  },
  button: {
    backgroundColor: '#F42B2B',
    marginBottom: 30,
    width: 300,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 7,
  },
  text: {
    color: '#fff',
    fontSize: 18,
  },
  text_caption: {
    color: '#000',
    fontWeight: 'bold',
    fontSize: 15,
    marginHorizontal: 20,
    width: 150,
    textAlign: 'center',
  },
});

export default HomeScreen;
