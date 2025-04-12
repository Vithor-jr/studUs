import React from 'react';
import { 
	View, 
	Text, 
	TouchableOpacity,
	Modal,
	StyleSheet
} from 'react-native';
import { SvgXml } from 'react-native-svg';
import svgs from '../../../../assets/svg';
import Icon from 'react-native-vector-icons/FontAwesome';

const ModalConfirm = ({text, onClose}) => {	
	return ( 
			<Modal
				animationType="fade"
				transparent={true}
				onRequestClose={onClose}
			>
				<View style={styles.container_screen}>
					<View style={styles.container_modal}>
						<Icon name="exclamation-circle" size={35} color="#E84D35"/>
						<Text style={styles.text_message}>{text}</Text>

						<View style={{flexDirection:'row', justifyContent:'space-between', gap:20}}>
							<TouchableOpacity 
								onPress={()=>onClose(false)} 
								style={{...styles.container_button, backgroundColor:'#E84D35'}}>
								<Text style={styles.text_button}>Não</Text>
							</TouchableOpacity>

							<TouchableOpacity 
								onPress={()=>onClose(true)}
								style={{...styles.container_button, backgroundColor:'#47AF39'}}>
								<Text style={styles.text_button}>Sim</Text>
							</TouchableOpacity>
						</View>
					</View>
				</View>
			</Modal>
    );
  };

const styles = StyleSheet.create({
	text_message:{
		fontSize:14,
		fontFamily:'Quicksand-Bold',
		marginTop:'5%',
		textAlign:'center',
		marginBottom:10,
		marginHorizontal:20
	},
	container_screen:{
		flex:1,
		backgroundColor:'rgba(0, 0, 0, 0.6)',
		alignItems:'center',
		justifyContent:'center'
	},
	container_modal:{
		width:'80%',
		backgroundColor:'white',
		borderRadius:20,
		alignItems:'center',
		paddingVertical:'5%'
	},
	container_button:{
		width:'30%', 
		alignItems:'center',
		paddingVertical:5,
		borderRadius:10,
		marginVertical:'5%'
	},
	text_button:{
		fontFamily:'Quicksand-Bold',
		color:'white',
		fontSize:15,
	},
});
export default ModalConfirm;
