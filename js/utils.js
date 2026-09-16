export function formatPrice(price) {
    return `$${price}`;
}

export function capitalize(text) {
    return text.charAt(0).toUpperCase() + text.slice(1);
}