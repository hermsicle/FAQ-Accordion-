
let acc = document.getElementsByClassName('accordion')
let arrow = document.getElementsByClassName('arrow')


for(let i = 0; i < acc.length; i++) {
    acc[i].addEventListener('click', function(){

        this.classList.toggle('active')
        this.children[0].lastElementChild.classList.toggle('active')

        let panel = this.nextElementSibling

        if (panel.style.maxHeight) {
            panel.style.maxHeight = null
        } else {
            panel.style.maxHeight = panel.scrollHeight + 'px'
        }
    })
}
