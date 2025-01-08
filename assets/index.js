const regex = /^[0-9a-fA-F]{24}$/

const urlParams = new URLSearchParams(window.location.search)
const gameId = urlParams.get("gameId")
const requestId = urlParams.get("requestId")

if (gameId.match(regex)) {
  document.getElementById("localLink").href = "assassinfun://?gameId=" + gameId
  document.getElementById("found").style.display = "block"
  document.getElementById("error").style.display = "none"
} else if (requestId.match(regex)) {
  document.getElementById("localLink").href =
    "assassinfun://?requestId=" + requestId
  document.getElementById("found").style.display = "block"
  document.getElementById("error").style.display = "none"
} else {
  document.getElementById("found").style.display = "none"
  document.getElementById("error").style.display = "block"
}
