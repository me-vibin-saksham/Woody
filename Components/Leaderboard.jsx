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


export const LeaderBoard = () => (
    <>
    <View style={{marginTop:25,marginHorizontal:25,marginBottom:20}}>
    <View style={{height:250,width:"100%"}}>
      <Image style={{height:40,width:50,position:"absolute",left:"43%",top:-21}} source={require("../assets/crown.png")}/>
      <Image style={{height:40,width:50,position:"absolute",left:"10%",top:48}} source={require("../assets/silverCrown.png")}/>
      <Image style={{height:45,width:45,position:"absolute",left:"77%",top:41}} source={require("../assets/romeCrown.png")}/>
  
      {/* bottom-2 */}
      <View style={{height:110,width:"100%",backgroundColor:"#212226",marginTop:140,borderRadius:20}}>
  
        <View style={{height:70,width:70,borderRadius:70,backgroundColor:"#009BD6",position:"absolute",left:27,top:-45,justifyContent:"center",alignItems:"center"}}>
        <Image style={{height:65,width:65,borderRadius:70,}} source={{uri:"https://img.etimg.com/thumb/width-1600,height-900,imgsize-574454,resizemode-75,msid-69702953/news/economy/agriculture/government-notifies-extension-of-pm-kisan-scheme-to-all-farmers.jpg"}}/>
        </View>
        <View style={{height:70,width:70,borderRadius:70,backgroundColor:"#04C258",position:"absolute",right:27,top:-45,justifyContent:"center",alignItems:"center"}}> 
        <Image style={{height:65,width:65,borderRadius:70,}} source={{uri:"https://i.pinimg.com/474x/86/ac/cb/86accbea31b719dea35425f4e260b2c3.jpg"}}/>
        </View>
  
        <View style={{flexDirection:"row",marginTop:26,marginHorizontal:15,justifyContent:"space-between"}}>
          <View style={{height:74,width:95}} >
            <Text style={{color:"#eee",fontSize:14,textAlign:"center",marginTop:4}}>Matthew</Text>
            <Text style={{color:"#009BD6",fontSize:19,textAlign:"center"}}>1874</Text>
            <Text style={{color:"#eee",fontSize:11,textAlign:"center",marginTop:6}}>@matphuddu</Text>
          </View>
          <View style={{height:74,width:95}} >
            <Text style={{color:"#eee",fontSize:14,textAlign:"center",marginTop:4}}>Matthew</Text>
            <Text style={{color:"#04C258",fontSize:19,textAlign:"center"}}>1874</Text>
            <Text style={{color:"#eee",fontSize:11,textAlign:"center",marginTop:4}}>@matphuddu</Text>
          </View>
  
        </View>
  
      </View>
  
      {/* middle-group */}
      <View style={{height:170,width:"35%",backgroundColor:"#1C1F28",position:"absolute",bottom:0,borderTopLeftRadius:25,borderTopRightRadius:25,left:"32.5%"}}>
        <View style={{height:85,width:85,borderRadius:60,backgroundColor:"#FDCE00",top:-50,left:20,justifyContent:"center",alignItems:"center"}}>
          <Image style={{height:80,width:80,borderRadius:60,}} source={{uri:"https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/9f3f9bd9-0673-4276-bb34-71ece2a5820e/dfmgvtx-8b73761b-0527-4d12-b86c-92a04631a8c9.png/v1/fill/w_1920,h_1920,q_80,strp/darth_vader__ai_art__by_3d1viner_dfmgvtx-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTkyMCIsInBhdGgiOiJcL2ZcLzlmM2Y5YmQ5LTA2NzMtNDI3Ni1iYjM0LTcxZWNlMmE1ODIwZVwvZGZtZ3Z0eC04YjczNzYxYi0wNTI3LTRkMTItYjg2Yy05MmEwNDYzMWE4YzkucG5nIiwid2lkdGgiOiI8PTE5MjAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.HpHZ9AQtqpRbJO3cAL-BUBWNaN4OhElCGiaH7QKJo8M"}}/>
        </View>
  
        <View style={{height:125,width:"85%",position:"absolute",bottom:10,left:10,justifyContent:"center",alignItems:"center",}}>
          <Text style={{fontSize:18,color:"#eee",marginTop:28}}>Singhal</Text>
          <Text style={{fontSize:21,color:"#FDCE00",marginTop:2}}>3085</Text>
          <Text style={{fontSize:12,color:"#eee",marginTop:6}}>@singhal</Text>
        </View>
      </View>
  
      
  
    </View>
  
      
  
    </View>
    </>
  )
  