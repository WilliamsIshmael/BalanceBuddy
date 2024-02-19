// accountAggregator.js

const Account = require('./account');

function main() {
    // Array to store user accounts
    const users = [];

    // Create user accounts
    const user1 = new Account();
    const user2 = new Account();
    const user3 = new Account(); 
    const user4 = new Account(); 
    const user5 = new Account(); 

    // Add balances for user1
    user1.addBalance('checking', 1000);
    user1.addBalance('savings', 2000);
    user1.addBalance('retirement', 5000);

    // Add balances for user2
    user2.addBalance('checking', 1500);
    user2.addBalance('savings', 3000);
    user2.addBalance('brokerage', 4000);

      // Add balances for user3
    user3.addBalance('checking', 1500);
    user3.addBalance('savings', 3000);
    user3.addBalance('brokerage', 4000);

      // Add balances for user4
    user4.addBalance('checking', 1500);
    user4.addBalance('savings', 3000);
    user4.addBalance('brokerage', 4000);

      // Add balances for user5
    user5.addBalance('checking', 1500);
    user5.addBalance('savings', 3000);
    user5.addBalance('brokerage', 4000);

    // Push user accounts to the array
    users.push(user1, user2, user3, user4, user5);

    // Aggregate balances for each user
    users.forEach((user, index) => {
        const totalBalance = user.getTotalBalance();
        console.log(`User ${index + 1} Total Balance: $${totalBalance}`);
    });
}

main();

