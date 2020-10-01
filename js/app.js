const app = document.querySelector("#app")

const linkTemplate = (e, i, a) => {
  return `<li><a href="${e.url}" style="background-color:hsl(200,0%, ${
    i * 5 + 10
  }%);">
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
    title: "DEL 2020 Conference",
    description: "Digitally Engaged Learning Conference",
    url: "http://www.digitallyengagedlearning.net/2020/",
  },
  {
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
  },
]
  .map(linkTemplate)
  .join("")

let html = `
  ${app.innerHTML}
  <ul>
    ${links}
  </ul>
`

app.innerHTML = html
