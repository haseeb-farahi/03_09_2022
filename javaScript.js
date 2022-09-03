const person = { fullName: function(){return this.name +"" + this.lastname}

};

    name: 'Asad',
    lastName: 'Ahmadi',
    Age: 23,




document.write(person.fullName())


for(let key in person){
    
    document.write("<h1>" +person [key] + "</h1>") ;




}

function myFunc(){
    alert(am btn function)
    document.getElementById('myBtn').style.color='blue';


}





alert('hi')


Cansole.log(person.name);
cansole.log(person.lastName);
cansole.log(person['age'])
document.write(person['job']);

const car = { name: 'BMW',model: 2000, plt: -2.1324 }
const person2 = new object();

person2.name="fayaz";
person2.lastName = "nasrati";
person2.age = 25;



function searchkey(){
    var inputa = document.querySelector('#a'),Value;
    var inputb = document.querySelector('#b'),Value;
    var total = parseInt(inputa) + parseInt(inputb)
    document.write(total)

    const person = {
        name: 'asad',
        lname: 'mahmood',
        age:  23,
        job: ' doc' ,
        phone:08139483

    }

    var total = inputa + inputb
    document.write(total);
document.write(person[input]);
    document.getElementById(demo). innerHTML.person[input];





myObj = {
    ame:'fayaz',
    age: 26,
    job: 'eng',
    cars: {
        car1:"ford",
        car2:"BMW",
        car3:"Fiat",}
    
// }

for(let key in myObj.cars){
    document.write(myObj.cars);
// }

const person = {
    name: "Haseeb",
    age : 19,
    cars:['a','b']
    cars:[
        0{ name:"ford"models:['f_2000', 'f_2001', 'f_1997']},
       1 { name:'toyota', models:['t_2003', 't_2022']},
       2 { name:'3_wheel', models:['z_zarag', 'z_shahab', 'z_raksah']},


    ]
}
var demo = "";
    demo = demo + person.name;

for(let key in person.cars){
    demo +=("<h1>"+ person.cars[key].name +" </h1>");

    for(let key2 in person.cars[key].models){
        demo += person.cars[key].models[key];

    }

}

document.getElementById('show').innerHTML=demo





    






