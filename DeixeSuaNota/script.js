const spans = document.querySelectorAll('span');
const form = document.querySelector('form');
const ratingState = document.querySelector('#ratingstate');
const afterSubmit = document.querySelector('.nodisplay');
const secondHeader = document.querySelector('.appreciate');

for (let span of spans) {
    span.addEventListener('click', function () {
        resetAllRatings();
        this.style.backgroundColor = 'hsl(217, 12%, 63%)';
        let div = document.querySelector('.ratingvalue');
        if (!div) {
            div = document.createElement('div');
            div.classList.add('ratingvalue');
            secondHeader.insertAdjacentElement('beforebegin', div);
        }
        div.innerText = `You selected ${this.innerText} out of 5`;

    })
}

function resetAllRatings() {
    for (let span of spans) {
        span.style.backgroundColor = ''
    }
}

form.addEventListener('submit', function (e) {
    e.preventDefault();
    ratingState.classList.toggle('nodisplay');
    afterSubmit.classList.toggle('thankyoustate');
})