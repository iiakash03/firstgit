let form=document.getElementById("form");

form.addEventListener("submit",addProduct);

function addProduct(event){
    event.preventDefault();
    let name=event.target.id.value;
    let product=event.target.product.value;
    let price=event.target.price.value;
    //console.log(typeof(price*1));
    console.log(name);
    console.log(product);
    console.log(price);

    let num=document.getElementById("span");
    let retur=(num.innerText*1) + (price*1);
    let text=retur+"";
    console.log(text);

    num.innerText=text;

    

    let lis=document.getElementById("addItems");
    let del=document.createElement("button");
    del.innerText="Delete";
    del.className="delete";    
    let li=document.createElement("li");
    li.className="inside";
    li.innerText=`${product} - ${price} `;
    li.appendChild(del);
    lis.appendChild(li);
    
    
}

let butclick=document.getElementById("addItems");
butclick.addEventListener('click',deleteProduct);

function deleteProduct(e){
    if(e.target.className="delete"){
        let val=document.getElementById("span");
        let pri= e.target.parentNode.innerText;
        const arr=pri.split(" ");
        const nvar=(val.innerHTML)*1-arr[2]*1;
        let dsa=nvar+"";
        val.innerText=dsa;
        butclick.removeChild(e.target.parentNode);
        //let val=document.getElementById("span").innerHTML;



    }



}