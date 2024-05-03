// The information provided in this file is realistic, but doesn't reflect my, or anyone else's, finances. 

// Debts - Item, currentBalance, monthlyPaymentAmount, totalPayments 
// Savings and Investments - accountName, accountType, monthlyContributions, totalContributions
// totalDebtPayments
// totalSavings 

type Debt {
  item: string; 
  currentBalance: number; 
  hasMonthlyPaymentAmount: boolean; 
  monthlyPaymentAmount: number | null = null; 
  totalPayments: number; 
} 

type SavingsAndInvestment {
  accountName: string; 
  accountType: string; 
  hasMonthlyContributions: boolean; 
  monthlyContributions: number | null = null; 
  totalContributions: number; 
}

type PersonalFinance { 
  totalDebtPayments: number; 
  totalSavings: number;
}

