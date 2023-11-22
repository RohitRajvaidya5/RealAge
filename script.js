function calculateAge(birthdate) {
  const birthDate = new Date(birthdate);
  const currentDate = new Date();

  let years = currentDate.getFullYear() - birthDate.getFullYear();
  let months = currentDate.getMonth() - birthDate.getMonth();
  let days = currentDate.getDate() - birthDate.getDate();

  if (days < 0) {
    months--;
    days += new Date(currentDate.getFullYear(), currentDate.getMonth(), 0).getDate();
  }
  if (months < 0) {
    years--;
    months += 12;
  }

  return {
    years,
    months,
    days,
  };
}

function displayAge() {
  const birthdate = "1999-04-12"; 
  const age = calculateAge(birthdate);
  console.log(`You are ${age.years} years, ${age.months} months, and ${age.days} days old.`);
  document.querySelector('.years').innerHTML = `<h3>${age.years}</h3>`;
  document.querySelector('.months').innerHTML = `<h3>${age.months}</h3>`;
  document.querySelector('.days').innerHTML = `<h3>${age.days}</h3>`;
}

const intervalId = setInterval(displayAge, 5000);
