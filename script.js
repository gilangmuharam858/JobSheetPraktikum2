//1.1
function calculateDiscountedPrice(price, discountPercent) {
    return price - (price * discountPercent) / 100;
}
console.log(calculateDiscountedPrice(100000, 10));
//1.2
const cart = [
    {
        title: "Laptop",
        price: 1000,
        discountPercent: 10
    },
    {
        title: "Mouse",
        price: 20,
        discountPercent: 5
    },
    {
        title: "Keyboard",
        price: 50,
        discountPercent: 0
    }
];
function applyDiscounts(cart) {
    const result = [];

    for (const item of cart) {
        const finalPrice = calculateDiscountedPrice(
            item.price,
            item.discountPercent
        );

        result.push({
            ...item,
            finalPrice: finalPrice
        });
    }

    return result;
}
console.log(applyDiscounts(cart));
//2.1
const products = [
    { id: 1, title: "Laptop", price: 1200, category: "laptops", stock: 5 },
    { id: 2, title: "Smartphone", price: 800, category: "phones", stock: 15 },
    { id: 3, title: "Headphones", price: 100, category: "audio", stock: 3 },
    { id: 4, title: "Keyboard", price: 75, category: "computer-accessories", stock: 20 },
    { id: 5, title: "Mouse", price: 40, category: "computer-accessories", stock: 8 },
    { id: 6, title: "Monitor", price: 300, category: "computer-accessories", stock: 12 },
    { id: 7, title: "Tablet", price: 500, category: "tablets", stock: 7 },
    { id: 8, title: "Smartwatch", price: 250, category: "wearables", stock: 14 },
    { id: 9, title: "Camera", price: 700, category: "cameras", stock: 4 },
    { id: 10, title: "Printer", price: 200, category: "office", stock: 9 },
    { id: 11, title: "Webcam", price: 80, category: "computer-accessories", stock: 18 },
    { id: 12, title: "Microphone", price: 150, category: "audio", stock: 6 },
    { id: 13, title: "Speaker", price: 120, category: "audio", stock: 10 },
    { id: 14, title: "Power Bank", price: 60, category: "mobile-accessories", stock: 25 },
    { id: 15, title: "Charger", price: 30, category: "mobile-accessories", stock: 30 },
    { id: 16, title: "USB Cable", price: 15, category: "mobile-accessories", stock: 50 },
    { id: 17, title: "External SSD", price: 180, category: "storage", stock: 5 },
    { id: 18, title: "Flash Drive", price: 25, category: "storage", stock: 35 },
    { id: 19, title: "Hard Drive", price: 100, category: "storage", stock: 11 },
    { id: 20, title: "Gaming Chair", price: 350, category: "gaming", stock: 4 },
    { id: 21, title: "Gaming Mouse", price: 70, category: "gaming", stock: 13 },
    { id: 22, title: "Gaming Keyboard", price: 100, category: "gaming", stock: 6 },
    { id: 23, title: "Gamepad", price: 90, category: "gaming", stock: 8 },
    { id: 24, title: "Router", price: 130, category: "networking", stock: 16 },
    { id: 25, title: "WiFi Adapter", price: 35, category: "networking", stock: 20 },
    { id: 26, title: "Projector", price: 600, category: "office", stock: 3 },
    { id: 27, title: "Desk Lamp", price: 45, category: "office", stock: 17 },
    { id: 28, title: "Smart TV", price: 900, category: "television", stock: 5 },
    { id: 29, title: "Earbuds", price: 90, category: "audio", stock: 22 },
    { id: 30, title: "VR Headset", price: 450, category: "gaming", stock: 2 }
];
function findProductById(products, id) {
    return products.find(product => product.id === id);
}
console.log(findProductById(products, 10));
//2.2
const lowStockProducts = products.filter(product => product.stock < 10);
console.log(lowStockProducts);
//2.3
function updateStock(products, id, newStock) {
    return products.map(product =>
        product.id === id
            ? { ...product, stock: newStock }
            : product
    );
}

const updatedProducts = updateStock(products, 5, 100);

console.log(updatedProducts);
console.log(products);
//3
const nestedProducts = [
    {
        id: 1,
        title: "Laptop",
        price: 1200,
        rating: 4.5,
        stock: 10,
        category: "laptops",
        tags: ["computer", "electronics", "office"],
        dimensions: {
            width: 30,
            height: 2,
            depth: 20
        },
        reviews: [
            { user: "A", rating: 5, comment: "Good product" },
            { user: "B", rating: 4, comment: "Worth it" }
        ]
    },
    {
        id: 2,
        title: "Smartphone",
        price: 800,
        rating: 4.2,
        stock: 15,
        category: "phones",
        tags: ["mobile", "electronics"],
        dimensions: {
            width: 7,
            height: 0.8,
            depth: 15
        },
        reviews: [
            { user: "C", rating: 4, comment: "Nice camera" },
            { user: "D", rating: 5, comment: "Fast" },
            { user: "E", rating: 3, comment: "Battery so-so" }
        ]
    }
];

const allTags = nestedProducts.map(product => product.tags);

console.log(allTags);
function findProductsByTag(products, tag) {
    return products.filter(product => product.tags.includes(tag));
}

console.log(findProductsByTag(nestedProducts, "electronics"));
const reviewCounts = nestedProducts.map(product => ({
    id: product.id,
    title: product.title,
    totalReviews: product.reviews.length
}));

console.log(reviewCounts);
const fiveStarReviews = nestedProducts.flatMap(product =>
    product.reviews.filter(review => review.rating === 5)
);

console.log(fiveStarReviews);
const averageRatings = nestedProducts.map(product => {
    const totalRating = product.reviews.reduce(
        (total, review) => total + review.rating,
        0
    );

    const averageRating = totalRating / product.reviews.length;

    return {
        id: product.id,
        title: product.title,
        averageRating: averageRating
    };
});

console.log(averageRatings);
const productWithMostReviews = nestedProducts.reduce((most, product) => {
    return product.reviews.length > most.reviews.length
        ? product
        : most;
});

console.log(productWithMostReviews);
const allReviewRatings = nestedProducts.flatMap(product =>
    product.reviews.map(review => review.rating)
);

console.log(allReviewRatings);
//4.1
const allTagsFlat = nestedProducts.flatMap(product => product.tags);

console.log(allTagsFlat);
//4.2
const allComments = nestedProducts.flatMap(product =>
    product.reviews.map(review => review.comment)
);

console.log(allComments);
