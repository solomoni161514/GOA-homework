let students = ['Alice', 'Bob', 'Charlie'];
let grades = [85, 90, 78];

function addStudent(studentName, grade) {
    students.unshift(studentName);
    grades.unshift(grade);
    return { students, grades };
}

function removeLastStudent() {
    students.pop();
    grades.pop();
    return { students, grades };
}

function replaceGrade(index, newGrade) {
    grades.splice(index, 1, newGrade);
    return grades;
}

function updateGrades(newGrade) {
    grades.fill(newGrade);
    return grades;
}

console.log(addStudent('David', 88));
console.log(removeLastStudent());
console.log(replaceGrade(1, 95));
console.log(updateGrades(100));



let playlist = ['Song A', 'Song B', 'Song C', 'Song D'];

function addSong(songTitle) {
    playlist.unshift(songTitle);
    return playlist;
}

function removeLastSong() {
    playlist.pop();
    return playlist;
}

function moveSongs() {
    playlist.copyWithin(playlist.length, 0, 2);
    return playlist;
}

function combinePlaylists(secondPlaylist) {
    return playlist.concat(secondPlaylist);
}

console.log(addSong('Song E'));
console.log(removeLastSong());
console.log(moveSongs());
console.log(combinePlaylists(['Song F', 'Song G']));