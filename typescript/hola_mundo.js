var _this = this;
console.log("hola mundo");
//primitivas
var full_name = "Jorge Cano";
var age = 27;
var developer = true;
//objetos
var skills = ['JavaScript', 'TypeScript', 'Angular', 'AngularJS'];
var numberArray = [1, 2, 3, 4, 5, 6];
var Role;
(function (Role) {
    Role[Role["Employee"] = 0] = "Employee";
    Role[Role["Manager"] = 1] = "Manager";
    Role[Role["Admin"] = 2] = "Admin";
    Role[Role["Others"] = 3] = "Others";
})(Role || (Role = {}));
;
var role = Role.Others;
var something = "Ahora soy un string";
//functions
function setName(name) {
    this.full_name = name;
}
function getHello(pretext) {
    return (" " + pretext + ": ") + this.full_name;
}
function inConsole(nameFunction) {
    console.log(nameFunction);
}
inConsole(getHello('Hola Platzi mi nombre es'));
inConsole("en realidad recibo cualquier formato a lo js");
var data = ['AngularJS', 'Angular', 'Redux', 'Polymer', 'ReactJS', 'VueJS'];
data.forEach(function (frameworksLibs) {
    _this.inConsole(frameworksLibs);
});
// CLASES 
var Fooo = (function () {
    function Fooo() {
    }
    return Fooo;
}());
var Bar = (function () {
    function Bar() {
    }
    return Bar;
}());
var Baz = (function () {
    function Baz(fooo, bar) {
    }
    return Baz;
}());
var baz = new Baz(new Fooo(), new Bar());
var soyPersona = {
    first_name: 'Jorge',
    last_name: 'Cano',
    twitter_user: '@jorgeucano'
};
var personaSinTwitter = {
    first_name: 'Jor',
    last_name: 'Ge'
};
// SHAPES
var Person = (function () {
    function Person() {
        this.first_name = "Jor";
        this.last_name = "Ca";
        this.twitter_user = "@jorgeucano";
    }
    Person.prototype.setLastName = function (last_name) {
        this.last_name = last_name;
    };
    return Person;
}());
var myPerson = new Person();
myPerson.first_name = "Jorge";
myPerson.setLastName("Cano");
console.log(soyPersona);
console.log(personaSinTwitter);
console.log(myPerson);
