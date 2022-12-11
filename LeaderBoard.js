window.onload = (event) => {
    console.log("page is fully loaded.");

    getGame();

}

function getGame()
{
    // make a variable to get the id
    var urlParams = new URLSearchParams(window.location.search);
    fetch(`https://lime-faithful-hippo.cyclic.app/api/leaderboard/${urlParams.get("id")}`)
    .then(response => response.json())
    .then(leader => {
        console.log(leader);
    var LeaderCode = "<table>\
    <tr>\
    <th>Player</th> <th>Score</th> <th>Time</th>\
    </tr>"

    
    // forEach : work on array
    //`` ${} : put something into {}
    leader.Leaderboard.forEach (function(currentGame){
        LeaderCode += `<tr><td>${currentGame.Player}</td>
        \<td>${currentGame.Score}</td> <td>${currentGame.Time}</td></tr>`;
    });
    

    LeaderCode += "</table>"

    document.getElementById("gameTable2").innerHTML = LeaderCode;

    })
}

function moveIdPage()
{
    var urlParams = new URLSearchParams(window.location.search);
    location.href = `AddLeaderboard.html?id=${urlParams.get("id")}`
}
