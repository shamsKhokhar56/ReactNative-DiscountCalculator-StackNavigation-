import React, { useEffect, useState } from 'react';
import { StyleSheet, TextInput, Text, View, TouchableHighlight, KeyboardAvoidingView } from 'react-native';
import { set } from 'react-native-reanimated';
import ViewHistory from './ViewHistory';

const MainScreen = ({ navigation }) => {
    const [origPrice, setOrigPrice] = useState('');
    const [discount, setDiscount] = useState('');
    const [savePrice, setSavePrice] = useState();
    const [finalPrice, setFinalPrice] = useState();
    const [array, setArray] = useState([])

    useEffect(
        () => {
            if (discount > 100) {
                alert("Discount percentage cannot be greater than 100");
                setSavePrice(0);
                setFinalPrice(0);
            }
            else {
                var x = (origPrice * discount) / 100;
                setSavePrice(x);
                const y = origPrice - x;
                setFinalPrice(y);

            }
        },
        [
            discount, origPrice, array
        ]
    )
    

    addingResults = () => {
        setArray([...array, {
            key: Math.random().toString(),
            price: origPrice,
            disc: discount,
            fprice: Math.round(finalPrice).toString()
        }])
    }

    removeItem = itemId => {
        setArray((prevArray) => {
            return prevArray.filter(calc => calc.key != itemId)
        })
        setOrigPrice(0)
        setDiscount(0)
        navigation.navigate('Home')

    }

    deleteAll = () => {
        setOrigPrice(0)
        setDiscount(0)
        {setArray([])}
        navigation.navigate('Home')
    }


    return (
        <KeyboardAvoidingView style={styles.container}>
            <View style={styles.header}>
                <Text style={{ fontSize: 40, color: 'white', borderBottomColor: 'green', borderBottomWidth: 5 }}>
                    Discount Calculator
                </Text>
            </View>
            <View style={styles.middle}>
                <Text style={styles.textHeadings}>
                    Enter Original Price
                </Text>
                <TextInput style={styles.fields}
                    onChangeText={text => setOrigPrice(text)}
                    value={origPrice}
                    keyboardType="number-pad"
                    placeholder="0"
                    placeholderTextColor='white'

                />
                <Text style={styles.textHeadings}>
                    Enter Disount Percentage
        </Text>
                <TextInput
                    style={styles.fields}
                    onChangeText={text => setDiscount(text)}
                    value={discount}
                    keyboardType="number-pad"
                    placeholder="0"
                    placeholderTextColor='white'
                />
            </View>
            <View style={styles.lower}>
                <View style={styles.lowerFields}>
                    <Text style={[styles.lowerFieldsStyle, { color: 'white' }]}>You Save:</Text>
                    <Text style={[styles.lowerFieldsStyle, { color: 'green' }]}>{savePrice} </Text>
                </View>
                <View style={styles.lowerFields}>
                    <Text style={[styles.lowerFieldsStyle, { color: 'white' }]}>Final Price:</Text>
                    <Text style={[styles.lowerFieldsStyle, { color: 'green' }]}>{finalPrice} </Text>
                </View>
                <View style={styles.buttonsView}>
                    <TouchableHighlight style={styles.btns} onPress={addingResults}>
                        <Text style={{ fontSize: 20, color: 'white' }}>
                            Save calculation
                        </Text>
                    </TouchableHighlight>
                    <TouchableHighlight style={styles.btns} 
                        onPress={() => { navigation.navigate('History', {data: array, remove: removeItem, empty: deleteAll }) }}>
                        <Text style={{ fontSize: 20, color: 'white' }}>
                            View History
                        </Text>
                    </TouchableHighlight>
                </View>
            </View>
        </KeyboardAvoidingView>
    );
}
const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        backgroundColor: 'black',
        flex: 1,
        justifyContent: 'center',
    },
    header: {
        alignItems: 'center',
        flex: 2,
        justifyContent: 'flex-end'
    },
    textHeadings: {
        color: 'white',
        fontSize: 15,
        margin: 10
    },
    fields: {
        alignItems: 'flex-end',
        backgroundColor: 'black',
        borderColor: 'green',
        borderWidth: 1,
        color: 'white',
        height: 40,
        justifyContent: 'flex-end',
        padding: 8,
        textAlign: 'right',
        width: 350,
    },
    middle: {
        alignItems: 'center',
        flex: 3,
        justifyContent: 'center',
        marginTop: 30
    },
    lower: {
        flex: 5,
        justifyContent: 'flex-start',
        paddingTop: 15,
        width: 300,
    },
    lowerFields: {
        color: 'white',
        backgroundColor: 'black',
        flexDirection: 'row',
        justifyContent: 'space-between',
        margin: 1,
        paddingHorizontal: 10,
    },
    lowerFieldsStyle: {
        backgroundColor: 'black',
        fontSize: 20,
        alignItems: 'center',
        justifyContent: 'center',
        margin: 3,
        padding: 10,

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
})

export default MainScreen;