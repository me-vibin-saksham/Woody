import { View, Text, Image, TouchableOpacity, TextInput, ScrollView } from 'react-native'
import React, { useEffect, useLayoutEffect, useState } from 'react'
import {useNavigation} from '@react-navigation/native'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Ionicons from 'react-native-vector-icons/Ionicons'
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons'
import EvilIcons from 'react-native-vector-icons/EvilIcons'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import { Post_Feed } from '../Components/Post_Feed'

export default function Wars_Beta() {
  return (
    <View style={{marginTop:10}}>
        <View style={{marginHorizontal:25}}>
            <Text style={{fontSize:22, color:"#eee", fontWeight:600, marginBottom:6}}>Ongoing War</Text>

            <View style={{flexDirection:"row", justifyContent:"space-between"}}>
                <View>
                    <Image style={{height:130, width:130, borderRadius:80, marginTop:15}} source={{uri:"https://icon-library.com/images/sustainability-icon-png/sustainability-icon-png-29.jpg"}}/>
                    <Text style={{fontWeight:600, fontSize:20, color:"#eee", textAlign:"center",marginTop:8}}>Clan 1</Text>
                </View>

                <Text style={{color:"#EEE", fontSize:26, marginTop:75}}> V/S</Text>

                <View>
                    <Image style={{height:130, width:130, borderRadius:80, marginTop:15}} source={{uri:"https://assets.sdg-sse.org/wp-content/themes/sdg-sse/img/sdg-sse-background.png"}}/>
                    <Text style={{fontWeight:600, fontSize:20, color:"#eee", textAlign:"center",marginTop:8}}>Clan 2</Text>
                </View>
            </View>


            <View style={{height:280, width:"100%", backgroundColor:"#262626", borderRadius:25, marginTop:20, }}>
                <View style={{marginHorizontal:35, marginVertical:35}}>
                    <View style={{flexDirection:"row", justifyContent:"space-between"}}>
                        <Text style={{fontSize:24, fontWeight:500, color:"#eee" }}>1457</Text>
                        <Text style={{fontSize:24, fontWeight:700, color:"#eee" }}>Points</Text>
                        <Text style={{fontSize:24, fontWeight:500, color:"#eee" }}>1357</Text>
                    </View>

                    <View style={{flexDirection:"row", justifyContent:"space-between", marginTop:20}}>
                        <Text style={{fontSize:24, fontWeight:500, color:"#eee" }}>32</Text>
                        <Text style={{fontSize:24, fontWeight:700, color:"#eee" }}>Posts</Text>
                        <Text style={{fontSize:24, fontWeight:500, color:"#eee" }}>29</Text>
                    </View>

                    <View style={{flexDirection:"row", justifyContent:"space-between", marginTop:20}}>
                        <Text style={{fontSize:24, fontWeight:500, color:"#eee" }}>7</Text>
                        <Text style={{fontSize:24, fontWeight:700, color:"#eee" }}>Streak</Text>
                        <Text style={{fontSize:24, fontWeight:500, color:"#eee" }}>10</Text>
                    </View>

                    <View style={{flexDirection:"row", justifyContent:"space-between", marginTop:20}}>
                        <Text style={{fontSize:24, fontWeight:500, color:"#eee" }}>Dino</Text>
                        <Text style={{fontSize:24, fontWeight:700, color:"#eee" }}>MVP</Text>
                        <Text style={{fontSize:24, fontWeight:500, color:"#eee" }}>Pluto</Text>
                    </View>
                </View>

            </View>

        </View>
      
    </View>
  )
}