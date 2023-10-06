



class Player {
    name: string

    constructor(name: string){
        this.name = name
    }

    speak() {
        return "Hello, "+ this.name
    }
}

let player = new Player("Nyriq")

console.log(player.speak, "Hello")
console.log("hello")