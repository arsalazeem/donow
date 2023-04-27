const getGpaFromMakrs = (subject) => {
    subject = Number(subject);
    if (subject >= 80) {
        subject = 4.00;
        return subject;
    } else if (subject >= 77 && subject <= 79) {
        subject = 3.66;
        return subject;
    } else if (subject >= 74 && subject <= 76) {
        subject = 3.33;
        return subject;
    } else if (subject >= 70 && subject <= 73) {
        subject = 3.00;
        return subject;
    } else if (subject >= 67 && subject <= 69) {
        subject = 2.66;
        return subject;
    } else if (subject >= 64 && subject <= 66) {
        subject = 2.33;
        return subject;
    } else if (subject >= 60 && subject <= 63) {
        subject = 2.00;
        return subject;
    } else if (subject >= 50 && subject <= 59) {
        subject = 1.5;
        return subject;
    } else if (subject < 50 && subject > 0) {
        subject = 0;
        return subject;
    } else {

        return 'empty';
    }
}
const debuggerConsole=(variableName,dataToPrint)=>{
    console.log(`*************${variableName} to Print*****************`);
    console.log(dataToPrint);
    console.log(`*************${variableName}*****************`)
}
const calculateGpa = (subjectObject) => {
    let ans = 0;
    let totalCreditHours = 0;
    k = 1;
    for (data in subjectObject) {
        let currentData = subjectObject[data];
        let CurrentMarks=(getGpaFromMakrs(currentData.subjectGpa));
        ans = ans+CurrentMarks * Number(currentData.subjectCreditHours);
        totalCreditHours = Number(totalCreditHours) +Number(currentData.subjectCreditHours);
        debuggerConsole("Current Marks",CurrentMarks);
        debuggerConsole("Current Credit Hours",Number(currentData.subjectCreditHours));
        k++;
    }
    debuggerConsole("Total Credit Hours",totalCreditHours);
    let gpa =(ans/totalCreditHours);
    // console.log(gpa);
    console.log(gpa.toFixed(3));
    return gpa.toFixed(3);
}
export default calculateGpa;