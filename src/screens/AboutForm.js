import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, FlatList } from 'react-native';

//importing json data
import { questionData } from '../jsonData';

import DropDownItem from '../components/DropdownItem';
import DatePicker from '../components/DatePicker';


const AboutForm = () => {

    const datePickQus = questionData.filter((item) => item.type == "datepicker")
    const radioQues = questionData.filter((item) => item.type == "radio")

    let OptionsListChecked = []
    let OptionsListUnChecked = []
    const DropDownList = []

    const getOptions = (data) => {
        const RadioQuesData = data.map((item) => item.options.map((item) => item))
        const [FirstOption] = RadioQuesData
        OptionsListChecked = FirstOption.filter((item) => item.checked == true)
        OptionsListUnChecked = FirstOption.filter((item) => item.checked == false)
    }

    const getDropDownList = (data) => {
        const checkedList = data.filter((item) => item.checked == true)
        checkedList.map((item) => DropDownList.push(item.questions))
    }

    getOptions(radioQues)
    getDropDownList(OptionsListChecked)
    const [options] = DropDownList[0].map((item) => item.options)


    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerTxt}>About Your Pregnancy</Text>
            </View>
            <Text style={styles.quesTxt}>{datePickQus.map((item) => item.question)}</Text>
            <View style={{ marginBottom: 50 }}>
                <DatePicker />
            </View>
            <Text style={styles.quesTxt2}>{radioQues.map((item) => item.question)}</Text>
            <View style={styles.firsOption}>
                {
                    OptionsListUnChecked.map((item) =>
                        <Text key={item.optionId} style={styles.uncheckedOption}>{item.text}</Text>)
                }
                <View style={styles.verticleLine}></View>
                {
                    OptionsListChecked.map((item) =>
                        <Text key={item.optionId} style={styles.checkedOption}>{item.text}</Text>)
                }
            </View>
            <View style={styles.horizontalLine}></View>
            {
                OptionsListChecked.map((item) =>
                    (<Text key={item.optionId} style={styles.quesTxt}>{item.questions.map((item) => item.question)}</Text>))

            }
            <View style={styles.horizontalLine}></View>

            <View>
                <FlatList
                    data={options}
                    keyExtractor={(item) => item.optionId.toString()}
                    renderItem={({ item }) => <DropDownItem {...item} />}
                />

            </View>
            <TouchableOpacity style={styles.nxtBtn}>
                <Text style={{ fontSize: 18, color: 'white' }}>Next</Text>
            </TouchableOpacity>
            <TouchableOpacity>
                <Text style={styles.skipTxt}>Skip</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center'
    },
    header: {
        height: 60,
        width: '100%',
        backgroundColor: '#0fb500',
        alignItems: 'center',
        justifyContent: 'center',
    },
    headerTxt: {
        color: "#e9ede8",
        fontSize: 24,
        marginTop: 30,
        marginBottom: 20
    },
    quesTxt: {
        fontSize: 18,
        marginTop: 20,
        marginBottom: 20,
        marginHorizontal: 12,
        textAlign: 'center'
    },
    quesTxt2: {
        fontSize: 18,
        marginTop: 20,
        marginHorizontal: 12,
        textAlign: 'center'
    },
    firsOption: {
        paddingTop: 40,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        width: '100%',
        marginBottom: 20,
    },
    checkedOption: {
        fontSize: 34,
        color: '#0fb500',
    },
    uncheckedOption: {
        fontSize: 34
    },
    nxtBtn: {
        backgroundColor: '#0fb500',
        height: 50,
        width: 340,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 30
    },
    skipTxt: {
        color: '#0fb500',
        fontSize: 18,
        marginTop: 10
    },
    verticleLine: {
        height: '100%',
        width: 1,
        backgroundColor: '#b8b6b6',
    },
    horizontalLine: {
        height: 1,
        width: 340,
        backgroundColor: '#b8b6b6',
    }

})

export default AboutForm;