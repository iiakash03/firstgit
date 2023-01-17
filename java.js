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
