import 'react-native-gesture-handler';
import React from 'react';
import {SafeAreaView, View, Text, TextInput, Image} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import COLORS from '../consts/colors';
import STYLES from '../styles';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';
import { Colors } from 'react-native/Libraries/NewAppScreen';

const SignUpScreen = ({navigation}) => {
  return (
    <SafeAreaView
      style={{paddingHorizontal: 20, flex: 1, backgroundColor: COLORS.dark}}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{flexDirection: 'row', marginTop: 40}}>
          <Text style={{fontWeight: 'bold', fontSize: 22, color: COLORS.orange}}>
            SHOP
          </Text>
          <Text
            style={{fontWeight: 'bold', fontSize: 22, color: COLORS.secondary}}>
            EASY
          </Text>
        </View>
        <View style={{marginTop: 40}}>
          <Text style={{fontSize: 27, fontWeight: 'bold', color: COLORS.white}}>
            Welcome Back,
          </Text>
          <Text style={{fontSize: 19, fontWeight: 'bold', color: COLORS.light}}>
            Sign up to continue
          </Text>
        </View>
        <View style={{marginTop: 20}}>
          <View style={STYLES.inputContainer}>
            <Icon
              name="person-outline"
              color={COLORS.light}
              size={20}
              style={STYLES.inputIcon}
            />
            <TextInput placeholder="Name" style={STYLES.input}placeholderTextColor={Colors.light} />
          </View>
          <View style={STYLES.inputContainer}>
            <Icon
              name="mail-outline"
              color={COLORS.light}
              size={20}
              style={STYLES.inputIcon}
            />
            <TextInput placeholder="Email" style={STYLES.input} placeholderTextColor={Colors.light}  />
          </View>
          <View style={STYLES.inputContainer}>
            <Icon
              name="lock-outline"
              color={COLORS.light}
              size={20}
              style={STYLES.inputIcon}
            />
            <TextInput
            placeholderTextColor={Colors.light}
              placeholder="Password"
              style={STYLES.input}
              secureTextEntry
            />
          </View>
          <TouchableOpacity onPress={() => navigation.navigate('TabNav')}>
          <View style={STYLES.btnPrimary}>
            <Text style={{color:COLORS.white, fontWeight: 'bold', fontSize: 18}}>
              Sign Up
            </Text>
          </View>
          </TouchableOpacity>
          <View
            style={{
              marginVertical: 20,
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <View style={STYLES.line}></View>
            <Text style={{marginHorizontal: 5, fontWeight: 'bold',color: COLORS.secondary}}>OR</Text>
            <View style={STYLES.line}></View>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <View style={STYLES.btnSecondary}>
              <Text style={{fontWeight: 'bold', fontSize: 16,color: COLORS.white}}>
                Sign up with
              </Text>
              <Image
                style={STYLES.btnImage}
                source={require('../assests/facebook.png')}
              />
            </View>
            <View style={{width: 10}}></View>
            <View style={STYLES.btnSecondary}>
              <Text style={{fontWeight: 'bold', fontSize: 16,color: COLORS.white}}>
                Sign up with
              </Text>
              <Image
                style={STYLES.btnImage}
                source={require('../assests/google.png')}
              />
            </View>
          </View>
        </View>

        <View
          style={{
            flexDirection: 'row',
            alignItems: 'flex-end',
            justifyContent: 'center',
            marginTop: 40,
            marginBottom: 20,
          }}>
          <Text style={{color: COLORS.light, fontWeight: 'bold'}}>
            Already have an account ?
          </Text>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Text style={{color: COLORS.orange, fontWeight: 'bold'}}>
              Sign in
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignUpScreen;
