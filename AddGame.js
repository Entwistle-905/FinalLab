function sendData()
{
    let gameName = document.getElementById("gameName").value;
    gameName = gameName.trim();     // remove space interval
    console.log(gameName);

    let platform = document.getElementById("platform").value;
    platform = platform.trim();
    console.log(platform);
    
    if(gameName == null || gameName == "" || platform == null || platform == "")
    {
        console.log("Error Empty field. Enter again");
    }
    else{
        let retData = `{"name" : "${gameName}", "platform":"${platform}"}`;
        console.log(retData);

        fetch("https://lime-faithful-hippo.cyclic.app/api/games", {
            method: "POST",
            body: retData,
            headers:{"Content-type":"application/json; charset=UTF-8"}
        })
        .then((Response=>Response.json()))
        .then((jsonData=>{
            var divTag = document.getElementById("myDiv");
            divTag.innerHTML = `server Response : ${jsonData.message}`;
            console.log(jsonData);
        }))
        .catch((error)=> {
            console.log(`Error: ${error}`);
        });
    }                        
}
window.onload
{
    var data = '{"name" : "Pacman", "platform" : "Switch"}';
}