import React, {useReducer} from 'react';
import {Text, StyleSheet, View, FlatList, Button} from 'react-native';
import {
  ScrollView,
  TextInput,
  TouchableOpacity,
} from 'react-native-gesture-handler';
import {SafeAreaView} from 'react-native-safe-area-context';
import TextInputComponent from '../../components/TextInputComponent';

// let state = {
//   1: {},
// };
const reducer = (state, action) => {
  let actionType = action.actionType;
  let currentKey = action.currentKey;
  let subjectCreditHours = action.subjectCreditHours ? action.subjectCreditHours : 0;
  let subjectGpa = action.subjectGpa ? action.subjectGpa : 0;
  switch (actionType) {
    case 'textChangeGpa':
      return {
        ...state,
        [currentKey]: {
          ...state[currentKey],
          subjectGpa: subjectGpa,
        },
      };
    case 'textChangeCreditHours':
      return {
        ...state,
        [currentKey]: {
          ...state[currentKey],
          subjectCreditHours: subjectCreditHours,
        },
      };
    default:
      return state;
  }
};

const CGpaCalculationScreen = props => {
  const [state, dispatch] = useReducer(reducer, {});
  const numberOfSubjects = props.route.params.numberOfSubjects;
  const subjects = [];
  const subjectsGPA = [];
  console.log(state);
  const handleTextChange = (type, currentValue, currentKey) => {
    // alert(type);
    let dispatchObject = {
      currentKey: currentKey,
    };
    if (type == 'textChangeGpa') {
      dispatchObject['actionType'] = 'textChangeGpa';
      dispatchObject['subjectGpa'] = currentValue;
    } else if (type == 'textChangeCreditHours') {
      dispatchObject['actionType'] = 'textChangeCreditHours';
      dispatchObject['subjectCreditHours'] = currentValue;
    }
    console.log("Dispatch Object is");
    console.log(dispatchObject);
    dispatch(dispatchObject);
  };
  for (let i = 1; i <= numberOfSubjects; i++) {
    subjects.push(
      <TextInputComponent
        onChangeTextProps={value => {
          handleTextChange("textChangeGpa",value,i);
        }}
        key={i}
        placeholder={`Subject#${i} GPA`}
      />,
    );
    subjectsGPA.push(
      <TextInputComponent
      onChangeTextProps={value => {
        handleTextChange("textChangeCreditHours",value,i);
      }}
        style={{top: 10}}
        key={i}
        placeholder={`Subejt#${i} Credit Hours`}
      />,
    );
  }
  return (
    <View style={styles.parentView}>
      <SafeAreaView>
        <ScrollView>
          <View style={styles.inputRows}>
            <View style={styles.gpaRow}>{subjects}</View>
            <View style={styles.creditHoursRow}>{subjectsGPA}</View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  parentView: {
    backgroundColor: '#343a40',
    flex: 1,
  },
  gpaRow: {
    marginVertical: 10,
    width: '40%',
  },
  creditHoursRow: {
    width: '40%',
  },
  inputRows: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#343a40',
  },
});

export default CGpaCalculationScreen;
