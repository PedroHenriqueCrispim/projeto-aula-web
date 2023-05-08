/*

// retorna a data

let data = new Date()
document.write(data);
document.write("<br><br>");



//retorna a data padrão do navegador
let data2 = new Date()
document.write(data2.toLocaleDateString());
document.write("<br><br>");

//retorna a data com array
let data3 = new Date()
let diaSemana=['Domingo','Segunda','Terça','Quarta','Quinta','Sexta','Sabado']
document.write(diaSemana[data3.getDay()]);
document.write("<br><br>");

//horas
let hour = new Date()
document.write(hour.getHours());
document.write("<br><br>");

hour.setHours(hour.getHours()+2);
document.write(hour.getHours());
document.write("<br><br>");

// retorna minutos
let minutes = new Date()
document.write(minutes.getMinutes());
document.write("<br><br>");

//retorna os segundos
let segundos = new Date()
document.write(segundos.getSeconds());
document.write("<br><br>");
*/

// retorna a data padrão americano
msg = document.getElementById('msgData')
let data1 = new Date()
//document.write(data1.toDateString());
//document.write("<br><br>");

msg.innerHTML +=`<p>${data1}</p>`

//tempo
function BemVindo(){
    alert("Ola, dev tudo bem")
}
setTimeout(BemVindo,100)