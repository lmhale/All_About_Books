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
                <Button
                    raised
                    borderRadius={4}
                    title={'LOG OUT'}
                    containerViewStyle={[styles.containerView]}
                    style={styles.logoutButton}
                    textStyle={styles.buttonText}
                    onPress={this.onSignOut}/>
            <TouchableOpacity style = {{ margin: 128 }} onPress ={this.goToSearch}>
            <Text>Go to Search</Text>
            </TouchableOpacity>
            </View>
        );
    }
}

export default connect(null, { signOut })(Home);
