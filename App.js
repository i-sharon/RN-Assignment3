import 'react-native-gesture-handler';
import React from 'react';
import { View,Text, SafeAreaView,TextInput,Image } from "react-native";
import { NavigationContainer ,getFocusedRouteNameFromRoute} from '@react-navigation/native';
import SignInScreen from './src/views/SignInScreen';
import { createStackNavigator } from '@react-navigation/stack';
import SignUpScreen from './src/views/SignUpScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Home from './src/views/Home';
import COLORS from './src/consts/colors';

const Tab = createBottomTabNavigator();

function getHeaderTitle(route){
  const routeName=getFocusedRouteNameFromRoute(route)??'Home';
  
  switch(routeName){
    case 'Home':
      return 'Home';
      case 'Feed':
      return 'Feed';
      case 'Settings':
      return 'Settings';
  }
}

function TabNav({navigation,route}){

  React.useLayoutEffect(() => {
    navigation.setOptions({ headerTitle: getHeaderTitle(route) });
  }, [navigation, route]);

return(
  
  <Tab.Navigator  screenOptions={({ route }) => ({
    
    tabBarIcon: ({ color, size }) => {
      let iconName;

      if (route.name === 'Home') {
       {iconName='ios-home'
      }
      } else if (route.name === 'Settings') {
        iconName = 'ios-settings'
      }
     else if(route.name=='Feed')
      {
        iconName='logo-rss'
      }

      // You can return any component that you like here!
      return <Ionicons name={iconName} size={size} color={color} />;
    },
  })}
  >
    <Tab.Screen name="Home" component={Home}/>
    <Tab.Screen name="Feed" component={Feed} />
    <Tab.Screen name="Settings" component={Settings} />
    
  </Tab.Navigator>
 
);
}

function Feed() {
  return (
    <SafeAreaView
    style={{paddingHorizontal: 20, flex: 1, backgroundColor: COLORS.dark}}>
   <View style={{marginTop: 10}}>
          <Text style={{fontSize: 20, color: COLORS.white}}>
          Pellentesque id nibh tortor id aliquet lectus proin nibh. Tempus quam pellentesque nec nam aliquam sem.
           Habitant morbi tristique senectus et netus et malesuada fames. Est velit egestas dui id ornare arcu odio ut sem. 
           Vel orci porta non pulvinar. Quam viverra orci sagittis eu volutpat odio facilisis.
            Aliquam eleifend mi in nulla posuere sollicitudin. Purus non enim praesent elementum facilisis leo vel. Morbi leo urna molestie at elementum eu facilisis. Viverra orci sagittis eu volutpat odio facilisis mauris sit amet. Venenatis lectus magna fringilla urna. Cras pulvinar mattis nunc sed. Elit at imperdiet dui accumsan sit amet nulla facilisi.

Felis eget velit aliquet sagittis id consectetur purus ut faucibus.
 Morbi tincidunt ornare massa eget. Quisque non tellus orci ac auctor augue mauris. 
 Purus viverra accumsan in nisl nisi scelerisque eu ultrices vitae.
          </Text>
          </View>
    </SafeAreaView>
  );
}

function Settings() {
  return (
    <SafeAreaView
      style={{paddingHorizontal: 20, flex: 1, backgroundColor: COLORS.dark}}>
        <View style={{marginTop: 10}}>
          <Text style={{fontSize: 20, color: COLORS.white}}>
          Posuere lorem ipsum dolor sit amet consectetur. Suscipit tellus mauris a diam maecenas. 
          Vitae turpis massa sed elementum tempus egestas sed. Scelerisque viverra mauris in aliquam sem fringilla. 
          Purus gravida quis blandit turpis cursus in hac habitasse. Ridiculus mus mauris vitae ultricies leo integer.

A iaculis at erat pellentesque adipiscing. Sagittis aliquam malesuada bibendum arcu. Nunc sed blandit libero volutpat sed cras. Urna porttitor rhoncus dolor purus non enim praesent elementum. Lacus laoreet non curabitur gravida. In nibh mauris cursus mattis molestie. Faucibus a pellentesque sit amet. 
Libero volutpat sed cras ornare arcu. Aliquet bibendum enim facilisis gravida. Sed velit dignissim sodales ut.
          </Text>
          </View>
    </SafeAreaView>
    
  );
}

const Stack = createStackNavigator();

const App= () => {

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{header: ()=>null}}>
    <Stack.Screen name="SignIn" component={SignInScreen} />
    <Stack.Screen name="SignUp" component={SignUpScreen} />
    <Stack.Screen name="TabNav" component={TabNav}/>
  </Stack.Navigator></NavigationContainer>
  );
};

export default App;



