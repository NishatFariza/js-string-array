const products=[
    'Dell hardcore i29 200GB laptop',
    'iphone 1TB camera flashlight',
    'yellow laptop with black camera',
    '1x59 Lenovo commercial yoga laptop',
    'LG supernova laptop',
    'HTC low price phone',
    'purple color phone with Laptop'
];

const searching ='laptop';

//indexOf usecase
const output =[];
for(const product of products){
    if(product.toLowerCase().indexOf(searching.toLowerCase()) != -1){
        output.push(product);
    }
}
console.log(output);