import React from 'react';
import {Text, View, TouchableOpacity, Image, ScrollView} from 'react-native';

import {Button, SocialIcon, Divider} from 'react-native-elements'
import {Actions} from 'react-native-router-flux'
import {connect} from 'react-redux';


import { Facebook } from 'expo';

import { actions as auth, constants as c } from "../../index"
const { signInWithFacebook } = auth;

import styles from "./styles"

class Welcome extends React.Component {
    constructor() {
        super();
        this.state = {}


        this.onSuccess = this.onSuccess.bind(this);
        this.onError = this.onError.bind(this);
        this.onSignInWithFacebook = this.onSignInWithFacebook.bind(this);
    }


    //get users permission authorization (ret: facebook token)
    async onSignInWithFacebook() {
        const options = {permissions: ['public_profile', 'email'],}
        const {type, token} = await Facebook.logInWithReadPermissionsAsync(c.FACEBOOK_APP_ID, options);

        if (type === 'success') {
            this.props.signInWithFacebook(token, this.onSuccess, this.onError)
        }
    }

    onSuccess({ exists, user}) {
        if (exists) Actions.Main()
        else Actions.CompleteProfile({ user })
    }

    onError(error) {
        alert(error.message);
    }

    render() {
        return (

                <View style={styles.container}>

                    <View style={styles.topContainer}>
                        <Image style={styles.image} source={require('./bookstack.jpeg')}/>
                        <Text style={styles.title}>All About Books</Text>
                    </View>

                    <View style={styles.bottomContainer}>
                    <ScrollView>
                        <View style={[styles.buttonContainer]}>


                            <Button
                                raised
                                borderRadius={4}
                                title={'SIGN UP WITH E-MAIL'}
                                containerViewStyle={[styles.containerView]}
                                buttonStyle={[styles.button]}
                                textStyle={styles.buttonText}
                                onPress={Actions.Register}/>
                        </View>
                        <View style={styles.bottom}>
                            <Text style={styles.bottomText}>
                                Already have an account?
                            </Text>

                            <TouchableOpacity onPress={Actions.Login}>
                                <Text style={styles.signInText}>
                                    Sign in
                                </Text>
                            </TouchableOpacity>
                        </View>
                        </ScrollView>
                    </View>

                </View>

        );
    }
}


export default connect(null, {  signInWithFacebook })(Welcome);
