import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  Modal,
} from 'react-native';

import {RNCamera} from 'react-native-camera';

const Camera = ({isVisible, onChangePhoto, onCloseCamera}) => {
  const [camera, setCamera] = useState();
  const [typeCamera, setTypeCamera] = useState(RNCamera.Constants.Type.back);

  const onTakePicture = async () => {
    try {
      const {uri} = await camera.takePictureAsync({
        quality: 0.5,
        forceUpOrientation: true,
        fixOrientation: true,
        skipProcessing: true,
      });
      onChangePhoto(uri);
    } catch (error) {
      Alert.alert('Erro', 'Houve um erro ao tirar a foto.');
    }
  };

  const swapCamera = () => {
    if (typeCamera === RNCamera.Constants.Type.back) {
      setTypeCamera(RNCamera.Constants.Type.front);
    } else {
      setTypeCamera(RNCamera.Constants.Type.back);
    }
  };

  return (
    <Modal animationType="slide" transparent={false} visible={isVisible}>
      <RNCamera
        ref={ref => setCamera(ref)}
        style={{flex: 1}}
        type={typeCamera}
        autoFocus={RNCamera.Constants.AutoFocus.on}
        flashMode={RNCamera.Constants.FlashMode.off}
        maxZoom={0.5}
        androidCameraPermissionOptions={{
          title: 'Permissão para usar a câmera',
          message: 'Precisamos da sua permissão para usar a câmera.',
          buttonPositive: 'Ok',
          buttonNegative: 'Cancelar',
        }}
        captureAudio={false}>
        <View style={styles.buttonTakePicture}>
          <Text style={{color: '#fff'}} onPress={onTakePicture}>
            OK
          </Text>
        </View>
        <View style={styles.buttonTypeCamera}>
          <Text style={{color: '#fff'}} onPress={swapCamera}>
            Trocar
          </Text>
        </View>
        <View style={styles.buttonCloseCamera}>
          <Text style={{color: '#fff'}} onPress={onCloseCamera}>
            X
          </Text>
        </View>
      </RNCamera>
    </Modal>
  );
};

function CameraScreen() {
  const [isCameraVisible, setIsCameraVisible] = useState(false);
  const [photo, setPhoto] = useState(null);

  const onChangePhoto = newPhoto => {
    setPhoto(newPhoto);
    setIsCameraVisible(false);
  };

  const onCloseCamera = () => {
    setIsCameraVisible(false);
  };

  return (
    <View style={styles.container}>
      <View style={styles.buttons}>
        <TouchableOpacity
          onPress={() => setIsCameraVisible(true)}
          style={styles.btnOpenCamera}>
          <Text style={styles.text}>Abrir Câmera</Text>
        </TouchableOpacity>
        {/* <TouchableOpacity
          onPress={() => setPhoto(null)}
          style={styles.btnOpenGaleria}>
          <Text style={styles.text}>Abrir Galeria</Text>
        </TouchableOpacity> */}
      </View>
      <View>
        <Image style={{width: '100%', height: '70%'}} source={{uri: photo}} />
      </View>
      <Camera
        isVisible={isCameraVisible}
        onChangePhoto={onChangePhoto}
        onCloseCamera={onCloseCamera}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
  },
  buttons: {
    flexDirection: 'row',
  },
  btnOpenCamera: {
    width: '100%',
    color: '#fff',
    marginRight: 10,
  },
  btnOpenGaleria: {
    width: '48%',
    color: '#fff',
    marginLeft: 8,
  },
  text: {
    backgroundColor: '#F42B2B',
    color: '#fff',
    borderRadius: 5,
    borderColor: '#CCC',
    borderWidth: 1,
    padding: 15,
    marginTop: 10,
    marginBottom: 10,
    fontSize: 16,
    alignContent: 'center',
    textAlign: 'center',
  },
  preview: {
    flex: 1,
    alignItems: 'center',
    alignContent: 'center',
  },
  buttonTakePicture: {
    fontSize: 20,
    flex: 0,
    alignSelf: 'center',
    position: 'absolute',
    bottom: 20,
    borderRadius: 100,
    backgroundColor: '#F42B2B',
    padding: 20,
  },
  buttonTypeCamera: {
    fontSize: 20,
    flex: 0,
    alignSelf: 'center',
    position: 'absolute',
    bottom: 20,
    right: 40,
    borderRadius: 100,
    backgroundColor: '#F42B2B',
    padding: 20,
  },
  buttonCloseCamera: {
    flex: 0,
    position: 'absolute',
    top: 20,
    right: 20,
    fontSize: 20,
    borderRadius: 100,
    backgroundColor: '#F42B2B',
    padding: 8,
  },
});

export default CameraScreen;
