import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1
  },
	text_title_vestibular:{
		fontFamily:'Quicksand-Bold',
		color:'#6048AC',
		fontSize:24,
		padding:20,
		paddingVertical:10,
		borderBottomColor:"rgba(112, 111, 111, 0.18)",
		borderBottomWidth:1,
	},
  importantButton: {
		justifyContent:'space-between',
		alignItems:'center',
		flexDirection:'row',
  },
	allTopicButton: {
		justifyContent:'space-between',
		alignItems:'center',
		marginTop:10,
		flexDirection:'row',
  },
  importantButtonText: {
    color:'#6048AC',
		fontFamily:'Quicksand-Bold',
    textAlign: 'center',
    fontSize: 15,
		marginBottom:5
  },
  button_subject: {
		flexDirection:'row',
		justifyContent:'space-between',
  },
  buttonText: {
		fontSize:14,
		fontFamily:'Quicksand-Bold',
    textAlign: 'center',
  },
  nestedList: {
		gap:5,
		marginTop:10,
  },
  itemText: {
    fontSize: 14,
		maxWidth:'90%',
		fontFamily:"Quicksand-Bold",
    color: '#000',
  },
	container_item:{
		flexDirection:'row',
		gap:10,
		alignItems:'center'
	},
	container_list:{
		marginTop:5,
		marginBottom:15
	}
});
