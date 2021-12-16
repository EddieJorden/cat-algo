class Cat {
    constructor(name, pounds, foodPerDay) {
        // user input
        this.state = {
            name: name,
            poundsOfCat: pounds,
            cansPerDay: foodPerDay,
            caloriesPerCan: 78,
            mealsPerDay: 3,
            numOfCans: null,
            leftOverNeeded: null,
            // 24 to 35 calories a day per pound, to keep cats at a normal, healthy weight
            caloriesNeededPerPoundOfCat: 30,
            catIsFat: null,
        }
    }
    logState() {
        console.log('this.state', this.state)
    }
    isTheCatFat() {
        if (this.state.caleriesConsumed > this.state.caloriesNeededPerPoundOfCat * this.state.poundsOfCat) {
            this.state.catIsFat = true
        } else this.state.catIsFat = false
    }
    moreOrLessFood() {
        if (this.state.catIsFat === true) {
            this.state.moreFood = true
        }else this.state.moreFood = false
    } 
    // caloriesNeeded() {
    //     this.state.caloriesNeeded =  this.state.poundsOfCat * this.state.caleriesNeededPerPoundOfCat
    // }

    cansOfFood() {
        const numOfCans = Math.floor((this.state.caloriesNeededPerPoundOfCat * this.state.poundsOfCat) / this.state.caloriesPerCan)
        const leftOverNeeded = Math.floor((this.state.caloriesNeededPerPoundOfCat * this.state.poundsOfCat) % this.state.caloriesPerCan)
        this.state.numOfCans = numOfCans
        this.state.leftOverNeeded = leftOverNeeded
    }

    outPut() {
        this.cansOfFood()
        this.isTheCatFat()
        if(this.state.catIsFat) {
            return `${this.state.name} is fat, ${this.state.name} should eat ${this.state.numOfCans}.${this.state.leftOverNeeded}cans less per day. `
        } else return `${this.state.name} is hungry, ${this.state.name} needs to eat ${this.state.numOfCans}.${this.state.leftOverNeeded} cans per day`
    }
}
const name = 'Benny'
const pounds = 12
const foodPerDay = 3

const benny = new Cat('Benny', 12, 3)

console.log('output', benny.outPut())