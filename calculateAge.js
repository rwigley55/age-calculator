function calculateAge(event) {
  event.preventDefault();

  const dayInput = document.getElementById("day");
  const monthInput = document.getElementById("month");
  const yearInput = document.getElementById("year");

  const errorValidation = document.querySelector(".display-none");

  const day = parseInt(dayInput.value);
  const month = parseInt(monthInput.value);
  const year = parseInt(yearInput.value);

  // Remove any previously applied error classes
  dayInput.classList.remove("input-error");
  monthInput.classList.remove("input-error");
  yearInput.classList.remove("input-error");

  // Validate input
  if (day === 0 || month === 0 || year === 0) {
    //   alert("Please fill in all fields.");
    dayInput.classList.add("input-error");
    dayInput.classList.remove("display-none");
    monthInput.classList.add("input-error");
    yearInput.classList.add("input-error");
    return;
  }

  if (isNaN(day) || day < 1 || day > 31) {
    //   alert("Please enter a valid day (1-31).");
    dayInput.classList.add("input-error");
    return;
  }

  if (isNaN(month) || month < 1 || month > 12) {
    //   alert("Please enter a valid month (1-12).");
    monthInput.classList.add("input-error");
    return;
  }

  if (isNaN(year) || year < 1900 || year > new Date().getFullYear()) {
    //   alert("Please enter a valid year.");
    yearInput.classList.add("input-error");
    return;
  }

  const today = new Date();
  const birthDate = new Date(year, month - 1, day); // month is 0-based

  if (birthDate > today) {
    alert("Date of birth cannot be in the future.");
    dayInput.classList.add("input-error");
    monthInput.classList.add("input-error");
    yearInput.classList.add("input-error");
    return;
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
