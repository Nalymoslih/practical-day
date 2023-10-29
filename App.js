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
    setCourseGoals(currentCourseGoals => [
      ...currentCourseGoals,
      enterTheGoalText,
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
        <ScrollView alwaysBounceVertical={false}>
          {courseGoals.map(goal => (
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
                }}
                key={goal}>
                {goal}
              </Text>
            </View>
          ))}
        </ScrollView>
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
