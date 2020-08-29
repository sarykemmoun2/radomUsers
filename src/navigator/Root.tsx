import React from 'react'
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import UsersList from '../screens/usersList';
import UserDetails from '../screens/userDetails';
import Header from './Header';

const root = createStackNavigator({
    UsersList: {
        screen: UsersList,
        navigationOptions: {
            headerShown: false
        }
    },
    UserDetails: {
        screen: UserDetails,
        navigationOptions: {
            header: ({ navigation }) => {
                const { name } = navigation.state.params.user;
                return <Header back navigation={navigation} title={`${name.first} ${name.last}`} />
            }
        }
    }
});

export default createAppContainer(root)
