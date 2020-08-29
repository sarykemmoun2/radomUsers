import React from 'react'
import { Text, Image, TouchableOpacity, Dimensions } from 'react-native';
import { USER_TYPE } from '../../Types';
import { grayCard } from '../../assets/colors';

const UserItem: React.FC<{ user: USER_TYPE, navigation }> = ({ user, navigation }) => {

    const size = (Dimensions.get('window').width - 40) / 2;
    const { first, last } = user.name;
    return (
        <TouchableOpacity style={styles(size).card} onPress={() => { navigation.navigate('UserDetails', { user }) }}>
            <Image source={{ uri: user.picture.medium }} style={styles(size).image} />
            <Text style={styles().name}>{first} {last}</Text>
        </TouchableOpacity>
    )
}

export default UserItem

const styles = (size?: number) => ({
    card: {
        backgroundColor: grayCard,
        width: size,
        height: size,
        margin: 10,
        alignItems: 'center'

    },
    image: {
        height: size - 30,
        width: size - 20
    },
    name: {
        fontSize: 16,
    }
})