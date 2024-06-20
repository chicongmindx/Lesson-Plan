import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-app.js";
import { getDatabase, ref, child, get, set, update, remove } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-database.js";

const firebaseConfig = {
    apiKey: "AIzaSyCtt-EHN-1prWgpvIssyHLgsQa2jHYggeA",
    authDomain: "login-c9e87.firebaseapp.com",
    databaseURL: "https://login-c9e87-default-rtdb.firebaseio.com",
    projectId: "login-c9e87",
    storageBucket: "login-c9e87.appspot.com",
    messagingSenderId: "546923983339",
    appId: "1:546923983339:web:3a272da1e74b5856d169ae"
};

const app = initializeApp(firebaseConfig);
const db = getDatabase();

let firstName = document.getElementById('firstName');
let lastName = document.getElementById('lastName');
let dept = document.getElementById('dept');
let swim = document.getElementById('swim');
let id = document.getElementById('id');

let addBtn = document.getElementById('add');
let retBtn = document.getElementById('ret');
let updBtn = document.getElementById('upd');
let delBtn = document.getElementById('del');

function addData() {
    set(ref(db, 'EmployeeSet/' + id.value), {
        nameofemployee: {firstname: firstName.value, lastname: lastName.value},
        department: dept.value,
        swim: (swim.value == "Yes"),
        id: Number(id.value)
    }).then(() => {
        alert("Data Added Successfully");
    }).catch((error) => {
        alert("Unsuccessful");
        console.log(error);
    });
}

function retData() {
    const dbRef = ref(db);

    get(child(dbRef, 'EmployeeSet/' + id.value)).then((snapshot) => {
        if(snapshot.exists()) {
            firstName.value = snapshot.val().nameofemployee.firstname;
            lastName.value = snapshot.val().nameofemployee.lastname;
            dept.value = snapshot.val().department;
            swim.value = (snapshot.val().swim) ? "Yes" : "No";
        } else {
            alert("Employee does not exist");
        }
    }).catch((error) => {
        alert("Unsuccessful");
        console.log(error);
    });
}

function updateData() {
    update(ref(db, 'EmployeeSet/' + id.value), {
        nameofemployee: {firstname: firstName.value, lastname: lastName.value},
        department: dept.value,
        swim: (swim.value == "Yes"),
    }).then(() => {
        alert("Data Updated Successfully");
    }).catch((error) => {
        alert("Unsuccessful");
        console.log(error);
    });
}

function deleteData() {
    remove(ref(db, 'EmployeeSet/' + id.value))
    .then(() => {
        alert("Data Deleted Successfully");
    }).catch((error) => {
        alert("Unsuccessful");
        console.log(error);
    });
}

addBtn.addEventListener('click', addData);
retBtn.addEventListener('click', retData);
updBtn.addEventListener('click', updateData);
delBtn.addEventListener('click', deleteData);