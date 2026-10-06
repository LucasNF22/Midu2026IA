class DevJobsAvatar extends HTMLElement {
  constructor() {
    super();

    this.attachShadow({ mode: "open" });
  }

  createUrl(service, username) {
    return `https://unavatar.io/${service}/${username}`;
  }

  render() {
    const service = this.getAttribute("service") || "github";
    const username = this.getAttribute("username") || "lucas";
    const size = this.getAttribute("size") || "64";

    const url = this.createUrl(service, username);

    this.shadowRoot.innerHTML = `
        <style> 
            img{
                width: ${size}px;  
                height: ${size}px;    
                border-radius: 50%;
            }

        </style>

            <img 
                src="${url}" 
                class="avatar"             
            />
        `;
  }

  connectedCallback() {
    this.render();
  }
}

customElements.define("devjobs-avatar", DevJobsAvatar);
