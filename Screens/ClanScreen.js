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
import { LeaderBoard } from '../Components/Leaderboard'
import Clan_Beta from '../Components/Clan_Beta'
import Wars_Beta from '../Components/Wars_Beta'



export default function ClanScreen() {


  const [selectedOption,setSelectedOption] = useState("Clan")
    const navigation = useNavigation();

    useLayoutEffect(()=>{
        navigation.setOptions({
            headerShown:false,
        })
    });

  return (

    <>
    <View style={{backgroundColor:"#141414",flex:1}}>
    <View style={{marginTop:45,}}>

      <View style={{flexDirection:"row",marginHorizontal:20,justifyContent:"space-between",marginBottom:5}}>
        <AntDesign style={{marginTop:3}} name="right" color={"#eee"} size={28} />
        <Text style={{fontSize:25,color:"#eee",fontWeight:500}}>Clans Assemble</Text>
        <Ionicons style={{marginTop:3}} name="options-outline" color={"#eee"} size={31} />
      </View>


      {/* Clan-LeaderBoard-Wars */}
      <View style={{marginHorizontal:20,marginBottom:10}}>
      <View style={{height:67,width:"100%",backgroundColor:"#1F2124",marginTop:12,borderRadius:25}}>
        <View style={{flexDirection:"row",marginHorizontal:10}}>
        <Clan_Leaderboard_Wars text={"Clan"} SelectedOption={selectedOption} SetSelectedOption={setSelectedOption} />
        <Clan_Leaderboard_Wars text={'Leaderboard'} SelectedOption={selectedOption} SetSelectedOption={setSelectedOption} />
        <Clan_Leaderboard_Wars text={'Wars'} SelectedOption={selectedOption} SetSelectedOption={setSelectedOption} />
        </View>
      </View>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>


      {/* Leaderboard */}
      {
        selectedOption === "Leaderboard" && (
          <>
          <LeaderBoard />

          <View style={{marginTop:17}}>
            <View style={{height:RunnerUp_list.length * 105,width:"100%",backgroundColor:"#212226",borderRadius:30,}}>

            {RunnerUp_list.map((data,index)=>(
            <View key={index}>
            <RunnerUp image_url={data.image_url} title={data.title} username={data.username} points={data.points} direction={data.direction} />
            </View>
            ))}
              
            </View>
            
          </View>

          </>
        )
      }


      {/* clan */}
      {
        selectedOption === "Clan" && (
          <Clan_Beta />
        )
      }


      {/* Wars */}
      {
        selectedOption === "Wars" && (
          <Wars_Beta />
        )
      }



      <View style={{marginBottom:150}}></View>
      </ScrollView>
    </View>
    </View>
    
<Divider width={-0.1} style={{backgroundColor:"#1F2124"}}/>
<BottomTabs activetab={"Clan"} />
    </>
  )
}



const RunnerUp = ({image_url,direction,title,username,points}) => (
  <View style={{width:"100%",height:100}}>
            <View style={{flexDirection:"row",justifyContent:"space-between",marginTop:25,marginHorizontal:29,}}>
              <View style={{flexDirection:"row"}}>
                <Image style={{height:55,width:55,borderRadius:40}}  source={{uri:image_url}} />
                <View style={{marginHorizontal:15,marginTop:3}}>
                  <Text style={{color:"#eee",fontSize:17,fontWeight:500}}>{title}</Text>
                  <Text style={{color:"#eee",fontWeight:300,fontSize:12}}>@{username}</Text>
                </View>
              </View>
              <View>
                <Text style={{color:"#eee",fontSize:17,fontWeight:600,marginTop:3}}>{points} pts.</Text>
                <AntDesign style={{marginLeft:34}} name={direction === "Down" ? "caretdown" : "caretup"} size={15} color={direction === "Down" ? "#D82953" : "#00D95F"} />
              </View>
              </View>
              <View style={{height:1,position:"absolute",width:"85%",backgroundColor:"#eee",top:95,left:30}}></View>
              </View>
)



const Clan_Leaderboard_Wars = ({text,SelectedOption,SetSelectedOption}) => (

  <View style={{height:50,width:"33%",backgroundColor:SelectedOption === text ? "#FDCE00" : "#1F2124",borderRadius:25,justifyContent:"center",alignItems:"center",marginTop:8}}>
    <TouchableOpacity onPress={()=>{
    SetSelectedOption(text)
  }}>
    <Text style={{fontSize:16,fontWeight:600}}>{text}</Text>
    </TouchableOpacity>
  </View>

  
)



const RunnerUp_list=[{
  image_url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRlSA6OeLhxDwO5_TymyV7YAUdvrr3xSDTgxEwoCIpFA&s",
  title:"alex",
  username:"alex_dino",
  points:"42",
  direction:"Up"
},{
 image_url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcBEnUaLwuHfu9t2ORaKHvocYZ6LkP91AljQd6AWJX4r10G3BPbMc1xkh4KJA6v2ccXB0&usqp=CAU",
  title:"tom",
  username:"tom_rock",
  points:"10",
  direction:"Down" 
},{
 image_url:"https://www.shutterstock.com/image-photo/profile-picture-smiling-successful-young-260nw-2040223583.jpg",
  title:"aditya",
  username:"rom_aditya",
  points:"88",
  direction:"up" 
},{
 image_url:"https://sm.askmen.com/askmen_in/article/f/facebook-p/facebook-profile-picture-affects-chances-of-gettin_fr3n.jpg",
  title:"priyanshu",
  username:"prada01",
  points:"22",
  direction:"Down" 
},{
 image_url:"https://www.shutterstock.com/image-photo/profile-picture-young-handsome-man-260nw-1795243888.jpg",
  title:"ayushkaran",
  username:"ayush01",
  points:"52",
  direction:"Down" 
},{
 image_url:"https://atd-blog.s3.us-east-2.amazonaws.com/wp-content/uploads/2022/04/16142821/cool-profile-pictures-for-girls-9.webp",
  title:"tanmay",
  username:"tams90",
  points:"47",
  direction:"Down" 
}


]