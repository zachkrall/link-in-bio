const app = document.querySelector("#app")

const linkTemplate = (e, i, a) => {
  return `<li><a href="${e.url}" style="background-color:hsl(200,0%, ${
    i * 5 + 10
  }%);min-height:${100 / a.length}vh;">
  <h2>${e.title}</h2>
  <p>${e.description}</p>
  <div class="mono">${e.url}</div>
  </a></li>`
}

const links = [
  {
    title: "🆕 Help a black trans man raise money for safe housing",
    description: "",
    url: "https://4asafehaven.glitch.me/",
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
