import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import moment from 'moment';
import 'moment/locale/pt-br';
import { useActivityContext } from '../../../context/ActivitysContext';
import { useUserContext } from '../../../context/UserContext';
import { styles } from './style';
import CalendarStrip from 'react-native-calendar-strip';
import { getActivtysWeek } from '../../Activitys/getActivitys';

export default function CalendarWeek() {
  const { userData } = useUserContext();
  const { activitysWeek, setActivitysWeek } = useActivityContext();

  useEffect(() => {
    async function getActivies() {
      async function getActivitysWeek() {
        try {
          if (userData) {
            const week = await getActivtysWeek(userData.id);
            setActivitysWeek(week);
          }
        } catch (error) {
          console.error('Erro ao buscar atividades da semana:', error);
        }
      }

      getActivitysWeek();

      console.log(activitysWeek);
    }

    getActivies();
  }, [userData]);

  const textBackgroundStyle = {
    backgroundColor: '#17A1FA',
  };

  const renderDay = (day) => {
    if (moment(day).isValid()) {
      const activity = activitysWeek.find((act) =>
        moment(act.dueDate).isSame(day, 'day')
      );

      const hasActivity = !!activity;

      return (
        <View style={[styles.container_day_week]}>
          <View style={[styles.container_day, hasActivity && textBackgroundStyle]}>
            <Text style={{ ...styles.text_number, color: hasActivity ? 'white' : '#B3B3B3' }}>
              {moment(day).format('D')}
            </Text>
          </View>
        </View>
      );
    } else {
      return null;
    }
  };

  return (
    <View style={{ width: '100%', height: '70%' }}>
      <View style={styles.container_week_name}>
        <Text style={styles.text_calendar_week}>Seg</Text>
        <Text style={styles.text_calendar_week}>Ter</Text>
        <Text style={styles.text_calendar_week}>Qua</Text>
        <Text style={styles.text_calendar_week}>Qui</Text>
        <Text style={styles.text_calendar_week}>Sex</Text>
        <Text style={styles.text_calendar_week}>Sáb</Text>
        <Text style={styles.text_calendar_week}>Dom</Text>
      </View>

      <CalendarStrip
        leftSelector={[]}
        rightSelector={[]}
        calendarHeaderFormat="MMMM - yyyy"
        calendarHeaderContainerStyle={styles.header_week_names}
        style={styles.container_calendar_week}
        calendarHeaderStyle={styles.text_month_year}
        dayComponent={(day) => renderDay(day.date)}
      />
    </View>
  );
}
