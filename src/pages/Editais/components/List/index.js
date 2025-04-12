import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { getList } from '../../functions';
import { styles } from './styles';
import { NestedList } from './nestedList';
import { SvgXml } from 'react-native-svg';
import svgs from '../../../../../assets/svg';

const groupTopics = (topics, vestibularName) => {
  const important = {};
  const allTopics = {};

  topics.forEach(topic => {
    if (topic.vestibular === vestibularName) {
      const key = topic.discipline;
      if (topic.important) {
        if (!important[key]) {
          important[key] = [];
        }
        important[key].push(topic);
      }
      if (!allTopics[key]) {
        allTopics[key] = [];
      }
      allTopics[key].push(topic);
    }
  });

  return { important, allTopics };
};

export default function List({ vestibularName }) {
  const [showImportant, setShowImportant] = useState(false);
  const [showAllTopics, setShowAllTopics] = useState(false);
  const [showListImportant, setShowListImportant] = useState({});
  const [showListAllTopics, setShowListAllTopics] = useState({});
  const [importantTopics, setImportantTopics] = useState([]);
  const [allTopics, setAllTopics] = useState([]);

	const fetchData = async () => {
		const userId = 1; 
		const response = await getList(userId);
		const grouped = groupTopics(response, vestibularName);
		setImportantTopics(grouped.important);
		setAllTopics(grouped.allTopics);
	};

  useEffect(() => {
    fetchData();
  }, [vestibularName]);

  const toggleShowListImportant = (key) => {
    setShowListImportant((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const toggleShowListAllTopics = (key) => {
    setShowListAllTopics((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.text_title_vestibular}>{vestibularName}</Text>
      <View style={{paddingHorizontal:20, paddingVertical:10}}>
				
				{/*~~~~~~~~~~~~~~~~~~~~~~~~~Lista 1~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/}
        <TouchableOpacity style={styles.importantButton} onPress={() => setShowImportant(!showImportant)}>
          <Text style={styles.importantButtonText}>Assuntos mais recorrentes</Text>
          {
            showImportant ?
            <SvgXml xml={svgs.svgArrowPurple} width={17} height={17} style={{transform:[{rotate:'90deg'}]}}/> :
            <SvgXml xml={svgs.svgArrowPurple}  width={17} height={17} style={{transform:[{rotate:'270deg'}]}}/>
          }
        </TouchableOpacity>

        {showImportant && (
          Object.keys(importantTopics).map((key, index) => (
            <View key={index}>
              <TouchableOpacity style={styles.button_subject} onPress={() => toggleShowListImportant(key)}>
                <Text style={styles.buttonText}>{key}</Text>
                {
                  showListImportant[key] ?
                  <SvgXml xml={svgs.svgArrowBlack} width={17} height={17} style={{transform:[{rotate:'90deg'}]}}/> :
                  <SvgXml xml={svgs.svgArrowBlack}  width={17} height={17} style={{transform:[{rotate:'270deg'}]}}/>
                }
              </TouchableOpacity>
              {showListImportant[key] && <NestedList atualiar={fetchData} data={importantTopics[key]} />}
            </View>
          ))
        )}

				{/*~~~~~~~~~~~~~~~~~~~~~~~~~Lista 2~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/}
        <TouchableOpacity style={styles.allTopicButton} onPress={() => setShowAllTopics(!showAllTopics)}>
          <Text style={styles.importantButtonText}>Todos os Assuntos</Text>
          {
            showAllTopics ?
            <SvgXml xml={svgs.svgArrowPurple} width={17} height={17} style={{transform:[{rotate:'90deg'}]}}/> :
            <SvgXml xml={svgs.svgArrowPurple}  width={17} height={17} style={{transform:[{rotate:'270deg'}]}}/>
          }
        </TouchableOpacity>

        {showAllTopics && (
          Object.keys(allTopics).map((key, index) => (
            <View key={index}>
              <TouchableOpacity style={styles.button_subject} onPress={() => toggleShowListAllTopics(key)}>
                <Text style={styles.buttonText}>{key}</Text>
                {
                  showListAllTopics[key] ?
                  <SvgXml xml={svgs.svgArrowBlack} width={17} height={17} style={{transform:[{rotate:'90deg'}]}}/> :
                  <SvgXml xml={svgs.svgArrowBlack}  width={17} height={17} style={{transform:[{rotate:'270deg'}]}}/>
                }
              </TouchableOpacity>
              {showListAllTopics[key] && <NestedList atualiar={fetchData} data={allTopics[key]} />}
            </View>
          ))
        )}
      </View>
    </ScrollView>
  );
}
