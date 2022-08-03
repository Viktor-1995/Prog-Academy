function storeFunction() {
    const students = [{name: 'Vasya', mark: 3.8, email: 'vasya@gmail.com', isAdmin: false},
        {name: 'Helen', mark: 3.4, email: 'helen@gmail.com', isAdmin: false},
        {name: 'Marina', mark: 4.0, email: 'marina@gmail.com', isAdmin: true},
        {name: 'Alex', mark: 4.2, email: 'alex@gmail.com', isAdmin: false},
        {name: 'Martin', mark: 4, email: 'martin@gmail.com', isAdmin: true},
        {name: 'Denys', mark: 3.7, email: 'denys@gmail.com', isAdmin: false},
        {name: 'Daniel', mark: 4.8, email: 'daniel@gmail.com', isAdmin: true},
        {name: 'John', mark: 3.6, email: 'jogn@gmail.com', isAdmin: false},
        {name: 'Phil', mark: 4.5, email: 'phil@gmail.com', isAdmin: false},
        {name: 'Anna', mark: 3.8, email: 'anna@gmail.com', isAdmin: false}];

    return {
        getData: function() {
            return students;
        },
        setStudentEmailByName: function(name, newEmail) {
            students.forEach(function(el) {
                if(el.name === name) {
                    el.email = newEmail;
                }
            })
        },
        checkNameIncludes: function(name) {
            // let isStudentFound = false;
            // students.forEach(function(student) {
            //     if(student.name === name) {
            //         isStudentFound = true;
            //     }
            // })
            // return isStudentFound;

            // return !!students.filter(function(student) {
            //     return student.name === name;
            // }).length;

            return students.some(function(student) {
                return student.name === name;
            });
        }
    }
}

const store = storeFunction();

function logAdmins(students) {
    return students.filter(function(student) {
        return student.isAdmin;
    }).map(function(student) {
        return student.name;
    })
}
console.log(logAdmins(store.getData()));

function filterByMark(students) {
    let inputMark = +prompt('Please enter a mark');
    if(isNaN(inputMark)) {  return;  }
    return students.filter(function(student) {
        return student.mark >= inputMark;
    }).map(function(student) {
        return student.name;
    }).join(', ') || '---';
}
// console.log(filterByMark(store.getData()));

function renderStudents(students) {
    const htmlStr = students.reduce(function(acc, student, index) {
        return acc + `<tr><td>${index + 1}</td><td>${student.name}</td><td ${student.isAdmin ? 'data-admin' : ''}></td></tr>`;
    }, '');
    document.querySelector('.students tbody').innerHTML = htmlStr || `<tr><td colspan="3" class="text-center">Not Found</td></tr>`;
}
renderStudents(store.getData());

function getAverageMark(students) {
    let totalMark = students.reduce(function(acc, student) {
        return acc + student.mark;
    }, 0);
    return (totalMark / students.length).toFixed(2);
}
console.log(getAverageMark(store.getData()));

function getEmailList(students) {
    return students.map(function(student) { return student.email; })
}
console.log(getEmailList(store.getData()));

function getDataList(students) {
    return students.map(function(student) {
        return { email: student.email, name: student.name };
    });
}
console.log(getDataList(store.getData()));




let searchInput = document.querySelector('#search');

searchInput.onkeyup = function(event) {
    let value = event.currentTarget.value.toLowerCase().trim();
    let students = store.getData();
    let filteredStudets = students.filter(function(student) {
        return student.name.toLowerCase().includes(value);
    });
    renderStudents(filteredStudets);
}