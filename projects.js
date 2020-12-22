import { sprintsJsonStr, projectsJsonStr } from './data/projectsData.js'

document.addEventListener("DOMContentLoaded", ()=>{
    let sprintsJson = JSON.parse(sprintsJsonStr);

    console.log(sprintsJson)
    let projectsJson = JSON.parse(projectsJsonStr);

    let section = document.querySelector(".projects");
    console.log(section);

    sprintsJson.forEach((sprint, index) => {
        // dropdown container
        let sprintDropDown = document.createElement("div");
        sprintDropDown.classList.add("projects__dropdown");

        let sprintDropDownSelector = document.createElement("div");
        sprintDropDownSelector.classList.add("projects__dropdown-selector");

        // Dropdown checkbox
        let sprintDropDownInput = document.createElement("input");
        sprintDropDownInput.type = "checkbox";
        sprintDropDownInput.classList.add("projects__checkbox");
        sprintDropDownSelector.appendChild(sprintDropDownInput);

        let sprintDropDownArrow = document.createElement("div");
        sprintDropDownArrow.classList.add("projects__arrow-indicator");
        sprintDropDownSelector.appendChild(sprintDropDownArrow);

        // Dropdown title
        let sprintTitleContainer = document.createElement("div");
        let sprintHeading = document.createElement("p");
        sprintHeading.innerText = `Sprint ${index+1} - ${sprint.theme}`
        sprintHeading.classList.add("projects__sprint-heading");
        sprintTitleContainer.appendChild(sprintHeading);

        let sprintDescription = document.createElement("p");
        sprintDescription.innerText = `Engineering Focus: ${sprint.focus}`
        sprintDescription.classList.add("projects__sprint-description");
        sprintTitleContainer.appendChild(sprintDescription);

        sprintDropDownSelector.appendChild(sprintTitleContainer);

        // Projects Container
        let projectsGrid = document.createElement("div");
        projectsGrid.classList.add("projects__grid");

        sprint.projects.forEach(projectName => {
            let project = projectsJson[projectName];

            // Project container
            let projectContainer = document.createElement("div");
            projectContainer.classList.add("projects__project");

            // Image container
            let imageContainer = document.createElement("div");
            imageContainer.classList.add("projects__project-img-container");

            let image = document.createElement("img");
            image.src = project.photo;
            image.alt = projectName;
            image.className = "projects__project-img";
            imageContainer.appendChild(image);

            projectContainer.append(imageContainer);

            // Details container
            let projectDetails = document.createElement("div");
            projectDetails.classList.add("projects__project-details");

            // Project title
            let projectTitle = document.createElement("p");
            projectTitle.classList.add("projects__project-name");
            projectTitle.innerText += project.winner? `👑 ${project.name} 👑` : project.name;
            projectDetails.appendChild(projectTitle);

            // Project description
            let projectDescription = document.createElement("p");
            projectDescription.classList.add("projects__project-description");
            projectDescription.innerText = project.description;
            projectDetails.appendChild(projectDescription);

            // Project tech stack
            let projectStack = document.createElement("p");
            projectStack.classList.add("projects__project-description");
            projectStack.innerText = `💻 ${project.stack}`;
            projectDetails.appendChild(projectStack);

            // Project team
            let projectTeam = document.createElement("p");
            projectTeam.classList.add("projects__project-description");
            projectTeam.innerText = `🐤 ${project.team}`;
            projectDetails.appendChild(projectTeam);

            // Project links
            let projectLinks = document.createElement("div");
            projectLinks.classList.add("projects__project-links");

            let github = document.createElement("a");
            github.href = project.github;
            github.target = "_blank";
            github.rel = "noreferrer";
            let githubIcon = document.createElement("img");
            githubIcon.src = "https://img.icons8.com/ios/64/000000/github.png";
            githubIcon.alt = "Github link";
            github.appendChild(githubIcon);
            projectLinks.appendChild(github);

            let devpost = document.createElement("a");
            devpost.href = project.devpost;
            devpost.target = "_blank";
            devpost.rel = "noreferrer";
            let devpostIcon = document.createElement("img");
            devpostIcon.src = "https://img.icons8.com/ios/452/devpost.png";
            devpostIcon.alt = "Devpost link";
            devpost.appendChild(devpostIcon);
            projectLinks.appendChild(devpost);

            let link = document.createElement("a");
            link.href = project.link;
            link.target = "_blank";
            link.rel = "noreferrer";
            let linkIcon = document.createElement("img");
            linkIcon.src = "https://img.icons8.com/ios/96/000000/link--v1.png";
            linkIcon.alt = "Link to the project";
            link.appendChild(linkIcon);
            projectLinks.appendChild(link);

            projectDetails.appendChild(projectLinks);

            projectContainer.appendChild(projectDetails);

            projectsGrid.appendChild(projectContainer);
        })

        sprintDropDownSelector.appendChild(projectsGrid);

        sprintDropDown.appendChild(sprintDropDownSelector);

        section.append(sprintDropDown);
    })
})