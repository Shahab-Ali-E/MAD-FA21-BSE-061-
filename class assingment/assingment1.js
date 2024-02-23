
/***************************
********String Methods******
****************************/

//**Length Method*/
let text = "Shahab ali hassan , FA21-BSE-061 ";
console.log(text.length);//33

//**charAt Method*/
console.log(text.charAt(2));//a

//**charCodeAt Method*/
console.log(text.charCodeAt(2));//97

//**at Method*/
console.log(text.at(-5));//E

//**[] alternative of at Method*/
console.log(text[11]);//h

//**slice Method*/
console.log(text.slice(1,30));//hahab ali hassan , FA21-BSE-0

//**substring Method*/
console.log(text.substring(-2,32));//Shahab ali hassan , FA21-BSE-061

//**1.substr Method*/
console.log(text.substr(2,10));//ahab ali h

//**2.substr Method*/
console.log(text.substr(9));//i hassan , FA21-BSE-061

//**3.substr Method*/
console.log(text.substr(-10));

//**toUpperCase Method*/
console.log(text.toUpperCase());//SHAHAB ALI HASSAN , FA21-BSE-061

//**toLowerCase Method*/
console.log(text.toLowerCase());//shahab ali hassan , fa21-bse-061

//**toLowerCase Method*/
console.log(("Hi i am student of Comsats").concat(text));//Hi i am student of ComsatsShahab ali hassan , FA21-BSE-061

//**trim Method*/
console.log(text.trim());//shahab ali hassan , fa21-bse-061

//**trimStart Method*/
console.log(text.trimStart());//same as above

//**trimEnd Method*/
console.log(text.trimEnd());//same as above

//**padStart Method*/
console.log(text.padStart(35,"11"));//it will only pad if the length you provide > the length of original string

let number = (11).toString();
console.log(text.padStart(38,number));//11111Shahab ali hassan , FA21-BSE-061

//**padEnd */ Method*/
console.log(text.padEnd(38,number));//Shahab ali hassan , FA21-BSE-061 11111

//**repeat */ Method*/
console.log(text.repeat(2));//repeat the string twice

//**replace */ Method*/
console.log(text.replace("Shahab ali hassan , FA21-BSE-061","hi this is replace string"));//hi this is replace string  
//replace with gloable match
console.log(text.replace(/S/g,'EE'));//EEhahab ali hassan , FA21-BEEE-061 

//**replaceAll */ Method*/(ES2021 feature)
console.log(text.replaceAll('S','EE'));//same as above





/***************************************************************************************************************
****************************************************************************************************************
****************************************************************************************************************/





/***************************
********Array Methods******
****************************/


let shahabArray = ['shahab',"ali" ,"hassan", 21,'fa21-bse-061','BS-SE'];

//**length */ Method*/
console.log(shahabArray.length);//6

//**toString */ Method*/
console.log(shahabArray.toString());

//**at */ Method*/
console.log(shahabArray.at(2));//hassan

//**join */ Method*/
console.log(shahabArray.join('*'));//shahab*ali*hassan*21*fa21-bse-061*BS-SE

//**pop */ Method*/
console.log(shahabArray.pop());//BS-SE

//**push */ Method*/
console.log(shahabArray.push('BS-SE'));

//**shift */ Method*/
console.log(shahabArray.shift());

//**unshift */ Method*/
console.log(shahabArray.unshift('shahab'));

//**delete */ Method*/
delete shahabArray[0];
console.log(shahabArray);//it leaves undefine/empty at where the element removed

//**concat */ Method*/
console.log(['shahab'].concat(shahabArray));

//**Map */ Method*/
console.log(shahabArray.map((element)=>{
    return element**2;
}));

//**filter */ Method*/
console.log(shahabArray.filter((element)=>{
    return element == 'hassan'; 
}));

//**copyWithin */ Method*/
// console.log(shahabArray.copyWithin(3,1,2));

//**find */ Method*/
console.log(shahabArray.find(element=>element==21));

//**reverse */ Method*/
console.log(shahabArray.reverse());

//**slice */ Method*/
console.log(shahabArray.slice(-3,-1));

//**splice */ Method*/
console.log(shahabArray.splice(2,2,21,"hassan"));

//**reduce */ Method*/
console.log(shahabArray.reduce((total, current) =>
 total + (typeof current === 'number' ? current : 0),10));
