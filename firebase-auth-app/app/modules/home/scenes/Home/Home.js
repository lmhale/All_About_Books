import React from 'react';
var { View, StyleSheet, Alert, Text, TouchableOpacity } = require('react-native');

import {Button} from 'react-native-elements'
import {Actions} from 'react-native-router-flux';
import {connect} from 'react-redux';

import styles from "./styles"

import { actions as auth, theme } from "../../../auth/index"
const { signOut } = auth;

const { color } = theme;

class Home extends React.Component {
    constructor(){
        super();
        this.state = { }

        this.onSignOut = this.onSignOut.bind(this);
    }

    onSignOut() {
        this.props.signOut(this.onSuccess.bind(this), this.onError.bind(this))
    }

    onSuccess() {
        Actions.reset("Auth")
    }

    onError(error) {
        Alert.alert('Oops!', error.message);
    }
    goToSearch(){
       Actions.Search()
    }

    render() {

        return (
            <View style={styles.container}>

              <Text style={styles.homeText}>Welcome to All About Books! An App that allows you to get quick information about any book your heart desires. Click on the link below to get started. Happy Searching!</Text>

            <TouchableOpacity onPress ={this.goToSearch}>
            <Text style={styles.searchLink}>Go to Search</Text>
            </TouchableOpacity>

                <Button
                    raised
                    borderRadius={4}
                    title={'LOG OUT'}
                    containerViewStyle={[styles.containerView]}
                    style={styles.logoutButton}
                    textStyle={styles.buttonText}
                    onPress={this.onSignOut}/>


            </View>
        );
    }
}

export default connect(null, { signOut })(Home);
