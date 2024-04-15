import { View, Text, Image, TouchableOpacity, TextInput, ScrollView } from 'react-native'
import React, { useEffect, useLayoutEffect, useState } from 'react'
import {useNavigation, useRoute} from '@react-navigation/native'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Ionicons from 'react-native-vector-icons/Ionicons'
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons'
import EvilIcons from 'react-native-vector-icons/EvilIcons'
import Feather from 'react-native-vector-icons/Feather'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import BottomTabs from '../Components/BottomTabs'
import {Divider} from "react-native-elements"

export default function PostDeemo() {

    const navigation = useNavigation();
    const [liked, setLiked] = useState(false);

    useLayoutEffect(()=>{
        navigation.setOptions({
            headerShown:false,
        })
    });

    const { params: { imageUrl, selectedTags, caption, location } } = useRoute();

  return (
    <>
    <View style={{flex:1, backgroundColor:"black"}}>
        <View style={{marginTop:40}}>
            <View style={{flexDirection:"row",marginHorizontal:20,justifyContent:"space-between",marginBottom:5}}>
            <TouchableOpacity onPress={()=> navigation.navigate("Profile")}>
            <AntDesign style={{marginTop:3}} name="arrowleft" color={"#eee"} size={28} />
            </TouchableOpacity>
            <Text style={{fontSize:25,color:"#eee",fontWeight:500}}>Your Posts</Text>
            <Ionicons style={{marginTop:3}} name="options-outline" color={"#eee"} size={31} />
            </View>
            <View style={{height:0.5,backgroundColor:"#eee",width:"85%",marginTop:15,marginLeft:"7%",marginBottom:40}}></View>

            <ScrollView showsVerticalScrollIndicator={false} >
            <View style={{height:450+demo.length*15, width:"97%",backgroundColor:"#141414",borderRadius:20, marginLeft:"1.5%", flexWrap:"wrap"}}>

                {/* Top-Row */}
                <View style={{flexDirection:"row",justifyContent:"space-between",marginHorizontal:15,marginTop:20}}>
                    <View style={{flexDirection:"row"}}>
                    <Image style={{height:40, width:40, borderRadius:40}} source={{uri:"https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/9f3f9bd9-0673-4276-bb34-71ece2a5820e/dfmgvtx-8b73761b-0527-4d12-b86c-92a04631a8c9.png/v1/fill/w_1920,h_1920,q_80,strp/darth_vader__ai_art__by_3d1viner_dfmgvtx-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTkyMCIsInBhdGgiOiJcL2ZcLzlmM2Y5YmQ5LTA2NzMtNDI3Ni1iYjM0LTcxZWNlMmE1ODIwZVwvZGZtZ3Z0eC04YjczNzYxYi0wNTI3LTRkMTItYjg2Yy05MmEwNDYzMWE4YzkucG5nIiwid2lkdGgiOiI8PTE5MjAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.HpHZ9AQtqpRbJO3cAL-BUBWNaN4OhElCGiaH7QKJo8M"}}/>
                    <Text style={{color:"#eee",fontSize:20,marginLeft:12,marginTop:5}}>Saksham Singhal</Text>
                    </View>

                    <SimpleLineIcons name="options-vertical" style={{marginTop:8}} size={20} color={"#eee"} />
                </View>
                {/* Image */}
                <View style={{alignItems:"center"}}>
                    <Image style={{height:250, width:"95%",marginTop:10,borderRadius:25}} source={{uri:imageUrl}}/>
                </View>



                <View style={{position:"absolute",top:263, backgroundColor:"rgba(20, 20, 20, 0.5)",borderTopLeftRadius:25, borderTopRightRadius:25 }}>
                {/* likes-Comments */}
                <View style={{flexDirection:"row", justifyContent:"space-between", marginHorizontal:20, marginTop:20}}>
                <View style={{flexDirection:"row"}}>
                    <TouchableOpacity onPress={()=>{
                        setLiked(!liked)
                    }}>
                    <AntDesign style={{marginTop:1}} name={liked ? "heart" : "hearto"} size={30} color={"#eee"}/>
                    </TouchableOpacity>
                    <FontAwesome style={{marginHorizontal:8}} name ="comment-o" size={30} color={"#eee"} />
                    <FontAwesome style={{marginTop:2}} name ="share-square-o" size={32} color={"#eee"} />
                </View>
                <Feather name="bookmark" size={32} color={"#eee"} />
                </View>

                {/* caption */}
                <Text style={{color:"#eee", fontSize:15, fontWeight:300, marginLeft:20, marginTop:3}}>{caption}</Text>
                <Text style={{color:"#FDCE00", position:"absolute",top:68, right:25}}>...More</Text>

                <View style={{flexDirection: "row", flexWrap: "wrap", marginHorizontal: 20, marginTop:15}}>
                    {
                        selectedTags.map((data,index)=>(
                            <View key={index}>
                                <TagsShow title={data}/>
                            </View>
                        ))
                    }
                        
                    </View>

                </View>
                </View>

                {demoImages.map((data,index)=>(
                    <View key={index}>
                        <PostsBefore image_url={data.image_url} tags={demo}/>
                    </View>
                ))}

</ScrollView>


                
            

                


            

        </View>
        

    </View>
<Divider width={-0.1} style={{backgroundColor:"#1F2124"}}/>
<BottomTabs activetab={"Home"} />
</>
  )
}

