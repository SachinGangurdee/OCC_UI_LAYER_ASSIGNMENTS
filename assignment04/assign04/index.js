console.log("// Creation of Object calc");

const product1=require('./calculator');

const p2=new product1((10,20),(20,10),(10,20),(20,10));

console.log(p2.display());