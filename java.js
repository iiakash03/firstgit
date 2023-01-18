var submit=document.getElementById('butt');
console.log(submit);
submit.addEventListener('click',submitted);
let del=document.getElementById('items');
del.addEventListener('click',deleElement);

function deleElement(e){
    if(e.target.className=='btn btn-danger btn-sm float-right delete'){
        let delist=e.target.parentElement;
        console.log(delist);
        del.removeChild(delist);

    console.log('1');
    }

}

function submitted(e){
    e.preventDefault();
    var addItem=document.getElementById('item');

    let list=document.createElement('li');
    list.className='list-group-item'
    //let text=documnet.createTextNode('new list');
    let button=document.createElement('button');
    let button2=document.createElement('button');
    button.className='btn btn-danger btn-sm float-right delete';
    button2.className='btn btn-success btn-sm float-right delete';
    button.innerText='X';
    button2.innerText='Edit';
    list.innerText=addItem.value;
    list.appendChild(button);
    list.appendChild(button2);
    let allitems=document.getElementById('items');
    allitems.appendChild(list);
}