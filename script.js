const noButton = document.querySelector('.no-button');
const yesButton = document.querySelector('.yes-button');
const gifContainer = document.querySelector('.gif');

noButton.addEventListener('click', () => {
    gifContainer.style.backgroundImage = "url('https://media.giphy.com/media/d3mlE7uhX8Kwoe3G4/giphy.gif')";
    noButton.style.display = 'none';
    yesButton.style.display = 'block';
});

yesButton.addEventListener('click', () => {
    window.location.href = 'yes.html';
});