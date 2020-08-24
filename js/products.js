import products from '/js/database.js';

let mark = document.querySelector(".mark");
let ventes = document.querySelector(".ventes")


for (const product in products){
    if(products[product].type == 'mark'){ 
    mark.innerHTML= mark.innerHTML+   
`<div class="card-produits">
<div class="img">
    <img src="${products[product].img}" width="150px" height="150px">
    <div class="solde22">
        <p>${products[product].solde}</p>
    </div>
</div>
<div class="text22">
    <div class="title">
        <h4>${products[product].title}</h4>
    </div>
    <div class="info">
        <p style="font-size: 15px;margin-top: 30px; "> <span style="color: red;"> Prix :</span> ${products[product].prix}<span style="text-decoration: line-through;font-size: 10px; ">${products[product].prixS}</span></p>
    </div>
</div>
</div> `; }
else if(products[product].type == 'ventes'){
    ventes.innerHTML= ventes.innerHTML+   
    `<div class="card-produits">
    <div class="img">
        <img src="${products[product].img}" width="150px" height="150px">
        <div class="solde22">
            <p>${products[product].solde}</p>
        </div>
    </div>
    <div class="text22">
        <div class="title">
            <h4>${products[product].title}</h4>
        </div>
        <div class="info">
            <p style="font-size: 15px;margin-top: 30px; "> <span style="color: red;"> Prix :</span> ${products[product].prix}<span style="text-decoration: line-through;font-size: 10px; ">${products[product].prixS}</span></p>
        </div>
    </div>
    </div> `}
}

