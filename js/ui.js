class UI{
    languageList = document.getElementById('language')
    outputImage = document.getElementById('outputImage')
    outputLanguage = document.getElementById('outputLanguage')
    outputWord = document.getElementById('outputWord')

    switchLanguage(){
        this.outputImage.src = `/images/${this.languageList.value}.png`
        this.outputLanguage.textContent = this.languageList.options[this.languageList.selectedIndex].textContent
    }

    displayTranslateResult(res){
        this.outputWord.textContent = res
    }
}