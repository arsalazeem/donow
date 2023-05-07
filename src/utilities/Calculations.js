const getGpaFromMarks = (subject, uni) => {
  try {
    const scales = {
      numl: [
        {min: 80, max: Infinity, scale: 4.0},
        {min: 77, max: 79, scale: 3.66},
        {min: 74, max: 76, scale: 3.33},
        {min: 70, max: 73, scale: 3.0},
        {min: 67, max: 69, scale: 2.66},
        {min: 64, max: 66, scale: 2.33},
        {min: 60, max: 63, scale: 2.0},
        {min: 50, max: 59, scale: 1.5},
        {min: -9999, max: 49, scale: 0},
      ],
      qau: [
        {min: 80, max: Infinity, scale: 4.0},
        {min: 76, max: 79, scale: 3.8},
        {min: 72, max: 75, scale: 3.5},
        {min: 68, max: 71, scale: 3.0},
        {min: 64, max: 67, scale: 2.8},
        {min: 60, max: 63, scale: 2.5},
        {min: 55, max: 59, scale: 2.0},
        {min: 50, max: 54, scale: 1.0},
        {min: -9999, max: 49, scale: 0},
      ],
    };
    const uniScales = scales[uni];
    if (!uniScales) {
      return 'empty';
    }
    for (let i = 0; i < uniScales.length; i++) {
      const {min, max, scale} = uniScales[i];
      if (subject >= min && subject <= max) {
        return scale;
      }
    }
  } catch (err) {
    alert(
      'Are you sure you are providing the correct data.Marks can only be between range 0 to 100',
    );
  }
};
const debuggerConsole = (variableName, dataToPrint) => {
  console.log(`*************${variableName} to Print*****************`);
  console.log(dataToPrint);
  console.log(`*************${variableName}*****************`);
};
const calculateGpa = (subjectObject, uniName, type = 'gpa') => {
  let ans = 0;
  let totalCreditHours = 0;
  let gpa = 0;
  switch (type) {
    case 'gpa':
      k = 1;
      for (data in subjectObject) {
        let currentData = subjectObject[data];
        let CurrentMarks = getGpaFromMarks(currentData.subjectGpa, uniName);
        ans = ans + CurrentMarks * Number(currentData.subjectCreditHours);
        totalCreditHours =
          Number(totalCreditHours) + Number(currentData.subjectCreditHours);
        debuggerConsole('Current Marks', CurrentMarks);
        debuggerConsole(
          'Current Credit Hours',
          Number(currentData.subjectCreditHours),
        );
        k++;
      }
      debuggerConsole('Total Credit Hours', totalCreditHours);
      gpa = ans / totalCreditHours;
      // console.log(gpa);
      console.log(gpa.toFixed(3));
      return gpa.toFixed(3);
      break;
    case 'cgpa':
      k = 1;
      for (data in subjectObject) {
        let currentData = subjectObject[data];
        let CurrentMarks = currentData.subjectGpa;
        ans = ans + CurrentMarks * Number(currentData.subjectCreditHours);
        totalCreditHours =
          Number(totalCreditHours) + Number(currentData.subjectCreditHours);
        debuggerConsole('Current Marks', CurrentMarks);
        debuggerConsole(
          'Current Credit Hours',
          Number(currentData.subjectCreditHours),
        );
        k++;
      }
      debuggerConsole('Total Credit Hours', totalCreditHours);
      gpa = ans / totalCreditHours;
      // console.log(gpa);
      console.log(gpa.toFixed(3));
      return gpa.toFixed(3);
      break;
    default:
      console.log(`No type provided the current provided type is ${type}`);
  }
};
export default calculateGpa;
