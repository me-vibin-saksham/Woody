import { View, Text, Image, TouchableOpacity, TextInput, ScrollView, Dimensions } from 'react-native'
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
const { height, width } = Dimensions.get("screen");

// post-follower-following      points




export default function ProfileScreen() {


    const [modalVisible, setModalVisible] = useState(false);
    const [modalContent, setModalContent] = useState(null);
    const [selectedOption,setSelectedOption] = useState("Posted")
    const navigation = useNavigation();

    const openModal = (image1, image2, title, description) => {
      setModalContent({ image1, image2, title, description });
      setModalVisible(true);
    };
  
    const closeModal = () => {
      setModalVisible(false);
      setModalContent(null)
    };

    useLayoutEffect(()=>{
        navigation.setOptions({
            headerShown:false,
        })
    });

  return (

    <>
    <View style={{backgroundColor:"#141414",flex:1}}>
    <ScrollView showsVerticalScrollIndicator={false}>
    <View style={{marginTop:60,marginHorizontal:20,alignItems:"center",}}>


      

      {/* Image-Section */}
      <Points />
      <View style={{marginTop:25,alignItems:"center"}}>
      
        <View style={{height:104,width:104,borderRadius:104}}>
          <Image style={{height:104,width:104,borderRadius:104,}}  source={{uri:"https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/9f3f9bd9-0673-4276-bb34-71ece2a5820e/dfmgvtx-8b73761b-0527-4d12-b86c-92a04631a8c9.png/v1/fill/w_1920,h_1920,q_80,strp/darth_vader__ai_art__by_3d1viner_dfmgvtx-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTkyMCIsInBhdGgiOiJcL2ZcLzlmM2Y5YmQ5LTA2NzMtNDI3Ni1iYjM0LTcxZWNlMmE1ODIwZVwvZGZtZ3Z0eC04YjczNzYxYi0wNTI3LTRkMTItYjg2Yy05MmEwNDYzMWE4YzkucG5nIiwid2lkdGgiOiI8PTE5MjAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.HpHZ9AQtqpRbJO3cAL-BUBWNaN4OhElCGiaH7QKJo8M"}} />
        </View>

        <Text style={{marginTop:10,color:"#eee",fontSize:20,textAlign:"center"}}>Saksham Singhal</Text>
        <Text style={{color:"#eee",marginTop:3,fontSize:12}}>@singhalSaksham</Text>
        <View style={{flexDirection:"row",marginTop:12}}>
        <AntDesign style={{marginTop:4,marginRight:3}} name='link' size={15} color={"#eee"}/>
        <Text style={{color:"#eee",marginTop:3,fontSize:12}}>instagram.com/singhal_vibes</Text>
        </View>
      </View>


      {/* Post-Follower-Following */}
      <Post_Follower_Following/>


      {/* Posted-Reels-Saved */}
      <View style={{height:67,width:"100%",backgroundColor:"#1F2124",marginTop:20,borderRadius:25}}>
        <View style={{flexDirection:"row",marginHorizontal:10}}>
        <Options_bar text={"Posted"} SelectedOption={selectedOption} SetSelectedOption={setSelectedOption} />
        <Options_bar text={'Reels'} SelectedOption={selectedOption} SetSelectedOption={setSelectedOption} />
        <Options_bar text={'Saved'} SelectedOption={selectedOption} SetSelectedOption={setSelectedOption} />
        </View>
      </View>

      


      

    </View>
    {/* personal-feed */}
    <View style={{marginTop:15}}>
    {selectedOption === "Posted" && (
      <View style={{ flexDirection:"row",flexWrap:"wrap",}}>
      {demoImages.map((data, index) => (
      < View key={index}>
        <PostedImages image_url={data.image_url} OpenModel={openModal} CloseModal={closeModal} />
      </View>
    ))}
    </View>
    )}
    </View>


    <View style={{marginBottom:40}}></View>
    </ScrollView>
    </View>
    
<Divider width={-0.1} style={{backgroundColor:"#1F2124"}}/>
<BottomTabs activetab={"Profile"} />
    </>
  )
}








const RenderModal = () => (
  <View>

  </View>
)



