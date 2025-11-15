var arr = [
    {
        team:'CSK',
        primary:'blue',
        secondary:'yellow',
        fullName:'Chennai Super Kings',
        trophies:3,
        captain:'MS Dhoni',
        img:'https://wallpapercave.com/wp/wp3116421.jpg'
    },    {
        team:'RCB',
        primary:'black',
        secondary:'red',
        fullName:'Royal Challengers Bangalore',
        trophies:0,
        captain:'Virat Kohli',
        img:'https://media.fortuneindia.com/fortune-india/2025-11-06/6incrk23/RCB.jpg?w=640&auto=format,compress&q=80'
    },
    {
        team:'SRH',
        primary:'orange',
        secondary:'black',
        fullName:'Sunrisers Hyderabad',
        trophies:1,
        captain:'David Warner',
        img:'https://upload.wikimedia.org/wikipedia/en/thumb/5/51/Sunrisers_Hyderabad_Logo.svg/345px-Sunrisers_Hyderabad_Logo.svg.png'
    }, 
    {
        team:'KKR',
        primary:'gold',
        secondary:'#3B046D',
        fullName:'Kolkata Knight Riders',
        trophies:2,
        captain:'Kane Williamson',
        img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkMBiAJMMGRQZJxNr-8uiCzLb9J6NNYmtbBQ&s'
    }
    ,    {
        team:'DC',
        primary:'white',
        secondary:'blue',
        fullName:'Delhi Capitals',
        trophies:0,
        captain:'Rishabh Pant',
        img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0__J7G16Kzt3SOhAtj-jMF8cJ4S3X3QmW1w&s'
    }
    ,    {
        team:'PBKS',
        primary:'white',
        secondary:'red',
        fullName:'Punjab Kings',
        trophies:0,
        captain:'KL Rahul',
        img:'https://wallpapercave.com/wp/wp6194597.jpg'
    }
    ,    {
        team:'RR',
        primary:'white',
        secondary:'magenta',
        fullName:'Rajasthan Royals',
        trophies:1,
        captain:'Sanju Samson',
        img:'https://media.crictracker.com/media/attachments/1733228251950_RR.jpeg'
    }
    ,    {
        team:'GT',
        primary:'green',
        secondary:'yellow',
        fullName:'Gujarat Titans',
        trophies:1,
        captain:'Hardik Pandya',
        img:'https://www.gujarattitansipl.com/static-assets/waf-images/5b/c4/f8/16-9/2uWNbX06jK.png'
    }
];

var btn = document.querySelector('button')
var h1 = document.querySelector('h1')
var body = document.querySelector('body')
var teamImg = document.querySelector('#teamImg');

btn.addEventListener('click', function(){
    var num = Math.floor(Math.random()*arr.length)
    
    h1.style.color = arr[num].primary
    body.style.backgroundColor = arr[num].secondary;
    h1.textContent = arr[num].team;
    h1.textContent += ' - ' + arr[num].fullName;
    h1.textContent += ' - ' + arr[num].trophies + ' trophies';
    h1.textContent += ' - Captain: ' + arr[num].captain;

    (arr[num].img) 
        teamImg.src = arr[num].img;
    


})






