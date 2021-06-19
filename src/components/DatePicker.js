import DateTimePicker from '@react-native-community/datetimepicker';
import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, FlatList } from 'react-native';

const DatePicker = () => {
    const [date, setDate] = useState(new Date());
    const [show, setShow] = useState(false);
    //date picker methods
    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        setShow(Platform.OS === 'ios');
        setDate(currentDate);
    };

    const showDatepicker = () => {
        setShow(true);
    };

    return (
        <View>
            <TouchableOpacity
                style={styles.datePickr}
                onPress={showDatepicker}
            >
                <Text style={{ fontSize: 18, color: 'white' }}>Select Date</Text>
            </TouchableOpacity>
            <View>
                {show && (
                    <DateTimePicker
                        testID="dateTimePicker"
                        value={date}
                        mode='date'
                        is24Hour={true}
                        display='spinner'
                        onChange={onChange}
                    />
                )}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    datePickr: {
        backgroundColor: '#0fb500',
        height: 50,
        width: 280,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 80
    }
})

export default DatePicker;