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
    const birthdate = "1999-04-12"; // Replace with your birthdate in the format "YYYY-MM-DD"
    const age = calculateAge(birthdate);
    console.log(`You are ${age.years} years, ${age.months} months, and ${age.days} days old.`);
    let year_element = document.getElementsByClassName('years')[0].innerHTML = `<h3>${age.years}</h3>`
    let month_element = document.getElementsByClassName('months')[0].innerHTML = `<h3>${age.months}</h3>`
    let days_element = document.getElementsByClassName('days')[0].innerHTML = `<h3>${age.days}</h3>`
  }
  
  // Use setInterval to call displayAge every 5 seconds (5000 milliseconds)
  const intervalId = setInterval(displayAge, 5000);
  
  // To stop the interval after a certain amount of time
//   setTimeout(function () {
//     clearInterval(intervalId);
//     console.log("Interval stopped after 20 seconds.");
//   }, 20000);
  