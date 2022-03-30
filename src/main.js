const productCards = document.getElementsByClassName("product-card");
const closeModal = document.getElementById("close-modal");
const modalContainer = document.getElementById("modal-container");
const modaltext = document.getElementById("modal-text");
const modalCards = document.getElementsByClassName("modal-cards");

let arregloprueba = [modalCards[0], modalCards[1], modalCards[2]];

productCards[0].addEventListener("click", () => {
    modalContainer.classList.remove("hidden");
    modaltext.innerHTML = "Mouse Products";
    changeImages("mouse");
});

productCards[1].addEventListener("click", () => {
    modalContainer.classList.remove("hidden");
    modaltext.innerHTML = "Keyboard Products";
    changeImages("keyboard");
});

productCards[2].addEventListener("click", () => {
    modalContainer.classList.remove("hidden");
    modaltext.innerHTML = "Audio Products";
    changeImages("audio");
});

closeModal.addEventListener("click", () => {
    modalContainer.classList.add("hidden");
});

modalCards[0].addEventListener("click", funcionprueba);
modalCards[1].addEventListener("click", funcionprueba);
modalCards[2].addEventListener("click", funcionprueba);

function funcionprueba() {
    if (this.classList.contains("modal__first")) {
        arregloprueba[0].classList.remove("modal__first");
        arregloprueba[0].classList.add("modal__second");

        arregloprueba[1].classList.remove("modal__second");
        arregloprueba[1].classList.add("modal__third");

        arregloprueba[2].classList.remove("modal__third");
        arregloprueba[2].classList.add("modal__first");

        arregloprueba.unshift(arregloprueba[2]);
        arregloprueba.pop(arregloprueba[3]);
    }

    if (this.classList.contains("modal__third")) {
        arregloprueba[0].classList.remove("modal__first");
        arregloprueba[0].classList.add("modal__third");

        arregloprueba[1].classList.remove("modal__second");
        arregloprueba[1].classList.add("modal__first");

        arregloprueba[2].classList.remove("modal__third");
        arregloprueba[2].classList.add("modal__second");

        arregloprueba.push(arregloprueba[0]);
        arregloprueba.shift(arregloprueba[0]);
    }
}

function changeImages(currentProduct) {
    modalCards[0].classList.remove(
        "keyboard__image-1",
        "audio__image-1",
        "mouse__image-1"
    );
    modalCards[0].classList.add(`${currentProduct}__image-1`);

    modalCards[1].classList.remove(
        "keyboard__image-2",
        "audio__image-2",
        "mouse__image-2"
    );
    modalCards[1].classList.add(`${currentProduct}__image-2`);

    modalCards[2].classList.remove(
        "keyboard__image-3",
        "audio__image-3",
        "mouse__image-3"
    );
    modalCards[2].classList.add(`${currentProduct}__image-3`);
}
