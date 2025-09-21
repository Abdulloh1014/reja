/*
console.log("Jack Ma maslahatlari");
const list = [
    "Yaxshi talaba bo'ling!", // 0-20
    "To'g'ri boshliq tanlang va ko'proq xato qiling!", // 20-30
    "O'zingizga ishlashingizni boshlang!", // 30-40
    "Siz kuchli bo'lgan narsalarni qiling", // 40-50
    "Yoshlarga investitsiya qiling!", // 50-60
    "Endi dam oling foydasi yo'q!", // 60 
];

function maslatBering(a, callback) {
    if(typeof a !== "number") callback("inseret a number", null);
    else if (a <= 20) callback(null, list[0]);
    else if (a > 20 && a <= 30) callback(null, list[1]);
    else if (a > 20 && a <= 30) callback(null, list[2]);
    else if (a > 20 && a <= 30) callback(null, list[3]);
    else if (a > 20 && a <= 30) callback(null, list[4]);
    else {
        setTimeout(function () {
          callback(null, list[5]);  
        }, 5000);
    }
}

console.log("passed here 0");
maslatBering(65, (err, data) => {
    if(err) conosole.log("ERROR:", err);
    else {
        console.log("javob:", data);
    }
});

console.log("passed here 1");  
*/




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
//call via then/catch

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


function test(harf = "a", soz = "bolakay") {
  return soz.split(harf).length - 1;
}


console.log(test()); 