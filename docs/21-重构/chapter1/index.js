const plays = {
  hamlet: {
    name: "Hamlet",
    type: "tragedy",
  },
  "as-like": {
    name: "As You Like It",
    type: "comedy",
  },
  othello: {
    name: "othello",
    type: "tragedy",
  },
};

const invoices = {
  customer: "BigCo",
  performances: [
    {
      playID: "hamlet",
      audience: "55",
    },
    {
      playID: "as-like",
      audience: "35",
    },
    {
      playID: "othello",
      audience: "40",
    },
  ],
};

function playFor(aPerformance) {
  return plays[aPerformance.playID];
}

function accountFor(aPerformance) {
  let result = 0;
  switch (playFor(aPerformance).type) {
    case "tragedy":
      result = 40000;
      if (aPerformance.audience > 30) {
        result += 1000 * (aPerformance.audience - 30);
      }
      break;
    case "comedy":
      result = 30000;
      if (aPerformance.audience > 20) {
        result += 10000 + 500 * (aPerformance.audience - 20);
      }
      result += 300 * aPerformance.audience;
      break;
    default:
      throw new Error(`unknows type : ${playFor(aPerformance).type}`);
  }
  return result;
}
function volumeCreditsFor(aPerformance) {
  let result = 0;
  result += Math.max(aPerformance.audience - 30, 0);

  if ("comedy" === playFor(aPerformance).type) {
    result += Math.floor(aPerformance.audience / 5);
  }
  return result;
}

function usd(aNumber) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
  }).format(aNumber / 100);
}

function totalVolumeCredits() {
  let volumeCredits = 0;
  for (let perf of invoices.performances) {
    volumeCredits += volumeCreditsFor(perf);
  }
  return volumeCredits;
}

function totalAmount() {
  let result = 0;
  for (let perf of invoices.performances) {
    result += accountFor(perf);
  }
  return result;
}

function statement(invoice, plays) {
  let result = `Statement for ${invoice.customer}\n`;

  for (let perf of invoice.performances) {
    //print line for this order
    result += `${playFor(perf).name}: ${usd(accountFor(perf))} (${
      perf.audience
    } seats)\n`;
  }

  result += `Amount owed is ${usd(totalAmount())}\n`;
  result += `You earned ${totalVolumeCredits()} credits\n`;
  return result;
}

let resultText = statement(invoices, plays);
console.log(resultText);
