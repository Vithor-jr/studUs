import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, Pressable } from "react-native";
import { SvgXml } from "react-native-svg";
import styles from "./style";
import svgs from "../../../assets/svg";

import { icons } from "../../../assets/svg/iconsTimer";
import { useUserContext } from "../../context/UserContext";
import { useNavigation } from "@react-navigation/native";
import { CreateSessions } from "./functions/functions";

import ModalConfirm from "../Home/Components/ModalConfirm";
import ModalMessage from "../Home/Components/ModalMessage";
import EditSession from "./components/EditSession/EditSession";
import ContainerSessions from "./components/ContainerSessions";
import CircularSlider from "./components/CircleSlider";
import TimerSelector from "./components/SelectTimer";

export default function Timer() {
    const navigate = useNavigation();
    const { userData } = useUserContext();
    const [minutes, setMinutes] = useState(0);
    const [isActive, setIsActive] = useState(false);

    const [failure, setFailure] = useState(false);
    const [selectorTimerVisible, setSelectorTimerVisible] = useState(false);
    const [editSessionsVisible, setEditSessionsVisible] = useState(false);
    const [sessionsVisible, setSessionsVisible] = useState(false);

    const [sliderValue, setSliderValue] = useState(0);
    const [minutos, setMinutos] = useState(0);
    const [segundos, setSegundos] = useState(0);

    const [message, setMessage] = useState('');

    //---State---
    const [edited, setEdited] = useState(false);
    const [selectedTimer, setSelectedTimer] = useState(false);
    const [finish, setFinish] = useState(false);

    //----Session Data-----
    const [duration, setDuration] = useState(0);
    const [title, setTitle] = useState('');
		const [categorieColor, setCategorieColor] = useState('')
    const [categorie, setCategorie] = useState('Categoria');
    const [categorieId, setCategorieId] = useState();

    //--- Time tracking ---
    const [startTime, setStartTime] = useState(null);
    const [endTime, setEndTime] = useState(null);

    useEffect(() => {
        function getMinutesAndSeconds() {
            const totalSeconds = sliderValue * 20;
            setMinutos(Math.floor(totalSeconds / 60));
            setSegundos(totalSeconds % 60);
        }

        getMinutesAndSeconds();

        if (sliderValue !== 0 && !selectedTimer) {
            setSelectedTimer(true);
        } else if (sliderValue === 0 && selectedTimer) {
            setSelectedTimer(false);
        }
    }, [sliderValue]);

    useEffect(() => {
        if (isActive && minutos === 0 && segundos === 0) {
            setFinish(true);
            setIsActive(false);
            
            const end = new Date().toISOString();
            setEndTime(end);
        }
    }, [minutos, segundos, isActive]);

    function toggle() {
        if (sliderValue !== 0 && edited) {
            if (!isActive) {
                const totalSeconds = sliderValue * 20;
                const start = new Date().toISOString();

								setDuration(totalSeconds);
								setSelectorTimerVisible(false)
                setStartTime(start);
            } else {
							setFailure(true)
						}
						setIsActive(!isActive)
        } else if (!selectedTimer) {
            return setMessage(`Defina um tempo para o temporizador. Faça isso segurando e deslizando o círculo localizado na circunferência do temporizador`);
        } else if (!edited) {
            return setMessage(`Defina os dados para essa sessão. Faça isso clicando no botão 'Estudos' inferior a circunferência`);
        }
    }

    async function functionFinish() {
        const response = await CreateSessions(title, startTime, endTime, duration, userData.id, categorieId);
        setFinish(false);
    }

    return (
        <View style={styles.container}>
            {/* Cabeçalho */}
            <View style={styles.container_top}>
                <TouchableOpacity onPress={() => navigate.openDrawer()}>
                    <SvgXml xml={svgs.svgDrawer} width={25} height={15} />
                </TouchableOpacity>
            </View>

            <View style={{ width: '100%', alignItems: 'center' }}>
                <TouchableOpacity style={styles.container_text_button} onPress={() => setSessionsVisible(true)}>
										<Text style={styles.text_button}>Sessões</Text>
                </TouchableOpacity>
            </View>

            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <CircularSlider
                    width={290}
                    disabled={isActive}
                    height={290}
                    value={sliderValue}
                    meterColor="#3B267B"
                    onValueChange={setSliderValue}
                />

                {/* Rodapé */}
                <TouchableOpacity 
                    style={{ ...styles.container_text_button, marginTop: 30 }}
                    onPress={() => setEditSessionsVisible(true)}
                >
									 {
										categorieColor !== '' &&  <View style={{...styles.circle, backgroundColor:categorieColor}}/>
									 }
                    <Text style={styles.text_button}>{categorie !== 'Categoria' ? categorie : 'Estudos'}</Text>
                </TouchableOpacity>

                <Pressable
                    style={{width:'100%'}}
                    onLongPress={()=>setSelectorTimerVisible(!selectorTimerVisible)}
                    disabled={isActive}
                >
                    {
                      selectorTimerVisible ? <TimerSelector value={(sliderValue*120)/360} setValue={(value)=>setSliderValue((value/120) * 360)}/>
                        : ( minutos >= 0 && segundos >= 0 ? (
                            <Text style={styles.text_timer}>
                                {String(minutos).padStart(2, '0')}:{String(segundos.toFixed(0)).padStart(2, '0')}
                            </Text>
                        ) : (
                            <Text style={styles.text_timer}>00:00</Text>
                        ))
                    }
                </Pressable>

                <TouchableOpacity 
                    onPress={toggle} 
                    style={styles.container_button}
                >
                    <Text style={{ ...styles.text_button, fontSize: 15 }}>
                        {isActive ? 'Desistir' : 'Iniciar'}
                    </Text>
                </TouchableOpacity>
            </View>

            {/* Modais */}
            {sessionsVisible && <ContainerSessions  functionFechar={() => setSessionsVisible(false)} />}
            {editSessionsVisible && (
                <EditSession 
                    onClose={() => {
                        if (categorie !== '' && title !== '') {
                            setEdited(true);
                        } else {
                            setEdited(false);
                        }
                        setEditSessionsVisible(false);
                    }}
										setColorCategorie={(value)=>setCategorieColor(value)}
                    setCategorieId={(value)=>setCategorieId(value)}
                    categorie={categorie}
                    title={title}
                    setCategorie={(value) => setCategorie(value)}
                    setTitle={(value) => setTitle(value)}
                />
            )}

            {failure && <ModalConfirm text='Quer mesmo desistir?' 
                onClose={(value)=>{
                    if(value){
                        setSliderValue(0), 
                        setFailure(false)
                    } else {
                        setIsActive(true)
                        setFailure(false)    
                    }}
                }
            />}
            {message !== '' && <ModalMessage text={message} onClose={() => setMessage('')} />}
            {finish && <ModalMessage type='sucess' text='Parabéns!!!' onClose={functionFinish} />}
        </View>
    );
}