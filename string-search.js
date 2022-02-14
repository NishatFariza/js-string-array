const products=[
    'Dell hardcore i29 200GB laptop',
    'iphone 1TB camera flashlight',
    'yellow laptop with black camera',
    '1x59 Lenovo commercial yoga laptop',
    'dell LG supernova laptop',
    'HTC low price phone',
    'Dell purple color phone with Laptop'
];

const searching ='laptop';

//indexOf usecase
const output =[];
for(const product of products){
    if(product.toLowerCase().indexOf(searching.toLowerCase()) != -1){
        output.push(product);
    }
}
// console.log(output);

//includes useCase
for (const product of products){
    if(product.toLowerCase().includes(searching.toLowerCase())){
        output.push(product);
    }
}
// console.log(output);

//startswith usecase
for(const product of products){
    if(product.toLowerCase().startsWith(searching.toLowerCase())){
        output.push(product);
    }
}
// console.log(output);

//endswith usecase
for(const product of products){
    if(product.toLowerCase().endsWith(searching.toLowerCase())){
        output.push(product);
    }
}
console.log(output);
