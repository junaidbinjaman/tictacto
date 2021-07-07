const buuttons = document.querySelectorAll('#button')

console.log(buuttons)
let test = false



buuttons.forEach(button => {
    button.addEventListener('click', (e) => {

        test = !test
        let value;
        if (test) {
            value = 'X'
        } else {
            value = '0'
        }
        e.target.innerText = value;

        const currentDiv = document.querySelector(`.${e.target.className}`)
        currentDiv.style.pointerEvents = 'none'
    })
})