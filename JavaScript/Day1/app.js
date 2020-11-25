/*let x=20;
let y=30;
let=z=x+y;
console.log(z);*/

/*let x=20;
let name="mg mg";
console.log(name);
console.log(typeof x);*/

/*var z=x+name;
console.log(typeof z);

var yes=true;
console.log(typeof yes);*/

//single line comment*/

/*multi line comment
multi line comment
multi line comment
multi line comment*/


/*let x=20; //assign
x=70; //reassign
console.log(x)*/

/*//array
var months=["Jan","Feb","March"];
var week=new Array("Monday","Tuesday")
console.table(months);
console.log(typeof months);
console.log(months.length);*/


/*//multiple array
var myarray=[1,2,3,[4,5,6]];
console.table(myarray);

var myarray=[1,2,[11,[13,14,15],7],[4,5,6]];
console.table(myarray[2][1][1]); //14*/


/*//String Array
var greet="Hello Bootcampers";
console.log(greet.length);*/


//search
/*var str="Welcome to Myanmar IT Consulting";
var pos=str.search("IT");
console.log(pos);*/

/*//slice()
var str='Apple, Banana,Kiwi';
var res=str.slice(7,13);
var res=str.slice(-12, -6); //banana
var res=str.slice(-4); //kiwi
var res=str.slice(-19,-13); //apple
console.log(res);*/

/*//substring (no negative)
var str='Apple, Banana,Kiwi';
var res=str.substring(7,13);
console.log(res); //banana*/

/*//replace()
var str="Welcome Bootcampers";
var res=str.replace("Welcome","Hello");
console.log(res);*/

/*//Number Method
let x=123;
//tostring();
var y=x.toString();
console.log(typeof y);*/


/*//tofixed()
var x=9.656; 
console.log(x.toFixed(2)); //9.66
console.log(x.toFixed(0)); //10*/

/*//Number
var x=false;
console.log(Number(x));
*/

/*// parseInt() ==> to convert integer
var x=10.6789;
console.log(parseInt(x));*/



/*//Array Method
//toString()
var months=["feb", "Jan","March"];
var stringmonth=months.toString();
console.log(stringmonth);
console.log(typeof stringmonth);*/


/*//join()
var months=["feb", "Jan","March"];
var stringmonth=months.join("*");
console.log(stringmonth);
//console.log(typeof stringmonth);*/

/*//push()
var months=["Jan", "Feb","March"];
months.push("April");
console.log(months);

//pop() ==> delete from end
months.pop();
console.log(months);


//shift() ==> delete from start
months.shift();
console.log(months)

//unshift ==> add from start
months.unshift("Jan");
console.log(months);

console.log(months[0]);
months[0]="january";
console.log(months);*/

/*//splice()
var months=["Jan", "Feb","March","April"];
months.splice(1,1); //start index,count
months.splice(1,1,"May","Min","mmm"); //start index,count, replace
console.log(months);*/
/*
//concat()
var months=["Jan", "Feb","March","April"];
var array=["May","June","July"];
var myarray=months.concat(array);
console.log(myarray);*/


/*//the last array
var months=["Jan", "Feb","March","April", "May","June","July"];
var last=months[months.length-1]; //the last array
console.log(last);*/

/*//associated array
var person={firstname:"John",last: "Doe",age:20};
console.log(person.firstname);*/


/*var FirstName="Mg Mg"; //pascale case
var first_name="Mg Mg"; //underscore convention
var firstName="Mg Mg"; //camel case
var First_Name="Mg Mg" //snake case//constant*/

/*let name; //declare
let age=20;

name=age>20?"Mg Mg":"Aung Aung";
console.log(name);*/

/*//object
let person={
	name: "Mg Mg",
	age: 20,
	married:false,
	family:["U Ba", "Daw Mya", "su su"],
	myfunction:function(){
		console.log(this.name+" father is "+this.family[0]);
	}
}

console.log(person.name);
console.log(person["name"]);

//console.table(person[family[2]]);
console.table(person.family[2]); //susu
console.log(person.myfunction());*/


/*//json
let person={
	name: "Mg Mg",
	age: 20,
	married:false,
	family:["U Ba", "Daw Mya", "su su"],
}
console.log(typeof person);
var json=JSON.stringify(person); //convert obi to string
console.log(person); 

console.log(typeof json);

var obj=JSON.parse(json); //convert string to obj
console.log(obj);
console.log(typeof obj);*/


//constant (variable not reassign)
/*//const name="mg mg";
var name="mg mg";
name="Aung Aung";
console.log(name);*/


/*const person={
	name: "Mg Mg",
	age: 20,
	married:false,
	family:["U Ba", "Daw Mya", "su su"],
}
const person={
	name:"Aung Aung",
} //this is error

person.name="Aung Aung"; //constant is can change value
console.log(person);


const array=["min","pike","Hmu"];
//array=["lin","Aung"]; //error
array[1]="lin"; //not error
console.log(array);
*/


//operator (+=*/%)
/*let num1=;
let num2=5;
console.log(num1+num2);

//increment
num1+=1;
num1++;
num1=num1+1;
console.log(num1);

console.log(++num1); //11
console.log(num1++); //10
console.log(--num1); //4
console.log(num1--);*/ //5

/*//boolean operator
//==,===,!=,>=,<=,<,> (return true,false)
var x=4>5;
console.log(x);

var num=20;
var num1="20";
console.log(num==num1); //check value
console.log(num===num1); //check type*/


//&&, ||
//&& all condition is true
// or || one condition is true

//conditional statement
//if,if else, if elseif else,switch

/*if (4>5){
	console.log("answer");
}
else{
	console.log("answer wrong");
}*/

//iooping
//for,while,do while,foreach(array),forin()

//for loop (know loop count exactly)
/*for(var i=0;i<=10;i++){
	document.write("Su Sandi<br>" );
}

var cars=["Bins","Sunny","Honda"];
var length=cars.length;
for(var i=0;i<length;i++){
	document.write(cars[i]+"<br>");
}*/

/*for (var i=0;i<10;i++){
	if(i==3){
		//break;
		continue;
	}
	document.write("The number is "+i+"<br>");
}
*/

/*//while
var num=100;
while(num>=20){
	document.write(num+"<br>");
	num-=5;
}

//dowhile
var num=100;
do{
	document.write(num+"<br>");
	num-=5;
}while(num>=20);*/


/*//forEach(change to array)
var data="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non.";
var dd=data.split(" ");
//console.table(dd);
dd.forEach(function(v,i){  //element==>value
	console.log(v);
});*/

/*//for in (loop index)
var dd=["One","Two","Three","Four"];
for(x in dd){
	//console.log(x);
	console.log(dd[x]);
}*/

//function

