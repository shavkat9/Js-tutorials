// const ismlar = ['shavkat', 'shahzod', 'shohruh', 'bekzod']
// const newIsmlar = []
// -----------------------------
// for(let i = 0; i < ismlar.length; i++){
//     console.log(ismlar[i])
// }
// --------------------------
// ismlar.forEach((ism, i) => {
//     const newIsm = ism.charAt().toUpperCase() + ism.slice(1).toLocaleLowerCase() + 'bek'
//     newIsmlar.push(newIsm)
//     console.log(newIsm, i)
// })
// console.log(newIsmlar)
// -----------------------------

// const API = 'https://jsonplaceholder.typicode.com/posts';

// const getData = async (res) => {
//     const request = await fetch(res)
//     const data = await request.json()
    
//     console.log(data)
// }
// getData(API);
// ----------------------------------

fetch('https://jsonplaceholder.typicode.com/posts')
  .then(res =>  res.json())
  .then(data => console.log(data))
  .catch(err => console.log(err))