// // ES6


// class User{
//     constructor(username,email,password){
//         this.username = username;
//         this.email = email;
//         this.password = password;
//     }

// encryptPassword(){
    
//     return  `${this.password}brsfw`;
     
// }

// Changeusername(){
//     return `${this.username.toUpperCase()}`;
// }

// }

// const chai = new User("Akhand","[EMAIL_ADDRESS]","12345");
// console.log(chai.encryptPassword());
// console.log(chai.Changeusername());



// behind the scene

// function User(username,email,password){
//     this.username = username;
//     this.email = email;
//     this.password = password;
// }

// User.prototype.encryptPassword = function(){
//     return `${this.password}brsfw`;
// }

// User.prototype.Changeusername = function(){
//     return `${this.username.toUpperCase()}`;
// }

// const tea = new User("Akhand","[EMAIL_ADDRESS]","12345");
// console.log(tea.encryptPassword());
// console.log(tea.Changeusername());



// Inheritance


class user{

    constructor(username){
        this.username =username
    }
    logMe(){
        return `My user name is ${this.username}`;
    }
}

class Teacher extends user{
    constructor(username,email,password){
        super(username)
        this.email =email
        this.password=password
       

    }
    addcourse(courses){
        console.log(`My name is ${this.username} and I have added course`+courses);
         
    }

}



// constructor

// class Railwayform{

// constructor(givename,trainno){
// console.log("Constructor callled ..."+ givename +" "+ trainno);
// this.name = givename;
// this.trainno=trainno;


// }

// sumbit (){
// console.log(`My name is ${this.name}` );


// }

// cancel(){
// console.log(`Form cancelled for ${this.name}` );

// }

// }

// console.log(new Railwayform("Akahnd",59846));
