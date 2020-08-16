const links = [
  {
    title: "Help a black trans man raise money for safe housing",
    url: "https://4asafehaven.glitch.me/",
  },
  {
    title: "zachkrall.com",
    url: "https://zachkrall.com",
  },
]

const app = document.querySelector("#app")

let html =
  app.innerHTML +
  `<ul>${links
    .map((i) => {
      return `<li><a href="${i.url}">${i.title}</a></li>`
    })
    .join("")}</ul>`

app.innerHTML = html
