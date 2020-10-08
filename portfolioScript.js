//click links for the portfolio page to open to the deployment links for each app

$('#yelpDeploy').on('click', () => window.open('https://jenryhennifer.github.io/dreamteamrepo/'))
$('#yelpRepo').on('click')

$('#scheduleDeploy').on('click', () => window.open('https://jenryhennifer.github.io/workDaySchedule/'))
$('#scheduleRepo').on('click')

$('#passwordLink').on('click', () => window.open('https://jenryhennifer.github.io/passwordGenerator/'))


//Email Submit Attempt

$('#emailSubmit').on('click', function(event){
    event.preventDefault();
    let name = $('#userName').val();
    let subjectLine = $('#subjectLine').val();
    let message = $('#message').val();
    let subject = name + ': ' + subjectLine


    document.location = 'mailto:jenhenry1995@gmail.com?subject='+subject+'&body='+message + name;
});