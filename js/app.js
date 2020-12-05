const app = document.querySelector("#app")

const linkTemplate = (e, i, a) => {
  return `<li><a href="${e.url}">
  <h2>${e.title}</h2>
  <p>${e.description}</p>
  <div class="mono">${e.url}</div>
  </a></li>`
}

const links = [
  {
    title: "COVID Alert NY",
    description: "New York State Contact Tracing App",
    url: "https://CovidAlertNY.health.ny.gov"
  },
  {
    title: "No 911 NYC",
    description: "Community Based Alternatives to the Police",
    url: "https://no911.nyc/",
  },
  {
    title: "Anti-Racism",
    description: "",
    url: "https://omglord.com/anti-racism"
  }
]
  .map(linkTemplate)
  .join("")

let personal_links = [  {
  title: "Portfolio",
  description: "",
  url: "https://zachkrall.com",
},
{
  title: "Futureland",
  description: "",
  url: "https://futureland.tv/zachkrall",
},
{
  title: "Instagram",
  description: "",
  url: "https://instagram.com/zachkrall",
},
{
  title: "Twitter",
  description: "",
  url: "https://twitter.com/zachkrall",
}]
.map(linkTemplate)
.join('')

let html = `
  ${app.innerHTML}
  <header>
    <h1>
      resources
    </h1>
  </header>
  <ul>
    ${links}
  </ul>
  <header>
    <h1>
      social
    </h1>
  </header>
  <ul>
    ${personal_links}
  </ul>
`

app.innerHTML = html



document.body.style.transition = `all ease 0.3s`

const setBackground = () => {
  document.body.style.background = `
    radial-gradient(
      circle at bottom, 
      hsla(${Math.random() * 360}, 94%, 30%, 1) 0%,
      hsla(${Math.random() * 360}, 94%, 30%, 1) 50%,
      hsla(${Math.random() * 360}, 94%, 30%, 1) 100%
    )
  `
}

setBackground();

setInterval(()=>{
  setBackground()
}, 2000)
