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
    callHost = () => {
        return `${this.host} can you her me?`
    }
}

module.exports = Another