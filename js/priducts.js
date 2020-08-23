let mark = document.querySelector(".mark");
let ventes = document.querySelector(".ventes")
const products = {
    poduct1 : {
        type : 'mark',
        img  : 'img/product.png',
        title : ' Lotion Nettoyante Sans Rincage Peaux Intolerantes 300ml Aveneni',
        prix : '250 DH',
        solde : '-20%',
        prixS : '350 DH'
    },
    product2 : {
        type : 'mark',
        img  : 'img/product1.png',
        title : ' Lotion Nettoyante Sans Rincage Peaux Intolerantes 300ml Avene',
        prix : '150 DH',
        solde : '-20%',
        prixS : '250 DH'
    },
    product3 : {
        type : 'mark',
        img  : 'img/product2.png',
        title : ' Lotion Nettoyante Sans Rincage Peaux Intolerantes 300ml Avene',
        prix : '1050 DH',
        solde : '-20%',
        prixS : '2000 DH'
    },
    product4: {
        type : 'mark',
        img  : 'img/product3.png',
        title : 'mou Lotion Nettoyante Sans Rincage Peaux Intolerantes 300ml Aveneo',
        prix : '1050 DH',
        solde : '-20%',
        prixS : '2000 DH'
    },
    product5 : {
        type : 'mark',
        img  : 'img/product4.png',
        title : ' Lotion Nettoyante Sans Rincage Peaux Intolerantes 300ml Avene',
        prix : '1050 DH',
        solde : '-20%',
        prixS : '2000 DH'
    },
    product6 : {
        type : 'mark',
        img  : 'img/product5.png',
        title : ' Lotion Nettoyante Sans Rincage Peaux Intolerantes 300ml Avene',
        prix : '1050 DH',
        solde : '-20%',
        prixS : '2000 DH'
    },
    product7 : {
        type : 'ventes',
        img  : 'img/product6.png',
        title : ' Lotion Nettoyante Sans Rincage Peaux Intolerantes 300ml Avene',
        prix : '1050 DH',
        solde : '-20%',
        prixS : '2000 DH'
    },
    product8 : {
        type : 'ventes',
        img  : 'img/product7.png',
        title : ' Lotion Nettoyante Sans Rincage Peaux Intolerantes 300ml Aveneo',
        prix : '1050 DH',
        solde : '-20%',
        prixS : '2000 DH'
    },
    product9 : {
        type : 'ventes',
        img  : 'img/product8.png',
        title : 'Lotion Nettoyante Sans Rincage Peaux Intolerantes 300ml Avene',
        prix : '1050 DH',
        solde : '-20%',
        prixS : '2000 DH'
    },
    product10 : {
        type : 'ventes',
        img  : 'img/product9.png',
        title : ' Lotion Nettoyante Sans Rincage Peaux Intolerantes 300ml Avene',
        prix : '1050 DH',
        solde : '-20%',
        prixS : '2000 DH'
    },
    product11 : {
        type : 'ventes',
        img  : 'img/product10.png',
        title : ' Lotion Nettoyante Sans Rincage Peaux Intolerantes 300ml Avene',
        prix : '1050 DH',
        solde : '-20%',
        prixS : '2000 DH'
    },
    product12 : {
        type : 'ventes',
        img  : 'img/product11.png',
        title : ' Lotion Nettoyante Sans Rincage Peaux Intolerantes 300ml Avene',
        prix : '1050 DH',
        solde : '-20%',
        prixS : '2000 DH'
    }
}

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
</div> `; }else if(products[product].type == 'ventes'){
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
    </div> `

}

}

