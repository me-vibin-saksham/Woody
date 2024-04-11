import { View, Text, Image, TouchableOpacity, TextInput, ScrollView } from 'react-native'
import React, { useEffect, useLayoutEffect, useState } from 'react'
import {useNavigation} from '@react-navigation/native'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Ionicons from 'react-native-vector-icons/Ionicons'
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons'
import EvilIcons from 'react-native-vector-icons/EvilIcons'
import FontAwesome from 'react-native-vector-icons/FontAwesome'

import { demoFollowingData } from '../DataBase/demoPostFeed'
import { demoDiscoverData } from '../DataBase/demoPostFeed'



export const Post_Feed = ({title,likes,comments,description,profile_image_url,post_image_url,index,updateLikeCount}) => {
  
    const [postIsLiked, setPostIsLiked] = useState(false)
  
    const handleLike = () => {
      setPostIsLiked((prev) => !prev);
      updateLikeCount(index);
    };
  
    return(
    <View style={{marginTop:20}}>
      <View style={{height:390,width:"100%",backgroundColor:"#1F2124",borderRadius:25}}>
        {/* Top-Row */}
        <View style={{marginVertical:20,marginHorizontal:25,flexDirection:"row",justifyContent:"space-between"}}>
          <View style={{flexDirection:"row"}}>
          <View style={{height:32,width:32,borderRadius:32,backgroundColor:"white"}}>
            <Image style={{height:32,width:32,borderRadius:32,}} source={{uri: profile_image_url}}/>
          </View>
          <Text style={{marginTop:6,color:"#eee",fontSize:15,marginLeft:7}}>{title}</Text>
          </View>
          <SimpleLineIcons style={{marginTop:4}} name='options-vertical' color={"#eee"} size={25}/>
  
        </View>
  
        {/* Image-Section */}
        <View style={{marginTop:10,marginHorizontal:20}}>
          <View style={{height:219,width:"100%",borderRadius:20,backgroundColor:"white"}}>
            <Image style={{height:219,width:"100%",borderRadius:20,}} source={{uri:post_image_url}}/>
          </View>
  
        </View>
  
        {/* Description-section */}
        <View style={{height:130,width:"100%",backgroundColor:"rgba(31, 33, 36, 0.81)",position:"absolute",top:260,borderBottomRightRadius:25,borderBottomLeftRadius:25}}>
          <View style={{marginHorizontal:40,marginVertical:10}}>
            <View style={{flexDirection:"row"}}>
            <View style={{marginRight:18}}>
  
            <TouchableOpacity onPress={handleLike}>
            <AntDesign style={{marginTop:2}} name='heart' size={25} color={postIsLiked === true ? "#FE6056" : "white"} />
            </TouchableOpacity>
            <Text style={{textAlign:"center",color:"#eee",marginTop:3,fontWeight:300,fontSize:12}}>{likes}</Text>
            </View>
            <View style={{marginRight:18}}>
              <FontAwesome name='commenting-o' color={"white"} size={27} />
            <Text style={{textAlign:"center",color:"#eee",marginTop:3,fontWeight:300,fontSize:12}}>{comments}</Text>
            </View>
            <View style={{}}>
              
            <FontAwesome style={{marginTop:3}} name='share-square-o' color={"white"} size={27} />
            </View>
            
            </View>
  
          </View>
  
          
  
        </View>
  
        <View style={{marginHorizontal:40,marginTop:18}}>
        <Text style={{ color: "white" }}>{description.length > 100 ? description.slice(0, 100) + "..." : description}</Text>
          </View>
  
        <View style={{position:"absolute",bottom:15,right:25}}>
          <Text style={{color:"#FDCE00",fontSize:16}}>...more</Text>
        </View>
  
      </View>
  
    </View>
  
  )
  }