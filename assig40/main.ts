// Exercise 40: Album
function make_album(artist: string, title: string, tracks?: number): {[key: string]: string | number} {
    let album: {[key: string]: string | number} = {
        artist: artist,
        title: title
    };
    if (tracks !== undefined) {
        album.tracks = tracks;
    }
    return album;
}

let album1 = make_album("Ali Zafar", "Album1", 10);
let album2 = make_album("Rahat fateh", "Album2");
let album3 = make_album("Atif Aslam", "Album3", 15);

console.log(album1);
console.log(album2);
console.log(album3);
