import React, {useState} from 'react';
import {
  Button,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';

const App = () => {
  const [enterTheGoalText, setEnterTheGoalText] = useState('');
  const [courseGoals, setCourseGoals] = useState([]);

  const goalInputHandler = enteredText => {
    setEnterTheGoalText(enteredText);
  };

  const addGoalHandler = () => {
    setCourseGoals(currentCourseGoals => [...courseGoals, enterTheGoalText]);
  };

  return (
    <ScrollView>
      <View
        style={{
          padding: 70,
          justifyContent: 'center',
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
            marginTop: 20,
            // backgroundColor: '#ccc',
          }}>
          {courseGoals.map(goal => (
            <Text
              style={{
                padding: 10,
                marginVertical: 10,
                backgroundColor: 'white',
                borderColor: 'black',
                borderWidth: 1,
                backgroundColor: '#ccc',
              }}
              key={goal}>
              {goal}
            </Text>
          ))}
        </View>
      </View>
    </ScrollView>
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
