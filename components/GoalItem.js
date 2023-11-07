import {View, Text, FlatList} from 'react-native';
import React from 'react';

const GoalItem = props => {
  
  <View
    style={{
      margin: 8,
      padding: 8,
      borderRadius: 8,
      backgroundColor: '#5E0acc',
    }}>
    <Text
      style={{
        color: 'white',
      }}>
      {props.text}
    </Text>
  </View>;
};

export default GoalItem;
