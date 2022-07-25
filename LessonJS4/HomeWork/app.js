const students = [
    { name: "Vasya", mark: 3.8, email: "vasya@gmail.com", isAdmin: false },
    { name: "Helen", mark: 3.4, email: "helen@gmail.com", isAdmin: false },
    { name: "Marina", mark: 4.0, email: "marina@gmail.com", isAdmin: true },
    { name: "Alex", mark: 4.2, email: "alex@gmail.com", isAdmin: false },
    { name: "Martin", mark: 4, email: "martin@gmail.com", isAdmin: true },
    { name: "Denys", mark: 3.7, email: "denys@gmail.com", isAdmin: false },
    { name: "Daniel", mark: 4.8, email: "daniel@gmail.com", isAdmin: true },
    { name: "John", mark: 3.6, email: "jogn@gmail.com", isAdmin: false },
    { name: "Phil", mark: 4.5, email: "phil@gmail.com", isAdmin: false },
    { name: "Anna", mark: 3.8, email: "anna@gmail.com", isAdmin: false },
];

// console.log(students);

function logAdmins(students) {
    //вернуть из функции список тех, у кого поле isAdmin: true
    let studentsIsAdmin = students.filter(function (student) {
        return student.isAdmin;
    });
    console.log(studentsIsAdmin);
    return studentsIsAdmin;
}
logAdmins(students);

function filterByMark(students) {
    //ввести оценку через prompt
    let teacherMark = +prompt("Put the mark");

    let goodMarkStudents = students.filter(function (student) {
        return student.mark >= teacherMark;
    });
    console.log(goodMarkStudents);
    //и вернуть из функции список тех, у кого в поле mark оценка >= чем введенная ранее
    return goodMarkStudents;
}
filterByMark(students);

function renderStudents(students) {
    //по аналогии с курсами валют
    let renderStudents = students.reduce(function (str, student) {
        str += `<tr>
                <td>${student.name}</td>
                <td>${student.mark}</td>
                <td>${student.email}</td>
               </tr>`;
        return str;
    }, "");
    document.querySelector(".students tbody").innerHTML = renderStudents;
}
renderStudents(students);

function getAverageMark(students) {
    //вернуть среднюю оценку (2 знака после запятой) из списка students
    let sum = students.reduce(function (sum, student) {
        sum += student.mark;
        return sum;
    }, 0);
    let averageMark = (sum / students.length).toFixed(2);

    console.log(averageMark);
    return averageMark;
}
getAverageMark(students);

function getEmailList(students) {
    //вернуть список состоящий из только поля email студентов
    let studentsEmails = students.map(function (student) {
        return student.email;
    });
    console.log(studentsEmails);
    // пример результата: ['vasya@gmail.com', 'helen@gmail.com', ..., 'anna@gmail.com']
    return studentsEmails;
}
getEmailList(students);

function getDataList(students) {
    //вернуть список, состоящий из name и email студентов

    let namesAndEmails = students.map(function (student) {
        let arrayNamesEmails = {};
        arrayNamesEmails.name = student.name;
        arrayNamesEmails.email = student.email;
        return arrayNamesEmails;
    });
    console.log(namesAndEmails);
    //пример результата: [{name: 'Vasya', email: 'vasya@gmail.com'}, {name: 'Helen', email: 'helen@gmail.com'}, ..., {name: 'Anna', email: 'anna@gmail.com'}]
}
getDataList(students);
