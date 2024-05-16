// Goals for the user based on milestones on their financial journey. 

const { totalDebtPayments, totalContributions } = require('./main.js');

const debtPaymentGoals = [500, 1000, 10000, 50000, 100000];
const contributionGoals = [500, 1000, 10000, 50000, 100000];

for (const debtPaymentGoal of debtPaymentGoals) {
  const hasReachedDebtPaymentGoal = totalDebtPayments >= debtPaymentGoal;
  if (hasReachedDebtPaymentGoal) {
    console.log(
      `Congratulations! You have reached the ${debtPaymentGoal} debt payment goal!`
);
  }
}

for (const contributionGoal of contributionGoals) {
  const hasReachedContributionGoal = totalContributions >= contributionGoal;
  if (hasReachedContributionGoal) {
    console.log(
      `Congratulations! You have reached the ${contributionGoal} contribution goal!`
);
  }
}

