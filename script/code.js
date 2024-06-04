// function fetchData(){
// let container = document.querySelector('[data-container]')

//     fetch('https://imaraansheldon.github.io/JSONExample/data')
//     .then((res) => {
//         return res.json();
//     })
//     .then((data) =>{
//         data.results.forEach((product) => {
//             container.innerHTML += `
//                 <div class="card">
//                     <img src='${product.img_url}'>
//                     <p>'${product.productName}'</p>
//                 </div>
//             `
//         });
//     })
//     .catch((err)=>{
//         console.log(err);
//     })
// }
// fetchData()

async function fetchData(){
    let container = document.querySelector('[data-container]')
    let res = await fetch('https://imaraansheldon.github.io/JSONExample/data')
    let {results} = await res.json();

    results.forEach((product) => {
                    container.innerHTML += `
                        <tr>
                            <td>${product.productName}</td>
                            <td>${product.catagories}</td>
                            <td><img src="${product.img_url}"></td>
                            <td>${product.description}</td>
                            <td>${product.price}</td>
                `
    });
    
    console.log(results);
}

fetchData();

