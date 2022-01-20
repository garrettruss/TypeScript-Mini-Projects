export async function getBudgetAsync(): Promise<any> {
  return new Promise((resolve, _) => {
    resolve({
      'shopping': 150,
      'food': 210,
      'utlities': 100
    })
  })
}