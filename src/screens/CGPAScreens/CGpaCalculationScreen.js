import React from 'react';
import {Text, StyleSheet, View, FlatList, Button} from 'react-native';
import {
  ScrollView,
  TextInput,
  TouchableOpacity,
} from 'react-native-gesture-handler';
import {SafeAreaView} from 'react-native-safe-area-context';
import TextInputComponent from '../../components/TextInputComponent';

const CGpaCalculationScreen = props => {
  const numberOfSubjects = props.route.params.numberOfSubjects;
  const subjects = [];
  const subjectsGPA = [];
  for (let i = 1; i <= numberOfSubjects; i++) {
    subjects.push(<TextInputComponent key={i} placeholder={`Sem#${i} GPA`} />);
    subjectsGPA.push(
      <TextInputComponent style={{top:10}} key={i} placeholder={`Sem#${i} Credit Hours`} />,
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
  parentView:{
    backgroundColor:'#343a40',
    flex:1
  },
  gpaRow: {
    marginVertical:10,
    width:"40%"
  },
  creditHoursRow: {
    width:"40%"
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
