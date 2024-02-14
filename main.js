
function getWeekNumber(d) {
    // Copy date so don't modify original
    d = new Date(Date.UTC(d.getFullYear(), d.getMonth(), d.getDate()));
    // Set to nearest Thursday: current date + 4 - current day number
    // Make Sunday's day number 7
    d.setUTCDate(d.getUTCDate() + 4 - (d.getUTCDay()||7));
    // Get first day of year
    var yearStart = new Date(Date.UTC(d.getUTCFullYear(),0,1));
    // Calculate full weeks to nearest Thursday
    var weekNo = Math.ceil(( ( (d - yearStart) / 86400000) + 1)/7);
    // Return array of year and week number
    return [weekNo, d.getUTCFullYear()];
}

var result = getWeekNumber(new Date());

let circle = [ "IT","RH","RevOps","Commerce","Finance", "XP"]
let i = result[0];

var message = "Le cercle en charge pour la semaine " + i 
console.log(i)
while (i >= 7) {
  i-=6;
}
i-=1

console.log(i)
document.getElementById("current_circle").innerHTML = message + " est : " + circle[i];


i+=1
document.getElementById("next_circle").innerHTML = "Le cercle en charge la semaine prochaine est : " + circle[i];
