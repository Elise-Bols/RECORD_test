let albums = [];

function addAlbum() {
    const title = document.getElementById('album-title').value;
    const artist = document.getElementById('album-artist').value;
    const genre = document.getElementById('album-genre').value;
    const rating = document.getElementById('album-rating').value;
    const year = document.getElementById('album-year').value;

    const album = {
        title,
        artist,
        genre,
        rating,
        year
    };

    albums.push(album);
    displayAlbums();
    clearForm();
}

function displayAlbums() {
    const albumsList = document.getElementById('albums-list');
    albumsList.innerHTML = '';
    albums.forEach((album, index) => {
        albumsList.innerHTML += `
            <div class="album">
                <h2>${album.title}</h2>
                <p>Artiste: ${album.artist}</p>
                <p>Genre: ${album.genre}</p>
                <p>Note: ${album.rating}</p>
                <p>Année de sortie: ${album.year}</p>
                <button onclick="deleteAlbum(${index})">Supprimer</button>
            </div>
        `;
    });
}

function clearForm() {
    document.getElementById('album-title').value = '';
    document.getElementById('album-artist').value = '';
    document.getElementById('album-genre').value = '';
    document.getElementById('album-rating').value = '';
    document.getElementById('album-year').value = '';
}

function deleteAlbum(index) {
    albums.splice(index, 1);
    displayAlbums();
}