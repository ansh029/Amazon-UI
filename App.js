

import React from 'react';
import { StyleSheet, Text, View, FlatList, Platform, StatusBar } from 'react-native';;
import { SideDrawer, createDrawerNavigator, createAppContainer } from 'react-navigation';
import HomeScreen from './screens/HomeScreen';

import { Icon, Container, Content, Header, Left, Body, Right, List, ListItem } from 'native-base'


export default class App extends React.Component {
  render() {
    return (
      <AppDrawerNavigator />
    );
  }
}

const CustomDrawerContentComponent = (props) => {
  return (
    <Container>
      <Header style={[{ backgroundColor: '#3a455c', height: 90 }]}>

        <Left style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}>
          <Icon name="person" style={{ color: 'white' }} />
          <Text style={{ marginLeft: 7, fontSize: 20, color: 'white', fontStyle: 'italic' }}>Hello, Anshul</Text>
        </Left>
      </Header>

      <Content>
        <FlatList
          data={[
            'Home', 'Shop by Category', "Today's Deals"
          ]}
          renderItem={({ item }) => (

            <ListItem noBorder >
              <Text>{item}</Text>
            </ListItem>

          )}
          keyExtractor={(item, index) => index.toString()}

        />

        <FlatList
          style={{ borderTopWidth: 1, borderTopColor: '#CACFD2' }}
          data={[
            'Your Wish List', 'Your Account', "Amazon Pay", "Prime", "Sell on Amazon"
          ]}
          renderItem={({ item }) => (

            <ListItem noBorder>
              <Text>{item}</Text>
            </ListItem>

          )}

          keyExtractor={(item, index) => index.toString()}
        />

        <FlatList
          style={{ borderTopWidth: 1, borderTopColor: '#CACFD2' }}
          data={[
            'Settings', 'Customer Service'
          ]}
          renderItem={({ item }) => (

            <ListItem noBorder>
              <Text>{item}</Text>
            </ListItem>

          )}

          keyExtractor={(item, index) => index.toString()}


        />

      </Content>

    </Container>
  )
}

const Drawer = createDrawerNavigator({
  HomeScreen: {
    screen: HomeScreen,
    navigationOptions: {
      drawerLabel: 'Home',
      drawerIcon: ({ tintColor }) => (<FontAwesome name="home" size={22} style={{ color: tintColor }} />),

    },
  },
}, {
    drawerPosition: Left,
    drawerOpenRoute: 'DrawerOpen',
    drawerCloseRoute: 'DrawerClose',
    contentComponent: CustomDrawerContentComponent,
    drawerToggleRoute: 'DrawerToggle',


  });


const AppDrawerNavigator = createAppContainer(Drawer);




const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
