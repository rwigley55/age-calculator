function calculateAge(event) {
  event.preventDefault();

  const dayInput = document.getElementById("day");
  const monthInput = document.getElementById("month");
  const yearInput = document.getElementById("year");

  const dayError = document.querySelector("#dayError");
  const monthError = document.querySelector("#monthError");
  const yearError = document.querySelector("#yearError");

  const day = parseInt(dayInput.value);
  const month = parseInt(monthInput.value);
  const year = parseInt(yearInput.value);

  // Remove any previously applied error classes
  dayInput.classList.remove("input-error");
  monthInput.classList.remove("input-error");
  yearInput.classList.remove("input-error");
  dayError.classList.add("display-none"); //fixing
  monthError.classList.add("display-none"); //fixing
  yearError.classList.add("display-none"); //fixing

  // Validate input
  if (day === 0) {
    dayInput.classList.add("input-error");
    dayError.classList.remove("display-none");
    return;
  }

  if (month === 0) {
    monthInput.classList.add("input-error");
    monthError.classList.remove("display-none");
    return;
  }

  if (year === 0) {
    yearInput.classList.add("input-error");
    yearError.classList.remove("display-none");
    return;
  }

  if (isNaN(day) || day < 1 || day > 31) {
    dayInput.classList.add("input-error");
    dayError.classList.remove("display-none");
    return;
  }

  if (isNaN(month) || month < 1 || month > 12) {
    monthInput.classList.add("input-error");
    monthError.classList.remove("display-none");
    return;
  }

  if (isNaN(year) || year > new Date().getFullYear()) {
    yearInput.classList.add("input-error");
    yearError.classList.remove("display-none");
    return;
  }

  if (
    (month === 2 && day > 29) ||
    (month === 4 && day > 30) ||
    (month === 6 && day > 30) ||
    (month === 9 && day > 30) ||
    (month === 11 && day > 30)
  ) {
    dayInput.classList.add("input-error");
    dayError.classList.remove("display-none");
    return;
  }

  const today = new Date();
  const birthDate = new Date(year, month - 1, day); // month is 0-based

  // if (birthDate > today) {
  //   // alert("Date of birth cannot be in the future.");
  //   dayInput.classList.add("input-error");
  //   monthInput.classList.add("input-error");
  //   yearInput.classList.add("input-error");
  //   return;
  // }

  if (birthDate > today) {
    if (birthDate.getFullYear() > today.getFullYear()) {
      yearInput.classList.add("input-error");
      return;
    }
    if (birthDate.getMonth() > today.getMonth()) {
      monthInput.classList.add("input-error");
      monthError.classList.remove("display-none");
      return;
    }
    if (birthDate.getDate() > today.getDate()) {
      dayInput.classList.add("input-error");
      dayError.classList.remove("display-none");
      return;
    }
  }

  // Calculate the age
  let ageYears = today.getFullYear() - birthDate.getFullYear();
  let ageMonths = today.getMonth() - birthDate.getMonth();
  let ageDays = today.getDate() - birthDate.getDate();

  if (ageDays < 0) {
    ageMonths--;
    ageDays += new Date(today.getFullYear(), today.getMonth(), 0).getDate();
  }

  if (ageMonths < 0) {
    ageYears--;
    ageMonths += 12;
  }

  document.querySelector(".age-box .units:nth-child(1) span").textContent =
    ageYears;
  document.querySelector(".age-box .units:nth-child(2) span").textContent =
    ageMonths;
  document.querySelector(".age-box .units:nth-child(3) span").textContent =
    ageDays;
}
