import React, { Component } from 'react';
import { Container, Button, Text, Content, Header } from 'native-base';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

export default class Secured extends Component {
    // static navigationOptions = {
    //     tableBarLabel: 'Logout',
    //     drawerIcon: ({tintColor}) => {
    //         return(
    //             <MaterialIcons
    //             name="person-outline"
    //             size={24}
    //             style={{color: tintColor}}
    //             >
    //             </MaterialIcons>
    //         );
    //     }
    // }
    render() {
        return(
            <Container>
                <Header />
                <Content>
                    <Button full onPress={this.props.onLogoutPress}>
                        <Text>Logout</Text>
                    </Button>
                </Content>
            </Container>
        )
    }
}
