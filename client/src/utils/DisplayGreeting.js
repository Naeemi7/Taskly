export default function displayGreeting() {
  const currentTime = new Date();
  const currentHour = currentTime.getHours();

  let greeting;

  if (currentHour >= 5 && currentHour < 8) {
    greeting = "Good early morning";
  } else if (currentHour >= 8 && currentHour < 12) {
    greeting = "Good morning";
  } else if (currentHour >= 12 && currentHour < 14) {
    greeting = "Good noon";
  } else if (currentHour >= 14 && currentHour < 17) {
    greeting = "Good afternoon";
  } else if (currentHour >= 17 && currentHour < 20) {
    greeting = "Good evening";
  } else if (currentHour >= 20 && currentHour < 22) {
    greeting = "Good night";
  } else {
    greeting = "Good late night";
  }

  return greeting;
}
