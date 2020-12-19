import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, TouchableHighlight, Dimensions, ScrollView, FlatList } from 'react-native';
// import { useEffect } from 'react/cjs/react.development';

const ViewHistory = ({ route, navigation })=> {
    const { data, remove, empty } = route.params;
    



    return (
        
        <View style={styles.container}>

            <View style={styles.heading}>
                <Text style={styles.headingText}>Original Price</Text>
                <Text style={styles.headingText}>Discount %</Text>
                <Text style={styles.headingText}>Final Price</Text>
            </View>
            {data.map((item, key) => (
                <View key={key}>
                    <TouchableHighlight underlayColor='green' style={styles.array} onPress={remove.bind(this, item.key)}>
                        <View style={styles.ViewList}>
                            <Text style={styles.arrayText}>{item.price}</Text>
                            <Text style={styles.arrayText}>{item.disc} %</Text>
                            <Text style={styles.arrayText}> {item.fprice}</Text>
                        </View>
                    </TouchableHighlight>
                </View>
            ))}
            <View style={styles.buttonsView}>
                    <TouchableHighlight style={styles.btns} onPress={empty}>
                        <Text style={{ fontSize: 20, color: 'white' }}>
                            Clear History
                        </Text>
                    </TouchableHighlight>
                    <TouchableHighlight style={styles.btns} onPress={() => {navigation.navigate('Home')}}>
                        <Text style={{ fontSize: 20, color: 'white' }}>
                            Go Back
                        </Text>
                    </TouchableHighlight>
                </View>
        </View >
    );
};
const styles = StyleSheet.create({
    container: {
        paddingTop: 50, 
        flex: 1,
        backgroundColor: 'black',
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    heading: { 
        flexDirection: 'row', 
        marginHorizontal: 25 ,
        
    },
    headingText: {
        color: 'white',
        marginVertical: 10,
        justifyContent: 'space-between',
        marginHorizontal: 20,
        fontSize: 20,
    },
    array: {
        margin: 10,
        borderColor: 'green',
        borderWidth: 3,
        justifyContent: 'center',
    },
    ViewList: {
        height: 30,
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: Dimensions.get('screen').width -30,
    },
    arrayText: {
        color: 'white',
        justifyContent: 'space-between',
        marginHorizontal: 40,
        fontSize: 15
    },
    buttonsView: {
        alignItems: 'center',
        flexDirection: 'column',
        justifyContent: 'center',
    },

    btns: {
        alignItems: 'center',
        borderColor: 'green',
        borderRadius: 5,
        borderWidth: 2,
        height: 50,
        justifyContent: 'center',
        marginVertical: 5,
        width: 250,
    }
});
export default ViewHistory;
