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
