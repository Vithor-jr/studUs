import Animated, { useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';
import React, { useState, useEffect } from "react";
import { SvgXml } from "react-native-svg";
import svgs from "../../../../assets/svg";
import { 
    View,
    Text,
    FlatList,
    TouchableOpacity,
    ActivityIndicator
} from "react-native";

import { 
    getActivitysNotCompletedBeforeLastWeek,
    getActivitysNotCompletedLastWeek,
    getActivitysNotCompletedWeek 
} from "../getActivitys";

import ListActivity from "../components/ticketActivitys";
import styles from "../styles";
import { useActivityContext } from '../../../context/ActivitysContext';
import { useUserContext } from "../../../context/UserContext";

export default function ActiitysPendentes() {
    const { userData } = useUserContext();
    const {
        activitysNotCompletedWeek, setActivtysNotCompletedWeek,
        activitysNotCompletedLastWeek, setActivtysNotCompletedLastWeek,
        activitysNotCompletedBeforeLastWeek, setActivtysNotCompletedBeforeLastWeek,
    } = useActivityContext();

    const [isAllComplete, setIsAllComplete] = useState(true)
    const [loading, setLoading] = useState(true)

    const [numItemsToShowWeek, setNumItemsToShowWeek] = useState(5);
    const [numItemsToShowLastWeek, setNumItemsToShowLastWeek] = useState(5);
    const [numItemsToShowBefore, setNumItemsToShowBefore] = useState(5);    

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
    'week': activitysNotCompletedWeek.length === 0 ? '#000000' : '#17A1FA',
    'lastWeek': activitysNotCompletedLastWeek.length === 0 ? '#000000' : '#17A1FA',
    'before': activitysNotCompletedBeforeLastWeek.length === 0 ? '#000000' : '#17A1FA'
    };

    const isDisabled = {
    'week': activitysNotCompletedWeek.length === 0,
    'lastWeek': activitysNotCompletedLastWeek.length === 0,
    'before': activitysNotCompletedBeforeLastWeek.length === 0
    };


    useEffect(() => {
        async function getActivitysWeek(){
            try {
                if(userData){
                    const week = await getActivitysNotCompletedWeek(userData.id)
                    setActivtysNotCompletedWeek(week);
                }
            } catch (error) {
                console.error("Erro ao buscar atividades da semana:", error);
            }
        }

        async function getActivitiesNextWeek(){
           try {
            if(userData){
                const week = await getActivitysNotCompletedLastWeek(userData.id)
                setActivtysNotCompletedLastWeek(week)
            }
           } catch (error) {
             console.error("Erro ao buscar atividades da próxima semana:", error);
           }
        }
        async function getActivitiesAfterNextWeek(){
            try {
                if(userData){
                    const week = await getActivitysNotCompletedBeforeLastWeek(userData.id)
                    setActivtysNotCompletedBeforeLastWeek(week);
                }
            } catch (error){
                console.error('Erro ao buscar atividades depois da próxima semana:', error);
            }
        }
        

        function isActivitysNotCompleted(){
            if(activitysNotCompletedBeforeLastWeek.length + activitysNotCompletedLastWeek.length + activitysNotCompletedWeek.length != 0){
                setIsAllComplete(false)
            }
        }

        getActivitiesAfterNextWeek()
        getActivitysWeek()
        getActivitiesNextWeek()
        isActivitysNotCompleted()
        setLoading(false)
    }, [userData]);

    const handleShowMoreLessWeek = () => {
        if (showMoreWeek) {
            setNumItemsToShowWeek(activitysNotCompletedWeek.length);
        } else {
            setNumItemsToShowWeek(5);
        }
        setShowMoreWeek(!showMoreWeek);
    }

    const handleShowMoreLessNextWeek = () => {
        if (showMoreNextWeek) {
            setNumItemsToShowLastWeek(activitysNotCompletedLastWeek.length);
        } else {
            setNumItemsToShowLastWeek(5);
        }
        setShowMoreNextWeek(!showMoreNextWeek);
    }

    const handleShowMoreLessAfter = () => {
        if (showMoreAfter) {
            setNumItemsToShowBefore(activitysNotCompletedBeforeLastWeek.length);
        } else {
            setNumItemsToShowBefore(5);
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
        } else if (type === 'lastWeek'){
            setShowActivitysNextWeek(!showActivitysNextWeek);
            rotationIconNextWeek.value = withTiming(showActivitysNextWeek ? 0 : 180);     
        } else if (type === 'before'){
            setShowAfterActivitys(!showAfterActivitys);
            rotationIconAfter.value = withTiming(showAfterActivitys ? 0 : 180);      
        }
    };

    return(
        isAllComplete ? 
        <View style={{flex:1, backgroundColor:'white', alignItems:'center', paddingTop:'10%', gap:30}}>
            <SvgXml xml={svgs.svgImageActivitys}/>
            <Text style={{fontFamily:'Varela-Round', fontSize:12}}>Não há nada pendente. Bom trabalho!</Text>
        </View> :
        <FlatList
			showsVerticalScrollIndicator={false}
            style={{ flex: 1, backgroundColor: 'white', paddingTop:'5%' }}
            data={['week', 'lastWeek', 'before']}
            keyExtractor={(item) => item}
            renderItem={({ item }) => (
                <View style={{ ...styles.container_button_dropdown, borderTopColor: '#ECECEC', borderTopWidth: item === 'week' ? (showActivitysWeek ? 2 : 0) : item === 'lastWeek' ? (showActivitysNextWeek ? 2 : 0) : (showAfterActivitys ? 2 : 0) }}>
                    <View style={styles.container_button_list}>
                        <Text style={styles.text_abrir_lista}>
                            {item === 'week' ? 'Essa Semana' : item === 'lastWeek' ? 'Semana Passada' : 'Mais Antigas'}
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
                                    {item === 'week' ? activitysNotCompletedWeek.length : item === 'lastWeek' ? activitysNotCompletedLastWeek.length : activitysNotCompletedBeforeLastWeek.length}
                                </Text>
                            }

                            <Animated.View style={item === 'week' ? animatedStylesWeek : item === 'lastWeek' ? animatedStylesNextWeek : animatedStylesAfter}>
                                <SvgXml xml={svgs.svgArrow} style={{ transform: [{ rotate: '90deg' }] }} width={20} height={20} />
                            </Animated.View>
                        </TouchableOpacity>
                    </View>
                    {item === 'week' && showActivitysWeek && (
                        <FlatList
                            scrollEnabled={activitysNotCompletedWeek.length >= 3}
                            showsVerticalScrollIndicator={false}
                            data={activitysNotCompletedWeek.slice(0, numItemsToShowWeek)}
                            renderItem={({ item, index }) => (
                                <ListActivity type={'pendente'} activity={item} index={index} />
                            )}
                            keyExtractor={item => item.id.toString()}
                            ListFooterComponent={
                                <View style={{ alignItems: 'center', borderTopColor: '#ECECEC', borderTopWidth: 2 }}>
                                    {activitysNotCompletedWeek.length > 5 && 
                                        <Text style={styles.text_mostrar} onPress={handleShowMoreLessWeek}>{showMoreWeek ? "Mostrar todos" : "Mostrar menos"}</Text>
                                    }
                                </View>
                            }
                        />
                    )}
                    {item === 'lastWeek' && showActivitysNextWeek && (
                        <FlatList
                            scrollEnabled={activitysNotCompletedLastWeek.length >= 3}
                            showsVerticalScrollIndicator={false}
                            data={activitysNotCompletedLastWeek.slice(0, numItemsToShowLastWeek)}
                            renderItem={({ item, index }) => (
                                <ListActivity type={'pendente'} activity={item} index={index} />
                            )}
                            keyExtractor={item => item.id.toString()}
                            ListFooterComponent={
                                <View style={{ alignItems: 'center', borderTopColor: '#ECECEC', borderTopWidth: 2 }}>
                                    {activitysNotCompletedLastWeek.length > 5 &&
                                        <Text style={styles.text_mostrar} onPress={handleShowMoreLessNextWeek}>{showMoreNextWeek ? "Mostrar todos" : "Mostrar menos"}</Text>
                                    }
                                </View>
                            }
                        />
                    )}
                    {item === 'before' && showAfterActivitys && (
                        <FlatList
                            scrollEnabled={activitysNotCompletedBeforeLastWeek.length >= 3}
                            showsVerticalScrollIndicator={false}
                            data={activitysNotCompletedBeforeLastWeek.slice(0, numItemsToShowBefore)}
                            renderItem={({ item, index }) => (
                                <ListActivity type={'pendente'} activity={item} index={index} />
                            )}
                            keyExtractor={item => item.id.toString()}
                            ListFooterComponent={
                                <View style={{ alignItems: 'center', borderTopColor: '#ECECEC', borderTopWidth: 2 }}>
                                    {activitysNotCompletedBeforeLastWeek.length > 5 &&
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
