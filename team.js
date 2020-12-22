import { teamJsonStr } from './data/teamData.js'

document.addEventListener("DOMContentLoaded", ()=>{
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