var AgriLoan = (function () {
    function AgriLoan(interest, rebate) {
        this.interest = interest;
        this.rebate = rebate;
    }
    return AgriLoan;
}());
var loan = new AgriLoan(10, 12);
console.log("Here is the interest " + loan.interest + " and the rebate is" + loan.rebate);
