//click links for the portfolio page to open to the deployment links for each app

$('#yelpDeploy').on('click', () => window.open('https://jenryhennifer.github.io/dreamteamrepo/'))
$('#yelpRepo').on('click', () => window.open('https://github.com/jenryhennifer/dreamteamrepo'))

$('#scheduleDeploy').on('click', () => window.open('https://jenryhennifer.github.io/workDaySchedule/'))
$('#scheduleRepo').on('click', () => window.open('https://github.com/jenryhennifer/workDaySchedule'))

$('#passwordDeploy').on('click', () => window.open('https://jenryhennifer.github.io/passwordGenerator/'))
$('#passwordRepo').on('click', () => window.open('https://github.com/jenryhennifer/passwordGenerator'))

$('#weatherDeploy').on('click', () => window.open('https://jenryhennifer.github.io/myWeatherApp/'))
$('#weatherRepo').on('click', () => window.open('https://github.com/jenryhennifer/myWeatherApp'))


$('#employeeSample').on('click', () => window.open('https://www.youtube.com/watch?v=GvJ9kiWJXzQ'))
$('#employeeRepo').on('click', () => window.open('https://github.com/jenryhennifer/employeeSummary'))


//Email Submit Attempt

$('#emailSubmit').on('click', function(event){
    event.preventDefault();
    let name = $('#userName').val();
    let subjectLine = $('#subjectLine').val();
    let message = $('#message').val();
    let subject = name + ': ' + subjectLine


    document.location = 'mailto:jenhenry1995@gmail.com?subject='+subject+'&body='+message + name;
});

