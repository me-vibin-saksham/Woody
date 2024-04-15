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

import { demoFollowingData } from '../DataBase/demoPostFeed'
import { demoDiscoverData } from '../DataBase/demoPostFeed'
import BottomTabs from '../Components/BottomTabs'

export default function HomeScreen() {

  const [searchIspressed,setSearchIsPressed] = useState(false);
  const [isSelected, setIsSelected] = useState("Following")
  const [followingData, setFollowingData] = useState(demoFollowingData);
  const [discoverData, setDiscoverData] = useState(demoDiscoverData);

  const updateLikeCount = (index, postIsLiked) => {
    const newData = isSelected === 'Following' ? [...followingData] : [...discoverData];
    newData[index].likes += postIsLiked ? -1 : 1; 
    if (isSelected === 'Following') {
      setFollowingData(newData);
    } else {
      setDiscoverData(newData);
    }
    
  };
  
  
  

  

    const navigation = useNavigation();

    useLayoutEffect(()=>{
        navigation.setOptions({
            headerShown:false,
        })
    });

    




  return (
    <>
    <View style={{backgroundColor:"#141414",flex:1}}>
      <View style={{marginTop:45,marginHorizontal:20,}}>

        {/* Top-bar */}
        <View style={{flexDirection:"row",justifyContent:"space-between",marginBottom:20}}>
          <View style={{flexDirection:"row"}}>
          <View style={{height:38,width:38,backgroundColor:"#191B1E",borderRadius:30,}}>
            <Image style={{height:38,width:38,borderRadius:30,}} source={{uri: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/9f3f9bd9-0673-4276-bb34-71ece2a5820e/dfmgvtx-8b73761b-0527-4d12-b86c-92a04631a8c9.png/v1/fill/w_1920,h_1920,q_80,strp/darth_vader__ai_art__by_3d1viner_dfmgvtx-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTkyMCIsInBhdGgiOiJcL2ZcLzlmM2Y5YmQ5LTA2NzMtNDI3Ni1iYjM0LTcxZWNlMmE1ODIwZVwvZGZtZ3Z0eC04YjczNzYxYi0wNTI3LTRkMTItYjg2Yy05MmEwNDYzMWE4YzkucG5nIiwid2lkdGgiOiI8PTE5MjAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.HpHZ9AQtqpRbJO3cAL-BUBWNaN4OhElCGiaH7QKJo8M"}} />
          </View>
          <Text style={{color:"#BBBCBD",fontSize:17,fontWeight:500,marginTop:7,marginLeft:7}}>Saksham Singhal</Text>
          </View>

          {/* <SearchBar /> */}
          {searchIspressed && (
          <SearchBar />
          )}

          {/* search-notification-options */}
          <View style={{flexDirection:"row"}}>
          <TouchableOpacity onPress={()=>{
            setSearchIsPressed((prevState) => !prevState); 
          }}>
          <View style={{height:38,width:38,backgroundColor:"#1F2124",borderRadius:30,marginRight:7,justifyContent:"center",alignItems:"center"}}>
            <AntDesign name='search1' color={"#eee"} size={20}/>
          </View>
          </TouchableOpacity>

          <View style={{height:38,width:38,backgroundColor:"#1F2124",borderRadius:30,justifyContent:"center",alignItems:"center"}}>
            <Ionicons name='notifications' color={"#eee"} size={20}/>
          </View>
          </View>
          </View>


          <ScrollView  showsVerticalScrollIndicator={false}>

          {/* Stories */}
          <View style={{marginTop:5}}>
            <Text style={{color:"#eee",fontSize:20,fontWeight:400}}>Stories</Text>

            <ScrollView style={{marginTop:15}} horizontal showsHorizontalScrollIndicator={false}>
              {/* Add-Story */}
              <View style={{height:178,width:123,backgroundColor:"#1F2124",borderRadius:18,marginRight:20,alignItems:"center"}}>
              <Image style={{height: 120, width: 123, borderRadius: 18}} source={require('../assets/TestImage.jpg')} />
              <View style={{position:"absolute",height:30,width:123,backgroundColor:"#24272C",top:90}}></View>
              <View style={{height:60,width:60,borderRadius:70,borderWidth:3,borderColor:"#FDCE00",position:"absolute",top:57,justifyContent:"center",alignItems:"center"}}>
              <Image style={{height:48,width:48,borderRadius:70,}} source={{uri:"https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/9f3f9bd9-0673-4276-bb34-71ece2a5820e/dfmgvtx-8b73761b-0527-4d12-b86c-92a04631a8c9.png/v1/fill/w_1920,h_1920,q_80,strp/darth_vader__ai_art__by_3d1viner_dfmgvtx-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTkyMCIsInBhdGgiOiJcL2ZcLzlmM2Y5YmQ5LTA2NzMtNDI3Ni1iYjM0LTcxZWNlMmE1ODIwZVwvZGZtZ3Z0eC04YjczNzYxYi0wNTI3LTRkMTItYjg2Yy05MmEwNDYzMWE4YzkucG5nIiwid2lkdGgiOiI8PTE5MjAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.HpHZ9AQtqpRbJO3cAL-BUBWNaN4OhElCGiaH7QKJo8M"}} />
              </View>
              <Text style={{color:"grey",marginTop:6}}>Add Story</Text>
              <AntDesign style={{marginTop:5}} name='pluscircle' size={20} color={"grey"}/>
              </View>
              {/* story-loop */}
              <View style={{flexDirection:"row"}}>
              {storyData.map((data,index)=>(
              <View key={index}>
              <StoryImageSec image_url={data.images_url} name={data.title} number={data.number}/>
              </View>
              ))}
              </View>
              

            </ScrollView>
          </View>

          {/* Following-Discover tab */}
          <View style={{ marginTop: 20 }}>
            <View style={{ height: 67, width: "100%", backgroundColor: "#1F2124", borderRadius: 20 }}>
              <View style={{ flexDirection: "row", marginHorizontal: 15, marginVertical: 8 }}>
                <Discover_Following text="Following" IsSelected={isSelected} SetIsSelected={setIsSelected} />
                <Discover_Following text="Discover" IsSelected={isSelected} SetIsSelected={setIsSelected} />
              </View>
            </View>
            </View>


            {/* Posts-Feed */}
            {isSelected === "Following" && (
              demoFollowingData.map((data, index) => (
                <View key={index}>
                    <Post_Feed title={data.title} likes={data.likes} comments={data.comments} description={data.description} profile_image_url={data.profile_image_url} post_image_url={data.post_image_url} index={index} updateLikeCount={(postIsLiked) => updateLikeCount(index, postIsLiked)} />
              </View>
              ))
            )}

            { isSelected === "Discover" &&(
            demoDiscoverData.map((data,index)=>(
            <View key={index}>
              <Post_Feed title={data.title} likes={data.likes} comments={data.comments} description={data.description} profile_image_url={data.profile_image_url} post_image_url={data.post_image_url} index={index} updateLikeCount={(postIsLiked) => updateLikeCount(index, postIsLiked)}/>
            </View>
            ))
            )}
            <View style={{marginBottom:70}}></View>

            </ScrollView>

      
      </View>
      
    </View>

<Divider width={-0.1} style={{backgroundColor:"#1F2124"}}/>
<BottomTabs activetab={"Home"} />
</>

  )

}

const SearchBar = ()=>(

  <View style={{position:"absolute",left:45}}>
    <View style={{height:38,width:240,borderRadius:15,backgroundColor:"#191B1E",flexDirection:"row",}}>
    <TextInput style={{marginLeft:11,fontSize:15,color:"#eee"}} placeholder='Search Accounts, People, more...' placeholderTextColor={"grey"} />
    </View>

  </View>
)


const StoryImageSec = ({image_url,name,number}) => (

  
  <View style={{height:178,width:123,backgroundColor:"#1F2124",borderRadius:18,marginRight:20}}>
    <Image style={{height:178,width:123,borderRadius:18}} source={{uri:image_url}}/>
    <View style={{position: "absolute", backgroundColor: "rgba(0, 0, 0, 0.8)", height: 47, width: 123,borderBottomRightRadius:18,borderBottomLeftRadius:18,top:131}}>

    <View>
      <View style={{marginHorizontal:8,marginVertical:7}}>
        <Text style={{color:"#eee",fontSize:12}}>{name}</Text>
        <Text style={{color:"#eee",fontSize:10}}>{number}</Text>
      </View>
    </View>
    </View>
  </View>

)



const Discover_Following = ({ text , SetIsSelected, IsSelected }) => (
  <View style={{}}>
    <TouchableOpacity onPress={()=>{SetIsSelected(text)}}>
    <View style={{backgroundColor: IsSelected === text ? "#FDCE00" : "#1F2124" ,height:52,width:170,borderRadius:20,justifyContent:"center",alignItems:"center",}}>
      <Text style={{fontSize:18, color: IsSelected=== text ? "#000" : "#eee"}}>{text}</Text>
    </View>
    </TouchableOpacity>
  </View>
);




const storyData =[
  {
    title:"Profile 1",
    number:"4 stories",
    images_url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3CGLRIL0SDi3oagIfqZBqK4aszsJ01VmPQFCyBU7aYQ&s",
  },
  {
    title:"Profile 2",
    number:"1 stories",
    images_url:"https://i.pinimg.com/474x/86/ac/cb/86accbea31b719dea35425f4e260b2c3.jpg",
  },
  {
    title:"Profile 3",
    number:"2 stories",
    images_url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlTKKq7BbplYis6FuHRLUoZ4IWyrnnNb0dKV8YOzm_6w&s",
  },
  {
    title:"Profile 4",
    number:"2 stories",
    images_url:"https://d38b044pevnwc9.cloudfront.net/cutout-nuxt/enhancer/2.jpg",
  },
]



