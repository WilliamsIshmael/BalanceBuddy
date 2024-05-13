// The information provided in this file is realistic, but doesn't reflect my, or anyone else's, finances. 


`For the type Debt and SavingsAndInvestments, create a value for currentTotalPayments and currentTotalContributions, respectively,
which adds the monthly payments and contributions to the total totalPayments and totalContributions. 

Console.log "You have paid down ${currentTotalPayments} worth of debt while saving and investing ${currentTotalContributions}! 

Make sure to loop through all the Debts and SavingsAndInvestments to combine all values.
`

type Debt {
  item: string; 
  currentBalance: number; 
  hasMonthlyPaymentAmount: boolean; 
  monthlyPaymentAmount: number; 
  totalPayments: number; 
} 

type SavingsAndInvestment {
  accountName: string; 
  accountType: string; 
  hasMonthlyContributions: boolean; 
  monthlyContributions: number; 
  totalContributions: number; 
}

type PersonalFinance { 
  totalDebtPayments: number; 
  totalContributions: number;
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

const federalStudentLoans: Debt = {
  item: "Federal Student Loan"; 
  currentBalance: 35840; 
  hasMonthlyPaymentAmount: true; 
  monthlyPaymentAmount: 50; 
  totalPayments: 8000;  
}

const privateStudentLoan: Debt = {
  item: "Private Student Loan"; 
  currentBalance: 9345; 
  hasMonthlyPaymentAmount: true; 
  monthlyPaymentAmount: 100; 
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
