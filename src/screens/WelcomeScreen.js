import {
  View,
  Text,
  StatusBar,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
  FlatList,
} from 'react-native';
import React from 'react';
import {Colors, Grid_Container, Images, Fonts} from '../constants';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Feather from 'react-native-vector-icons/Feather';
import Ionic from 'react-native-vector-icons/Ionicons';
import {BlurView} from '@react-native-community/blur';
import LinearGradient from 'react-native-linear-gradient';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';
import {Map_Content, Welcomepage_GridList} from '../components';

export default function WelcomeScreen() {
  return (
    <View style={Styles.container}>
      <ScrollView>
        <StatusBar
          barStyle="light-content"
          backgroundColor={Colors.DEFAUlT_WHITE}
          translucent
        />
        <View style={Styles.headerContainer}>
          {/* Header seperation 2 views*/}

          <View>
            <Text style={Styles.headingText}>Masha Allah</Text>

            <TouchableOpacity style={Styles.locatonButton}>
              <Feather name="map-pin" color={Colors.DEFAUlT_GRAY} size={14} />
              <Text style={Styles.locatonButtonText}>Trivandrum</Text>
            </TouchableOpacity>
          </View>
          <View style={{position: 'relative', top: -10}}>
            <MaterialIcons name="sort" color={Colors.DEFAUlT_GOLD} size={40} />
          </View>
        </View>
        {/* Content views */}

        <View style={Styles.imageContainer}>
          <View style={Styles.dateContainer}>
            {/* <Ionic name="calendar-outline" size={30} color={Colors.LIGHT_WHITE} /> */}
            <TouchableOpacity>
              <Image
                source={Images.calender_Icon}
                style={{width: responsiveWidth(5), height: responsiveHeight(3)}}
              />
            </TouchableOpacity>
            <Text style={Styles.dateText}>16 Dhu'abbchgh144</Text>
          </View>

          {/* sub Image container using add date and year name */}
        </View>

        <Image source={Images.mosque_ramadan} style={Styles.mosqueImage} />

        {/* Addig glassmorphism */}

        <View style={Styles.imageSubContainer}>
          <Text style={Styles.imagecontentText}>Next prayer</Text>
          <Text style={Styles.dateNameText}>Azar</Text>
          <View style={{flexDirection: 'row', marginTop: 10}}>
            <View style={Styles.timeContainer}>
              <Feather name="clock" size={20} color={Colors.DEFAUlT_WHITE} />
            </View>
            <Text style={Styles.dateNameText}>03.36 PM</Text>
          </View>

          <Text style={Styles.imagecontentText}>Next prayer</Text>
        </View>

        {/* <BlurView style={{
          position: 'absolute',
          marginTop: 20,
          top: 117,
          bottom: 0,
          left: 18,
          right: 0,
          opacity: .5,
          width:174,
          height:140,
          backgroundColor: '#E4F2FF',
          borderRadius:50,
          

        }} blurType='extraDark'
        blurAmount={20}
         >

        </BlurView> */}

        {/* <BlurView
       
       style={{
        width:180,
        height:150,
        //alignSelf:'center',
        borderRadius:20,
        borderWidth:.1,position:'absolute',
        top:220,
        left:40,
        padding:10

       }}
       blurType="light"
       blurAmount={20}
       >
        <Text style={Styles.imagecontentText}>Next prayer</Text>
            <Text style={Styles.dateNameText}>Azar</Text>
            <View style={{flexDirection: 'row'}}>
              <View style={Styles.timeContainer}>
                <Feather name="clock" size={20} color={Colors.DEFAUlT_WHITE} />
              </View>
              <Text style={Styles.dateNameText}>03.36 PM</Text>
            </View>

            <Text style={Styles.imagecontentText}>Next prayer</Text>
            </LinearGradient>
       </BlurView> */}

        {/* data mapping view */}
        <View>
          <FlatList
            style={{marginTop: responsiveWidth(4)}}
            data={Grid_Container}
            renderItem={({item}) => Welcomepage_GridList({item})}
            numColumns={4}
            ItemSeparatorComponent={() => (
              <View style={{height: responsiveWidth(3)}} />
            )}
          />
        </View>

        {/* <Text>WelcomeScreen</Text>
      <Image
        source={{uri: 'http://www.clicktorelease.com/code/gif/1.gif'}}
        style={{width: 100, height: 100}}
      /> */}

        {/* tochable cheyyanam */}
        <Map_Content />
      </ScrollView>
    </View>
  );
}

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.DEFAUlT_WHITE,
    //padding:responsiveWidth(.5),
    paddingHorizontal: responsiveWidth(4),
    paddingTop: responsiveWidth(8),
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    //marginHorizontal: responsiveWidth(1),
    // marginVertical: responsiveWidth(2),
    //paddingVertical:responsiveWidth(5),
  },
  headingText: {
    fontSize: responsiveFontSize(3.2),
    fontFamily: Fonts.Nunito_SemiBold,
    lineHeight: 1.4 * responsiveFontSize(3.2),
    color: Colors.DEFAUlT_TEXT_BLACK,
    marginBottom: responsiveWidth(0.5),
    marginHorizontal: responsiveWidth(1),
  },
  locatonButton: {
    flexDirection: 'row',
    width: responsiveWidth(27),
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: responsiveWidth(1),
  },
  locatonButtonText: {
    fontSize: responsiveFontSize(2),
    marginHorizontal: responsiveWidth(1),
    fontFamily: Fonts.Nunito_Regular,
    lineHeight: 1.4 * responsiveFontSize(2.5),
    color: Colors.DEFAUlT_GRAY,
  },
  imageContainer: {
    height: responsiveHeight(29),
    backgroundColor: Colors.DEFAUlT_BLUE,
    //marginHorizontal: responsiveWidth(4),
    borderRadius: responsiveWidth(4),
    justifyContent: 'space-between',
    marginVertical: responsiveWidth(5),
  },
  imageSubContainer: {
    // width: responsiveWidth(45),
    //200
    // height: responsiveHeight(18),
    //150
    borderRadius: responsiveWidth(2),
    margin: 15,
    backgroundColor: 'red',
    padding: responsiveWidth(0),
    opacity: 0.6,
    position: 'absolute',
    top: 135,
    padding: 10,
    elevation: 20,
    left: 2,
  },
  dateContainer: {
    marginHorizontal: responsiveWidth(5),
    margin: responsiveWidth(4),
    flexDirection: 'row',
    alignItems: 'center',
  },
  dateText: {
    fontFamily: Fonts.Nunito_Medium,
    fontSize: responsiveFontSize(1.8),
    lineHeight: 1.4 * responsiveFontSize(1.8),
    color: Colors.PURE_WHITE,
    marginHorizontal: responsiveWidth(2),
  },
  imagecontentText: {
    fontFamily: Fonts.Nunito_Regular,
    fontSize: responsiveFontSize(1.5),
    lineHeight: 1.4 * responsiveFontSize(1.5),
    color: Colors.LIGHT_WHITE,
  },
  dateNameText: {
    fontFamily: Fonts.Nunito_Bold,
    lineHeight: 1.4 * responsiveFontSize(3),
    fontSize: responsiveFontSize(3),
    color: Colors.DEFAUlT_WHITE,
    marginTop: responsiveWidth(1),
  },
  timeContainer: {
    backgroundColor:'yellow',
    width: responsiveWidth(8.3),
    height: responsiveWidth(8.3),
    backgroundColor: Colors.LIGHT_BLUE,
    borderRadius: responsiveWidth(2),
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: responsiveWidth(2.5),
    marginVertical: responsiveWidth(1),
  },
  gridSingleContainer: {
    width: responsiveWidth(12.5),

    height: responsiveWidth(12.5),

    borderColor: '#FCF6ED',
    //marginVertical: 25,
    margin: responsiveWidth(5),
    borderRadius: responsiveWidth(2),
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    elevation: 1,
    backgroundColor: '0xFFFCF9F4',
    borderColor: Colors.DEFAUlT_GOLD,
  },
  gridButton: {
    width: responsiveWidth(1),
    height: responsiveWidth(1),
    backgroundColor: '#FCF9F4',
    borderRadius: 10,
    borderWidth: 1,
    elevation: 10,
    borderColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  mosqueImage: {
    width: responsiveWidth(86),
    //290
    height: responsiveHeight(29),
    //220
    position: 'absolute',
    top: responsiveWidth(35),
    left: responsiveWidth(24),
  },
});
