import React, { Component } from 'react';
import { Text, View, Item, TextInput } from 'react-native';
import ModalPicker from 'react-native-modal-picker';


class NumberGenerator extends Component {
  
  state = {
    hotNumbers: '',
    warmNumbers: '',
    neutralNumbers: '',
    coolNumbers: '',
    coldNumbers: ''
  }
  render() {

    const { textStyle } = styles;

    let index = 0;
    const data = [
      // { key: index++, section: true, label: 'Hot Numbers' },
      { key: index++, section: true },
      { key: index++, label: '0' },
      { key: index++, label: '1' },
      { key: index++, label: '2' },
      { key: index++, label: '3' },
      { key: index++, label: '4' },
      { key: index++, label: '5' }
    ];

    return (
      <View style={{ flex: 1, justifyContent: 'flex-start', flexDirection: 'row', padding: 10 }}>
        <Text stlye={textStyle}>Hot </Text>
        <ModalPicker
          
          data={data}
          initValue="0"
          onChange={(option) => { this.setState({ hotNumbers: option.label }) }} />

          <Text>Warm </Text>
        <ModalPicker
          
          data={data}
          initValue="0"
          onChange={(option) => { this.setState({ warmNumbers: option.label }) }} />

          <Text>Neutral </Text>
          <ModalPicker
          
          data={data}
          initValue="0"
          onChange={(option) => { this.setState({ neutralNumbers: option.label }) }} />

          <Text>Cool </Text>
          <ModalPicker
          
          data={data}
          initValue="0"
          onChange={(option) => { this.setState({ coolNumbers: option.label }) }} />

          <Text>Cold </Text>
          <ModalPicker
          
          data={data}
          initValue="0"
          onChange={(option) => { this.setState({ coldNumbers: option.label }) }} />

        {/*<ModalPicker
                    style={{borderWidth:1, borderColor:'#ccc', padding:10, height:30}}
                    data={data}
                    initValue="0"
                    onChange={(option)=>{ this.setState({textInputValue:option.label})}}>
                    
                    <TextInput
                        style={{borderWidth:1, borderColor:'#ccc', padding:10, height:30}}
                        editable={false}
                        placeholder="Hot Numbers"
                        value={this.state.textInputValue} />*/}

        {/*</ModalPicker>*/}
      </View>
    );
  }
}

const styles = {
  textStyle: {
    marginRight: 5
  }
}
export default NumberGenerator;
