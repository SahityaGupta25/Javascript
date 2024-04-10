const car={
    engine:80000,
    monthly_cost(){
        return this.engine *100
    },
    yearlyCost : ()=> 10000* this.engine,
}
console.log(car.monthly_cost());
console.log(car.yearlyCost());