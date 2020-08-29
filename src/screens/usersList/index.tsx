import React, { useEffect, useState } from 'react';
import { FlatList, View, Text, StyleSheet } from 'react-native';
import UserItem from './UserItem';
import { getUserApi } from '../../apis/UserApis';
import { USER_TYPE } from '../../Types';
import { white } from '../../assets/colors';
import I18n from '../../assets/I18n';

const UsersList: React.FC = ({ navigation }) => {

    const [usersList, setUsersList] = useState<{}>({});

    const getUser = async () => {
        const user = await getUserApi() as USER_TYPE;
        setUsersList({ ...usersList, [`${user?.login.uuid}`]: user });
    }

    useEffect(() => {
        if (Object.keys(usersList).length < 10) {
            getUser();
        }
    }, [usersList]);

    return (
        <View style={styles.container}>
            <Text style={styles.title}>{I18n.randomiz}</Text>
            <FlatList
                data={Object.keys(usersList)}
                renderItem={({ item }) => {
                    return <UserItem user={usersList[item]} navigation={navigation} />
                }
                }
                keyExtractor={(item, index) => index}
                numColumns={2}
            />
        </View>
    )
}

export default UsersList;

const styles = StyleSheet.create({
    title: {
        alignSelf: 'center',
        fontSize: 16,
        margin: 15
    },
    container: {
        marginBottom: 50,
        backgroundColor: white
    }
})
