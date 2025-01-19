function gradeCalculation() {

    const studentName = prompt("Enter the student name: ");
    const totalMarks = prompt("Enter Total Marks: ");
    const totalSubject = prompt("Enter total Subject: ");
    const avgMarks = Math.round(parseInt(totalMarks) / parseInt(totalSubject));

    let grade = '';
    let feedback = '';

    if (avgMarks >= 80) {
        grade = 'A+';
        feedback = 'Excellent! Keep up the good work';
    } else if (avgMarks >= 75 && avgMarks <= 79) {
        grade = 'A';
        feedback = 'Better Luck Next time';
    } else if (avgMarks >= 70 && avgMarks <= 74) {
        grade = 'A-';
        feedback = 'Aim for Higher';
    } else if (avgMarks >= 60 && avgMarks <= 69) {
        grade = 'B';
        feedback = 'Good';
    } else if (avgMarks >= 50 && avgMarks <= 59) {
        grade = 'C';
        feedback = 'Need Improvement';
    } else if (avgMarks >= 33 && avgMarks <= 49) {
        grade = 'D';
        feedback = 'Work Harder';
    }
    else {
        grade = 'F';
        feedback = 'Failed';
    }

    console.log('---------------Student Report Card---------------');
    console.log(`Name: ${studentName}`);
    console.log(`Total Marks: ${totalMarks}`);
    console.log(`Total Subject: ${totalSubject}`);
    console.log(`Average Marks: ${avgMarks}`);
    console.log(`Grade: ${grade}`);
    console.log(`Feedback: ${feedback}`);
    console.log('-------------------------------------------------');

}

gradeCalculation();