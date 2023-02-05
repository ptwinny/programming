  // cashInDrawer object to update
  let cashInDrawer = [
    { type: "HUNDRED", amount: 0 },
    { type: "TWENTY", amount: 0 },
    { type: "TEN", amount: 0 },
    { type: "FIVE", amount: 0 },
    { type: "ONE", amount: 0 },
    { type: "QUARTER", amount: 0 },
    { type: "DIME", amount: 0 },
    { type: "NICKLE", amount: 0 },
    { type: "PENNY", amount: 0 }
  ];

// set buttons
window.onload = function() {
  const updateButton = document.getElementById("update-button");
  const submitButton = document.getElementById("submit-button");

  // update button behavior
  updateButton.addEventListener("click", (event) => {
    // populate cash-in-drawer from form
    let inputData = document.querySelectorAll(".cid-input");
    for (let i = 0; i < inputData.length; i++) {
      cashInDrawer[i].amount = inputData[i].value;
    }
  });

  // submit button behavior
  submitButton.addEventListener("click", (event) => {
    event.preventDefault();
    // get item price and cash given by customer from form
    let itemPrice = document.getElementById("price-input").value;
    let cashGiven = document.getElementById("payment-input").value;
    // run function and update HTML
    let cashInDrawerArray = cashInDrawer.map(el => [el.type, el.amount]);
    let registerObject = checkCashRegister(itemPrice, cashGiven, cashInDrawerArray);
    document.getElementById("status-span").innerHTML = registerObject.status;
    document.getElementById("change-due-span").innerHTML = JSON.stringify(registerObject.change);
  });
  // register function
  function checkCashRegister(price, cash, cid) {
    // variables and arrays
    const denominationValues = [10000, 2000, 1000, 500, 100, 25, 10, 5, 1];
    let cidTotal = getCidTotal(cid);
    let coinAndBillAmounts = [];
    let changeDue = Math.round((cash * 100) - (price * 100));
    let changeToReturn = [];
    let amt = 0;

    /* main section */
    // if not enough money to give change
    if (cidTotal < changeDue) {
      return { status: "INSUFFICIENT_FUNDS", change: [] };
    // if have exact change only
    } else if (cidTotal === changeDue) {
      return { status: "CLOSED", change: cid };
    // normal change interaction
    } else if (cidTotal > changeDue) {
      // get amount of bills and coins of each denomination
      for (let i = 0; i < cid.length; i++) {
        coinAndBillAmounts.push((cid[i][1] * 100) / denominationValues[i]);
      }
      // get dollar amount of each denomination to return
      for (let i = 0; i < cid.length; i++) {
        amt = 0;
        if (changeDue >= denominationValues[i] && coinAndBillAmounts[i] > 0) {
          while (changeDue >= denominationValues[i] && coinAndBillAmounts[i] > 0) {
            amt += denominationValues[i];
            changeDue -= denominationValues[i];
            coinAndBillAmounts[i]--;
          }
          changeToReturn.push([cid[i][0], amt / 100]);
        }
      }
      if (changeDue !== 0) {
        return {status: "INSUFFICIENT_FUNDS", change: []};
      }
      return {status: "OPEN", change: changeToReturn};
    }
    // cid total function
    function getCidTotal(arr) {
      let total = 0;
      for (let i = 0; i < arr.length;i++) {
        total += (arr[i][1] * 100);
      }
      return total;
    }
  }
}