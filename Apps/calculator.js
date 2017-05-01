import React, { Component } from 'react';
import SegmentedControlTab from 'react-native-segmented-control-tab';
import {
  AppRegistry,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';

export default class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      segmentSelectedIndex: 0,
      billAmount: 0,
      result: 0,
      tipAmount: 0
    };
  }

  handleSegmentChange(index) {
    this.setState({
      ...this.state,
      segmentSelectedIndex: index,
    });

    this.handleBillAmountChange(this.state.billAmount, index);
  }

  handleBillAmountChange(bill, index){
    this.setState({
      billAmount : bill
    })

    if (!index && index != 0) {
      index = this.state.segmentSelectedIndex;
    }

    bill = parseFloat(bill);
    var percent = this.segmentValues()[index];//10%, 15%, 50%
    percent = parseFloat(percent)/100;//convert to 0.1, 0.15, 0.5

    var result = bill + (bill * percent);

    this.setState({
      result : result,
      tipAmount : bill * percent
    })
  }

  segmentValues() {
    return ["10%","15%","50%"];
  }

  render() {
    return(
      <View>
        <View>
          <Text></Text>
        </View>

        <View>
          <Text></Text>
        </View>

        <View>
          <Text style={styles.textTitle}>Tip Calculator</Text>
        </View>

        <View style = {{flexDirection:'row',alignItems: 'center',marginBottom: 8}}>
          <Text style = {{flex:1}}>Bill Amount</Text>
          <TextInput
            onChangeText={(billAmount) => this.handleBillAmountChange(billAmount)}
            keyboardType='numeric'
            style={styles.textBillInput}
          />
        </View>

        <View>
          <Text>Tip amount: 0</Text>
        </View>

        <SegmentedControlTab style={{marginTop:100}}
          values={this.segmentValues()}
          segmentSelectedIndex={2}//{this.state.segmentSelectedIndex}
          onTabPress= {index => this.handleSegmentChange(index)}
          />

        <View>
          <Text>Bill input: {this.state.billAmount} </Text>
          <Text>Tip amount: {this.state.tipAmount} </Text>
          <Text>Segment control: {this.segmentValues()[this.state.segmentSelectedIndex]} </Text>
        </View>

        <View>
          <Text>Result: {this.state.result} </Text>
        </View>
      </View>
    );
  }

}
//module.exports = Cal
const styles = StyleSheet.create({
  textTitle:{
    color:'black',
    fontSize:30,
    marginTop:50,
    marginBottom: 30,
    textAlign:'center',
    fontWeight:'bold',
  },
  textBillInput:{
    flex:3,
    padding: 5,
    height: 30,
    borderColor: '#cccccc',
    color:'black',
    borderWidth: 1,
  }
});

