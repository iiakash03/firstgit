var submit=document.getElementById('butt');
console.log(submit);
submit.addEventListener('click',submitted);
let del=document.getElementById('items');
del.addEventListener('click',deleElement);
var search=document.getElementById('filter');
search.addEventListener('keyup',searchByKey);

function searchByKey(e){
    let text=e.target.value.toLowerCase();
    //console.log(text);
    var items=document.getElementsByTagName('li');

    Array.from(items).forEach(element => {
        var itemName=element.firstChild.textContent;
        var description=element.childNodes[1].textContent;
        if(itemName.toLowerCase().indexOf(text)!=-1 || description.toLowerCase().indexOf(text)!=-1){
            element.style.display='block';
        }else{
            element.style.display='none';
        }
        
    });

}


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
    var addItem=document.getElementById('item').value;
    var description=document.getElementById('item2').value;
    localStorage.setItem('val',addItem);
    localStorage.setItem('desc',description);

    let list=document.createElement('li');
    list.className='list-group-item'
    //let text=documnet.createTextNode('new list');
    let button=document.createElement('button');
    let button2=document.createElement('button');
    button.className='btn btn-danger btn-sm float-right delete';
    button2.className='btn btn-success btn-sm float-right delete';
    button.innerText='X';
    button2.innerText='Edit';
    const textNode=document.createTextNode(addItem)
    const descriptionNode=document.createTextNode(description);
    list.appendChild(textNode);
    list.appendChild(descriptionNode);
    list.appendChild(button);
    list.appendChild(button2);
    let allitems=document.getElementById('items');
    allitems.appendChild(list);

}