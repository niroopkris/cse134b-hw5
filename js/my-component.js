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
        //TODO 1: set up the innerHTML of the component as follows:
        // <div class="simple-card">
        //         <hgroup>
        //         <h2 class="proj-name">${projName}</h2>
        //         <p class="desc">${desc}</p>
        //         <a class="desc" href=${aLink}>Further Reading</a>
        //         </hgroup>
        //         <img src="${imageUrl}" alt="${projName} Website">
        //     </div>
        // also have somewhere to append style to

        let myDiv = document.createElement('div');
        myDiv.classList.add("project-card");
        //myDiv.innerHTML = '<hgroup> <h2 class="projName">${projName}</h2> <p class="desc">${desc}</p> <a class="desc" href=${aLink}>Further Reading</a> </hgroup> <img src="${imageUrl}" alt="${projName} Website">'; 
        myDiv.innerHTML = `
        <hgroup>
            <h2 class="proj-name">${projName}</h2> 
            <p class="desc">${desc}</p> 
            <a class="desc" href="${aLink}" target="_blank">Github</a> 
        </hgroup> 
        <img src="${imageUrl}" alt="${projName} Website">
        `;

        this.appendChild(style);
        this.appendChild(myDiv);

        //TODO 2: Uncomment this once you have the HTML set up
        this.querySelector('.project-card').addEventListener('click', () => this.doSomething());

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
customElements.define('my-project', MyProject);