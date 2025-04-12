import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
	container: {
    flexGrow: 1,
    backgroundColor: '#fff',
    position: 'relative',
    borderRadius:20,
    paddingHorizontal:20,
    paddingVertical:10
  },
  lines: {
    position: 'absolute',
    paddingHorizontal:20,
    paddingTop:10,
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: -1,
  },
  line: {
    borderBottomWidth: 1,
    borderBottomColor: '#E6E6E6',
    height: 20,
  },
  container_book:{
    backgroundColor:'#3B267B',
    paddingHorizontal:15,
    paddingVertical:10,
    height:310,
    marginVertical:20,
    borderRadius:20
  },
  lineWithMargin: {
    marginLeft: 30,
  },
  text_book:{
    color:"white",
    fontFamily:"Varela-Round",
    fontSize:12,
    width:'90%',
  },
  container_bottom_book:{
    alignItems:'center',
    flexDirection:'row',
    marginTop:10,
    justifyContent:"space-between"
  },
  textInput: {
    flex: 1,
    fontSize: 12,
    lineHeight: 20,
    textAlignVertical: 'top',
    backgroundColor: 'transparent',
  },
});