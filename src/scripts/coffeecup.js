

document.getElementById('coffeecup').addEventListener('mouseover', () => {
    document.getElementsByClassName('clickme')[0].style.display = 'block'
})

document.getElementById('coffeecup').addEventListener('mouseout', () => {
    document.getElementsByClassName('clickme')[0].style.display = 'none'
})


function coffeepuns() {
    var answer = Math.floor((Math.random() * 12) + 1);
    var message;

    switch (answer) {
        case 1:
            message = "Espresso Patronum!";
            break;
        case 2:
            message = "Brew can do it!";
            break;
        case 3:
            message = "Just brew it";
            break;
        case 4:
            message = "Java nice day!";
            break;
        case 5:
            message = "What's its favorite Bob Marley song? Don't Worry, Be Frappé.";
            break;
        case 6:
            message = "When you feel depresso, have an espresso!";
            break;
        case 7:
            message = "Better latte than never!";
            break;
        case 8:
            message = "You're mocha me crazy!";
            break;
        case 9:
            message = "What’s it called when you steal someone’s coffee? Mugging.";
            break;
        case 10:
            message = "Affogato to tell you something: You’re the greatest.";
            break;
        case 11:
            message = "If this is decaf, we’re gonna have a latte problems.";
            break;
        case 12:
            message = "You spilled your entire cup of coffee? What's sumatra with you?";
            break;
    }
    var answer = document.getElementById("list").innerHTML = message;
}

coffeepuns();
