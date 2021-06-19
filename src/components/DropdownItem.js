import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Icon } from 'react-native-elements';

const DropDownItem = (props) => {


    return (
        <View style={styles.container}>
            <View style={styles.firsOption}>
                <Text style={props.checked? {color: 'black', fontSize: 16}: {color: 'black', fontSize: 16}}>{props.text}</Text>
                {
                    props.checked == true ?
                        <Icon style={styles.icon}
                            name="done"
                            color="green" /> :
                        <Text></Text>
                }
            </View>

            <View style={styles.horizontalLine}></View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: 10
    },
    horizontalLine: {
        height: 1,
        width: 340,
        backgroundColor: '#b8b6b6',
        marginTop: 10
    },
    icon: {
        flexDirection: 'row-reverse',
    },
    firsOption: {
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%'
    },
})

export default DropDownItem;