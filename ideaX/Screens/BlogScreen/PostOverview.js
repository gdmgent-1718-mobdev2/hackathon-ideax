import React from "react";
import { StatusBar } from "react-native";
import { Button, Text, Container, Card, CardItem, Body, Content, Header, Title, Left, Icon, Right } from "native-base";

export default class PostOverview extends React.Component {
    static navigationOptions = {
        title: 'Welcome',
    };
    render() {
        return (
            <Container>
                <Content>
                    <Button
                        onPress={() => this.props.navigation.navigate("CreatePost")}>
                        <Text><Icon name='create' style={{color: 'white'}} />Add Post</Text>
                    </Button>
                </Content>
            </Container>
        );
    }
}
PostOverview.navigationOptions = ({ navigation }) => {
    return {
      header: (
        <Header>
          <Left>
            <Button transparent onPress={() => navigation.navigate("DrawerOpen")}>
              <Icon name="menu" />
            </Button>
          </Left>
          <Body>
            <Title>Blog Posts</Title>
          </Body>
          <Right />
        </Header>
      )
    };
  };