console.log("dnjkswh");
document.title="My Name";
let header=document.getElementById("header-title");
console.log(header);
header.style.border='solid 3px #000';
let list=document.getElementsByClassName('list-group-item');
list[2].style.backgroundColor='green';
for(let i=0;i<list.length;i++){
    list[i].style.fontWeight='Bold';
}
let list1=document.getElementsByTagName('ul');
var entry=document.createElement('li');
entry.className='list-group-item';
entry.innerText='new list';
list1[0].appendChild(entry);
let fc=document.querySelectorAll('.list-group-item');
fc[1].style.backgroundColor='green';
fc[3].style.visibility='hidden';

var itemList=document.querySelector('#items');

console.log(itemList.lastElementChild);
console.log(itemList.nextElementSibling);

let newdiv=document.createElement('div');

newdiv.className='hello';
newdiv.id='hello';
var textnode=document.createTextNode('Hello world my name is akash saxena');
newdiv.appendChild(textnode);
console.log(newdiv);

let additem=document.querySelector('header .container');
let h1=document.querySelector('header h1');
console.log(additem);
additem.insertBefore(newdiv,h1);
newdiv.style.fontSize='30px';



