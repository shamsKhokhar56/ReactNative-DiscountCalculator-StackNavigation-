import React, { useState } from 'react';
import { Alert, Button, StyleSheet, Text, View, TouchableHighlight } from 'react-native';

const Practice = () => {
    const [array, setArray] = useState([]);

    checking = () => {
        setArray(["Hello", "New"], ["World"])
        console.log(array[2])

    }

    return(

        <View style={styles.container}> 
            <TouchableHighlight underlayColor='green' onPress={checking}>
                <Text>
                    Click me
                </Text>

            </TouchableHighlight>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }

})

export default Practice;
