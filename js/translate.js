class Translate{
    apiKey = 'YOUR YANDEX TRANSLATE API KEY'

    execute(word,lang){
        const url = `https://translate.yandex.net/api/v1.5/tr.json/translate?key=${this.apiKey}&text=${word}&lang=${lang}`
        return new Promise((resolve, reject) => {
            fetch(url)
                .then(res => res.json())
                .then(res => resolve(res.text[0]))
                .catch(err => reject(err))
        })

    }
}