'strict mode';
const budget = Object.freeze([
  { value: 250, description: 'Sold old TV 📺', user: 'jonas' },
  { value: -45, description: 'Groceries 🥑', user: 'jonas' },
  { value: 3500, description: 'Monthly salary 👩‍💻', user: 'jonas' },
  { value: 300, description: 'Freelancing 👩‍💻', user: 'jonas' },
  { value: -1100, description: 'New iPhone 📱', user: 'jonas' },
  { value: -20, description: 'Candy 🍭', user: 'matilda' },
  { value: -125, description: 'Toys 🚂', user: 'matilda' },
  { value: -1800, description: 'New Laptop 💻', user: 'jonas' },
]);
// Object.freeze只能顶层冻结 用三方库实现深层冻结，下面这个是可以的
// budget[0].value = 10000;
const spendingLimits = Object.freeze({
  jonas: 1500,
  matilda: 100,
});
spendingLimits.jay = 200;
console.log(spendingLimits);

const getLimit = (limits, user) => limits?.[user] ?? 0;

// a side effect basically means that something outside of a function is manipulated or that the function does something other than simply returning a value. And so a function that has, or that produces side effects is called an impure function.
//所以这个函数就是一个 impure function，因为它试图操纵函数外的对象，budget
//we should always pass all the data that the function depends on into the function,seconde the function should not change any of these values,所以解决方案是创建一个副本，然后返回该状态的副本
const addExpense = function (
  state,
  limits,
  value,
  description,
  user = 'jonas'
) {
  const cleanUser = user.toLowerCase();

  // const limit = spendingLimits[user] ? spendingLimits[user] : 0;

  return value <= getLimit(limits, cleanUser)
    ? // budget.push({ value: -value, description, user: cleanUser });
      [...state, { value: -value, description, user: cleanUser }]
    : state;
};

// in the real world ,we use something called composing and the technique called currying to basically create this chain of operatins here .所以最好自动的使用前一个结果进行下一个操作。同样，在现实世界中，大型功能应用程序，我们讲使用 composing to create one function ,which will then perform all of these operations at once
const newBudget1 = addExpense(budget, spendingLimits, 10, 'Pizza 🍕');
const newBudget2 = addExpense(
  newBudget1,
  spendingLimits,
  100,
  'Going to movies 🍿',
  'Matilda'
);
const newBudget3 = addExpense(newBudget2, spendingLimits, 200, 'Stuff', 'Jay');
console.log(budget);

console.log(newBudget1);
console.log(newBudget2);

const checkExpenses = function (state, limits) {
  return state.map(entry => {
    return entry.value < -getLimit(limits, entry.user)
      ? { ...entry, flag: 'limit' }
      : entry;
  });
  // for (const entry of newBudget3) {
  //   if (entry.value < -getLimit(limits, entry.user)) {
  //     entry.flag = 'limit';
  //   }
  // }
};
const finalBudget = checkExpenses(newBudget3, spendingLimits);
console.log(finalBudget);

// const logBigExpenses = function (bigLimit) {
//   let output = '';
//   for (const entry of budget) {
//     output =
//       entry.value <= -bigLimit
//         ? (output += `${entry.description.slice(-2)} /`)
//         : '';
//   }
//   output = output.slice(0, -2); // Remove last '/ '
//   console.log(output);
// };

// impure log了
const logBigExpenses = function (state, bigLimit) {
  const bigExpenses = state
    .filter(entry => entry.value <= -bigLimit)
    .map(entry => entry.description.slice(-2))
    .join(' / ');
  // .reduce((str, cur) => `${str}/ ${cur.description.slice(-2)}`, '');
  console.log(bigExpenses);
};

console.log(500);
logBigExpenses(finalBudget, 500);
