class Another {
    constructor (name, age, language, gender, host) {
        this.name = name
        this.age = age
        this.language = language
        this.gender = gender
        this.host = host
    }
    sayHi = () => {
        return 'Hi'        
    }
}

module.exports = Another