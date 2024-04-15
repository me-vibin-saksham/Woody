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

export default function Clan_Beta() {

    const [filteredClans,setFilteredClans] = useState([]);

    const userSearched = (text) => {
        const temp = Clans_list.filter(clan => clan.clanname.toLowerCase().includes(text.toLowerCase()))
        setFilteredClans(temp)
    }

  return (
    <>
    <View style={{marginTop:10, alignItems:"center"}}>
    {/* Search-Bar */}
      <View style={{flexDirection:"row",height:55,width:"90%",backgroundColor:"#1E2237",borderRadius:20,alignItems:"center",justifyContent:"space-between"}}>
        <TextInput placeholderTextColor={"grey"} style={{fontSize:17, color:"#eee",marginLeft:25}} placeholder='Search Clan' onChangeText={(t)=>userSearched(t) }/>
        <View style={{height:37, width:37, borderRadius:30, backgroundColor:"#191B1E",justifyContent:"center",alignItems:"center",marginRight:8}}>
        <AntDesign name='search1' color={"#eee"} size={21} />
        </View>
      </View>
    </View>

    <ScrollView showsVerticalScrollIndicator={false}>
    <Text style={{fontSize:18, color:"#eee", fontWeight:600, marginTop:17, marginLeft:25}}>Recommended Clans</Text>


    <View style={{marginHorizontal:25}}>

        
        {Clans_list.map((data,index)=>(
        <View key={index}>
        <Clanbase image_url={data.image_url} num={index+1} title={data.clanname} points={data.points}/>
        </View>
        ))}

        {filteredClans.length !=0 && filteredClans.length <8 &&(
        <View style={{height:filteredClans.length*100+10, width:"100%", backgroundColor:"#191E1B", position:"absolute", borderRadius:20, top:-30 }}>
        {filteredClans.map((data,index)=>(
        <View style={{marginHorizontal:20}} key={index}>
        <Clanbase image_url={data.image_url} num={index+1} title={data.clanname} points={data.points}/>
        </View>
        ))}

        </View>)}

    </View>
    </ScrollView>

    </>
  )
}


const Clanbase = ({title, image_url, num, points}) => (
    <View style={{marginTop:20,height:75,width:"100%", backgroundColor:"#276B3A", borderRadius:20}}>
            <View style={{marginHorizontal:20, flexDirection:"row",justifyContent:"space-between",}}>
                <View style={{flexDirection:"row"}}>
                <Text style={{fontSize:18, color:"#eee", fontWeight:600, marginTop:23}}>{num}</Text>
                <Image style={{height:47,width:47,borderRadius:60, marginTop:14,marginHorizontal:12}} source={{uri:image_url}}/>
                <Text style={{fontSize:18, color:"#eee", marginTop:23}}>{title}</Text>
                </View>
                <Text style={{fontSize:18, color:"#eee", marginTop:23}}>{points} pts.</Text>
            </View>
            
        </View>


)


const Clans_list=[{
    image_url:"https://i.pinimg.com/originals/0b/a6/41/0ba641b979377a45bc68f6f9d8e32ed1.png",
    clanname:"alex_dino",
    points:"1554",
},{
    image_url:"https://i.pinimg.com/474x/28/28/3a/28283ae1aba9295b8e2ddf63d3411027.jpg",
    clanname:"splendi",
    points:"855",
},{
    image_url:"https://i.pinimg.com/474x/bb/cf/03/bbcf033d7fc1964b4c2118cf55ecb200.jpg",
    clanname:"knukle",
    points:"504",
},{
    image_url:"https://i.pinimg.com/474x/0b/62/32/0b62322c0904e9c0acff6fb4a4c9c7fd.jpg",
    clanname:"nuke",
    points:"1845",
},{
    image_url:"https://cdna.artstation.com/p/assets/images/images/025/453/430/large/erik-wassong-isometric-townhall.jpg?1585840447",
    clanname:"seawarrier",
    points:"969",
},{
    image_url:"https://cdnb.artstation.com/p/assets/images/images/025/453/437/large/erik-wassong-isometric-townhallundex.jpg?1585840452",
    clanname:"kames",
    points:"3142",
},{
    image_url:"https://i.pinimg.com/474x/b9/46/56/b9465638cc2de14383fc013ec7b99c62.jpg",
    clanname:"danger",
    points:"742",
},{
    image_url:"https://static.wikia.nocookie.net/clashofclans/images/9/98/Town_Hall13-1.png/revision/latest?cb:20200831024426",
    clanname:"frems",
    points:"752",
},


]