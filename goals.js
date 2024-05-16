// Goals for the user based on milestones on their financial journey. 

const { totalDebtPayments, totalContributions } = require('./main.js');

const debtPaymentGoals = [500, 1000, 10000, 50000, 100000];
const contributionGoals = [500, 1000, 10000, 50000, 100000];

let highestReachedDebtGoal = 0;
for (const debtPaymentGoal of debtPaymentGoals) {
  if (totalDebtPayments >= debtPaymentGoal) {
    highestReachedDebtGoal = debtPaymentGoal;
  }
}

let highestReachedContributionGoal = 0;
for (const contributionGoal of contributionGoals) {
  if (totalContributions >= contributionGoal) {
    highestReachedContributionGoal = contributionGoal;
  }
}

if (highestReachedDebtGoal !== 0) {
  console.log(
    `Congratulations! You have reached the ${highestReachedDebtGoal} debt payment goal!`
);
}

if (highestReachedContributionGoal !== 0) {
  console.log(
    `Congratulations! You have reached the ${highestReachedContributionGoal} contribution goal!`
);
}

