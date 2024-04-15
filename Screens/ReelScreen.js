import { View, Text, Image, TouchableOpacity, TextInput, ScrollView } from 'react-native'
import React, { useEffect, useLayoutEffect, useState } from 'react'
import {useNavigation} from '@react-navigation/native'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Ionicons from 'react-native-vector-icons/Ionicons'
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons'
import EvilIcons from 'react-native-vector-icons/EvilIcons'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import { Post_Feed } from '../Components/Post_Feed'
import {Divider} from "react-native-elements"
import BottomTabs from '../Components/BottomTabs'

export default function ReelScreen() {

    const navigation = useNavigation();

    useLayoutEffect(()=>{
        navigation.setOptions({
            headerShown:false,
        })
    });

  return (

    <>
    <View style={{backgroundColor:"#141414",flex:1}}>
    <View style={{marginTop:300}}>
      <Text style={{color:"#eee", fontSize:25, fontWeight:600, marginLeft:25}}>Your Rewards</Text>

      <View style={{justifyContent:"center",alignItems:"center", marginTop:40}}>
        <View style={{borderWidth:2, borderColor:"#EEE", height:60, width:300, justifyContent:"center", alignItems:"center", }}>
          <Text style={{color:"#eee"}}>Nothing to show currently.</Text>
        </View>

      </View>
    </View>
    </View>
    
<Divider width={-0.1} style={{backgroundColor:"#1F2124"}}/>
<BottomTabs activetab={"Reel"} />
    </>
  )
}