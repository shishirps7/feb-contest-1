/** @format */

let arr = [
  { id: 1, name: "john", age: "18", marks: 80 },
  { id: 2, name: "jack", age: "20", marks: 85 },
  { id: 3, name: "karen", age: "19", marks: 35 },
];

function PrintStudentswithMap() {
  //Write your code here , just console.log
  arr.map(function(a){
    if(a.marks>50){
      console.log(a.name);
    }

  })
}

function PrintStudentsbyForEach() {
  //Write your code here , just console.log
  arr.forEach(function(a){
    if(a.marks>50){
      console.log(a.name);
    }

  })
}

function addData() {
  //Write your code here, just console.log
  let id = prompt("enter id")
  let name = prompt("enter name")
  let age = prompt("enter age")
  let marks = prompt("enter marks")
  let a =arr.length;
 arr[a]={id,name,age,marks}
}
function removeFailedStudent() {
  //Write your code here, just console.log
 for(let x=0 ;x<arr.length;x++){
  if(arr[x].marks<50){
    arr.splice(x,1)
  }
 }
  console.log(arr)
  arr.forEach((a)=>console.log(a))

}

function concatenateArray() {
  //Write your code here, just console.log
let arr1 = [
  { id: 4, name: "Ajay", age: "20", marks: 90 },
  { id: 5, name: "Rahul", age: "19", marks: 95 },
  { id: 6, name: "Sumit", age: "17", marks: 85 },
];
let arr3 = arr.concat(arr1)
console.log(arr3)
}
