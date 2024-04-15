import { View, Text, Image, TouchableOpacity, TextInput, ScrollView, Platform, FlatList } from 'react-native'
import React, { useEffect, useLayoutEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Entypo from 'react-native-vector-icons/Entypo'
import { launchImageLibrary, requestMediaLibraryPermissionsAsync } from 'react-native-image-picker';

export default function AddPost() {

  const [tagSearch,setTagSearch] = useState("");
  const [filteredTags, setFilteredTags] = useState([]);
  const [selectedTags, setSelectedTags] = useState([]);


  const [imageUrl, setImageUrl] = useState('hhh');
  const [caption, setCaptions] = useState("");
  const [location, setLocation] = useState("");

  const handleSearch = (text) => {
    setTagSearch(text)
    const filteredTagList = tagsList.filter(tag => tag.toLowerCase().includes(text.toLowerCase()))
    setFilteredTags(filteredTagList)
  }

  const addTag = (tag) => {
    setSelectedTags([...selectedTags, tag]);
  };

  const removeTag = (tag) => {
    setSelectedTags(selectedTags.filter((t) => t !== tag));
  };

  const discardPost = () => {
    navigation.navigate("Profile") 
    setSelectedTags([])
    setFilteredTags([])
    setTagSearch("")
  }

  
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    })
  });



  return (
    <View style={{ backgroundColor: "#141414", flex: 1 }}>
      <View style={{ marginTop: 40, marginHorizontal: 20 }}>

        {/* Upper-Navigation */}
        <View style={{ flexDirection: "row" }}>
          <TouchableOpacity activeOpacity={1} onPress={() => {discardPost()}}>
            <AntDesign style={{ marginTop: 4 }} name='arrowleft' size={28} color={"#eee"} />
          </TouchableOpacity>
          <Text style={{ position: "absolute", color: "#eee", fontSize: 22, left: "33%" }}>Add a Post</Text>
        </View>
        <View style={{ marginBottom: 10 }}>
          <View style={{ height: 0.25, width: "100%", backgroundColor: "#eee", borderRadius: 4, marginTop: 8 }}></View>
        </View>
        <ScrollView showsVerticalScrollIndicator={false}>
          {/* Post */}
          <View style={{ marginTop: 12, height: 370, width: "100%", borderRadius: 30 }}>
            <Text style={{ color: "#eee", marginLeft: 18, fontSize: 18, marginTop: 10 }}>Post</Text>
            <View style={{ marginTop: 12, justifyContent: "center", alignItems: "center" }}>
              <View style={{ height: 300, width: "100%", borderRadius: 40, backgroundColor: "#262626" }}>
                <Image style={{ height: 290, width: '100%', borderRadius: 40, position: 'absolute' }} source={{ uri: imageUrl }} />

                { imageUrl === "hhh" ? (
                  <View style={{marginTop:"32%",alignItems:"center"}}>
                    <TextInput style={{ fontSize: 20,backgroundColor:"#484646",padding:12,width:"80%",borderRadius:15 }} placeholder='Image Url' onChangeText={text => setImageUrl(text)} placeholderTextColor={"#eee"}/>  
                  </View>
                  )  : (
                  <TouchableOpacity onPress={()=> setImageUrl("hhh")}>
                    <AntDesign style={{position:"absolute",right:20,top:20}} name="closecircle" size={34} color={"#D82953"} />
                  </TouchableOpacity>
                  )    
                  }

              </View>
            </View>
          </View>


          {/* Details*/}
          <View style={{ marginTop: 20, height: selectedTags.length != 0 ? 700 : 450, width: "100%", backgroundColor: "#262626", borderRadius: 30 }}>

            {/* Caption */}
            <Text style={{ color: "#eee", marginLeft: 27, fontSize: 18, marginTop: 25 }}>Caption</Text>
            <View style={{alignItems:"center",marginTop:16,flexDirection:"row",marginLeft:"7%"}}>
              <TextInput style={{backgroundColor:"#484646",color:"#eee", padding:8,width:"85%",borderRadius:15, fontSize:18}} onChangeText={text => setCaptions(text)}  placeholder='Enter Caption' placeholderTextColor={"#eee"}/>
              <AntDesign style={{marginLeft:10}} name='book' size={25} color={"#141414"} />
            </View>

            {/* Location */}
            <Text style={{ color: "#eee", marginLeft: 27, fontSize: 18, marginTop: 20 }}>Location</Text>
            <View style={{alignItems:"center",marginTop:16,flexDirection:"row",marginLeft:"7%"}}>
              <TextInput style={{backgroundColor:"#484646",color:"#eee", padding:8,width:"85%",borderRadius:15, fontSize:18}} onChangeText={text => setLocation(text)}  placeholder='Enter Location' placeholderTextColor={"#eee"}/>
              <Entypo style={{marginLeft:10}} name='location' size={25} color={"#141414"} />
            </View>
            

            

            
            {/* Selected-Tags */}
            {selectedTags.length != 0 && (
            <>
            <View style={{height:0.5,backgroundColor:"#eee",width:"85%",marginTop:20,marginLeft:"7%"}}></View>
            <View style={{marginHorizontal:25}}>
            <View style={{height:220,width:"100%",marginTop:25,flexDirection:"row",flexWrap:"wrap"}}>
              
              {selectedTags.map((data,index)=>(
                <View key={index}>
                <Tags text={data} removeTag={removeTag}/>
                </View>
              ))}
                
            </View>
            </View>
            </>
            )}
            <View style={{height:0.5,backgroundColor:"#eee",width:"85%",marginTop:29,marginLeft:"7%"}}></View>
              

            
            {/* Tags */}
            <Text style={{ color: "#eee", marginLeft: 27, fontSize: 18, marginTop: 20 }}>Tags</Text>
            <View style={{flexDirection:"row",backgroundColor:"#191B1E",width:"85%",padding:8,borderWidth:1,borderColor:"#eee", marginLeft:"7%",marginTop:15}}>
            <AntDesign style={{marginTop:4}} name='search1' size={20} color={"#eee"}/>
            <TextInput style={{ color: '#eee', fontSize: 18, marginLeft: 5 }} placeholder='Search Tags' placeholderTextColor={'#eee'} onChangeText={handleSearch}/>
            </View>
            <View style={{height:0.5,backgroundColor:"#eee",width:"85%",marginTop:29,marginLeft:"7%"}}></View>
            

            

          </View>


          {/* Discard-Post-Buttons */}
          <View style={{marginTop:25,flexDirection:"row",justifyContent:"space-between",marginHorizontal:25}}>
            <TouchableOpacity onPress={()=> discardPost()}>
              <View style={{height:60,width:150,borderRadius:20,backgroundColor:"#484646",justifyContent:"center",alignItems:"center"}}>
                <Text style={{fontSize:18,fontWeight:600,color:"white"}}>Discard</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={()=> {
              navigation.navigate("Profile",{imageUrl, selectedTags, caption, location})
            }}>
              <View style={{height:60,width:150,borderRadius:20,backgroundColor:"#FDCE00",justifyContent:"center",alignItems:"center"}}>
              <Text style={{fontSize:18,fontWeight:600}}>Post</Text>
              </View>
            </TouchableOpacity>
          </View>


          {/* Dropdown Tags */}
          { filteredTags.length != 10 && (
            <View style={{position:"absolute",height:filteredTags.length*60,width:"85%",backgroundColor:"#484646",borderRadius:10,left:"7%",top: selectedTags.length != 0 ? 1034 : 765}}>
              <View style={{marginHorizontal:20,}}>
                {filteredTags.map((data,index)=>(
                <View key={index}>
                <SearchedTagsBox text={data} addTag={addTag}/>
                </View>
                ))}
              </View>
            </View>)}


          <View style={{ marginBottom: filteredTags.length*50  }}></View>
          <View style={{ marginBottom:70 }}></View>
        </ScrollView>
      </View>
    </View>
  )
}



