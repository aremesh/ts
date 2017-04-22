interface ILoan{
interest:number;
}
class AgriLoan implements ILoan{
    interest:number;
    rebate:number;
    constructor(interest:number,rebate:number){
        this.interest=interest;
        this.rebate=rebate;
    }

}
var loan=new AgriLoan(10,12);
console.log("Here is the interest "+loan.interest+ " and the rebate is"+loan.rebate);