import React, { useEffect, useState} from 'react';
import moment from 'moment';
import { addDays, format, getDate, isSameDay, startOfWeek } from 'date-fns';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';


export default function Calender({date, onChange}) {
  const [week, setWeek] = useState([]);

  useEffect(() => {
    const weekDays = getWeekDays(date);
    setWeek(weekDays);
  }, [date]);
  
  return (
    <View style={styles.calender}>
      <View style={styles.container}>
        {week.map((weekDay) => {
          const textStyles = [styles.label];
          const touchable = [styles.touchable];
          const sameDay = isSameDay(weekDay.date, date);
          if (sameDay) {
            textStyles.push(styles.selectedLabel);
            touchable.push(styles.selectedTouchable);
          }
          return (
            <View style={styles.weekDayItem} key={weekDay.formatted}>
              <Text style={styles.weekDayText}>{weekDay.formatted}</Text>
              <TouchableOpacity
                style={touchable}
                onPress={() => onChange(weekDay.date)}>
                <Text style={textStyles}>{weekDay.day}</Text>
              </TouchableOpacity>
            </View>
          );
        })}
      </View>
      <View style={{alignItems:'center'}}><Text style={{fontWeight:'700',color:'#fff'}}>{'Showtimes for ' + (moment(date).format('LLLL')).slice(0,-8)}</Text></View>
    </View>
  );
};

const styles = StyleSheet.create({
  calender:{
    paddingVertical:20,
    backgroundColor:'rgba(0,0,0,0.8)'
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 10,
  
  },
  weekDayText: {
    color: '#fff',
    marginBottom: 5,
  },
  label: {
    fontSize: 14,
    color: '#fff',
    textAlign: 'center',
  },
  selectedLabel: {
    color: 'white',
  },
  touchable: {
    borderRadius: 20,
    padding: 7.5,
    height: 35,
    width: 35,
  },
  selectedTouchable: {
    backgroundColor: 'green',
  },
  weekDayItem: {
    alignItems: 'center',
  },
});



// get week days
export const getWeekDays = date => {
  const start = startOfWeek(date, {weekStartsOn: 1});

  const final = [];

  for (let i = 0; i < 7; i++) {
    const date = addDays(start, i);
    final.push({
      formatted: format(date, 'EEE'),
      date,
      day: getDate(date),
    });
  }

  return final;
};