const Tags = ({text,removeTag}) => (
  <>
  <View style={{height:40,width:text.length*8.4+50,borderRadius:20,backgroundColor:"#191B1E",flexDirection:"row",alignItems:"center",marginBottom:5,marginRight:5}}>
    <TouchableOpacity onPress={()=> removeTag(text)}>
    <AntDesign style={{marginLeft:10}} name='closecircle' color={"#eee"} size={17}/>
    </TouchableOpacity>
    <Text style={{color:"#eee",fontSize:17,marginLeft:5}}>{text}</Text>
  </View>
  </>
)



const SearchedTagsBox = ({text, addTag}) => (
  <>
  <TouchableOpacity  onPress={()=> {
    addTag(text)

    }}>
  <Text style={{fontSize:20, fontWeight:500,color:"#eee",marginTop:20}}>{text}</Text>
  <View style={{height:0.5,backgroundColor:"#eee",width:"100%",marginTop:10,}}></View>
  </TouchableOpacity>
  </>
)

const tagsList = [
  '#ReducedPlasticuse',
  '#ReducedWaterPollution',
  '#ReducedAirPollution',
  '#ReducedWatage',
  '#3Rs',
  '#ReduceRecycleReuse',
  '#Carpooling',
  '#HelpingPeople',
  '#Reusing',
  '#MakingSmallChanges',
];