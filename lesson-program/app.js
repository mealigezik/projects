const day = prompt("Enter the day");


let lesson = 0;

switch (day) {
    case "monday":
        lesson = "inclass";
        break;
    case "tuesday":
        lesson = "inclass";
        break;
    case "wendesday":
        lesson = "inclass";
        break;
    case "thursday":
        lesson = "inclass";
        break;
    case "friday":
        lesson = "teamwork";
        break;
    case "saturday":
        lesson = "inclass and workshop";
        break;
    case "sunday":
        lesson = "self-study";
        break;
    default:
        alert("Invalid day");
        break;
}
console.log(`${day} you have ${lesson}`);
    