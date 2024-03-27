
function getWeekNumber(d) {
  // Copy date so don't modify original
  d = new Date(Date.UTC(d.getFullYear(), d.getMonth(), d.getDate()));
  // Set to nearest Thursday: current date + 4 - current day number
  // Make Sunday's day number 7
  d.setUTCDate(d.getUTCDate() + 4 - (d.getUTCDay() || 7));
  // Get first day of year
  var yearStart = new Date(Date.UTC(d.getUTCFullYear(), 0, 1));
  // Calculate full weeks to nearest Thursday
  var weekNo = Math.ceil((((d - yearStart) / 86400000) + 1) / 7);
  // Return array of year and week number
  return [weekNo, d.getUTCFullYear()];
}

var result = getWeekNumber(new Date());

let circle = [    "Agence de nantes", "Finance", "XP Academy", "Production", "Marketing", "Support Sales", "IT", "RH", "RevOps"]

let current_week = result[0];

console.log(current_week)

while (current_week >= circle.length + 1) {
  current_week -= circle.length;
}

let next_week = current_week + 1
current_week -= 1


let currentCircle = circle[current_week];

document.getElementById("current_circle").innerHTML =  currentCircle;



console.log(next_week)
while (next_week >= circle.length + 1) {
  next_week -= circle.length;
}
next_week -= 1


document.getElementById("next_circle").innerHTML =  circle[next_week];


let text = "";

circle.forEach(function (currentValue, index, arr) {
let classCss = "list-group-item"
  //active 
  if(currentCircle ===currentValue){
    classCss += "  active"
  }

  text += "<li class=\""+ classCss+ "\">" +  currentValue + "</li>";
})

document.getElementById("list-cercle").innerHTML = text;
