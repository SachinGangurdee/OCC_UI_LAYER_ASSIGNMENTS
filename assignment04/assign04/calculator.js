function Product(n1,n2){

   this.add=(n1+n2);

   this.sub=(n1-n2);

   this.mul=(n1*n2);

   this.div=(n1/n2);

   this.display=()=> this.add+" "+this.sub+" "+this.mul+" "+this.div;

}



module.exports=Product;