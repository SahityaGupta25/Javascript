function showModel(){
    console.log(showModel.product);//!      Product is a variable of showModel
}

showModel()

showModel.product = 66 //!       It is ok to use a function as an object.
showModel()