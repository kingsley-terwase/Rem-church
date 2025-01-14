export const chartData = [
  {month: "Jan", income: 4000, expense: 2400},
  {month: "Feb", income: 3000, expense: 1398},
  {month: "Mar", income: 2000, expense: 9800},
  {month: "Apr", income: 2780, expense: 3908},
  {month: "May", income: 1890, expense: 4800},
  {month: "Jun", income: 2390, expense: 3800},
  {month: "Jul", income: 3490, expense: 4300},
];

export const rows = [
  {id: 1, date: "2024-12-01", description: "Salary", amount: "$4000", type: "Income"},
  {id: 2, date: "2024-12-02", description: "Groceries", amount: "-$200", type: "Expense"},
  {id: 3, date: "2024-12-03", description: "Electricity Bill", amount: "-$150", type: "Expense"},
  {id: 4, date: "2024-12-04", description: "Freelance Work", amount: "$800", type: "Income"},
];

export const columns = [
  {field: "date", headerName: "Date", width: 120},
  {field: "description", headerName: "Description", width: 200},
  {field: "amount", headerName: "Amount", width: 120},
  {field: "type", headerName: "Type", width: 120},
];
