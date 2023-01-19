const display=document.getElementById('items');
for(let i=0;i<localStorage.length;i++){
    display.appendChild(localStorage.get())
}

function displayItems(e){
    e.preventDefault();
    //console.log("abcd");
    const obj={
        "name":e.target.fname.value,
        "email":e.target.femail.value,
        "phone":e.target.fphone.value,
    }

    const obj_serialize=JSON.stringify(obj);
    console.log(obj_serialize);

    localStorage.setItem(email,obj_serialize);
    const show=document.getElementById('items');
    const list=document.createElement('li');
    const button=document.createElement('button');
    button.className='btn btn-danger';
    button.innerText='Delete';
    console.log(button);
   
    const textNode=document.createTextNode(obj_serialize);
    list.appendChild(textNode)
    list.appendChild(button);
    show.appendChild(list);

}
const it=document.getElementById('items');
it.addEventListener('click',deleteElement);
function deleteElement(e){
    if(e.target.className==='btn btn-danger'){
        it.removeChild(e.target.parentNode);
    }


}