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

const ModalMessage = ({text, onClose, type, closeScreen}) => {
  function closeModal (){
		onClose()
		if(closeScreen){
			closeScreen()
		}
	}
	
	return ( 
			<Modal
				animationType="fade"
				transparent={true}
				onRequestClose={onClose}
			>
				<View style={styles.container_screen}>
					<View style={styles.container_modal}>
						{
							type==='sucess' 
							? <SvgXml xml={svgs.svgIconSucess} width={40} height={40}/>
							: <Icon name="exclamation-circle" size={35} color="#E84D35"/>
						}
						<Text style={styles.cotainerMessage}>{text}</Text>

						<TouchableOpacity 
							onPress={closeModal} 
							style={{...styles.container_button, backgroundColor:type === 'sucess' ? '#47AF39' : '#E84D35'}}>
							<Text style={styles.text_button}>Fechar</Text>
						</TouchableOpacity>
					</View>
				</View>
			</Modal>
    );
  };

const styles = StyleSheet.create({
	cotainerMessage:{
		fontSize:14,
		fontFamily:'Quicksand-Bold',
		marginTop:'5%',
		paddingHorizontal:10,
		textAlign:'center',
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
		textAlign:'center',
		fontSize:16,
	},
});
export default ModalMessage;
