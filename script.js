// const sendBtn = document.getElementById('submit')
// const url = document.getElementById('url')
// const table = document.getElementById('urlTable')
// let urlArr = []

// sendBtn.addEventListener('click', (event) => {
//     click(event)
//     if (url.value !== '') {
//         urlArr.push(url.value)
//         toTable()
//     }
//     console.log(urlArr)
//     url.value = ''
// })

// function toTable() {
    
//     table.innerHTML = ''
//     urlArr.forEach(el => {
//         const tr = document.createElement('tr')
//         const td = document.createElement('td')
//         td.append(`${el}`)
//         tr.append(td)
//         table.append(tr)
//     })
// }

// function click(event) {
//     console.log(event)  
// }

// const serv = fetch('/api')
//     // .then(res => res.json())
//     // .then(res => console.log(res.message))

// document.getElementById("gopa").innerHTML = serv

// const arr = [
//     '1',
//     '2',
//     '3',
//     '4'
// ]
// setInterval(() => {
//     arr.forEach(el => console.log(el))
// }, 2500)

// arr.pop()
// console.log(arr)
// setTimeout(() => arr.push(51), 3000)
// console.log(intervalId)
// arr.forEach(el => {
//     const id = setInterval(() => {
//         console.log(el)
//         if(!arr.includes(el)) {
//             clearInterval(id)
//         }
//     }, 2500)
// })
const now = new Date()
console.log(now.getDay())