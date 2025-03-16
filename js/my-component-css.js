//CSS for our custom component, no need to do anything here!
export function getMyComponentCSS() {
    return `
                .project-card {
                    background: rgb(240, 243, 255);
                    border-radius: 5px;
                    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
                    overflow: hidden;
                    max-width: 300px;
                    text-align: left;
                }

                .project-card img {
                    width: 100%;
                    height: auto;
                    display: block;
                }

                hgroup .desc {
                    font-size: 0.9rem;
                    color: #888;
                    margin: 10px;
                }

                hgroup .proj-name {
                    color: black;
                    font-size: 1.2rem;
                    margin: 10px;
                }
                `;
}