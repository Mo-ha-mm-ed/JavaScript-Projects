/*
Oct 20, 2022

This program calculate your sleep debt. by getting the number of hours 
you slept in a whole week, then it will output 
- the actual sleep hours
- the ideal sleep hours
- Compare the hours

Fixed Jun 11, 2023

*/

/////               =========>                        Input Section (Before program runs).  <<<<<<<<<<<<<<<

// Get Daily sleep hours from user.

const Sleep_Sunday = 1; //User provided
const Sleep_Monday = 4; //User provided
const Sleep_Tuesday = 8; //User provided
const Sleep_Wednesday = 7; //User provided
const Sleep_Thursday = 6; //User provided
const Sleep_Friday = 2; //User provided
const Sleep_Saturday = 4; //User provided

//Total sleep of the whole week
const userSleepActualHours = (Sleep_Sunday + Sleep_Monday + Sleep_Tuesday + Sleep_Wednesday + Sleep_Thursday + Sleep_Friday + Sleep_Saturday); // Total hours of sleep the whole week by user

/////    ===============> Input done  <<<<<<<<<<<<<<<

// The ideal sleep hours
const idealSleepHoursDaily = 8;
const idealSleepingHoursWeek = (idealSleepHoursDaily * 7);


//Check day of the week and compare it.
// Check if the weekly hours of sleep matches the ideal
if  (userSleepActualHours === idealSleepingHoursWeek ) {
  console.log("It seems you have slept the ideal weekly hours. Great job");
  console.log(" ");

} else {
  //If the actual hours Does not match the ideal
  // find the days where user slept less or more:

  console.log("It seems that you have slept less than the ideal weekly hours. I can see from the data you provided that you slept less than 8 hours on the days below. It seems that you have a disturbed schedule");
  console.log(" ");

  if (Sleep_Sunday < idealSleepHoursDaily) {
    console.log("Sunday " + Sleep_Sunday + " hours."); 
    console.log(" ");
  };

  if (Sleep_Monday < idealSleepHoursDaily) {
    console.log("Monday " + Sleep_Monday + " hours."); 
    console.log(" "); 
  };

  if (Sleep_Tuesday < idealSleepHoursDaily) {
    
    console.log("Tuesday " + Sleep_Tuesday + " hours.");  
    console.log(" ");
  };

  if (Sleep_Wednesday < idealSleepHoursDaily) {
    
    console.log("Wednesday " + Sleep_Wednesday + " hours."); 
    console.log(" "); 
  };

  if (Sleep_Thursday < idealSleepHoursDaily) {
    
    console.log("Thursday " + Sleep_Thursday + " hours."); 
    console.log(" ");
  };

  if (Sleep_Friday < idealSleepHoursDaily) {
   
    console.log("Friday " + Sleep_Friday + " hours."); 
    console.log(" ");
  };

  if (Sleep_Saturday < idealSleepHoursDaily) {
    console.log("Sunday " + Sleep_Saturday + " hours."); 
    console.log(" ");
  };

  console.log(" ");
  console.log(" ");
  console.log(" ");

  //Check if sleep hours is greater.
  if (Sleep_Sunday > idealSleepHoursDaily) {
    console.log("Sunday " + Sleep_Saturday + " hours.");
    console.log("This day you slept longer than 8");  
    console.log(" ");
  };

  if (Sleep_Monday > idealSleepHoursDaily) {
 
    console.log("Monday " + Sleep_Monday + " hours.");  
    console.log("This day you slept longer than 8");
    console.log(" ");
  };

  if (Sleep_Tuesday > idealSleepHoursDaily) {

    console.log("Tuesday " + Sleep_Tuesday + " hours."); 
    console.log("This day you slept longer than 8");
    console.log(" ");
  };

  if (Sleep_Wednesday > idealSleepHoursDaily) {

    console.log("Wednesday " + Sleep_Wednesday + " hours."); 
    console.log("This day you slept longer than 8");
    console.log(" ");
  };

  if (Sleep_Thursday > idealSleepHoursDaily) {
  
    console.log("Thursday " + Sleep_Thursday + " hours."); 
    console.log("This day you slept longer than 8");
    console.log(" ");
  };

  if (Sleep_Friday > idealSleepHoursDaily) {
 
    console.log("Friday " + Sleep_Friday + " hours."); 
    console.log("This day you slept longer than 8");
    console.log(" ");
  };

  if (Sleep_Saturday > idealSleepHoursDaily) {

    console.log("Saturday " + Sleep_Saturday + " hours."); 
    console.log("This day you slept longer than 8");
    console.log(" ");
  };


  //Check if user slept exactly 8 hours
  if (Sleep_Sunday === idealSleepHoursDaily) {

    console.log("Sunday " + Sleep_Sunday + " hours."); 
    console.log("This day is normal 8 hours");
    console.log(" ");
  };

  if (Sleep_Monday === idealSleepHoursDaily) {

    console.log("Monday " + Sleep_Monday + " hours."); 
    console.log("This day is normal 8 hours");
    console.log(" ");
  };

  if (Sleep_Tuesday === idealSleepHoursDaily) {

    console.log("Tuesday " + Sleep_Tuesday + " hours."); 
    console.log("This day is normal 8 hours");
    console.log(" ");
  };

  if (Sleep_Wednesday === idealSleepHoursDaily) {

    console.log("Wednesday " + Sleep_Wednesday + " hours."); 
    console.log("This day is normal 8 hours");
    console.log(" ");
  };

  if (Sleep_Thursday === idealSleepHoursDaily) {

    console.log("Thursday " + Sleep_Thursday + " hours."); 
    console.log("This day is normal 8 hours");
    console.log(" ");
  };

  if (Sleep_Friday === idealSleepHoursDaily) {

    console.log("Friday " + Sleep_Friday + " hours."); 
    console.log("This day is normal 8 hours");
    console.log(" ");
  };

  if (Sleep_Saturday === idealSleepHoursDaily) {

    console.log("Saturday " + Sleep_Saturday + " hours."); 
    console.log("This day is normal 8 hours");
    console.log(" ");
  };


};