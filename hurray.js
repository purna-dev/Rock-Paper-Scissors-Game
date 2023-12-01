
function rules() {
    const rules = document.querySelector('.rules button');

    rules.addEventListener('click', (e) => {

        if (e) {
            document.querySelector('.rules .rule_box').style.display = 'block'
        } else {
            document.querySelector('.rules .rule_box').style.display = 'none'

        }

    })

    document.querySelector('.rules .rule_box .close').onclick = () => {
        document.querySelector('.rules .rule_box').style.display = 'none'

    }

}
rules();


document.querySelector('.hurray button').onclick = ()=>{
    window.location.href = 'index.html'
}