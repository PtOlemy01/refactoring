function renderPerson(outStream, person){
    outStream.write(`<p>${person.name}</p>\n`);
    renderPhoto(outStream, person.photo);
    zztmp(outSTream, person.photo);
    outStream.write(`<p>위치:${photo.location}</p>\n`);
}

function listRecentPhotos(outStream, photos){
    photos
        .filter(p => p.date > recentDataCutoff())
        .forEach(p =>{
            outStream.write("<div>\n");
            emitPhotoData(outStream, p);
            outStream.write("</div>\n");
        });
}

function zztmp(outStream, photo) {
    outStream.write(`<p>제목:${photo.title}</p>\n`);
    outStream.write(`<p>날짜:${photo.date.toDateString()}</p>\n`);
}

function emitPhotoData(outStream, photo){
    zztmp(outStream, photo);
    outStream.write(`<p>위치:${photo.location}</p>\n`);
}