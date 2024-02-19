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
    user1.addBalance('brokerage', 3000);

    // Add balances for user2
    user2.addBalance('checking', 1500);
    user2.addBalance('savings', 3000);
    user2.addBalance('retirement', 4500);
    user2.addBalance('brokerage', 2500);
    user2.addBalance('HYSA', 2000);

    // Add balances for user3
    // Add balances for user4
    // Add balances for user5
    // Similar to user1 and user2, add balances for user3, user4, and user5

    // Push user accounts to the array
    users.push(user1, user2, user3, user4, user5);

    // Aggregate balances for each user
    users.forEach((user, index) => {
        console.log(`User ${index + 1} Balances:`);
        for (let accountType in user.balances) {
            console.log(`${accountType}: $${user.getAccountBalance(accountType)}`);
        }
        const totalBalance = user.getTotalBalance();
        console.log(`Total Balance for User ${index + 1}: $${totalBalance}`);
    });
}

main();
