function renderPerson(outStream, person){
    const result = [];
    result.push(`<p>${person.name}</p>`);
    result.push(renderPhoto(person.photo));
    result.push(`<p>제목:${person.photo.title}</p>`);
    result.push(emitPhotoData(person.photo));
    return result.join("\n");
}