import React, {useReducer} from 'react';
import {Text, StyleSheet, View, FlatList, Button} from 'react-native';
import {
  ScrollView,
  TextInput,
  TouchableOpacity,
} from 'react-native-gesture-handler';
import {SafeAreaView} from 'react-native-safe-area-context';
import TextInputComponent from '../../components/TextInputComponent';
import ButtonComponent from '../../components/ ButtonComponent';
import calculateGpa from '../../utilities/Calculations';
import ModelView from '../../components/ModelView';
// let state = {
//   1: {},
// };
const reducer = (state, action) => {
  let actionType = action.actionType;
  let currentKey = action.currentKey;
  let subjectCreditHours = action.subjectCreditHours
    ? action.subjectCreditHours
    : 0;
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
  const handleEmptyValue = () => {
    for (let data in subjects){
     let indexToCheck=Number(data)+1;
     if (indexToCheck in state){
         console.log(indexToCheck);
     }
     else {
         alert(`Please provide details for Subject ${indexToCheck}`);
         return ;
     }
    }
  };
  const handleCalculation = () => {
    handleEmptyValue();
    let noOfIssues=0;
    let CalObject = state;
    k = 1;
    for (data in CalObject) {
      currentData = CalObject[data];
      if (
        currentData.subjectCreditHours &&
        currentData.subjectCreditHours > 0 &&
        currentData.subjectGpa &&
        currentData.subjectGpa > 0
      ) {
      } else {
        if (
          currentData.subjectCreditHours ||
          currentData.subjectCreditHours <= 0
        ) {
          alert(`Please provide Credit Hours for Subject  ${k}`);
          noOfIssues++;
        } else {
          alert(`Please provide  GPA for Subject  ${k}`);
          noOfIssues++;
        }
        return ;
      }
      k++;
    }
    if (noOfIssues<1){
   let calcualtedGpa= calculateGpa(state);
   alert(calcualtedGpa);
    }
  };
  const handleTextChange = (type, currentValue, currentKey) => {
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
    console.log('Dispatch Object is');
    console.log(dispatchObject);
    dispatch(dispatchObject);
  };
  for (let i = 1; i <= numberOfSubjects; i++) {
    subjects.push(
      <TextInputComponent
        onChangeTextProps={value => {
          handleTextChange('textChangeGpa', value, i);
        }}
        key={i}
        placeholder={`Subject#${i} GPA`}
      />,
    );
    subjectsGPA.push(
      <TextInputComponent
        onChangeTextProps={value => {
          handleTextChange('textChangeCreditHours', value, i);
        }}
        style={{top: 10}}
        key={i}
        placeholder={`Subject#${i} Credit Hours`}
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
          <ButtonComponent
            title="Calculate"
            onPressProp={() => {
              handleCalculation();
            }}
          />
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
