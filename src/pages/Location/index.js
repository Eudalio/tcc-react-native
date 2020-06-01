import React, {useState, useEffect} from 'react';
import {View, StyleSheet, ActivityIndicator, Alert} from 'react-native';

import MapView, {Marker} from 'react-native-maps';

import Geolocation from '@react-native-community/geolocation';

function LocationScreen() {
  const [loading, setLoading] = useState(true);
  const [coordinates, setCoordinates] = useState({});

  useEffect(() => {
    Geolocation.getCurrentPosition(
      ({coords}) => {
        setCoordinates(coords);
        setLoading(false);
      },
      (error) => {
        console.log(error);
        Alert.alert('Houve um erro ao pegar a latitude e longitude.');
      },
      // {enableHighAccuracy: false, maximumAge: 20000, timeout: 10000},
    );
  }, []);

  return (
    <View style={styles.container}>
      {loading ? (
        <ActivityIndicator size="large" color="#fff" />
      ) : (
        <>
          <MapView
            initialRegion={{
              latitude: coordinates.latitude,
              longitude: coordinates.longitude,
              latitudeDelta: 0.0068,
              longitudeDelta: 0.0068,
            }}
            style={styles.map}>
            <Marker
              coordinate={coordinates}
              title={'Minha posição'}
              description={'Testando a minha posição no mapa'}
            />
          </MapView>
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFill,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#7159c1',
  },

  map: {
    ...StyleSheet.absoluteFillObject,
  },
});

export default LocationScreen;
