import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { WelcomeScreen,CenterScreen,QuranScreen,ProfileScreen,CommunityScreen } from '../screens'
import { Image, Text, TouchableOpacity, View } from 'react-native'
import Feather from 'react-native-vector-icons/Feather'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { Colors, Fonts, Images } from '../constants'
import { responsiveFontSize,responsiveWidth,responsiveHeight } from 'react-native-responsive-dimensions'


const Tab= createBottomTabNavigator()

function CustomeTabBarButton({children,onPress}){
    return(
        <TouchableOpacity
        onPress={onPress}
        style={{
            height:80,
            width:80,
            backgroundColor:'white',
            borderRadius:40,
            top:-30,
            justifyContent:'center',
            alignItems:'center',
            elevation:1
        }}>
            
            <View style={{
            width:70,
            height:70,
            borderRadius:35,
            backgroundColor:Colors.DEFAUlT_GOLD,
            

            }}>{children}</View>

        </TouchableOpacity>
    )
}

export default function TapNavigator() {
  return (

    <Tab.Navigator screenOptions={{
         tabBarItemStyle:{width:responsiveWidth(1)},
        tabBarStyle:{backgroundColor:Colors.DEFAUlT_WHITE,
        height:responsiveHeight(9),
   },
         tabBarLabelStyle:{fontSize:0},
        
        
        headerShown:false, }} >
        <Tab.Screen name='Home' component={WelcomeScreen} options={{
            tabBarLabel:()=> 
            <Text></Text>,
    
        tabBarIcon:({focused})=>(
            <View style={{alignItems:'center',justifyContent:'center',top:responsiveWidth(3)}}>
                         
                         <Image source={Images.home} resizeMode='contain' 
                         style={{
                         width:responsiveWidth(7),
                         height:responsiveWidth(7),
                         tintColor:focused ? Colors.DEFAUlT_GOLD :Colors.DEFAUlT_GRAY}}/>
                         <Text style={{ fontFamily:Fonts.Nunito_Medium,fontSize:responsiveFontSize(1.7),
                         lineHeight:1.4*responsiveFontSize(1.7),
                            color: focused ? Colors.DEFAUlT_GOLD :Colors.DEFAUlT_GRAY
                         }}>Home</Text>


            </View>
        )}}/>

        <Tab.Screen name='Community' component={CommunityScreen} options={{tabBarLabel:()=>(
            <Text></Text>
        ),tabBarIcon:({focused})=>(
            <View style={{alignItems:'center',justifyContent:'center',top:responsiveWidth(3)}}>
                         
                         <Image source={Images.community} resizeMode='contain' 
                         style={{
                            width:responsiveWidth(7),
                            height:responsiveWidth(7),
                         tintColor:focused ? Colors.DEFAUlT_GOLD :Colors.DEFAUlT_GRAY}}/>
                         <Text style={{ fontFamily:Fonts.Nunito_Regular,
                         fontSize:responsiveFontSize(1.7),lineHeight:1.4*responsiveFontSize(1.7),
                            color: focused ? Colors.DEFAUlT_GOLD :Colors.DEFAUlT_GRAY
                         }}>Community</Text>


            </View>
        
            
        )}}/>
        
        <Tab.Screen name='Center' component={CenterScreen} options={{
            tabBarIcon:({focused})=>(

                
                

                
                <Image source={Images.learn} resizeMode='contain' 
                style={{
                    width:30,
                    height:30,
                    tintColor:'white',
                    top:10
                }}/>
            ),
            tabBarButton:(a)=>(
                <CustomeTabBarButton {...a}/>
            ),
            tabBarLabel:()=><Text></Text>
        }}/>

        <Tab.Screen name='Quran' component={QuranScreen} 
        options={{
            tabBarIcon:({focused})=>(
                <View style={{alignItems:'center',justifyContent:'center',top:responsiveWidth(1)}}>
                             
                             <Image source={Images.quran_icon} resizeMode='contain' 
                             style={{
                                width:responsiveWidth(7),
                                height:responsiveWidth(7),
                             tintColor:focused ? Colors.DEFAUlT_GOLD :Colors.DEFAUlT_GRAY}}/>
                             <Text style={{
                                fontFamily:Fonts.Nunito_Regular,
                                fontSize:responsiveFontSize(1.7),lineHeight:1.4*responsiveFontSize(1.7),
                                color: focused ? Colors.DEFAUlT_GOLD :Colors.DEFAUlT_GRAY
                             }}>Quran</Text>
    
    
                </View>
            )
        }}/>

        <Tab.Screen name='Profile' component={ProfileScreen} 
        options={{
            tabBarIcon:({focused})=>(
                <View style={{alignItems:'center',justifyContent:'center',top:responsiveWidth(1)}}>
                             
                             <Image source={Images.profile_icon} resizeMode='contain' 
                             style={{
                                width:responsiveWidth(7),
                                height:responsiveWidth(7),
                             tintColor:focused ? Colors.DEFAUlT_GOLD:Colors.DEFAUlT_GRAY}}/>
                             <Text style={{
                                fontFamily:Fonts.Nunito_Regular,
                                fontSize:responsiveFontSize(1.7),lineHeight:1.4*responsiveFontSize(1.7),
                                color: focused ? Colors.DEFAUlT_GOLD :Colors.DEFAUlT_GRAY
                             }}>Tasbih</Text>
    
                </View>
            )
        }}/>
    </Tab.Navigator>
    
  )
}