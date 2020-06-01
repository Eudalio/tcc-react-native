import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Image,
  ActivityIndicator,
} from 'react-native';

import axios from 'axios';

function ProfileScreen() {
  const [inputText, setInputText] = useState('eudalio');
  const [usuario, setUsuario] = useState({});
  const [loading, setLoading] = useState(false);

  async function loadUser() {
    setLoading(true);

    const response = await axios.get(
      `https://api.github.com/users/${inputText}`,
    );

    setUsuario(response.data);
    setLoading(false);
  }

  function clearUser() {
    setUsuario({});
    setInputText('');
    setLoading(false);
  }

  return (
    <View style={styles.container}>
      <View style={styles.form}>
        <TextInput
          style={styles.textInput}
          value={inputText}
          onChangeText={text => setInputText(text)}
          placeholder="Digite um usuário"
        />
        <TouchableOpacity onPress={() => loadUser()}>
          <Text style={styles.btnBuscar}>Buscar</Text>
        </TouchableOpacity>
      </View>
      {loading ? (
        <ActivityIndicator size="large" />
      ) : (
        <View style={styles.dataUser}>
          <Image source={{uri: usuario.avatar_url}} style={styles.imageUser} />
          <Text style={styles.text}>{usuario.name}</Text>
          <Text style={[styles.text, {textAlign: 'center'}]}>
            {usuario.bio}
          </Text>
          <Text style={styles.text}>{usuario.location}</Text>
          <View style={styles.detailUser}>
            <Text style={styles.detailUserItem}>Repos</Text>
            <Text style={styles.detailUserItem}>Followers</Text>
            <Text style={[styles.detailUserItem, {borderRightWidth: 0}]}>
              Following
            </Text>
          </View>
          <View style={styles.detailUser}>
            <Text style={[styles.detailUserItem, {borderRightWidth: 0}]}>
              {usuario.public_repos}
            </Text>
            <Text style={[styles.detailUserItem, {borderRightWidth: 0}]}>
              {usuario.followers}
            </Text>
            <Text style={[styles.detailUserItem, {borderRightWidth: 0}]}>
              {usuario.following}
            </Text>
          </View>
        </View>
      )}
      {inputText.length > 0 ? (
        <View style={styles.newFetch}>
          <TouchableOpacity onPress={() => clearUser()}>
            <Text style={styles.btnClear}>Novo usuário</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <Text />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
  },
  form: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  textInput: {
    borderRadius: 4,
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 15,
    marginTop: 10,
    marginBottom: 10,
    marginRight: 10,
    fontSize: 16,
    backgroundColor: '#ddd',
    width: '75%',
    flexWrap: 'wrap',
  },
  btnBuscar: {
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
  },
  btnClear: {
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
  },
  dataUser: {
    flexDirection: 'column',
    marginTop: 20,
    alignItems: 'center',
  },
  imageUser: {
    width: 150,
    height: 150,
    borderRadius: 100,
    marginBottom: 10,
  },
  text: {
    marginBottom: 10,
  },
  detailUser: {
    flexDirection: 'row',
    backgroundColor: '#F42B2B',
  },
  detailUserItem: {
    width: 80,
    height: 30,
    textAlignVertical: 'center',
    textAlign: 'center',
    borderRightWidth: 1,
    borderColor: '#ddd',
    color: '#fff',
  },
  newFetch: {},
});

export default ProfileScreen;
