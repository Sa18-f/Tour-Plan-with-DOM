let count = 0;
const allBtn = document.getElementsByClassName('add-btn');
for(const btn of allBtn){
    btn.addEventListener('click', function(e){
        count = count + 1;
        setInnerText('cart-count', count);
    })
}
function setInnerText(id, value){
    document.getElementById(id).innerText = value;
}