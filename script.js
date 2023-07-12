function getPilihanComputer(){
    const computer=Math.random();
    if(computer<0.23){
        return 'jempol';}
        else if(computer>0.23 && computer<0.66){
        return 'telunjuk';}
        else{
        return 'kelingking';
    }}

function hasilNya (computer,player) {
    if( player == computer ) return 'seri';  
    if( player == 'jempol' ) return ( computer == 'telunjuk' ) ? 'menang' : 'kalah';
    if( player == 'telunjuk' ) return ( computer == 'jempol' ) ? 'kalah' : 'menang';
    if( player == 'kelingking' ) return ( computer == 'jempol' ) ? 'menang' : 'kalah';
}

const pilihan=document.querySelectorAll('li img');
pilihan.forEach(function(pil){
    
pil.addEventListener('click',function(){
const pComputer = getPilihanComputer();
const pPlayer = pil.className;
const hasil = hasilNya(pComputer,pPlayer);
console.log('comp : '+ pComputer);
console.log('player : '+ pPlayer);

const gcomputer = document.querySelector('div.area-komputer img.img-komputer');
gcomputer.setAttribute('src', ''+pComputer+''+'.png');

const info= document.querySelector('.info');
info.innerHTML= hasil;});
});
// const pGajah=document.querySelector('.jempol');
// pGajah.addEventListener('click',function(){
// const pComputer = getPilihanComputer();
// const pPlayer = pGajah.className;
// const hasil = hasilNya(pComputer,pPlayer);
// console.log('comp : '+ pComputer);
// console.log('player : '+ pPlayer);

// const gcomputer = document.querySelector('.img-komputer');
// gcomputer.setAttribute('src', ''+pComputer+''+'.png');

// const info= document.querySelector('.info');
// info.innerHTML= hasil;});

// const pOrang =document.querySelector('.telunjuk');
// pOrang.addEventListener('click',function(){
// const pComputer = getPilihanComputer();
// const pPlayer = pOrang.className;
// const hasil = hasilNya(pComputer,pPlayer);
// console.log('comp : '+ pComputer);
// console.log('player : '+ pPlayer);

// const gcomputer = document.querySelector('.img-komputer');
// gcomputer.setAttribute('src', ''+pComputer+''+'.png');

// const info= document.querySelector('.info');
// info.innerHTML= hasil;});

// const pSemut=document.querySelector('.kelingking');
// pSemut.addEventListener('click',function(){
// const pComputer = getPilihanComputer();
// const pPlayer = pSemut.className;
// const hasil = hasilNya(pComputer,pPlayer);
// console.log('comp : '+ pComputer);
// console.log('player : '+ pPlayer);

// const gcomputer = document.querySelector('.img-komputer');
// gcomputer.setAttribute('src', ''+pComputer+''+'.png');

// const info= document.querySelector('.info');
// info.innerHTML= hasil;});