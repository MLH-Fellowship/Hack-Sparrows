const sprintsJsonStr = `[
    {
        "theme": "Education 🎓",
        "focus": "Git",
        "projects": ["Transcribio", "Connectify", "Studyscape", "Tech About It"]
    },
    {
        "theme": "Gaming 🎮",
        "focus": "Clean Code",
        "projects": ["Among Ups", "Tooney Tunes", "Ruby's Adventures", "Evil in Jaffar"]
    },
    {
        "theme": "Data, AI & Machine Learning 🧠",
        "focus": "Documentation",
        "projects": ["MLPrep", "JamSpam", "Social BERTerfly", "Flyrics"]
    },
    {
        "theme": "Developer Tools & Productivity 💻",
        "focus": "Testing & Feedback",
        "projects": ["Autoflow", "Alphadocs", "Code Of Duty", "Create.it"]
    },
    {
        "theme": "Social Good & Impact 🤝",
        "focus": "Deployment",
        "projects": ["Censei", "VehiCO", "Good Vibes Only", "Find a Wish"]
    }
]`

const projectsJsonStr = `{
    "Transcribio" : {
        "name": "Transcribio",
        "photo": "./media/transcribio.jpg",
        "description": "A web application that allows educators to easily generate transcripts for their video lectures and provide a convenient and interactive way for students to navigate through the lecture.",
        "stack": "React, Flask, Firestore, Google Cloud Speech to Text",
        "team": "Chau Vu, Ajwad Shaikh, Rajat Kumar Gupta",
        "github": "https://github.com/MLH-Fellowship/transcribio",
        "devpost": "https://devpost.com/software/transcribio-frw50t",
        "link": "https://transcribio-mlh.web.app/",
        "winner": true
    },
    "Connectify" : {
        "name": "Connectify",
        "photo": "./media/connectify.png",
        "description": "Looking for company while studying? Let Connectify handle it for you.",
        "stack": "HTML/CSS, Javascript",
        "team": "Vrushti Mody, Ahad Zai, Julia Liu",
        "github": "https://github.com/AhadKhan98/Connectify",
        "devpost": "https://devpost.com/software/connectify-i9tz21",
        "link": "https://www.youtube.com/watch?v=izKULVfQdwY&feature=youtu.be",
        "winner": false
    },
    "Studyscape" : {
        "name": "Studyscape",
        "photo": "./media/studyscape.jpg",
        "description": "A planner wep app to manage your school related tasks, multiple online calendars, such as Google Calendar to track your schedule and so many more!",
        "stack": "HTML/CSS, Bootstrap, Javascript",
        "team": "Emily Amspoker, Vividha Rawat, Shilpita Biswas",
        "github": "https://github.com/MLH-Fellowship/StudyScape",
        "devpost": "https://devpost.com/software/studyscape-fokehb",
        "link": "https://youtu.be/RHA8MtWvvEQ",
        "winner": false
    },
    "Tech About It" : {
        "name": "Tech About It",
        "photo": "./media/techaboutit.png",
        "description": "An iOS/Web app that will help find right speakers for your events and vice versa.",
        "stack": "Flask, MongoDB, React + Material UI",
        "team": "Saurabh Kumar Suryan, Dipanwita Guhathakurta, Mondale Felix",
        "github": "https://github.com/sksuryan/project-three",
        "devpost": "https://devpost.com/software/project-three",
        "link": "https://youtu.be/NaeMgmN6m7E",
        "winner": false
    },
    "Among Ups": {
        "name": "Among Ups",
        "photo": "./media/amongups.jpg",
        "description": "Among Ups is a multiplayer platform fighter game (but with a twist!) based on the popular game Among Us.",
        "stack": "Unity (C#)",
        "team": "Chau Vu, Ajwad Shaikh",
        "github": "https://github.com/MLH-Fellowship/AmongUps",
        "devpost": "https://devpost.com/software/amongups",
        "link": "https://play.unity.com/mg/2d/amongups",
        "winner": true
    },
    "Tooney Tunes": {
        "name": "Tooney Tunes",
        "photo": "./media/tooneytunes.jpg",
        "description": "A web-based Phaser game that lets you play a platformer game from your Spotify playlist, and enjoy navigating through platforms, obstacles, collect tunes along the playback of your favorite songs!",
        "stack": "Phaser, Spotify API, melody.ml, Node",
        "team": "Dipanwita Guhathakurta, Mondale Felix, Emily Amspoker",
        "github": "https://github.com/susiejojo/tooney_tunes",
        "devpost": "https://devpost.com/software/tooney_tunes",
        "link": "https://tooney-tunes.herokuapp.com/game.html",
        "winner": false
    },
    "Ruby's Adventures": {
        "name": "Ruby's Adventures",
        "photo": "./media/ruby.jpg",
        "description": "Ruby's Adventures is essentially a 2-in-one game with a pac-mac like minigame and an endless runner. However, there are twists to the minigames. Ruby can shoot obstacles and kill robots in order to find her way to the end goal.",
        "stack": "Unity (C#)",
        "team": "Vrushti Mody, Ahad Zai",
        "github": "https://github.com/vrushti-mody/Mini-Games",
        "devpost": "https://devpost.com/software/ruby-s-adventures",
        "link": "https://rubysadventure.netlify.app/",
        "winner": false
    },
    "Evil in Jaffar": {
        "name": "Evil in Jaffar",
        "photo": "./media/evilinjaffar.png",
        "description": "2D fantasy platforming game",
        "stack": "Unity (C#)",
        "team": "Saurabh Kumar Suryan, Vividha, Shilpita Biswas",
        "github": "https://github.com/MLH-Fellowship/Evil-in-Jaffar",
        "devpost": "https://devpost.com/software/evil-in-jaffar",
        "link": "https://evil-in-jaffar.netlify.app/",
        "winner": false
    },
    "MLPrep": {
        "name": "MLPrep",
        "photo": "./media/mlprep.jpg",
        "description": "MLPrep (pronounced MealPrep) is a mobile app that offers recipe recommendations based on a picture of the ingredients, aimed to help reduce food waste by helping users figure out a meal that maximize the usage of their available ingredients 🥗.",
        "stack": "Flutter, Tensorflow, Flask",
        "team": "Chau Vu, Emily Amspoker, Mondale Felix",
        "github": "https://github.com/MLH-Fellowship/MLPrep",
        "devpost": "https://devpost.com/software/mlprep",
        "link": "https://youtu.be/kdfXHODstYQ",
        "winner": true
    },
    "JamSpam": {
        "name": "JamSpam",
        "photo": "./media/jamspam.png",
        "description": "GitHub App to jam the spam PRs on your repo and keep maintainers stress-free (even in Hacktober 🎃)",
        "stack": "Python, Probot, Octokit, Keras, TensorflowJS",
        "team": "Ajwad Shaikh, Vrushti Mody",
        "github": "https://github.com/MLH-Fellowship/JamSpam",
        "devpost": "https://devpost.com/software/jamspam",
        "link": "https://github.com/apps/jamspam-app",
        "winner": false
    },
    "Social BERTerfly": {
        "name": "Social BERTerfly",
        "photo": "./media/social-berterfly.jpg",
        "description": "Predicts your personality out of the 16 Myers-Briggs Type Personalities by your Twitter handle and compares your personality types with the people that you follow.",
        "stack": "Twitter API, tweepy, Flask, Google colaboratory, Keras, BERT, Bootstrap, chartjs",
        "team": "Dipanwita Guhathakurta, Shilpita Biswas, Vividha",
        "github": "https://github.com/MLH-Fellowship/Social-BERTerfly",
        "devpost": "https://devpost.com/software/social-berterfly",
        "link": "https://youtu.be/ufyrQVpg_84",
        "winner": false
    },
    "Flyrics": {
        "name": "Flyrics",
        "photo": "./media/flyrics.png",
        "description": "Generate lyrics for songs using AI and ML!",
        "stack": "flask, javascript, python, react-native",
        "team": "Ahad Zai, Saurabh Kumar Suryan ",
        "github": "https://github.com/AhadKhan98/Flyrics",
        "devpost": "https://devpost.com/software/flyrics",
        "link": "https://www.youtube.com/watch?v=wK8iTn1zaqo",
        "winner": false
    },
    "Autoflow": {
        "name": "Autoflow",
        "photo": "./media/autoflow.gif",
        "description": "A CLI that will automate your project builds and repository initiations for you",
        "stack": "Click, Python, Bash, Pytest, Github Actions",
        "team": "Dipanwita Guhathakurta, Saurabh Kumar Suryan, Shilpita Biswas",
        "github": "https://github.com/MLH-Fellowship/autoflow",
        "devpost": "https://devpost.com/software/autoflow",
        "link": "https://pypi.org/project/python-af/",
        "winner": true
    },
    "Alphadocs": {
        "name": "Alphadocs",
        "photo": "./media/alphadocs.jpg",
        "description": "Automatic docstring generator that supports and generates a number of specified and widely used docstring style conventions for documentation in Python.",
        "stack": "Click, Python",
        "team": "Vividha, Emily Amspoker, Julia Liu",
        "github": "https://github.com/MLH-Fellowship/alphadoc",
        "devpost": "https://devpost.com/software/alphadoc",
        "link": "https://pypi.org/project/alphadoc/",
        "winner": false
    },
    "Code Of Duty": {
        "name": "Code Of Duty",
        "photo": "./media/codeofduty.png",
        "description": "Gamified Sprint System - Making Open Source Contribution and Team Collaboration Fun!",
        "stack": "React, Node, Express, MongoDB, Github API",
        "team": "Chau Vu, Ajwad Shaikh, Vrushti Mody",
        "github": "https://github.com/MLH-Fellowship/CodeOfDuty",
        "devpost": "https://github.com/MLH-Fellowship/CodeOfDuty",
        "link": "https://github.com/MLH-Fellowship/CodeOfDuty",
        "winner": false
    },
    "Create.it": {
        "name": "Create.it",
        "photo": "./media/createit.png",
        "description": "Quickly create a repo using a command-line interface.",
        "stack": "Github API, Bitbucket API, Python",
        "team": "Ahad Zai, Mondale Felix",
        "github": "https://github.com/AhadKhan98/Create.It",
        "devpost": "https://devpost.com/software/create-it",
        "link": "https://www.youtube.com/watch?v=9bb4GgtX9iM&feature=youtu.be",
        "winner": false
    },
    "Censei": {
        "name": "Censei",
        "photo": "./media/censei.png",
        "description": "Simple chrome extension to replace explicit words with emojis!",
        "stack": "HTML/CSS, Javascript, Flask",
        "team": "Ahad Zai, Ajwad Shaikh, Emily Amspoker",
        "github": "https://github.com/MLH-Fellowship/censei",
        "devpost": "https://devpost.com/software/censei-q7i08o",
        "link": "https://youtu.be/0HOdJLVUW3g",
        "winner": true
    },
    "VehiCO": {
        "name": "VehiCO",
        "photo": "./media/vehico.jpg",
        "description": "VehiCO (pronounced Vehicle) is a webapp that aims to help users be more environmentally-conscious and make informed decisions by comparing the CO2 emission of different transportation modes for their trip. We also encourage users to take actions and contribute to sustainability efforts by providing a convenient way for them to neutralize their emission by donating to plant trees.",
        "stack": "React, Node, Express, Docker",
        "team": "Chau Vu, Dipanwita Guhathakurta",
        "github": "https://github.com/cqvu/VehiCO",
        "devpost": "https://devpost.com/software/vehico-hbvgil",
        "link": "https://vehico-client.herokuapp.com",
        "winner": false
    },
    "Good Vibes Only": {
        "name": "Good Vibes Only",
        "photo": "./media/goodvibes.jpg",
        "description": "Are you tired of the constant negative news reports? The Good News Network app delivers daily positive news from around the world. People need a well-balanced media diet, so our daily dose of ‘News to Enthuse’ is like Vitamin G for the spirit.",
        "stack": "Node.js, EJS, Python, MongoDB",
        "team": "Vrushti Mody, Saurabh Kumar Suryan, Vividha",
        "github": "https://github.com/MLH-Fellowship/Good-Vibes-Only",
        "devpost": "https://devpost.com/software/good-vibes-only",
        "link": "https://testsfront.herokuapp.com/",
        "winner": false
    },
    "Find a Wish": {
        "name": "Find a Wish",
        "photo": "./media/findawish.png",
        "description": "Find an organization you want to grant wishes for!",
        "stack": "React, HTML/CSS, Javscript",
        "team": "Shilpita Biswas, Julia Liu, Mondale Felix",
        "github": "https://github.com/MLH-Fellowship/find-a-wish",
        "devpost": "https://devpost.com/software/find-a-wish-90jqr3",
        "link": "https://find-a-wish.onrender.com/",
        "winner": false
    }
}`

export { sprintsJsonStr, projectsJsonStr };