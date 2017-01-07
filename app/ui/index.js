
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  Image,
  LayoutAnimation,
  ListView,
  View
} from 'react-native';
import Menu, { 
  MenuContext, 
  MenuOptions, 
  MenuOption, 
  MenuTrigger } from 'react-native-menu';
  import data from '../mock/people'

var pic1 = require('../images/pic1.jpg')
var pic2 = require('../images/pic2.jpg')
var pic3 = require('../images/pic3.jpg')
var pic4 = require('../images/pic4.jpg')
var pic5 = require('../images/pic5.jpg')
var pic6 = require('../images/pic6.jpg')
var picStuff = 0
var pics = [pic1,pic2,pic3,pic4,pic5,pic6]


const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

export default class Index extends Component {
  constructor(props){
    super(props)

    this.state = {
      data: ds.cloneWithRows(data)
    }
  }

  filter(val) {
    console.log(val)
        LayoutAnimation.configureNext(LayoutAnimation.Presets.spring)

        if(val == 2){
            var newData = data.filter(function (el) {
          return el.age <= 18
        })}else{
              var newData = data.filter(function (el) {
          return el.age > 18
        })
            }
    this.setState({
      data: ds.cloneWithRows(newData)
    })

}
  TopNavigation(){
  return(<View style={{ padding: 10, flexDirection: 'row', backgroundColor: '#eee' }}>
    <View style={{ flex: 1 }}><Text>My App</Text></View>
    <Menu onSelect={(value) => this.filter(value)}>
      <MenuTrigger>
        <Text style={{ fontSize: 20 }}>&#8942;</Text>
      </MenuTrigger>
      <MenuOptions>
        <MenuOption value={1}>
          <Text>Over 18s</Text>
        </MenuOption>
        <MenuOption value={2}>
          <Text>Under 18s</Text>
        </MenuOption>
      </MenuOptions>
    </Menu>
  </View>);
}

  checkAdult(age) {
    return age >= 18;
}
eachRow(x){

  if(picStuff < 6){
    picStuff++
  }
  if(picStuff == 6){
    picStuff = 0
  }
  return(<View style={{height:70, shadowColor: "#555",
      shadowOpacity: 0.6,
      shadowRadius: 3,
      shadowOffset: {
        height: 1,
        width: 1
      }, flexDirection:'row', padding:10, margin:5, alignItems:'center', borderRadius:5,  backgroundColor:'rgba(255,255,255,0.7)'}}>
  
  <Image source={pics[picStuff]} resizeMode="contain" style={{width:50, height:50, borderRadius:25}} />
  <View>
  <View style={{flexDirection:'row', justifyContent:'space-around'}}>
  <Text style={{color:'#333', fontSize:11, fontWeight:'600', margin:10}}>{x.first_name} {x.last_name}</Text>
  <Text style={{color:'#333', fontSize:11, fontWeight:'600', margin:10}}>{x.gender}</Text>
  <View style={{width:27, height:27, borderRadius:15, alignItems:"center", justifyContent:'center', backgroundColor:'#333'}}><Text style={{color:'#fff', fontSize:7, fontWeight:'600'}}>{x.age}</Text></View>
  </View>
  <Text style={{marginLeft:10, fontSize:11}}>{x.email}</Text>
  </View>
  </View>
  )
  
}

  render() {
    return (
      <View style={styles.container}>
        <MenuContext style={{ flex: 1 }}>
    {this.TopNavigation()}
    <ListView
    dataSource = {this.state.data}
    renderRow = {(rowData) => this.eachRow(rowData)}
    style = {{flex:1}}/>
  </MenuContext>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop:20
    
  },
});


