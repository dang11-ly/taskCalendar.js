let day = prompt("Monday, Wednesday, Friday");
switch (day) {
  case "Monday":
    console.log("Task for Monday is: Review the lecture notes.");
    break;
  case "Tuesday":
    console.log("Task for Tuesday is: Work on the group project.");
    break;
  case "Wednesday":
    console.log("Task for Wednesday is: Prepare for the quiz.");
    break;
  case "Thursday":
    console.log("Task for Thursday is: Attend the lab session.");
    break;
  case "Friday":
    console.log("Task for Friday is: Complete the assignment.");
    break;
  case "Saturday":
    console.log("Task for Saturday is: Study for the upcoming exam.");
    break;
  case "Sunday":
    console.log("Your task for Sunday is: Relax and prepare for the week ahead.");
    break;
  default:
    console.log("Task for Monday is: Review the lecture notes. + Task for Wednesday is: Prepare for the quiz. + Task for Friday is: Complete the assignment.");
}
