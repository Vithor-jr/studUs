import Animated, { useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';
import React, { useEffect, useState } from "react";
import { SvgXml } from "react-native-svg";
import { 
    View,
    Text,
    FlatList,
    TouchableOpacity,
    ActivityIndicator
} from "react-native";

import styles from "../styles";
import { useUserContext } from "../../../context/UserContext";
import { useActivityContext } from "../../../context/ActivitysContext";
import svgs from "../../../../assets/svg";
import ListActivity from "../components/ticketActivitys";

import {
    getActivtysWeek,
    getActivtysNextWeek,
    getActivitysAfterNextWeek
} from "../getActivitys";

export default function ActiitysAtribuias() {
    const { userData } = useUserContext();
    const {
        activitysWeek, setActivitysWeek,
        activitysNextWeek, setActivtysNextWeek,
        activitysAfterNextWeek, setActivtysAfterNextWeek,
    } = useActivityContext();
    
    const [loading, setLoading] = useState(true)

    const [numItemsToShowWeek, setNumItemsToShowWeek] = useState(5);
    const [numItemsToShowNextWeek, setNumItemsToShowNextWeek] = useState(5);
    const [numItemsToShowAfter, setNumItemsToShowAfter] = useState(5);

    const [showMoreWeek, setShowMoreWeek] = useState(true);
    const [showMoreNextWeek, setShowMoreNextWeek] = useState(true);
    const [showMoreAfter, setShowMoreAfter] = useState(true);

    const rotationIconWeek = useSharedValue(0);
    const rotationIconNextWeek = useSharedValue(0);
    const rotationIconAfter = useSharedValue(0);

    const [showActivitysWeek, setShowActivitysWeek] = useState(false);
    const [showActivitysNextWeek, setShowActivitysNextWeek] = useState(false);
    const [showAfterActivitys, setShowAfterActivitys] = useState(false);

    const colors = {
    'week': activitysWeek.length === 0 ? '#000000' : '#17A1FA',
    'nextWeek': activitysNextWeek.length === 0 ? '#000000' : '#17A1FA',
    'after': activitysAfterNextWeek.length === 0 ? '#000000' : '#17A1FA'
    };

    const isDisabled = {
    'week': activitysWeek.length === 0,
    'nextWeek': activitysNextWeek.length === 0,
    'after': activitysAfterNextWeek.length === 0
    };
    
    useEffect(() => {
        async function getActivitysWeek(){
            try {
                if(userData){
                    const week = await getActivtysWeek(userData.id);
                    setActivitysWeek(week);
                }
            } catch (error) {
                console.error("Erro ao buscar atividades da semana:", error);
            }
        }

        async function getActivitiesNextWeek(){
           try {
            if(userData){
                const week = await getActivtysNextWeek(userData.id)
                setActivtysNextWeek(week)
            }
           } catch (error) {
             console.error("Erro ao buscar atividades da próxima semana:", error);
           }
        }
        async function getActivitiesAfterNextWeek(){
            try {
                if(userData){
                    const week = await getActivitysAfterNextWeek(userData.id);
                    setActivtysAfterNextWeek(week);
                }
            } catch (error){
                console.error('Erro ao buscar atividades depois da próxima semana:', error);
            }
        }
        

        getActivitiesAfterNextWeek()
        getActivitysWeek()
        getActivitiesNextWeek()
        setLoading(false)
    }, [userData]);

    const handleShowMoreLessWeek = () => {
        if (showMoreWeek) {
            setNumItemsToShowWeek(activitysWeek.length);
        } else {
            setNumItemsToShowWeek(5);
        }
        setShowMoreWeek(!showMoreWeek);
    }
    
    const handleShowMoreLessNextWeek = () => {
        if (showMoreNextWeek) {
            setNumItemsToShowNextWeek(activitysNextWeek.length);
        } else {
            setNumItemsToShowNextWeek(5);
        }
        setShowMoreNextWeek(!showMoreNextWeek);
    }
    
    const handleShowMoreLessAfter = () => {
        if (showMoreAfter) {
            setNumItemsToShowAfter(activitysAfterNextWeek.length);
        } else {
            setNumItemsToShowAfter(5);
        }
        setShowMoreAfter(!showMoreAfter);
    }    

    const animatedStylesWeek = useAnimatedStyle(() => {
        return {
            transform: [{ rotate: `${rotationIconWeek.value}deg` }],
        };
    });

    const animatedStylesNextWeek = useAnimatedStyle(() => {
        return {
            transform: [{ rotate: `${rotationIconNextWeek.value}deg` }],
        };
    });

    const animatedStylesAfter = useAnimatedStyle(() => {
        return {
            transform: [{ rotate: `${rotationIconAfter.value}deg` }],
        };
    });

    const handlePress = (type) => {
        if(type === 'week'){
            setShowActivitysWeek(!showActivitysWeek);
            rotationIconWeek.value = withTiming(showActivitysWeek ? 0 : 180);
        } else if (type === 'nextWeek'){
            setShowActivitysNextWeek(!showActivitysNextWeek);
            rotationIconNextWeek.value = withTiming(showActivitysNextWeek ? 0 : 180);     
        } else if (type === 'after'){
            setShowAfterActivitys(!showAfterActivitys);
            rotationIconAfter.value = withTiming(showAfterActivitys ? 0 : 180);      
        }
    };

    return(
        <FlatList
			showsVerticalScrollIndicator={false}
            style={{ flex: 1, backgroundColor: 'white', paddingTop:'5%'}}
            data={['week', 'nextWeek', 'after']}
            keyExtractor={(item) => item}
            renderItem={({ item }) => (
                <View style={{ ...styles.container_button_dropdown, borderTopColor: '#ECECEC', borderTopWidth: item === 'week' ? (showActivitysWeek ? 2 : 0) : item === 'nextWeek' ? (showActivitysNextWeek ? 2 : 0) : (showAfterActivitys ? 2 : 0) }}>
                    <View style={styles.container_button_list}>
                        <Text style={styles.text_abrir_lista}>
                            {item === 'week' ? 'Essa Semana' : item === 'nextWeek' ? 'Próxima semana' : 'Para depois'}
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
                                    {item === 'week' ? activitysWeek.length : item === 'nextWeek' ? activitysNextWeek.length : activitysAfterNextWeek.length}
                                </Text>
                            }
                            <Animated.View style={item === 'week' ? animatedStylesWeek : item === 'nextWeek' ? animatedStylesNextWeek : animatedStylesAfter}>
                                <SvgXml xml={svgs.svgArrow} style={{ transform: [{ rotate: '90deg' }] }} width={20} height={20} />
                            </Animated.View>
                        </TouchableOpacity>
                    </View>
                    {item === 'week' && showActivitysWeek && (
                        <FlatList
                            scrollEnabled={activitysWeek.length >= 3}
                            showsVerticalScrollIndicator={false}
                            data={activitysWeek.slice(0, numItemsToShowWeek)}
                            renderItem={({ item, index }) => (
                                <ListActivity type={'atribuida'} activity={item} index={index} />
                            )}
                            keyExtractor={item => item.id.toString()}
                            ListFooterComponent={
                                <View style={{ alignItems: 'center', borderTopColor: '#ECECEC', borderTopWidth: 2 }}>
                                    {
                                        activitysWeek.length > 5 && 
                                        <Text style={styles.text_mostrar} onPress={handleShowMoreLessWeek}>{showMoreWeek ? "Mostrar todos" : "Mostrar menos"}</Text>
                                    }
                                </View>
                            }
                        />
                    )}
                    {item === 'nextWeek' && showActivitysNextWeek && (
                        <FlatList
                            scrollEnabled={activitysNextWeek.length >= 3}
                            showsVerticalScrollIndicator={false}
                            data={activitysNextWeek.slice(0, numItemsToShowNextWeek)}
                            renderItem={({ item, index }) => (
                                <ListActivity type={'atribuida'} activity={item} index={index} />
                            )}
                            keyExtractor={item => item.id.toString()}
                            ListFooterComponent={
                                <View style={{ alignItems: 'center', borderTopColor: '#ECECEC', borderTopWidth: 2 }}>
                                    {
                                        activitysNextWeek.length>5 &&
                                        <Text style={styles.text_mostrar} onPress={handleShowMoreLessNextWeek}>{showMoreNextWeek ? "Mostrar todos" : "Mostrar menos"}</Text>
                                    }
                                </View>
                            }
                        />
                    )}
                    {item === 'after' && showAfterActivitys && (
                        <FlatList
                            scrollEnabled={activitysAfterNextWeek.length >= 3}
                            showsVerticalScrollIndicator={false}
                            data={activitysAfterNextWeek.slice(0, numItemsToShowAfter)}
                            renderItem={({ item, index }) => (
                                <ListActivity type={'atribuida'} activity={item} index={index} />
                            )}
                            keyExtractor={item => item.id.toString()}
                            ListFooterComponent={
                                <View style={{ alignItems: 'center', borderTopColor: '#ECECEC', borderTopWidth: 2 }}>
                                    {
                                        activitysAfterNextWeek.length > 5 && 
                                        <Text style={styles.text_mostrar} onPress={handleShowMoreLessAfter}>{showMoreAfter ? "Mostrar todos" : "Mostrar menos"}</Text>
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
