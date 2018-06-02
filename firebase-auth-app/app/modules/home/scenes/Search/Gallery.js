
import React , {Component} from 'react';

import {Text, View } from 'react-native';

export default class Gallery extends React.Component{
    render(){
        return (
            <View>
            {
                this.props.info.map((info , i) => {

                    return (


                        <Text>{info.volumeInfo.title }</Text>


                    );
                })
            }</View>

        );
    }
}
