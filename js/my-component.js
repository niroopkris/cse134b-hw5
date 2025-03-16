//TODO 3: import CSS function getMyComponentCSS()
import { getMyComponentCSS } from './my-component-css.js';

class MyProject extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        // HTML and inline style as template literals for easy modification
        const style = document.createElement('style');
        // TODO 4: Uncomment this once you successfully import the CSS function
        style.textContent = getMyComponentCSS();

        //change details to match a project (ex: name, short description, link to further reading)
        const projName = this.getAttribute('proj-name') || 'Unknown Name';
        const desc = this.getAttribute('desc') || 'Unknown Description';
        const aLink = this.getAttribute('a-link') || 'Unknown Link';
        const imageUrl = this.getAttribute('image-url') || '';

        console.log(projName)
        // Template for component content
        //TODO 1: set up the innerHTML of the component <project-card> as follows:
        // <project-card proj-name="{_}" desc="{_}" a-link="{_}" image-url="{_}">
        //      <style>
        //             { contents imported from getMyComponentCSS() }
        //      </style>
        //      <div class="simple-card">
        //         <hgroup>
        //              <h2 class="proj-name">${projName}</h2>
        //              <p class="desc">${desc}</p>
        //              <a class="desc" href=${aLink}>Further Reading</a>
        //         </hgroup>
        //         <picture>
        //              <img src="${imageUrl}" alt="${projName} Website Img">
        //         </picture>
        //     </div>
        // </project-card>
        // also have somewhere to append style to

        let myDiv = document.createElement('div');
        myDiv.classList.add("simple-card");
        myDiv.innerHTML = `
        <hgroup>
            <h2 class="proj-name">${projName}</h2> 
            <p class="desc">${desc}</p> 
            <a class="desc" href="${aLink}" target="_blank">Github</a> 
        </hgroup> 
        <picture>
            <img src="${imageUrl}" alt="${projName} Website Img">
        </picture>
        `;
        this.appendChild(style);
        this.appendChild(myDiv);

        //TODO 2: Uncomment this once you have the HTML set up
        this.querySelector('.simple-card').addEventListener('click', () => this.doSomething());

    }
    doSomething() {
        //TODO 6: set up const event as a new CustomEvent, which will bubble up to the DOM root
        // 02-event-delegation.html may help with this (see line 58) but you won't need message or detail
        //dont forget to add this.dispatchEvent(event) at the end
        const event = new CustomEvent('do-something', {
            bubbles: true
        });
        this.dispatchEvent(event);
        //this.dispatchEvent(event)
    }
}

// Define the custom element
console.log("custom element defined");
customElements.define('project-card', MyProject);