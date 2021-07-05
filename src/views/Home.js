import React  from 'react';
import { View,Text, SafeAreaView,TextInput,Image } from "react-native";
import Icon from 'react-native-vector-icons/MaterialIcons';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';
import COLORS from '../consts/colors';
import STYLES from '../styles';

const Home = ({navigation}) => {
    return(
    
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
            Welcome
          </Text>

          </View>
          <View style={{marginTop: 10}}>
          <Text style={{fontSize: 20, color: COLORS.white}}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor 
          in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
           Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </Text>
          </View>
          </ScrollView>
          </SafeAreaView>
    );
  }

  export default Home;

  