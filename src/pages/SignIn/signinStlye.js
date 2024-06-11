import { Platform, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor:'#fff'
  },
  logo:{
    margin: Platform.OS === 'android' ? 55 : 80,
    fontSize:28,
    fontWeight:'bold'
  },
  subTitle:{
    marginBottom:20,
    color:'#000',
  },
  input:{
    color:'#121212',
    backgroundColor:'#E8E8E5',
    width:'90%',
    height:48,
    borderRadius:8,
    marginBottom:10,
    paddingHorizontal:8,
  },
  buttonLogin:{
    width:'90%',
    height:50,
    justifyContent:"center",
    alignItems:'center',
    marginBottom:10,
    borderRadius:6
  },
  buttonText:{
    color:'#fff',
    fontSize:16,
    fontWeight:'bold'
  }
});

export default styles;