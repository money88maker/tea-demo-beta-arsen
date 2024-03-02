// index.js - A simple random activity picker

const activities = [
    "Read a book",
    "Code for fun",
    "Take a walk",
    "Play a video game",
    "Learn something new on the internet",
    "Listen to music",
    "Watch a documentary",
    "Cook a new recipe",
    "Do some exercises",
    "Write in your journal"
];

// Function to randomly select an activity
function pickRandomActivity() {
    const randomIndex = Math.floor(Math.random() * activities.length);
    return activities[randomIndex];
}

// Display the selected activity
console.log("Today's activity suggestion is: " + pickRandomActivity());