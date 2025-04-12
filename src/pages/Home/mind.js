import React from 'react';
import { 
	View, 
	Text,
	TouchableOpacity,
	ImageBackground
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { SvgXml} from 'react-native-svg';
import svgs from '../../../assets/svg';

export default function Mind (){
	const navigate = useNavigation();

	return(
		<View style={{flex:1, backgroundColor:'#6048AC'}}>
			<ImageBackground source={require('../../../assets/images/fundo.jpeg')} style={{flex:1}}>
				<View style={{ height: '30%', width: '100%', padding: 20 }}>
					<TouchableOpacity onPress={() => navigate.openDrawer()}>
						<SvgXml xml={svgs.svgDrawer} width={28} height={21} />
					</TouchableOpacity>
				</View>
			</ImageBackground>
  	</View>
	);
}

