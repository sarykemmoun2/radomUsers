import React from 'react'
import { Text, View, Image, StyleSheet } from 'react-native';
import { white } from '../../assets/colors';

const UserDetails: React.FC<{ navigation }> = ({ navigation }) => {

    const { user } = navigation.state.params;
    const { street, city, state, country } = user.location;
    return (
        <View style={styles.container}>
            <Image style={styles.image} source={{ uri: user.picture.large }} />
            <Text style={styles.text}>{user.name.first} {user.name.last}</Text>
            <Text style={styles.text}>{user.email}</Text>
            <Text style={styles.text}>{street.number} {street.name}, {city}, {state}, {country}</Text>
            <Text style={styles.text}>{user.phone} / {user.cell}</Text>
        </View>
    )
}

export default UserDetails

const styles = StyleSheet.create({
    image: {
        height: 140,
        width: 140,
        margin: 40,

    },
    container: {
        backgroundColor: white,
        flex: 1,
        alignItems: 'center',
    },
    text: {
        marginBottom: 10
    }
})