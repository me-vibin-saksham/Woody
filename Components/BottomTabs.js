import { View, Text, TouchableOpacity } from 'react-native'
import React, { useState, useEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Entypo from 'react-native-vector-icons/Entypo'
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6'

export default function BottomTabs({activetab}) {
    const navigation = useNavigation();

    const [activeTab, setActiveTab] = useState(activetab);

    useEffect(() => {
        setActiveTab(activetab);
    }, [activetab]);

    const handleTabPress = (tabName) => {
        navigation.navigate(tabName);
    };

    return (
        <View style={{ height: 75, width: "100%", backgroundColor: "#191B1E" }}>
            
        <View style={{justifyContent:"center", alignItems:"center", height:65,width:65, borderRadius:50 , backgroundColor:"#FDCE00", position:"absolute",bottom:43,right:"42.5%"}}>
        <AntDesign name='plus' size={30} color={"black"}/>
        </View>
            <View style={{ flexDirection: "row", justifyContent: "space-around", alignItems: "center", height: "100%" }}>
                <TouchableOpacity onPress={() => {
                    navigation.navigate("Home")
                    setActiveTab("Home")
                    setActiveTab("Home")
                } }>
                    <AntDesign name='home' size={30} color={activeTab === 'Home' ? "#FDCE00" : "#eee"} />
                </TouchableOpacity>

                <TouchableOpacity onPress={() => handleTabPress('Reel')}>
                    <Entypo style={{marginRight:15}} name="video-camera" size={31} color={activeTab === 'Reel' ? "#FDCE00" : "#eee"} />
                </TouchableOpacity>

                <TouchableOpacity onPress={() => {handleTabPress('Clan')}}>
                    <FontAwesome6 style={{marginLeft:15}} name='people-roof' size={29} color={activeTab === 'Clan' ? "#FDCE00" : "#eee"} />
                </TouchableOpacity>

                <TouchableOpacity onPress={() => handleTabPress('Profile')}>
                    <AntDesign name='profile' size={30} color={activeTab === 'Profile' ? "#FDCE00" : "#eee"} />
                </TouchableOpacity>
            </View>
        </View>
    )
}
