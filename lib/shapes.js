class Circle {
    constructor(color) {
        this.color = color;
    }
    render() {
        return `<circle cx="110" cy="110" r="80" fill="${this.color}"/>`
    }
}

class Triangle {
    constructor(color) {
        this.color = color;
    }
    render() {
        return `<polygon points="110,3 220,182 5,182" fill="${this.color}"/>`
    }
}

class Square {
    constructor(color) {
        this.color = color;
    }
    render() {
        return `<rect width="200" height="200" x="10" y="10" fill="${this.color}"/> `
    }
}

module.exports = { Circle, Triangle, Square }



