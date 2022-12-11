function sendData()
{
    let player = document.getElementById("player").value;
    player = player.trim();     // remove space interval
    console.log(player);

    let score = document.getElementById("score").value;
    score = score.trim();
    console.log(score);
    console.log(typeof(score))

    let numScore = Number(score)
    console.log(typeof(numScore));

    let time = document.getElementById("time").value;
    time = time.trim();
    console.log(time);

    if (time == "")
    {
        time = null;
    }

    var timeIsValid = /^[0-9]+:[0-9]{2}:[0-9]{2}:[0-9]{2}$/;
    console.log("timeIsValid.test(time) :" + timeIsValid.test(time));


    if (player == null || player == "") {
        alert("Enter the name.");
    }
    else {
        if ((typeof(numScore) != "number" && score != null) || (timeIsValid.test(time) == false && time != null) || (time == null && score == null))
        {
            alert("Enter properly. Time format : XX:XX:XX:XX")
        }
        else
        {
            console.log("Correct!");

            var urlParams = new URLSearchParams(window.location.search);

            let retData;

            if (time == null)
            {
                retData = `{"gameID":"${urlParams.get("id")}", "player" : "${player}", "score":"${score}", "time":${time}}`;
            }
            else
            {
                retData = `{"gameID":"${urlParams.get("id")}", "player" : "${player}", "score":"${score}", "time":"${time}"}`;
            }

            console.log(retData);
            console.log(urlParams);
            console.log(`https://lime-faithful-hippo.cyclic.app/api/leaderboard/${urlParams.get("id")}`);

            fetch(`https://lime-faithful-hippo.cyclic.app/api/leaderboard/${urlParams.get("id")}`, {
                method: "POST",
                body: retData,
                headers:{"Content-type":"application/json; charset=UTF-8"}
            })
            .then((Response=>Response.json()))
            .then((jsonData=>{
                var divTag = document.getElementById("myDiv");
                divTag.innerHTML = `Server Response : ${jsonData.message}`;
                console.log(jsonData);
            }))
            .catch((error)=> {
                console.log(`Error: ${error}`);
            });

            console.log("execute");
        }
    }

}

window.onload
{
    var data = '{"gameID":"2", "player" : "tester", "score" : "1000", "time" : "00:00:00:00"}';
}

function moveIdPage()
{
    var urlParams = new URLSearchParams(window.location.search);
    location.href = `LeaderBoard.html?id=${urlParams.get("id")}`
}

