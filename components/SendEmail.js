import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Button, Text, View, StyleSheet, Alert } from 'react-native';
import * as MailComposer from 'expo-mail-composer';

// Screen Components
function SendEmailScreen() {
    const navigation = useNavigation();
    const [message, useMessage] = useState('Edgar Gomez\nDundas St.\nLondon, OM\n543-210-9876\ne_gomezmacedo@fanshaweonline.ca');

    const sendMessageEmail = async () => {
        const isAvailable = await MailComposer.isAvailableAsync();
        if (isAvailable) {
            const options = {
                recipients: ['e_gomezmacedo@fanshaweonline.ca'],
                subject: 'Lab 4 - Email',
                body: message,
            };

            MailComposer.composeAsync(options)
                .then(result => {
                    console.log(result.status);
                    if (result.status === 'sent') {
                        Alert.alert('Success', 'Your email has been sent successfully');
                    } else {
                        Alert.alert('Error', 'Failed to send email');
                    }
                })
                .catch(error => {
                    Alert.alert('Error', 'An error occurred while sending the email');
                });
        } else {
            Alert.alert('Error', 'Email is not available on this device');
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>You are going to send the following info:</Text>
            <Text style={styles.content}>
                Edgar Gomez{'\n'}Dundas St.{'\n'}London, OM{'\n'}543-210-9876{'\n'}e_gomezmacedo@fanshaweonline.ca
            </Text>
            <Button title="Send EMAIL" onPress={sendMessageEmail} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginTop: 50,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 32,
        fontWeight: 'bold',
        marginBottom: 22,
        alignItems: 'center',
    },
    content: {
        fontSize: 22,
        marginBottom: 22,
        alignItems: 'center',
    },
});

export default SendEmailScreen;
