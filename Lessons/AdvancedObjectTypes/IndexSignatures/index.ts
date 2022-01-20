import { getBudgetAsync } from './api';


interface Budget {
  [category: string]: number,
}

async function getBudget() {
  const result: Budget = await getBudgetAsync();
  console.log(result);
}

getBudget();