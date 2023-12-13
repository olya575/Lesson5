

// // -------1---

// function studentInfo(){
//     console.log('Student', this);
// }
// studentInfo();

// const user = {
//     name: 'Olga',
//     specialty: 'management',
//     averageGrade: "10.8",
//     missedClass: '5',
//     studInfo: studentInfo,
// }

// const user2 = {
//     name: 'Alla',
//     specialty: 'marketing',
//     averageGrade: "7.9",
//     missedClass: '15',
// }

// const user3 = {
//     name: 'Inna',
//     specialty: 'philosophy',
//     averageGrade: "11.0",
//     missedClass: '0',
// }

// const user4 = {
//     name: 'Tonya',
//     specialty: 'history',
//     averageGrade: "10.0",
//     missedClass: '2',
// }


// user.studInfo();
// user.studInfo.bind(user2)();
// user.studInfo.call(user3);
// user.studInfo.apply(user4, []);


// // -------2---

// const description = {
//     showDescription () {
//         alert(`Визначення: ${this.message}`) 
// }
// }

// const htmlDescription = {
//     message: ['HTML — стандартизована мова розмітки документів для перегляду вебсторінок в браузері.'],
// }

// const cssDescription = {
//     message: ['CSS — це спеціальна мова стилю сторінок[en], що використовується для опису їхнього зовнішнього вигляду.'],
// }

// // description.showDescription.bind(htmlDescription)();

// document
// .querySelector('#html')
// .addEventListener('click', description.showDescription.bind(htmlDescription) );

// document
// .querySelector('#css')
// .addEventListener('click', description.showDescription.bind(cssDescription) );

// // -------3---
// const market = {
//     name: 'banana',
//     price: 30 ,
//     amount: 4.5,
//     cost: function(){
//         let value = (this.price*this.amount).toFixed(2);
//         console.log (this.name + ' costs '+ `${value}` + 'grn');

//     }
// }

// cherry = {
//     name: 'cherry',
//     price: 58 ,
//     amount: 1.3,
// }

// orange = {
//     name: 'orange',
//     price: 89 ,
//     amount: 3.4,
// }

// market.cost();
// market.cost.bind(cherry)();
// market.cost.call(orange);





