class Account {
    constructor() {
        this.balances = {};
    }

    addBalance(accountType, amount) {
        if (accountType in this.balances) {
            this.balances[accountType] += amount;
        } else {
            this.balances[accountType] = amount;
        }
    }

    getTotalBalance() {
        let total = 0;
        for (let balance of Object.values(this.balances)) {
            total += balance;
        }
        return total;
    }
}

module.exports = Account;