const PostsBefore = ({image_url, tags}) => {

    const [isLiked,setIsLiked] = useState(false);

    return(
    <View style={{height:400+tags.length*15, width:"97%",backgroundColor:"#141414",borderRadius:20, marginLeft:"1.5%", flexWrap:"wrap", marginTop:25}}>

                {/* Top-Row */}
                <View style={{flexDirection:"row",justifyContent:"space-between",marginHorizontal:15,marginTop:20}}>
                    <View style={{flexDirection:"row"}}>
                    <Image style={{height:40, width:40, borderRadius:40}} source={{uri:"https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/9f3f9bd9-0673-4276-bb34-71ece2a5820e/dfmgvtx-8b73761b-0527-4d12-b86c-92a04631a8c9.png/v1/fill/w_1920,h_1920,q_80,strp/darth_vader__ai_art__by_3d1viner_dfmgvtx-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTkyMCIsInBhdGgiOiJcL2ZcLzlmM2Y5YmQ5LTA2NzMtNDI3Ni1iYjM0LTcxZWNlMmE1ODIwZVwvZGZtZ3Z0eC04YjczNzYxYi0wNTI3LTRkMTItYjg2Yy05MmEwNDYzMWE4YzkucG5nIiwid2lkdGgiOiI8PTE5MjAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.HpHZ9AQtqpRbJO3cAL-BUBWNaN4OhElCGiaH7QKJo8M"}}/>
                    <Text style={{color:"#eee",fontSize:20,marginLeft:12,marginTop:5}}>Saksham Singhal</Text>
                    </View>

                    <SimpleLineIcons name="options-vertical" style={{marginTop:8}} size={20} color={"#eee"} />
                </View>
                {/* Image */}
                <View style={{alignItems:"center"}}>
                    <Image style={{height:250, width:"95%",marginTop:10,borderRadius:25}} source={{uri:image_url}}/>
                </View>



                <View style={{position:"absolute",top:263, backgroundColor:"rgba(20, 20, 20, 0.5)",borderTopLeftRadius:25, borderTopRightRadius:25 }}>
                {/* likes-Comments */}
                <View style={{flexDirection:"row", justifyContent:"space-between", marginHorizontal:20, marginTop:20}}>
                <View style={{flexDirection:"row"}}>
                    <TouchableOpacity onPress={()=>{
                        setIsLiked(!isLiked)
                    }}>
                    <AntDesign style={{marginTop:1}} name={ isLiked ? "heart" : "hearto"} size={30} color={"#eee"}/>
                    </TouchableOpacity>
                    <FontAwesome style={{marginHorizontal:8}} name ="comment-o" size={30} color={"#eee"} />
                    <FontAwesome style={{marginTop:2}} name ="share-square-o" size={32} color={"#eee"} />
                </View>
                <Feather name="bookmark" size={32} color={"#eee"} />
                </View>

                {/* caption */}
                <Text style={{color:"#eee", fontSize:15, fontWeight:300, marginLeft:20, marginTop:3}}>This is a post with a little value added </Text>
                <Text style={{color:"#FDCE00", position:"absolute",top:68, right:25}}>...More</Text>

                <View style={{flexDirection: "row", flexWrap: "wrap", marginHorizontal: 20, marginTop:15}}>
                    {
                        tags.map((data,index)=>(
                            <View key={index}>
                                <TagsShow title={data}/>
                            </View>
                        ))
                    }
                        
                    </View>

                </View>
                </View>
                )
}


const TagsShow = ({title}) => (
    <View style={{height: 35, width: title.length*10, backgroundColor: "black", borderRadius: 25, marginBottom:5, marginRight:5,justifyContent:"center", alignItems:"center"}}>
                        <Text style={{color:"#eee"}}>{title}</Text>
    </View>
)

const demo = ["#reducedsustain", "#reducedPlasticUse", "#3R's", "#myPosts"]


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
  