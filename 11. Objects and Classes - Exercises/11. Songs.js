class Song{
    constructor(typeList, name, time){
        this.typeList = typeList;
        this.name = name;
        this.time = time;
    }


}

function songs(input) {
    let songs = [];
    let n = input[0];
    for (let i = 1; i <= n; i++) {
        let data = input[i].split("_");
        let type = data[0];
        let name = data[1];
        let time = parseFloat(data[2]);
        let song = new Song(type, name, time);
        songs.push(song);
    }
    if(input[n + 1] === 'all'){
        for (const song of songs) {
            console.log(song.name);
        }
    }else{
        for (const song of songs) {
            if(song.typeList === input[n + 1])
            console.log(song.name);
        }
    }
}


songs([4, 
    'favourite_DownTown_3:14', 
    'listenLater_Andalouse_3:24', 
    'favourite_In To The Night_3:58', 
    'favourite_Live It Up_3:48', 
    'listenLater'] 
    
    );

