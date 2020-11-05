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


$('#READMEsample').on('click', () => window.open('https://www.youtube.com/watch?v=WmI48GBTX4k'))
$('#READMErepo').on('click', () => window.open('https://github.com/jenryhennifer/READMEgenerator'))

$('#whimDeploy').on('click',()=> window.open('https://obscure-citadel-38973.herokuapp.com/'))
$('#whimRepo').on('click',()=> window.open('https://github.com/jenryhennifer/Project-2'))

$('#trackerSample').on('click', ()=>window.open('https://www.youtube.com/watch?v=7gOH9BgTj5E&feature=youtu.be'))
$('#trackerRepo').on('click', ()=>window.open('https://github.com/jenryhennifer/employeeTracker'))

//Email Submit Attempt

$('#emailSubmit').on('click', function(event){
    event.preventDefault();
    let name = $('#userName').val();
    let subjectLine = $('#subjectLine').val();
    let message = $('#message').val();
    let subject = name + ': ' + subjectLine


    document.location = 'mailto:jenhenry1995@gmail.com?subject='+subject+'&body='+message + name;
});

