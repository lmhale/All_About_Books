
import { StyleSheet } from 'react-native';
import { theme } from "../../index"
const { padding, color, fontSize, fontFamily, windowWidth, normalize } = theme;

const resizeMode = 'contain';

const styles = StyleSheet.create({
    container:{
        flex:1,

        backgroundColor:'#E16666',
    },

    homeBox:{
     marginTop:200,
    },
    homeText: {
   fontSize:18,
   color:'white',
   marginTop:150,
   marginLeft:10,

         },
    happyText: {
      fontSize:18,
      color:'white',
    },

    searchLink: {
     fontSize:18,
      color:'white',
      marginLeft:130,
      marginTop:12,
      fontWeight:'bold',

    },

    bottomContainer:{

        backgroundColor:"white",
        paddingVertical: padding * 3,
        shadowColor: "#000000",
        shadowOpacity: 0.8,
        shadowRadius: 2,
        shadowOffset: {
            height: 1,
            width: 0
        }
    },

    buttonContainer:{

        justifyContent:"center",
        alignItems:"center",
    },

    logoutButton: {
      marginTop:300,
      marginLeft:40,
      width:300,
    },
});

export default styles;
