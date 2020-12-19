document.addEventListener("DOMContentLoaded", ()=>{
    let teamJsonStr =`[
        {
            "name": "Chau Vu",
            "photo": "./media/chau.jpg",
            "2t1l": "I've never broken a bone in my life 🦴, I have a black belt in Taekwondo 🥋, I played chess competitively and went to nationals ♟",
            "tech": "Full stack development",
            "website": "http://cqvu.github.io/",
            "github": "https://github.com/cqvu",
            "linkedin": "https://www.linkedin.com/in/cqvu/",
            "twitter": "https://twitter.com/cqvu_",
            "award": "Highest of Fives"
        },
        {
            "name": "Saurabh Kumar Suryan",
            "photo": "./media/saurabh.jpg",
            "2t1l": "🐤 The design lead of this website is very lazy 😴, belongs to Percy Jackson fandom 🔱, owns a golden retriever 🐶",
            "tech": "Python, Flask, Docker, JavaScript, React, Node, CSS, Adobe XD",
            "website": "https://sksuryan.me/",
            "github": "https://github.com/sksuryan",
            "linkedin": "https://www.linkedin.com/in/saurabh-kumar-suryan-01684b194/",
            "twitter": "https://twitter.com/_sksuryan",
            "award": "Meme Lord"
        },
        {
            "name": "Ahad Zai",
            "photo": "./media/ahad.jpg",
            "2t1l": "Won 3 gold medals in boxing 🥊, Won 3 gold medals in soccer ⚽, Addicted to Dota 2 🎮",
            "tech": "Python (Flask) and JavaScript (React)",
            "website": "http://ahadzai.com",
            "github": "https://github.com/ahadkhan98",
            "linkedin": "https://www.linkedin.com/in/ahadzai/",
            "twitter": "",
            "award": "Comfy Standups"
        },

        {
            "name": "Kunal Kushwaha",
            "photo": "./media/kunal.jpg",
            "2t1l": "I have never seen Star Wars, I have won International Art Contests, I don't like Ice Cream",
            "tech": "All things Cloud Native",
            "website": "http://kunal-kushwaha.github.io",
            "github": "https://github.com/kunal-kushwaha",
            "linkedin": "https://www.linkedin.com/in/kunal-kushwaha/",
            "twitter": "https://twitter.com/kush_kunal",
            "award": "I was on Mute"
        },
        {
            "name": "Emily Amspoker",
            "photo": "./media/emily.png",
            "2t1l": "I have a one-eyed dog, I do robotics at my school, I used to play the classical guitar",
            "tech": "Python, Java, JavaScript, HTML/CSS",
            "website": "http://emilyamspoker.com",
            "github": "https://github.com/eamspoker",
            "linkedin": "https://www.linkedin.com/in/emily-amspoker-52944b18a/",
            "twitter": "https://twitter.com/AmspokerEmily",
            "award": "Team Player"
        },
        {
            "name": "Vividha",
            "photo": "./media/vividha.jpg",
            "2t1l": "I love to travel & I love dogs and cats!",
            "tech": "Python, Javascript for backend and Bootstrap for frontend",
            "website": "https://v2dha.github.io/whyiamawesome/",
            "github": "https://github.com/V2dha",
            "linkedin": "https://www.linkedin.com/in/vividha-rawat-761905143/",
            "twitter": "https://twitter.com/vvdha",
            "award": "Can you hear me?"
        },
        {
            "name": "Shilpita Biswas",
            "photo": "./media/shilpita.jpg",
            "2t1l": "I was born in the US, I used to be a dancer, My dad met Maroon 5",
            "tech": "Python",
            "website": "",
            "github": "https://github.com/sh-biswas",
            "linkedin": "https://www.linkedin.com/in/shilpita-biswas/",
            "twitter": "https://twitter.com/shilpita_biswas",
            "award": "Best Zoom Background"
        },
        {
            "name": "Ajwad Shaikh",
            "photo": "./media/ajwad.jpg",
            "2t1l": "I can read more than 5 languages, I write poetry, I have had a pet",
            "tech": "Just about anything that makes sense",
            "website": "https://ajwad-shaikh.github.io",
            "github": "https://github.com/ajwad-shaikh",
            "linkedin": "https://www.linkedin.com/in/ajwad-shaikh/",
            "twitter": "https://twitter.com/AjwadShaikh3",
            "award": "The Pair Programmer"
        },
        {
            "name": "Mondale Felix",
            "photo": "./media/mondale.png",
            "2t1l": "I can play the guitar, my favorite fruit is a mango, I am a nerd",
            "tech": "Swift, Python",
            "website": "",
            "github": "https://github.com/MondaleFelix",
            "linkedin": "https://www.linkedin.com/in/mondalefelix/",
            "twitter": "https://twitter.com/Mondeezy",
            "award": "Skribbl King"
        }
    ]`
    let teamJson = JSON.parse(teamJsonStr)
    let container = document.querySelector(".team__card-container");
    console.log(container)

    teamJson.forEach(mem => {
        let memDiv = document.createElement("div");
        memDiv.classList.add("team__mem-img");
    
        // Image
        let img = document.createElement("img");
        img.src = mem.photo;
        img.alt = `${mem.name}'s photo`;
        memDiv.appendChild(img);

        let detailsDiv = document.createElement("div");
        detailsDiv.classList.add("team__mem-details");

        let descriptionsDiv = document.createElement("div");
        descriptionsDiv.classList.add("team__mem-descriptions");

        // Award
        let award = document.createElement("p");
        award.innerText = `🏆 ${mem.award}`;
        award.classList.add("team__mem-description");
        descriptionsDiv.appendChild(award);

        // Two Truths One Lie
        let twoTruthsOneLie = document.createElement("p");
        twoTruthsOneLie.innerText = `2 Truths 1 Lie: ${mem["2t1l"]}`;
        twoTruthsOneLie.classList.add("team__mem-description");
        descriptionsDiv.appendChild(twoTruthsOneLie);

        // Tech Stack
        let techStack = document.createElement("p");
        techStack.innerText = `Loves to Work With: ${mem.tech}`;
        techStack.classList.add("team__mem-description");
        descriptionsDiv.appendChild(techStack);

        detailsDiv.appendChild(descriptionsDiv);

        // Name
        let name = document.createElement("p");
        name.innerText = mem.name;
        name.classList.add("team__mem-detail");
        detailsDiv.appendChild(name);

        // Contact
        let contactDiv = document.createElement("div")
        contactDiv.classList.add("team__mem-icons");

        let linkedin = document.createElement("p");
        linkedin.classList.add("team__mem-detail");
        let linkedinLink = document.createElement("a");
        linkedinLink.href = mem.linkedin;
        let linkedinIcon = document.createElement("i");
        linkedinIcon.classList.add("fab", "fa-linkedin-in");
        linkedinLink.appendChild(linkedinIcon);
        linkedin.appendChild(linkedinLink);
        contactDiv.appendChild(linkedin);

        let twitter = document.createElement("p");
        twitter.classList.add("team__mem-detail");
        let twitterLink = document.createElement("a");
        twitterLink.href = mem.twitter;
        let twitterIcon = document.createElement("i");
        twitterIcon.classList.add("fab", "fa-twitter");
        twitterLink.appendChild(twitterIcon);
        twitter.appendChild(twitterLink);
        contactDiv.appendChild(twitter);

        let github = document.createElement("p");
        github.classList.add("team__mem-detail");
        let githubLink = document.createElement("a");
        githubLink.href = mem.github;
        let githubIcon = document.createElement("i");
        githubIcon.classList.add("fab", "fa-github");
        githubLink.appendChild(githubIcon);
        github.appendChild(githubLink);
        contactDiv.appendChild(github);

        let website = document.createElement("p");
        website.classList.add("team__mem-detail");
        let websiteLink = document.createElement("a");
        websiteLink.href = mem.website;
        let websiteIcon = document.createElement("i");
        websiteIcon.classList.add("fa", "fa-link");
        websiteLink.appendChild(websiteIcon);
        website.appendChild(websiteLink);
        contactDiv.appendChild(website);

        detailsDiv.appendChild(contactDiv);

        memDiv.appendChild(detailsDiv);

        container.appendChild(memDiv);
    })
})