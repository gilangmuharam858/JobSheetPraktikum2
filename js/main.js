import { state } from "./state.js";
import { products } from "./data.js";
import { fetchProducts } from "./api.js";
import {
    linearSearch,
    groupByCategory
} from "./algorithms.js";
import { renderProducts } from "./ui.js";

state.products = products;

console.log("Initial State:");
console.log(state);

console.log(
    "Linear Search:",
    linearSearch(products.map(product => product.id), 3)
);

console.log(
    "Grouped Products:",
    groupByCategory(products)
);

renderProducts(state.products);

async function loadProducts() {
    try {
        state.status = "loading";

        const apiProducts = await fetchProducts();

        state.products = apiProducts;
        state.status = "success";

        console.log("Data dari DummyJSON:");
        console.log(apiProducts);

        renderProducts(state.products);
    } catch (error) {
        state.status = "error";

        console.error("Gagal mengambil data:", error);
    }
}

loadProducts();

function render() {
    let filteredProducts = state.products;

    if (state.search !== "") {
        filteredProducts = filteredProducts.filter(product =>
            product.title.toLowerCase().includes(
                state.search.toLowerCase()
            )
        );
    }

    if (state.category !== "all") {
        filteredProducts = filteredProducts.filter(product =>
            product.category === state.category
        );
    }

    if (state.sortBy === "price-asc") {
        filteredProducts = [...filteredProducts].sort(
            (a, b) => a.price - b.price
        );
    }

    if (state.sortBy === "price-desc") {
        filteredProducts = [...filteredProducts].sort(
            (a, b) => b.price - a.price
        );
    }

    renderProducts(filteredProducts);
}

// 22

function simulateRequest() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const success = true;

            if (success) {
                resolve("Data berhasil diambil");
            } else {
                reject("Gagal mengambil data");
            }
        }, 1000);
    });
}

simulateRequest()
    .then((result) => {
        console.log("Success:", result);
    })
    .catch((error) => {
        console.error("Error:", error);
    })
    .finally(() => {
        console.log("Request selesai");
    });