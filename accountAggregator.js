const Account = require('./account');

function main() {
    // Instantiate Account object for the user
    const userAccount = new Account();

    // Add balances from various account types
    userAccount.addBalance('checking', 1000);
    userAccount.addBalance('savings', 2000);
    userAccount.addBalance('retirement', 5000);
    userAccount.addBalance('brokerage', 3000);
    userAccount.addBalance('HYSA', 1500);

    // Display total balance
    const totalBalance = userAccount.getTotalBalance();
    console.log(`Total Balance: $${totalBalance}`);
}

main();
