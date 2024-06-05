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

document.addEventListener('DOMContentLoaded', () => {
    fetchData(); // Fetch data when the page loads
});

async function fetchData() {
    let container = document.querySelector('[data-container]');
    let res = await fetch('https://imaraansheldon.github.io/JSONExample/data');
    let { results } = await res.json();

    displayProducts(results);

    // Add event listener to the search input
    const searchInput = document.getElementById('searchInput');
    searchInput.addEventListener('input', () => {
        const searchTerm = searchInput.value.toLowerCase();
        const filteredProducts = results.filter(product => 
            product.productName.toLowerCase().includes(searchTerm) || 
            product.catagories.toLowerCase().includes(searchTerm) ||
            product.description.toLowerCase().includes(searchTerm)

        );
        displayProducts(filteredProducts);
    });
}

function displayProducts(products) {
    let container = document.querySelector('[data-container]');
    container.innerHTML = ''; // Clear previous content

    products.forEach((product) => {
        container.innerHTML += `
            <tr>
                <td>${product.productName}</td>
                <td>${product.catagories}</td>
                <td><img src="${product.img_url}" alt="${product.productName}"></td>
                <td>${product.description}</td>
                <td>${product.price}</td>
            </tr>
        `;
    });
}

