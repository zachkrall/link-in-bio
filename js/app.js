const app = document.querySelector("#app")

const linkTemplate = (e, i) => {
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
    title: "Help a black trans man raise money for safe housing",
    description: "",
    url: "https://4asafehaven.glitch.me/",
  },
  {
    title: "Portfolio",
    description: "",
    url: "https://zachkrall.com",
  },
  {
    title: "Futureland: zachkrall",
    description: "Design sketches",
    url: "https://futureland.tv/zachkrall",
  },
  {
    title: "Zach Krall (@zachkrall) • Instagram",
    description: "",
    url: "https://instagram.com/zachkrall",
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
