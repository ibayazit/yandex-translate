eventListeners()

function eventListeners(){
    document.getElementById('translate-form').addEventListener('submit', translateWord)
    document.getElementById('language').addEventListener('change', switchLanguage)
}

const translate = new Translate
const ui = new UI

function translateWord(e){
    const formData = new FormData(e.target)
    console.log(formData.get('word'))
    translate.execute(formData.get('word'), formData.get('language'))
        .then(res => {
            ui.displayTranslateResult(res)
        })
        .catch(err => console.log(err))

    e.preventDefault()
}

function switchLanguage(){
    ui.switchLanguage()
}