window.onload = (event) => {
    console.log("page is fully loaded.");

    getGame();

}

function getGame()
{
    // make a call to the
    fetch("https://lime-faithful-hippo.cyclic.app/api/games")
    .then(response => response.json())
    .then(game => {
        console.log(game);
    var tableCode = "<table>\
    <tr>\
    <th>Games</th> <th>Platforms</th>\
    </tr>"

    // forEach : work on array
    //`` ${} : put something into {}
    game.forEach (function(currentGame){
        tableCode += `<tr><td><a href="Leaderboard.html?id=${currentGame.id}">${currentGame.GameName}</a></td>
        \<td>${currentGame.Platform}</td></tr>`;
    });

    tableCode += "</table>"

    document.getElementById("gameTable").innerHTML = tableCode;

    })
}
