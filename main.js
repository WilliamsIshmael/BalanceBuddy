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

const americanExpressCreditCardDebt: Debt = {
  item: "American Express Credit Card"; 
  currentBalance: 12540; 
  hasMonthlyPaymentAmount: true; 
  monthlyPaymentAmount: 200; 
  totalPayments: 10000;  
}

const discoverCreditCardDebt: Debt = {
  item: "Discover Credit Card"; 
  currentBalance: 3755; 
  hasMonthlyPaymentAmount: true; 
  monthlyPaymentAmount: 50; 
  totalPayments: 500; 
}

const Barclays: SavingsAndInvestment = {
  accountName: "Barclays"; 
  accountType: "High-Yield Savings Account"; 
  hasMonthlyContributions: true; 
  monthlyContributions: 1000; 
  totalContributions: 12000; 
}

const Vanguard: SavingsAndInvestment = {
  accountName: "Vanguard"; 
  accountType: "Investment Account"; 
  hasMonthlyContributions: true; 
  monthlyContributions: 550; 
  totalContributions: 3300; 
}
