/*
Oct 20, 2022
Welcome. The purpose of this program is to calculate the user's sleep debt.
We will be doing that by determining how many hours the user slept in a whole week, 
then we will take this actual data then compare it with ideal sleep data. 

Finaly, we will output the result to the user by showing the user the actual number of 
hours slept for the whole week, the ideal hours, then comparing them.

*/

// Let us welcome the user:

console.log("  ");
console.log(" ------      Hello and Welcome   to  ------           ");
console.log(" -----     The Sleep Debt Calculator   -----       ");
console.log("  ");

// Then we will get the number of hours the user slept for the week. 

const getSleepHours = (day) => {
  if (day === "sunday") {
    return 8;
  } else if (day === "monday") {
    return 7;
  } else if (day === "tuesday") {
    return 6;
  } else if (day === "wednesday") {
    return 5;
  } else if (day === "thursday") {
    return 4;
  } else if (day === "friday") {
    return 3;
  } else if (day === "saturday") {
    return 2;
  } else {
    return "Error. Please try again"
  }
}

console.log(" ")

//Now let us get the actual sleep hours for the whole week. 

const getActualSleepHours = () => {
  return ( getSleepHours("sunday") + getSleepHours("monday") + getSleepHours("tuesday") + getSleepHours("wednesday") +  getSleepHours("thursday") + getSleepHours("friday") + getSleepHours("saturday")  );
}

console.log(" ")


//Get Ideal Hours calculation
const getIdealSleepHours = () => {
  const idealHours = 8; //This is the ideal hours per day
  return idealHours * 7; //This is ideal hours er week
}


///Third Calculate final step Of Calculating sleep debt


const calculateSleepDebt = () => {
    if (getActualSleepHours() === getIdealSleepHours()) {
        console.log(`You have slept this week for ${getActualSleepHours()} hours. You got the perfect  amount of sleep...`);
    } else if (getActualSleepHours() < getIdealSleepHours()) {
        console.log(`You have slept this week for ${getActualSleepHours()} hours. You got less amount of sleep than you needed. You need to have ${getIdealSleepHours()} hours for the perfect sleep. Sadly, you are short by ${(getIdealSleepHours() ) - ( getActualSleepHours())} Hours.`);
    } else if (getActualSleepHours() > getIdealSleepHours()) {
        console.log(`You have slept this week for ${getActualSleepHours()} hours. You got more amount of sleep than you needed. `)
    } else {
        console.log("Error. Please check your what you entered and try again...")
    }
};




// Print Output

calculateSleepDebt();
console.log(" ");
console.log(" ");
console.log(" ");
console.log(" ");
console.log(" -------       The End........   -------                ")
console.log("  ");
console.log("  ");
console.log("  ");