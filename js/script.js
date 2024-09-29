// The Date in Header "todayIsDate"
const currentDate = new Date();
const options = {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    weekday: 'long',
};
todayIsDate.textContent = new Intl.DateTimeFormat("ru-RU", options).format(currentDate);

//Get the button:
upButton = document.getElementById("goTop");

// When the user scrolls down 40px from the top of the document, show the button
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        goTop.style.display = "block";
    } else {
        goTop.style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function goTopFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

// Send FORM DATA
const form = document.getElementById('collector');
form.addEventListener('submit', e => {
    e.preventDefault();
    fetch(form.action, {
        method: 'POST',
        body: new FormData(document.getElementById('collector')),
    }).then(response => response.json()).then((html) => {
        form.reset();
        // window.open('feedback.html', '_blank');
        window.open('https://mnezvonil.ru/feedback.html', '_self');

    });
});

// Modal
const mediaQuery = window.matchMedia("(min-width: 64em)");

if (mediaQuery.matches) {

    const modalWindow = document.getElementById('modal');
    const showModalTimeOut = setTimeout(showModalWindow, 7000);
    const closeModalTimeOut = setTimeout(closeModalWindow, 17000);

    function showModalWindow() {
        document.getElementById("modal").classList.add("show-modal");
    }

    function closeModalWindow() {
        document.getElementById("modal").classList.add("hidden");
    }

    modalExit.addEventListener("click", function () {
        modal.classList.add('hidden');
    });

    // alert("The screen is equals greater than 1024");
} else {
    modal.classList.add('hidden');
}


// To hide #hash tags in an address string of a browser
document.addEventListener('DOMContentLoaded', function () {
    var addPhoneNumberButton = document.querySelector('.btn-plus');

    addPhoneNumberButton.addEventListener('click', function (event) {
        event.preventDefault(); // This prevents the default behavior of the anchor element

        // Now, you can manually scroll to the target element
        var addPhoneNumberSection = document.getElementById('addPhoneNumber');
        addPhoneNumberSection.scrollIntoView({ behavior: 'smooth' });
    });
});