import React, {useState} from 'react';
import {
  Button,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
  FlatList,
} from 'react-native';
import GoalItem from './components/GoalItem';

const App = () => {
  const [enterTheGoalText, setEnterTheGoalText] = useState('');
  const [courseGoals, setCourseGoals] = useState([]);

  const goalInputHandler = enteredText => {
    setEnterTheGoalText(enteredText);
  };
  
  const addGoalHandler = () => {
    setCourseGoals(currentCourseGoals => [
      ...currentCourseGoals,
      {text: enterTheGoalText, id: Math.random().toString()},
    ]);
  };











































  
  
  return (
    <View
      style={{
        flex: 1,
        marginVertical: 60,
        marginHorizontal: 20,
      }}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <TextInput
          placeholder="Enter the goal"
          style={styles.textInput}
          onChangeText={goalInputHandler}
          value={enterTheGoalText}
        />
        <Button title="Add" onPress={addGoalHandler} />
      </View>
            
      <View
        style={{
          borderBottomWidth: 1,
          borderBottomColor: '#ccc',
          marginTop: 20,
          width: '90%',
          // backgroundColor: '#ccc',
        }}
      />

      <View
        style={{
          marginTop: 20,
          // backgroundColor: '#ccc',
        }}>
        <FlatList
          alwaysBounceVertical={false}
          data={courseGoals}
          renderItem={itemData => {
            return <GoalItem text={itemData.item.text} />;
          }}
          keyExtractor={(item, index) => item.id}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  textInput: {
    borderColor: 'black',
    borderWidth: 1,
    padding: 10,
    width: '80%',
  },
});

export default App;
