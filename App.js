import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import HomeScreen from './Screens/HomeScreen';
import { useNavigation } from '@react-navigation/native';
import ReelScreen from './Screens/ReelScreen';
import ClanScreen from './Screens/ClanScreen';
import ProfileScreen from './Screens/ProfileScreen';
import AddPost from './Screens/AddPost';
import PostDeemo from './Screens/PostDeemo';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Home' component={HomeScreen}/>
        <Stack.Screen name='Reel' component={ReelScreen}/>
        <Stack.Screen name='Clan' component={ClanScreen}/>
        <Stack.Screen name='Profile' component={ProfileScreen}/>
        <Stack.Screen name='AddPost' component={AddPost}/>
        <Stack.Screen name='PostDemo' component={PostDeemo}/>
      </Stack.Navigator>
    </NavigationContainer>
    
  )
}

export default App
