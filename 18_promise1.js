/*const { forEach } = require("lodash");

const students = [{name:'reshma',sub:'English'},{name:'Mayur',sub:'English'}];
const getStudents = (students)=>{
    console.log("hi");
    setTimeout(()=>{
        console.log("hello");
        students.forEach((student)=>{
            console.log("hey");
            console.log(`${student.name} + " " + ${student.sub}`);
        })
    },5000)
}
const enrollstudent = (students,newstudent, callback)=>{
    setTimeout(()=>{
        students.push(newstudent);
        console.log('enrolled successfully');
        callback(students);
    },6000)
}
student = {name:"soni",sub:"marathi"};
enrollstudent(students,student,getStudents);*/
const { forEach } = require("lodash");

const students = [{name:'reshma',sub:'English'},{name:'Mayur',sub:'English'}];
const getStudents = (students)=>{
    console.log("hi");
    setTimeout(()=>{
        console.log("hello");
        students.forEach((student)=>{
            console.log("hey");
            console.log(`${student.name} + " " + ${student.sub}`);
        })
    },5000)
}
const enrollstudent = (students,newstudent)=>{
    return new Promise((resolve,reject)=>{
        
        setTimeout(()=>{

            error = true;
           
                students.push(newstudent);
                console.log('enrolled successfully');
               
            if(!error){
                resolve();
            }
            else{
                reject(error);
            }
        },6000)
    })
} 
student = {name:"soni",sub:"marathi"};
enrollstudent(students,student)
.then(getStudents(students))
.catch((err)=>{
    console.log(err);
});