const Options_bar = ({text,SelectedOption,SetSelectedOption}) => (
  
  <View style={{height:50,width:"33%",backgroundColor:SelectedOption === text ? "#FDCE00" : "#1F2124",borderRadius:25,justifyContent:"center",alignItems:"center",marginTop:8}}>
    <TouchableOpacity onPress={()=>{
    SetSelectedOption(text)
  }}>
    <Text style={{fontSize:16}}>{text}</Text>
    </TouchableOpacity>
  </View>
  
)

const PostedImages = ({ image_url, OpenModal, CloseModal}) => (
  <View style={{marginHorizontal: 2.2,marginVertical:2.2}}>
    <View style={{height: 150, width: width / 3.1}}>
      <TouchableOpacity onPress={()=> OpenModal() }>
      <Image style={{height: 150, width: width / 3.1,}} source={{uri:image_url}} />
      </TouchableOpacity>
    </View>
  </View>
);




const Post_Follower_Following = () => (

  <View style={{height:80,width:"100%",marginTop:25}}>
          <View style={{flexDirection:"row",justifyContent:"space-between",marginHorizontal:35}}>

            <View style={{justifyContent:"center",alignItems:"center"}}>
              <Text style={{color:"#eee",fontSize:32}}>826</Text>
              <Text style={{color:"#eee",fontSize:15}}>Posts</Text>
            </View>

            <View style={{justifyContent:"center",alignItems:"center"}}>
              <Text style={{color:"#eee",fontSize:32}}>200</Text>
              <Text style={{color:"#eee",fontSize:15}}>Followers</Text>
            </View>

            <View style={{justifyContent:"center",alignItems:"center"}}>
              <Text style={{color:"#eee",fontSize:32}}>115</Text>
              <Text style={{color:"#eee",fontSize:15}}>Following</Text>
            </View>

          </View>
        </View>
  
)



const Points = () => (
  <View style={{height:40,width:260,borderRadius:20,backgroundColor:"#FDCE00"}}>
    <View style={{height:40,width:150,borderRadius:20,backgroundColor:"#1F2124",position:"absolute",right:0}}></View>
    <View style={{position:"absolute",right:0,height:40,width:40,backgroundColor:"#FDCE00",borderRadius:30}}>
      <Image style={{height:38,width:38,borderRadius:30,marginLeft:1,marginTop:1}} source={{uri:"https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/9f3f9bd9-0673-4276-bb34-71ece2a5820e/dfmgvtx-8b73761b-0527-4d12-b86c-92a04631a8c9.png/v1/fill/w_1920,h_1920,q_80,strp/darth_vader__ai_art__by_3d1viner_dfmgvtx-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTkyMCIsInBhdGgiOiJcL2ZcLzlmM2Y5YmQ5LTA2NzMtNDI3Ni1iYjM0LTcxZWNlMmE1ODIwZVwvZGZtZ3Z0eC04YjczNzYxYi0wNTI3LTRkMTItYjg2Yy05MmEwNDYzMWE4YzkucG5nIiwid2lkdGgiOiI8PTE5MjAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.HpHZ9AQtqpRbJO3cAL-BUBWNaN4OhElCGiaH7QKJo8M"}}/>
      </View>
    <View style={{flexDirection:"row"}}>
      <Text style={{fontSize:17,fontWeight:700,marginTop:6,marginLeft:45}} >Streak :</Text>
      <Text style={{fontSize:17,fontWeight:700,marginTop:7,marginLeft:18,color:"#FDCE00"}} >3K Points</Text>
    </View>
  </View>
)



const demoImages=[
  {
    image_url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3CGLRIL0SDi3oagIfqZBqK4aszsJ01VmPQFCyBU7aYQ&s"
  },

  {
    image_url:"https://static.langimg.com/photo/imgsize-101999,msid-84521616/navbharat-times.jpg"
  },

  {
    image_url:"https://i.pinimg.com/474x/86/ac/cb/86accbea31b719dea35425f4e260b2c3.jpg"
  },

  {
    image_url:"https://img.etimg.com/thumb/width-1600,height-900,imgsize-574454,resizemode-75,msid-69702953/news/economy/agriculture/government-notifies-extension-of-pm-kisan-scheme-to-all-farmers.jpg"
  },

  {
    image_url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlTKKq7BbplYis6FuHRLUoZ4IWyrnnNb0dKV8YOzm_6w&s"
  },

  {
    image_url:"https://www.hindustantimes.com/ht-img/img/2023/06/27/550x309/The-Centre-gives--2-000-in-three-instalments-to-fa_1687893898597.jpg"
  },
]

