import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { lightBlue, grayBackground, grayBorder, black } from '../assets/colors';
import I18n from '../assets/I18n';

const Header: React.FC<{
    back?: boolean;
    navigation;
    title: string
}> = (props) => {

    return (
        <View style={styles.viewContainer}>
            {props.back && (
                <TouchableOpacity
                    onPress={() => props.navigation.goBack()}>
                    <Text style={styles.title}>{I18n.back} </Text>
                </TouchableOpacity>
            )}
            <Text style={styles.title}> {I18n.randomiz} </Text>
            <Text style={styles.text}>{props.title}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    viewContainer: {
        height: 50,
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomWidth: 2,
        backgroundColor: grayBackground,
        borderBottomColor: grayBorder,
        marginLeft: 10,
    },
    title: {
        color: lightBlue,
        fontSize: 16,
        fontWeight: 'bold'
    },
    text: {
        color: black,
        fontSize: 16,
        fontWeight: 'bold'
    },
});

export default Header;
