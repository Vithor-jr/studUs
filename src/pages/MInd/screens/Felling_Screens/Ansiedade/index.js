import React, { useState } from 'react';
import { 
    Text,
    View, 
    TextInput
} from "react-native";
import { styles } from './styles';
import { SvgXml } from 'react-native-svg';
import svgs from '../../../../../../assets/svg';
import { method } from '../../../data/methods';
import MethodAnsiedade from '../../../components/MethodAnsiedade';

export default function AnsiedadeScreen({navigate}){
    const [inputFocus, setInputFocus] = useState(false)
	const [searchTerm, setSearchTerm] = useState('');
    const [filteredCategories, setFilteredCategories] = useState(method);

    const searchCategories = (term) => {
		setSearchTerm(term);
		if (term) {
			setFilteredCategories(method.filter(category => 
				category.title.toLowerCase().includes(term.toLowerCase())
			));
		} else {
			setFilteredCategories(method);
		}
	};	

	return (
		<View style={styles.container}>
            
            <View style={styles.container_input}>
                <TextInput
                    value={searchTerm}
                    onFocus={()=>setInputFocus(true)}
                    onBlur={()=>setInputFocus(false)}
                    onChangeText={searchCategories}
                    style={styles.text_input_search}
                />

                {searchTerm === '' && !inputFocus &&
                    <View style={{ position: 'absolute', flexDirection: 'row', gap: 5}}>
                        <SvgXml xml={svgs.svgLupa} color='#999999' />
                        <Text style={styles.placeholder_input_search}>Procurar Método</Text>
                    </View>
                }
            </View>

            <Text style={{...styles.title, fontSize:30}}>Métodos</Text>
            <Text style={styles.paragraph}>
             A ansiedade é um sentimento que surge quando há a antecipação de uma ameaça, seja ela real ou imaginada. O problema é que essa ansiedade pode causar prejuízos na vida de uma pessoa. Felizmente, existem várias técnicas que ajudam a aliviar esse sentimento. Iremos disponibilizar abaixo as mais eficientes  para você!
            </Text>

            <View style={{alignItems:'center', marginTop:30}}>
                {
                    filteredCategories.map((item, index) => (
                        <MethodAnsiedade 
                            size={filteredCategories.length}
                            index={index}
                            navigation={navigate}
                            subtitle={item.subtitle}
                            labelButtom={item.button}
                            title={item.title} 
                            url={item.url} 
                            key={index} 
                        />
                    ))
                }
            </View>

            <View style={styles.footer}/>
        </View>
    );
}