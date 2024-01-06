document.getElementById('case-fa-plus').addEventListener('click',function(){
    const numberText = document.getElementById('case-num-text');
    const stringNumberText = numberText.value;
    const setNumber = parseInt(stringNumberText);
    numberText.value = setNumber+1;
    
    const phonePrice = document.getElementById('case-price');
    phonePrice.innerText = 59*numberText.value;

    const subTotalWithoutTex = document.getElementById('sub-total');
    const stringSubTotalWithoutTex = subTotalWithoutTex.innerText;
    const totalWithoutTex = parseFloat(stringSubTotalWithoutTex);
    subTotalWithoutTex.innerText = totalWithoutTex+59;

    const texCard = document.getElementById('tex-card');
    const stringTexCard = texCard.innerText;
    const numTexCard = parseFloat(stringTexCard);
    texCard.innerText = numTexCard+1;

    const totalPrice = document.getElementById('total-price');
    const stringTotalPrice = totalPrice.innerText;
    const numTotalPrice = parseFloat(stringTotalPrice);
    totalPrice.innerText = numTotalPrice+59+1;
})

document.getElementById('case-fa-minus').addEventListener('click',function(){
    const numberText = document.getElementById('case-num-text');
    const stringNumberText = numberText.value;
    const setNumber = parseInt(stringNumberText);
    if(setNumber>0){
        numberText.value = setNumber-1;
        const phonePrice = document.getElementById('case-price');
        phonePrice.innerText = 59*numberText.value;

        const subTotalWithoutTex = document.getElementById('sub-total');
        const stringSubTotalWithoutTex = subTotalWithoutTex.innerText;
        const totalWithoutTex = parseInt(stringSubTotalWithoutTex);
        subTotalWithoutTex.innerText = totalWithoutTex-59;

        const texCard = document.getElementById('tex-card');
        const stringTexCard = texCard.innerText;
        const numTexCard = parseFloat(stringTexCard);
        texCard.innerText = numTexCard-1;

        const totalPrice = document.getElementById('total-price');
        const stringTotalPrice = totalPrice.innerText;
        const numTotalPrice = parseFloat(stringTotalPrice);
        totalPrice.innerText = numTotalPrice-59-1;
    }
    else{
        return;
    }
})