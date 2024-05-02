// The information provided in this file is realistic, but doesn't reflect my, or anyone else's, finances. 

// Debts - Item, currentBalance, monthlyPaymentAmount, totalPayments 
// Savings and Investments - accountName, accountType, monthlyContributions, totalContributions
// totalDebtPayments
// totalSavings 

interface Debt {
  item: string; 
  currentBalance: number; 
  monthlyPaymentAmount: number; 
  totalPayments: number; 
} 

interface SavingsAndInvestment {
  accountName: string; 
  accountType: string; 
  monthlyContributions: number; 
  totalContributions: number; 
}

interface PersonalFinance { 
  totalDebtPayments: number; 
  totalSavings: number;
}

