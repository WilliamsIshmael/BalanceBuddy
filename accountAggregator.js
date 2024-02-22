// Think about creating a a class of Accounts which take in account name, type, current amount in account, automatic payments (boolean), amount added, and frequency of contributions

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
    user1.addBalance('savings', 20000);
    user1.addBalance('retirement', 45000);
    user1.addBalance('brokerage', 3000);

    // Add balances for user2
    user2.addBalance('checking', 150);
    user2.addBalance('savings', 1000);
    user2.addBalance('retirement', 250);
    user2.addBalance('HYSA', 500);

    // Add balances for user3
    user3.addBalance('checking', 50000);
    user3.addBalance('savings', 51450);
    user3.addBalance('retirement', 1800000);
    user3.addBalance('brokerage', 250450);
    user3.addBalance('HYSA', 570250);

    // Add balances for user4
    user4.addBalance('checking', 7500);
    user4.addBalance('savings', 3000);
    user4.addBalance('retirement', 4500);
    user4.addBalance('brokerage', 2500);
    user4.addBalance('HYSA', 2000);
    
    // Add balances for user5
    user5.addBalance('checking', 57);
    user5.addBalance('savings', 250);
    user5.addBalance('retirement', 0);
    user5.addBalance('brokerage', 0);
    user5.addBalance('HYSA', 0);


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


