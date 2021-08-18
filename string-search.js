const products = [
    'Dell hardcore i29 200gb laptop',
    'Lenovo hardcore i29 200gb laptop',
    'yellow hardcore i29 200gb laptop',
    'iphone hardcore i29 200gb laptop',
    'HTc hardcore i29 200gb phone',
    'purple hardcore i29 200gb Laptop',
    '1x59 hardcore i29 200gb laptop',

]

const searching = 'lenovo';

const output = [];
 for (const product of products) {
    if (product.toLowerCase().indexOf(searching.toLowerCase()) != -1) {
        output.push(product);
    }
    if (product.toLowerCase().includes(searching.toLowerCase())) {
        // output.push(product);
    }
} 
// console.log(output);

 //starts with
 for (const product of products) {
    if (product.toLowerCase().startsWith(searching.toLowerCase())) {
        output.push(product);
    }
}
console.log(output);
