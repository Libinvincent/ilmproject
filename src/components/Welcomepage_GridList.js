import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import {Colors, Fonts} from '../constants';

export default function Welcomepage_GridList({item}) {
  return (
    <View style={{alignItems: 'center', justifyContent: 'center'}}>
      <View style={Styles.gridSingleContainer}>
        <TouchableOpacity style={Styles.gridButton}>
          <Image
            source={item.imagename}
            style={{width: responsiveWidth(10), height: responsiveWidth(10)}}
          />
        </TouchableOpacity>
      </View>
      <Text style={Styles.gridtext}>{item.name}</Text>
    </View>
  );
}
const Styles = StyleSheet.create({
  gridSingleContainer: {
    width: responsiveWidth(22),
    //width:55,
    height: responsiveWidth(22),
    //hight:55,
    borderColor: '#FCF6ED',
    //marginVertical: 25,
    margin: responsiveWidth(1),
    borderRadius: responsiveWidth(3),
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: responsiveWidth(0.2),
    //elevation: responsiveWidth(1),
    backgroundColor: 'FCF9F4',
  },
  gridButton: {
    width: responsiveWidth(16.5),
    height: responsiveWidth(16.5),
    backgroundColor: Colors.DEFAUlT_WHITE,
    borderRadius: responsiveWidth(3),
    //borderWidth: responsiveWidth(1),
    elevation: responsiveWidth(.45),
    borderColor: Colors.DEFAUlT_WHITE,
    alignItems: 'center',
    justifyContent: 'center',
  },

  gridtext: {
    fontFamily: Fonts.Nunito_Regular,
    fontSize: responsiveFontSize(1.7),
    lineHeight: 1.4 * responsiveFontSize(1.7),
    color: Colors.DEFAUlT_GRAY,
    marginTop: responsiveWidth(3),
  },
});

// width: responsiveWidth(14.5),
// //width:55,
// height: responsiveWidth(14.5),
// //hight:55,
// borderColor: '#FCF6ED',
// marginVertical: 25,
// margin: 20,
// borderRadius: 10,
// alignItems: 'center',
// justifyContent: 'center',
// borderWidth: 0.1,
// elevation: 0.1,
// backgroundColor: 'white',
// },
// gridButton:{

// width: 65,
// height: 65,
// backgroundColor: '#FCF9F4',
// borderRadius: 10,
// borderWidth: 1,
// elevation: 10,
// borderColor: 'white',
// alignItems: 'center',
// justifyContent: 'center',
// },

// gridtext:{
// fontFamily:Fonts.Nunito_Regular,
// fontSize:responsiveFontSize(1.7),
// lineHeight:1.4*responsiveFontSize(1.7),
// color:Colors.DEFAUlT_GRAY

// }
// })
