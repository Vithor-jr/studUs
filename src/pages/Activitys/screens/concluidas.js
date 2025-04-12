import Animated, { useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';
import React, { useState, useEffect } from "react";
import { SvgXml } from "react-native-svg";
import svgs from "../../../../assets/svg";
import { 
    View,
    Text,
    FlatList,
    ActivityIndicator,
    TouchableOpacity
} from "react-native";

import {
    getActivitysCompletedEarly,
    getActivitysCompletedBeforeLastWeek,
    getActivitysCompletedLastWeek,
    getActivitysCompletedWeek
} from "../getActivitys";

import styles from "../styles";
import ListActivity from "../components/ticketActivitys";
import { useUserContext } from "../../../context/UserContext";
import { useActivityContext } from '../../../context/ActivitysContext';


export default function ActiitysConcluidas() {
    const { userData } = useUserContext();
    const {
        activitysCompleteWeek, setActivitysCompleteWeek,
        activitysLastWeek, setActivtysLastWeek,
        activitysBefore, setActivtyBefore,
        activitysEarly, setActivtyEarly,
    } = useActivityContext();

        
    const [loading, setLoading] = useState(true)

    const [numItemsToShowWeek, setNumItemsToShowWeek] = useState(5);
    const [numItemsToShowLastWeek, setNumItemsToShowLastWeek] = useState(5);
    const [numItemsToShowBefore, setNumItemsToShowBefore] = useState(5);
    const [numItemsToShowEarly, setNumItemsToShowEarly] = useState(5);

    const [showMoreWeek, setShowMoreWeek] = useState(true);
    const [showMoreLastWeek, setShowMoreLastWeek] = useState(true);
    const [showMoreBefore, setShowMoreBefore] = useState(true);
    const [showMoreEarly, setShowMoreEarly] = useState(true);

    const rotationIconWeek = useSharedValue(0);
    const rotationIconLastWeek = useSharedValue(0);
    const rotationIconBefore = useSharedValue(0);
    const rotationIconEarly = useSharedValue(0);

    const [showActivitysWeek, setShowActivitysWeek] = useState(false);
    const [showActivitysLastWeek, setShowActivitysLastWeek] = useState(false);
    const [showBeforeActivitys, setShowBeforeActivitys] = useState(false);
    const [showEarlyActivitys, setShowEarlyActivitys] = useState(false);

    const colors = {
        'week': activitysCompleteWeek ? (activitysCompleteWeek.length === 0 ? '#000000' : '#17A1FA') : '#000000',
        'lastWeek': activitysLastWeek ? (activitysLastWeek.length === 0 ? '#000000' : '#17A1FA') : '#000000',
        'before': activitysBefore ? (activitysBefore.length === 0 ? '#000000' : '#17A1FA') : '#000000',
        'early': activitysEarly ? (activitysEarly.length === 0 ? '#000000' : '#17A1FA') : '#000000'
    };
    
    const isDisabled = {
        'week': activitysCompleteWeek ? (activitysCompleteWeek.length === 0) : true,
        'lastWeek': activitysLastWeek ? (activitysLastWeek.length === 0) : true,
        'before': activitysBefore ? (activitysBefore.length === 0) : true,
        'early': activitysEarly ? (activitysEarly.length === 0) : true
    };
    

    const handleShowMoreLessWeek = () => {
        if (showMoreWeek) {
            setNumItemsToShowWeek(activitysCompleteWeek.length);
        } else {
            setNumItemsToShowWeek(5);
        }
        setShowMoreWeek(!showMoreWeek);
    }

    const handleShowMoreLessNextWeek = () => {
        if (showMoreLastWeek) {
            setNumItemsToShowLastWeek(activitysLastWeek.length);
        } else {
            setNumItemsToShowLastWeek(5);
        }
        setShowMoreLastWeek(!showMoreLastWeek);
    }

    const handleShowMoreLessAfter = () => {
        if (showMoreBefore) {
            setNumItemsToShowBefore(activitysBefore.length);
        } else {
            setNumItemsToShowBefore(5);
        }
        setShowMoreBefore(!showMoreBefore);
    }

    const handleShowMoreLessEarly = () => {
        if (showMoreEarly) {
            setNumItemsToShowEarly(activitysEarly.length);
        } else {
            setNumItemsToShowEarly(5);
        }
        setShowMoreEarly(!showMoreEarly);
    }

    const animatedStylesWeek = useAnimatedStyle(() => {
        return {
            transform: [{ rotate: `${rotationIconWeek.value}deg` }],
        };
    });

    const animatedStylesNextWeek = useAnimatedStyle(() => {
        return {
            transform: [{ rotate: `${rotationIconLastWeek.value}deg` }],
        };
    });

    const animatedStylesAfter = useAnimatedStyle(() => {
        return {
            transform: [{ rotate: `${rotationIconBefore.value}deg` }],
        };
    });

    const animatedStylesEarly = useAnimatedStyle(() => {
        return {
            transform: [{ rotate: `${rotationIconEarly.value}deg` }],
        };
    });


    const handlePress = (type) => {
        if(type === 'week'){
            setShowActivitysWeek(!showActivitysWeek);
            rotationIconWeek.value = withTiming(showActivitysWeek ? 0 : 180);
        } else if (type === 'lastWeek'){
            setShowActivitysLastWeek(!showActivitysLastWeek);
            rotationIconLastWeek.value = withTiming(showActivitysLastWeek ? 0 : 180);     
        } else if (type === 'before'){
            setShowBeforeActivitys(!showBeforeActivitys);
            rotationIconBefore.value = withTiming(showBeforeActivitys ? 0 : 180);      
        } else if (type === 'early'){
            setShowEarlyActivitys(!showEarlyActivitys);
            rotationIconEarly.value = withTiming(showEarlyActivitys ? 0 : 180);      
        }
    };


    useEffect(() => {
        async function getActivitysWeek(){
            try {
                if(userData){
                    const week = await getActivitysCompletedWeek(userData.id)
                    setActivitysCompleteWeek(week)
                }
            } catch (error) {
                console.error("Erro ao buscar atividades da semana:", error);
            }
        }

        async function getActivitiesLastWeek(){
           try {
            if(userData){
                const week = await getActivitysCompletedLastWeek(userData.id)
                setActivtysLastWeek(week)
            }
           } catch (error) {
             console.error("Erro ao buscar atividades da próxima semana:", error);
           }
        }
        async function getActivitiesBefore(){
            try {
                if(userData){
                    const week = await getActivitysCompletedBeforeLastWeek(userData.id)
                    setActivtyBefore(week)
                }
            } catch (error){
                console.error('Erro ao buscar atividades depois da próxima semana:', error);
            }
        }

        async function getActivitiesEarly(){
            try {
                if(userData){
                    const week = await getActivitysCompletedEarly(userData.id)
                    setActivtyEarly(week)
                }
            } catch (error){
                console.error('Erro ao buscar atividades depois da próxima semana:', error);
            }
        }
        

        getActivitiesBefore()
        getActivitiesEarly()
        getActivitiesLastWeek()
        getActivitysWeek()
        setLoading(false)
    }, [userData]);

    return(
        <FlatList
			showsVerticalScrollIndicator={false}
            style={{ flex: 1, backgroundColor: 'white', paddingTop:'5%' }}
            data={['week', 'lastWeek', 'before', 'early']}
            keyExtractor={(item) => item}
            renderItem={({ item }) => (
                <View
                    style={{ ...styles.container_button_dropdown, borderTopColor: '#ECECEC', 
                    borderTopWidth: item === 'week' ? (showActivitysWeek ? 2 : 0) : item === 'lastWeek' ? 
                    (showActivitysLastWeek ? 2 : 0) : item === 'before' ? (showBeforeActivitys ? 2 : 0) : (showEarlyActivitys ? 2 : 0) }}>
                    <View style={styles.container_button_list}>
                        <Text style={styles.text_abrir_lista}>
                            {item === 'week' ? 'Essa Semana' : item === 'lastWeek' ? 'Semana passada' : item === 'before' ? 'Mais Antigas' : 'Concluída com antecedência'}
                        </Text>
                        <TouchableOpacity disabled={isDisabled[item]} onPress={() => handlePress(item)} style={{ flexDirection: 'row', gap: 5 }}>
                            {
                                loading ?
                                <ActivityIndicator color='#17A1FA'/>
                                :
                                <Text style={{ 
                                    color: colors[item],
                                    fontFamily: 'Varela-Round', fontSize: 14
                                    }}>
                                    {item === 'week' ? activitysCompleteWeek.length : item === 'lastWeek' ? activitysLastWeek.length : item === 'before' ? activitysBefore.length : activitysEarly.length}
                                </Text>
                            }
                            <Animated.View style={item === 'week' ? animatedStylesWeek : item === 'lastWeek' ? animatedStylesNextWeek : item === 'before' ? animatedStylesAfter : animatedStylesEarly}>
                                <SvgXml xml={svgs.svgArrow} style={{ transform: [{ rotate: '90deg' }] }} width={20} height={20} />
                            </Animated.View>
                        </TouchableOpacity>
                    </View>

                    {item === 'week' && showActivitysWeek && (
                        <FlatList
                            scrollEnabled={activitysCompleteWeek.length >= 3}
                            showsVerticalScrollIndicator={false}
                            data={activitysCompleteWeek.slice(0, numItemsToShowWeek)}
                            renderItem={({ item, index }) => (
                                <ListActivity type={'concluida'} activity={item} index={index} />
                            )}
                            keyExtractor={item => item.id.toString()}
                            ListFooterComponent={
                                <View style={{ alignItems: 'center', borderTopColor: '#ECECEC', borderTopWidth: 2 }}>
                                    {
                                        activitysCompleteWeek.length > 5 &&
                                        <Text style={styles.text_mostrar} onPress={handleShowMoreLessWeek}>{showMoreWeek ? "Mostrar todos" : "Mostrar menos"}</Text>
                                    }
                                </View>
                            }
                        />
                    )}

                    {item === 'lastWeek' && showActivitysLastWeek && (
                        <FlatList
                            scrollEnabled={activitysLastWeek.length >= 3}
                            showsVerticalScrollIndicator={false}
                            data={activitysLastWeek.slice(0, numItemsToShowLastWeek)}
                            renderItem={({ item, index }) => (
                                <ListActivity type={'concluida'} activity={item} index={index} />
                            )}
                            keyExtractor={item => item.id.toString()}
                            ListFooterComponent={
                                <View style={{ alignItems: 'center', borderTopColor: '#ECECEC', borderTopWidth: 2 }}>
                                    {
                                        activitysLastWeek.length>5 &&
                                        <Text style={styles.text_mostrar} onPress={handleShowMoreLessNextWeek}>{showMoreLastWeek ? "Mostrar todos" : "Mostrar menos"}</Text>
                                    }
                                </View>
                            }
                        />
                    )}
                    {item === 'before' && showBeforeActivitys && (
                        <FlatList
                            scrollEnabled={activitysBefore.length >= 3}
                            showsVerticalScrollIndicator={false}
                            data={activitysBefore.slice(0, numItemsToShowBefore)}
                            renderItem={({ item, index }) => (
                                <ListActivity type={'concluida'} activity={item} index={index} />
                            )}
                            keyExtractor={item => item.id.toString()}
                            ListFooterComponent={
                                <View style={{ alignItems: 'center', borderTopColor: '#ECECEC', borderTopWidth: 2 }}>
                                    {
                                        activitysBefore.length > 5 &&
                                        <Text style={styles.text_mostrar} onPress={handleShowMoreLessAfter}>{showMoreBefore ? "Mostrar todos" : "Mostrar menos"}</Text>
                                    }
                                </View>
                            }
                        />
                    )}
                    {item === 'early' && showEarlyActivitys && (
                        <FlatList
                            scrollEnabled={activitysEarly.length >= 3}
                            showsVerticalScrollIndicator={false}
                            data={activitysEarly.slice(0, numItemsToShowEarly)}
                            renderItem={({ item, index }) => (
                                <ListActivity type={'concluida'} activity={item} index={index} />
                            )}
                            keyExtractor={item => item.id.toString()}
                            ListFooterComponent={
                                <View style={{ alignItems: 'center', borderTopColor: '#ECECEC', borderTopWidth: 2 }}>
                                    {
                                        activitysEarly.length > 5 &&
                                        <Text style={styles.text_mostrar} onPress={handleShowMoreLessEarly}>{showMoreEarly ? "Mostrar todos" : "Mostrar menos"}</Text>
                                    }
                                </View>
                            }
                        />
                    )}
                </View>
            )}
        />
    );
}
