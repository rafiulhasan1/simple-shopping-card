document.getElementById('fa-plus').addEventListener('click',function(){
    const numberText = document.getElementById('num-text');
    const stringNumberText = numberText.value;
    const setNumber = parseInt(stringNumberText);
    numberText.value = setNumber+1;
    
    const phonePrice = document.getElementById('phone-price');
    phonePrice.innerText = 1219*numberText.value;

    const subTotalWithoutTex = document.getElementById('sub-total');
    const stringSubTotalWithoutTex = subTotalWithoutTex.innerText;
    const totalWithoutTex = parseFloat(stringSubTotalWithoutTex);
    subTotalWithoutTex.innerText = totalWithoutTex+1219;

    const texCard = document.getElementById('tex-card');
    const stringTexCard = texCard.innerText;
    const numTexCard = parseFloat(stringTexCard);
    texCard.innerText = numTexCard+3;

    const totalPrice = document.getElementById('total-price');
    const stringTotalPrice = totalPrice.innerText;
    const numTotalPrice = parseFloat(stringTotalPrice);
    totalPrice.innerText = numTotalPrice+1219+3;
})

document.getElementById('fa-minus').addEventListener('click',function(){
    const numberText = document.getElementById('num-text');
    const stringNumberText = numberText.value;
    const setNumber = parseInt(stringNumberText);
    if(setNumber>0){
        numberText.value = setNumber-1;
        const phonePrice = document.getElementById('phone-price');
        phonePrice.innerText = 1219*numberText.value;

        const subTotalWithoutTex = document.getElementById('sub-total');
        const stringSubTotalWithoutTex = subTotalWithoutTex.innerText;
        const totalWithoutTex = parseInt(stringSubTotalWithoutTex);
        subTotalWithoutTex.innerText = totalWithoutTex-1219;

        const texCard = document.getElementById('tex-card');
        const stringTexCard = texCard.innerText;
        const numTexCard = parseFloat(stringTexCard);
        texCard.innerText = numTexCard-3;

        const totalPrice = document.getElementById('total-price');
        const stringTotalPrice = totalPrice.innerText;
        const numTotalPrice = parseFloat(stringTotalPrice);
        totalPrice.innerText = numTotalPrice-1219-3;
    }
    else{
        return;
    }
})