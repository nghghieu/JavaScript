const handlePeriod = (period, dateString, month) => {
  if (month == 0) {
    let currentDate = new Date(dateString);
    period.push(
      `${currentDate.getFullYear()}-${
        currentDate.getMonth() + 1
      }-${currentDate.getDate()}`
    );
  } else {
    let currentDate = new Date(dateString),
      year = currentDate.getFullYear(),
      month = currentDate.getMonth() + 2,
      date = currentDate.getDate();
    if (month > 12) {
      month = 1;
      year += 1;
    }
    let newDate = new Date(`${year}-${month}-${date}`);
    period.push(
      `${newDate.getFullYear()}-${newDate.getMonth() + 1}-${newDate.getDate()}`
    );
  }

  return period[month];
};

document.querySelector(".form-group").addEventListener("submit", (e) => {
  e.preventDefault();
  document.querySelector(".form-show tbody").innerHTML = "";

  const loan = Number(document.querySelector("#loan").value);
  const month = Number(document.querySelector("#month").value);
  const rate = Number(document.querySelector("#rate").value);
  const disbursementDate = document.querySelector("#disbursementDate").value;
  const interest = Math.round((loan * rate * month) / 1200);
  const originalAndInterest = loan + interest;

  document.querySelector("#interest").value = interest.toLocaleString();
  document.querySelector("#originalAndInterest").value =
    originalAndInterest.toLocaleString();
  let period = [];
  for (let i = 0; i <= month; i++) {
    let htmls;
    if (i == 0) {
      htmls = `
        <td>${i}</td>
        <td>${handlePeriod(period, disbursementDate, i)}</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        `;
    } else if (i == month) {
      const originalPerMonth = loan - Math.round(loan / month) * (month - 1);
      const interestPerMonth =
        interest - Math.round((loan * rate) / 1200) * (month - 1);
      const originalAndInterestPerMonth = originalPerMonth + interestPerMonth;

      htmls = `
        <td>${i}</td>
        <td>${handlePeriod(period, period[i - 1], i)}</td>
        <td>${originalPerMonth.toLocaleString()}</td>
        <td>${interestPerMonth.toLocaleString()}</td>
        <td>${originalAndInterestPerMonth.toLocaleString()}</td>
        <td>0</td>
        `;
    } else {
      const originalPerMonth = Math.round(loan / month);
      const interestPerMonth = Math.round((loan * rate) / 1200);
      const originalAndInterestPerMonth = originalPerMonth + interestPerMonth;
      const remainingOriginal = loan - originalPerMonth * i;

      htmls = `
        <td>${i}</td>
        <td>${handlePeriod(period, period[i - 1], i)}</td>
        <td>${originalPerMonth.toLocaleString()}</td>
        <td>${interestPerMonth.toLocaleString()}</td>
        <td>${originalAndInterestPerMonth.toLocaleString()}</td>
        <td>${remainingOriginal.toLocaleString()}</td>
        `;
    }
    let tr = document.createElement("tr");
    tr.innerHTML = htmls;
    document.querySelector(".form-show tbody").appendChild(tr);
  }
});
