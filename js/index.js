$(document).ready(function () {

    const vehicelsItems = document.querySelector(".vehicels-items"); // **
    const vehicelsButton = document.querySelector(".vehicelsLI");
    const ShoppingToolsItems = document.querySelector(".ShoppingTools-items");
    const ShoppingToolsButton = document.querySelector(".shoppingtoolsLI"); // **
    const InventoryItems = document.querySelector(".Inventory-items");
    const InventoryButton = document.querySelector(".inventoryLI"); // **
    const submenu = document.querySelector(".submenu"); // **
    const submenuButton = document.querySelector(".submenuIcon");

    vehicelsButton.addEventListener("click", function () {
        vehicelsItems.classList.toggle("hidden-height");
        ShoppingToolsItems.classList.add("hidden-height");
        InventoryItems.classList.add("hidden-height");
        submenu.classList.add("hidden-height");
    })

    ShoppingToolsButton.addEventListener("click", function () {
        ShoppingToolsItems.classList.toggle("hidden-height");
        vehicelsItems.classList.add("hidden-height");
        InventoryItems.classList.add("hidden-height");
        submenu.classList.add("hidden-height");
    })

    InventoryButton.addEventListener("click", function () {
        InventoryItems.classList.toggle("hidden-height");
        ShoppingToolsItems.classList.add("hidden-height");
        vehicelsItems.classList.add("hidden-height");
        submenu.classList.add("hidden-height");
    })

    // $(window).resize(function () {
    //     if (window.innerWidth < 767) {
    //         ShoppingToolsItems.classList.add("hidden-height");
    //         InventoryItems.classList.add("hidden-height");
    //         vehicelsItems.classList.add("hidden-height");
    //     }
    // });

    submenuButton.addEventListener("click", function () {
        submenu.classList.toggle("hidden-height");
        ShoppingToolsItems.classList.add("hidden-height");
        InventoryItems.classList.add("hidden-height");
        vehicelsItems.classList.add("hidden-height");
    })

    const swiper = new Swiper('.swiper', {

        loop: true,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },

    });

    const headerPart1 = document.querySelectorAll(".header-part1");
    const UlPart1 = document.querySelectorAll(".footerULitem");

    headerPart1[0].addEventListener("click", function () {
        UlPart1[0].classList.toggle("d-none");
    });
    headerPart1[1].addEventListener("click", function () {
        UlPart1[1].classList.toggle("d-none");
    })
    headerPart1[2].addEventListener("click", function () {
        UlPart1[2].classList.toggle("d-none");
    })
    headerPart1[3].addEventListener("click", function () {
        UlPart1[3].classList.toggle("d-none");
    })
    headerPart1[4].addEventListener("click", function () {
        UlPart1[4].classList.toggle("d-none");
    })
    headerPart1[5].addEventListener("click", function () {
        UlPart1[5].classList.toggle("d-none");
    })

});

const videoContent = document.querySelector("video");
const PlayPauseButton = document.querySelector(".ad-button-play-pause");

let activeCodePlayPause = true;
PlayPauseButton.addEventListener("click", function () {
    PlayPauseButton.classList.toggle("background-color-special");
    if (activeCodePlayPause == true) {
        videoContent.play();
        activeCodePlayPause = false;
    } else if (activeCodePlayPause == false) {
        videoContent.pause();
        activeCodePlayPause = true;
    }
});

const buttonAudio = document.querySelector(".ad-button-audio");
let activeCodeAudio = true;

buttonAudio.addEventListener("click", function () {
    buttonAudio.classList.toggle("background-color-special");
    if (activeCodeAudio == true) {
        videoContent.muted = true;
        activeCodeAudio = false;
    } else if (activeCodeAudio == false) {
        videoContent.muted = false;
        activeCodeAudio = true;
    }
})

const buttonDocument = document.querySelector(".ad-button-document");

buttonDocument.addEventListener("click", function () {
    buttonDocument.classList.toggle("background-color-special");
})
