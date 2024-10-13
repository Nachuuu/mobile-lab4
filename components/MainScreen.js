import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { Button, Text, View, StyleSheet } from 'react-native';

// Screen Components
function MainScreen({  }) {
    const navigation = useNavigation();

    const navigateToSendEmail = () => {
        navigation.navigate('SendEmail');
    };

return (
    <View style={styles.container}>
      <Text style={styles.title}>Send my contact info</Text>
      <Text style={styles.title}>Edgar Gomez</Text>
      <Button
        title="Send EMAIL"
        onPress={navigateToSendEmail}
      />
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        marginTop: 50,
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        fontSize: 32,
        fontWeight: 'bold',
        marginBottom: 22,
        alignItems: 'center'
    }
}
    
);


export default MainScreen;
