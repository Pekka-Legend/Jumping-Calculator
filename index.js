var homeDistFromPit = document.getElementById("Dist From Pit")
var homeBoard = document.getElementById("Board")
var homeMark = document.getElementById("Mark")
var awayDistFromPit = document.getElementById("Dist From Pit2")
var awayBoard = document.getElementById("Board2")
var newMarkText = document.getElementById('newMark')

if (localStorage.getItem("homeDistFromPit") != null)
{
    homeDistFromPit.value = localStorage.getItem("homeDistFromPit")
}
if (localStorage.getItem("homeBoard") != null)
{
    homeBoard.value = localStorage.getItem("homeBoard")
}
if (localStorage.getItem("homeMark") != null)
{
    homeMark.value = localStorage.getItem("homeMark")
}
if (localStorage.getItem("awayDistFromPit") != null)
{
    awayDistFromPit.value = localStorage.getItem("awayDistFromPit")
}
if (localStorage.getItem("awayBoard") != null)
{
    awayBoard.value = localStorage.getItem("awayBoard")
}

function animate()
{
    requestAnimationFrame(animate)
    localStorage.setItem("homeDistFromPit", homeDistFromPit.value)
    localStorage.setItem("homeBoard", homeBoard.value)
    localStorage.setItem("homeMark", homeMark.value)
    localStorage.setItem("awayDistFromPit", awayDistFromPit.value)
    localStorage.setItem("awayBoard", awayBoard.value)
    if (homeDistFromPit.value == "" || homeBoard.value == "" || homeMark.value == "" || awayDistFromPit.value == "" || awayBoard.value == "")
    {
        return
    }
    else
    {
        newMarkText.innerText = (parseInt(awayBoard.value) + ((parseInt(homeMark.value) + parseInt(homeDistFromPit.value)) - parseInt(homeBoard.value))) - parseInt(awayDistFromPit.value)
    }
}
animate()
    

