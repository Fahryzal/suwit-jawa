var tanya=true;
while(tanya){

var player=prompt('pilih \njempol,telunjuk,kelingking');
var computer=Math.random();


if(computer<0.23){
computer='jempol';}
else if(computer>0.23 && computer<0.66){
computer='telunjuk';}
else{
computer='kelingking';}

if(player!=='jempol')
{hasilnya=alert(player+'eror');}


var hasilnya='';

if (player=='jempol'){
if(computer=='telunjuk'){
hasilnya='menang';}
else if(computer=='kelingking'){
hasilnya='kalah';}
else if(computer=='jempol'){
hasilnya='seri';}
else{
hasilnya='ada yang salah1';}
}

if(player=='telunjuk'){
if(computer=='jempol'){
hasilnya='kalah'}
else if(computer=='kelingking'){
hasilnya='menang';}
else if(computer=='telunjuk'){
hasilnya='seri'}
else{
hasilnya='ada yang salah2';}}

if(player=='kelingking'){
if(computer=='jempol'){
hasilnya='menang';}
else if(computer=='telunjuk'){
hasilnya='kalah';}
else if(computer=='kelingking'){
hasilnya='seri';}
else{
hasilnya='ada yang salah3';}
}
alert('kamu '+player+'\ncomputer '+ computer+ '\nhasilnya kamu '+hasilnya );

tanya = confirm('main lagi?');}