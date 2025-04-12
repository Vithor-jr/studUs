import React, { useState, useRef, useEffect } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  TextInput,
  Platform,
  Modal,
  Animated
} from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';
import { styles } from '../login/styles';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import Ip from '../../values/ip';
import { useUserContext } from '../../context/UserContext';
import ActivityIndicator from '../Components/ActivityIndicator';
import ModalMessage from '../Home/Components/ModalMessage';

const valueIp = Ip();

export default function Login() {
  const [loading, setLoading] = useState(false);
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [error, setError] = useState('');
  const navigation = useNavigation();
  const { setUserData, userData} = useUserContext();
  const riseAnim = useRef(new Animated.Value(500)).current;

  useEffect(() => {
    Animated.timing(
      riseAnim,
      {
        toValue: 0, 
        duration: 300,
        useNativeDriver: true,
      }
    ).start();
  }, [riseAnim]);

  const handleLogin = async () => {
    const regexEmail = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;

    try {
      setLoading(true);
      setError('');
  
      if (!email || !senha) {
        setLoading(false);
        setError('Por favor, preencha todos os campos.');
        return; // Adicione um return para sair da função
      }
      if (!regexEmail.test(email)) {
        setLoading(false);
        setError('Preencha com um email válido.');
        return;
      }
      if (senha.length < 8) {
        setLoading(false);
        setError('A senha deve ter pelo menos 8 caracteres.');
        return;
      }
  
      const loginResponse = await axios.post(`http://${valueIp}/login`, {
        email: email,
        password: senha,
      });
  
      if (loginResponse.status === 200) {
        await AsyncStorage.setItem('access_token', loginResponse.data.access_token);
        const token = loginResponse.data.access_token;

        if(token){

          const userDataResponse = await axios.get(`https://${valueIp}/user/dados`, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });

          setUserData(userDataResponse.data);
          setLoading(false);
          navigation.reset({ index: 0, routes: [{ name: 'Menu' }] });
        }
      }
    } catch (error) {
      setLoading(false)
  
      if (error.response) {
        if (error.response.status === 401) {
          setError('Email ou senha incorretos.\nPor favor, tente novamente.');
        } else {
          setError('Erro no servidor. Por favor, aguarde e tente novamente.');
        }
      } else if (error.request) {
        setError('Sem resposta do servidor. Por favor, tente novamente.');
      } else {
        setError('Erro inesperado. Por favor, aguarde e tente novamente.');
      }
    }
  };
  

  return (
    <View style={styles.containerDad}>
      <Animated.View style={{...styles.container, transform: [{translateY: riseAnim}] }}>
        <KeyboardAwareScrollView behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
          <View style={styles.frame}>
            <View style={{ paddingHorizontal: 10, marginTop: '5%' }}>
              <Image style={{ width: 160, height: 140 }} source={require('../../../assets/images/login.png')} />
              <Text style={styles.title}>Login</Text>
              <Text style={styles.subtitle}>Entre na sua conta cadastrada.</Text>
            </View>
            {/* Criando Inputs */}
            <View style={{marginTop: 40, paddingStart:30, width:'70%'}}>
                <Text style={styles.textInput}>E-mail: </Text>
            </View>

            <TextInput
              style={styles.inputLogin}
              placeholder="xxxx123@gmail.com"
              keyboardType="email-address"
              placeholderTextColor="rgba(0, 0, 0, 0.4)"
              value={email}
              onChangeText={setEmail}
            />

            {/* Criando Inputs */}
            <View style={{marginTop: 30, paddingStart:30, width:'70%'}}>
                <Text style={styles.textInput}>Senha :</Text>
            </View>

            <View style={styles.inputLogin}>
              <TextInput
                style={{ width: '95%' }}
                placeholder="• • • • • • • •"
                placeholderTextColor="rgba(0, 0, 0, 0.4)"
                secureTextEntry={!isPasswordVisible}
                value={senha}
                onChangeText={setSenha}
              />

              <TouchableOpacity onPress={() => setIsPasswordVisible(!isPasswordVisible)}>
                <Icon name={isPasswordVisible ? 'eye' : 'eye-slash'} size={20} color="rgba(0, 0, 0, 0.5)" />
              </TouchableOpacity>
            </View>

            <View style={{ width: '70%', alignItems: 'flex-end' }}>
              <TouchableOpacity style={{ alignItems: 'center', marginTop: '5%', gap: 1 }} onPress={() => navigation.navigate('Request')}>
                <Text style={{ fontFamily: 'Varela-Round', fontSize: 13 }}>Esqueceu a senha?</Text>
                <View style={{ width: 110, height: 2, backgroundColor: '#FF7300', borderRadius: 10 }}></View>
              </TouchableOpacity>
            </View>

            {error && <ModalMessage text={error} onClose={()=>setError('')}/>}
            {loading && <ActivityIndicator message='Aguarde...'/>}

            <TouchableOpacity style={styles.buttonLogin} onPress={handleLogin}>
                <Text style={styles.textButton}>Entrar</Text>
            </TouchableOpacity>

            <View style={{ width: '51%', flexDirection: 'row', justifyContent: 'space-between' }}>
              <Text style={{ fontSize: 12, color: '#3B267B', fontFamily: 'Varela-Round' }}>Não possui uma conta?</Text>
              <TouchableOpacity style={{ alignItems: 'center' }} onPress={() => navigation.navigate('Create')}>
                <Text style={{ fontSize: 12, fontFamily: 'Varela-Round' }}>entre aqui</Text>
                <View style={{ width: 60, height: 1.5, backgroundColor: '#FF7300', borderRadius: 100 }}></View>
              </TouchableOpacity>
            </View>

      {/*
            <View style={{ alignItems: 'center', marginTop: 30 }}>
              <Text style={{ fontSize: 12, color: '#3B267B', fontFamily: 'Varela-Round' }}>Ou entre também</Text>
            </View>
      */}
          </View>
        </KeyboardAwareScrollView>
      </Animated.View>
    </View>
  );
}