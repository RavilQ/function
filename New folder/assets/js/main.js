 let say = prompt("Daxil edeceyiniz ededlerin sayini yazin:");
let arr =[];
 for (let index = 0; index <Number(say) ; index++) {
      let reqemler = prompt("Ededleri daxil edin:");
      arr.push(reqemler);
 }

 let emel = prompt("Etmek istediyiniz emeli yazin");
      if(emel == "+"){
        let cavab = topla(arr);
        console.log(cavab);
      }
      if(emel == "-"){
        let cavab = cix(arr);
        console.log(cavab);
      }
      if(emel == "*"){
        let cavab = vur(arr);
        console.log(cavab);
      }
      if(emel == "/"){
        let cavab = bol(arr);
        console.log(cavab);
      }
      else{
        alert("Duzgun emel secin!!! (*,+,-,/)")
      }


function topla(arr) {
    let cem = 0;
    for (let index = 0; index < arr.length; index++) {
        
      cem=cem+Number(arr[index]);
    }
    return cem;
}

function cix(arr) {
    let ferq=0;
    for (let index = 0; index < arr.length; index++) {
        ferq=arr[index]-ferq;
    }
    return ferq;
}

function vur(arr) {
    let hasil = 1;
    for (let index = 0; index < arr.length; index++) {
        
        hasil=hasil*arr[index];
    }
    return hasil;
}

function bol(arr) {
    let qismet = 1;
    for (let index = 0; index < arr.length; index++) {
        
        qismet=arr[index]/qismet;
    }
    return qismet;
}