var homeDistFromPit = document.getElementById("Dist From Pit")
var homeBoard = document.getElementById("Board")
var homeMark = document.getElementById("Mark")
var awayDistFromPit = document.getElementById("Dist From Pit2")
var awayBoard = document.getElementById("Board2")
var newMarkText = document.getElementById('newMark')

function animate()
{
    requestAnimationFrame(animate)
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
    

