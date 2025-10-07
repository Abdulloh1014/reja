console.log("Train ishga tushdi!")


// console.log("Jack Ma maslahatlari");
// const list = [
    // "Yaxshi talaba bo'ling!", // 0-20
    // "To'g'ri boshliq tanlang va ko'proq xato qiling!", // 20-30
    // "O'zingizga ishlashingizni boshlang!", // 30-40
    // "Siz kuchli bo'lgan narsalarni qiling", // 40-50
    // "Yoshlarga investitsiya qiling!", // 50-60
    // "Endi dam oling foydasi yo'q!", // 60 
// ];

// function maslatBering(a, callback) {
//     if(typeof a !== "number") callback("inseret a number", null);
//     else if (a <= 20) callback(null, list[0]);
//     else if (a > 20 && a <= 30) callback(null, list[1]);
//     else if (a > 20 && a <= 30) callback(null, list[2]);
//     else if (a > 20 && a <= 30) callback(null, list[3]);
//     else if (a > 20 && a <= 30) callback(null, list[4]);
//     else {
//         setTimeout(function () {
//           callback(null, list[5]);  
//         }, 5000);
//     }
// }

// console.log("passed here 0");
// maslatBering(65, (err, data) => {
//     if(err) conosole.log("ERROR:", err);
//     else {
//         console.log("javob:", data);
//     }
// });

// console.log("passed here 1");  





// console.log("Jack Ma maslahatlari");
// const list = [
//     "Yaxshi talaba bo'ling!", // 0-20
//     "To'g'ri boshliq tanlang va ko'proq xato qiling!", // 20-30
//     "O'zingizga ishlashingizni boshlang!", // 30-40
//     "Siz kuchli bo'lgan narsalarni qiling!", // 40-50
//     "Yoshlarga investitsiya qiling!", // 50-60
//     "Endi dam oling foydasi yo'q!", // 60 
// ];

// async function maslatBering(a) {
//     if(typeof a !== "number") throw new Error("inseret a number");
//     else if (a <= 20) return list[0];
//     else if (a > 20 && a <= 30) return list[1];
//     else if (a > 30 && a <= 40) return list[2];
//     else if (a > 40 && a <= 50) return list[3];
//     else if (a > 50 && a <= 60) return list[4];
  
//     else {
//        return new Promise((resolve, reject) => {
//         setTimeout( () => {
//           resolve(list[5]);
//         }, 5000);
//        });
//     }
// }
// //call via then/catch

// console.log("passed here 0");
// maslatBering(25)
// .then((data ) => {
//     console.log("javob:", data); 
// })

// .catch((err)  => {
//     console.log("ERROR:", (err))
// } );
// console.log("passed here 1");

// call wia asyn/await
// async function run() {
//     let javob = await maslatBering(65);
//     console.log(javob);
//       javob = await maslatBering(31);
//     console.log(javob);
//       javob = await maslatBering(41);
//     console.log(javob);
// }

// run();

// callback/setInterval
// console.log("Jack Ma maslahatlari");
// const list = [
//     "Yaxshi talaba bo'ling!", // 0-20
//     "To'g'ri boshliq tanlang va ko'proq xato qiling!", // 20-30
//     "O'zingizga ishlashingizni boshlang!", // 30-40
//     "Siz kuchli bo'lgan narsalarni qiling", // 40-50
//     "Yoshlarga investitsiya qiling!", // 50-60
//     "Endi dam oling foydasi yo'q!", // 60 
// ];

// function maslatBering(a, callback) {
//     if(typeof a !== "number") callback("inseret a number", null);
//     else if (a <= 20) callback(null, list[0]);
//     else if (a > 20 && a <= 30) callback(null, list[1]);
//     else if (a > 20 && a <= 30) callback(null, list[2]);
//     else if (a > 20 && a <= 30) callback(null, list[3]);
//     else if (a > 20 && a <= 30) callback(null, list[4]);
//     else {
//         setInterval(function () {
//           callback(null, list[5]);  
//         }, 50000);
//     }
// }

// console.log("passed here 0");
// maslatBering(65, (err, data) => {
//     if(err) conosole.log("ERROR:", err);
//     else {
//         console.log("javob:", data);
//     }
// });

// console.log("passed here 1");  


// TASK - A !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

// function test(harf = "a", soz = "bolakay") {
//   return soz.split(harf).length - 1;
// }
// console.log(test()); 




// TASK - B   !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

// function countDigits(str) {
//   if (typeof str !== 'string') return 0;
//   let count = 0;
//   for (let i = 0; i < str.length; i++) {
//     const ch = str[i];
//     if (ch >= '0' && ch <= '9') count++;
//   }
//   return count;
// }
// console.log(countDigits("gh7a3j5y6we2ta87nm2")); 


// TASK - C  !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

// class shop {
//   constructor(olma, nok, uzum) {
//     this.olma = olma;
//     this.nok = nok;
//     this.uzum = uzum;
//   }
  
//   qoldiq(soat) {
//     console.log(`Hozir dokonimizda soat ${soat} da ${this.olma}kg olma, ${this.nok}kg nok, ${this.uzum}kg uzum meva mahsuloti mavjud.`)
//   } 
  
//   sotildi(narx) {
//  this.olma = this.olma - narx;
//  }
  
//   qabul(meva) {
//  this.uzum = this.uzum + meva;
//  }
  
// }

// const shop1 = new shop(35, 10, 50)
// shop1.qoldiq("21:10");
// shop1.sotildi(13);
// shop1.qabul(26);
// shop1.qoldiq("21:50");




// TASK - D !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

// function test(soz1 = "Abdulloh", soz2 = "Abdulloh") {
//   return soz1.split('').sort().join('') === soz2.split('').sort().join('');
// }

// console.log(test()); 

// split('') --> stingni harflarga bo'lyabti
// sort() --> harflarni alfabit bo'yicha tartibga solyabti
// join('') --> bo'lingan harflarni yana stirnga qaytaryabti




// TASK - E !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

// function test(soz1) {
//    return soz1.split('').reverse().join('');
// }

// console.log(test("world"));

//.  http://72.60.208.224:4010/



// TASK - F    !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

function findDoublers(soz) {
  return new Set(soz).size !== soz.length;
}

console.log(findDoublers("Maqsad"));

// new --> yangi obyekt hosil qilyabti
// set() --> faqat takrorlanmagan harflarni saqlayabti
