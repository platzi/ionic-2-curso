console.log("hola mundo");

//primitivas
var full_name:string = "Jorge Cano";
var age:number = 27;
var developer:boolean = true;
//objetos
var skills:Array<string> = ['JavaScript','TypeScript','Angular', 'AngularJS'];
var numberArray:number[] = [1,2,3,4,5,6];

enum Role {Employee, Manager, Admin, Others};
var role: Role = Role.Others;
var something:any = "Ahora soy un string";

//functions
function setName(name:string):void{
    this.full_name = name;
}

function getHello(pretext:string):string{
    return ` ${pretext}: ` + this.full_name;
}

function inConsole(nameFunction:any){
    console.log(nameFunction);
}

inConsole(getHello('Hola Platzi mi nombre es'));
inConsole("en realidad recibo cualquier formato a lo js");

var data: string[] = ['AngularJS', 'Angular', 'Redux', 'Polymer', 'ReactJS', 'VueJS'];
data.forEach((frameworksLibs)=>{
    this.inConsole(frameworksLibs);
});


// CLASES 

class Fooo { fooo:number; }
class Bar { bar:string; }

class Baz{
    constructor (fooo:Fooo, bar:Bar){}
}

let baz = new Baz(new Fooo(), new Bar());



//Interfaces

interface onePerson{
    first_name:string;
    last_name:string;
    twitter_user?:string;
}

let soyPersona:onePerson = {
    first_name : 'Jorge',
    last_name : 'Cano',
    twitter_user: '@jorgeucano'
}

let personaSinTwitter:onePerson = {
    first_name : 'Jor',
    last_name : 'Ge'
}

// SHAPES

class Person{
    first_name:string;
    last_name:string;
    twitter_user:string;

    constructor(){
        this.first_name = "Jor";
        this.last_name = "Ca";
        this.twitter_user = "@jorgeucano";
    }

    setLastName(last_name : string){
        this.last_name = last_name;
    }
}

var myPerson = new Person();
myPerson.first_name = "Jorge";
myPerson.setLastName("Cano");

console.log(soyPersona);
console.log(personaSinTwitter);
console.log(myPerson);