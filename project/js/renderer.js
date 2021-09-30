let gallery = document.getElementById('gallery');

export function renderer(items) {
    for (let item of items) {
        if (item.type == 'img') {
            gallery.insertAdjacentHTML("beforeend", blockItemImg(item));

        } else if (item.type == 'audio') {
            gallery.insertAdjacentHTML("beforeend", blockItemAudio(item));

        } else if (item.type == 'video') {
            gallery.insertAdjacentHTML("beforeend", blockItemVideo(item));
        } else return
    }
}

function blockItemImg(item) {
    return `<div class="item_Viev"><img src = "${item.src}">
        <p class="item_Description">${item.name}</p>
        </div>`

}

function blockItemAudio(item) {
    return `<div class="item_Viev">
        <audio controls>
        <source src="${item.src}" type="audio/mp3">
        </audio>
        <p class="item_Description">${item.name}</p>
        </div>`
}

function blockItemVideo(item) {
    return `<div class="item_Viev">
        <video controls>
        <source src="${item.src}" type="audio/mp3">
        </video>
        <p class="item_Description">${item.name}</p>
        </div>`
}