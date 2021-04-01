class Car {
    #brand;
    #model;
    #yearOfManufacturing;
    #maxSpeed;
    #maxFuelVolume;
    #fuelConsumption;
    #currentFuelVolume = 0;
    #isStarted = false;
    #mileage= 0;
    
    set brand(arg) {
    if (typeof arg === "string" || arg instanceof String) {
    if (arg.length > 0 && arg.length <= 50) return this.#brand = arg;
    else throw new Error('Incorrect brand name length')
    }
    else throw new Error('Not a string error')
    
    }
    
    get brand() {
    return this.#brand
    }
    
    set model(arg) {
    if (typeof arg === "string" || arg instanceof String) {
    if (arg.length > 0 && arg.length <= 50) return this.#model = arg;
    else throw new Error('Incorrect brand name length')
    
    }
    else throw new Error('Not a string error')
    
    }
    
    get model() {
    return this.#model;
    }
    
    set yearOfManufacturing(arg) {
    let year = new Date()
    if (arg>=1900 && arg<=year.getFullYear()) this.#yearOfManufacturing = arg;
    
    else throw new Error('Incorrect year error!')
    
    }
    get yearOfManufacturing() {
    return this.#yearOfManufacturing;
    }
    
    set maxSpeed(arg) {
    if (arg>=100 && arg<=300) this.#maxSpeed = arg
    else throw new Error('Max.speed must be more than 100 or less than 300 km\h!')
    }
    
    get maxSpeed() {
    return this.#maxSpeed;
    }
    
    set maxFuelVolume(arg) {
    if (arg>=5 && arg<=20) this.#maxFuelVolume = arg
    else throw new Error('fuel value err')
    }
    get maxFuelVolume() {
    return this.#maxFuelVolume;
    }
    
    set fuelConsumption(value) {
    this.#fuelConsumption = value;
    }
    
    get fuelConsumption() {
    return this.#fuelConsumption;
    }
    
    get currentFuelVolume() {
    return this.#currentFuelVolume;
    }
    
    get isStarted() {
    return this.#isStarted;
    }
    
    get mileage() {
    return this.#mileage;
    }
    
    start(){
    if(!this.isStarted) this.#isStarted = true;
    else throw new Error('Машина уже заведена')
    }
    
    shutDownEngine(){
    if(this.isStarted) this.#isStarted = false
    else throw new Error('Машина ещё не заведена')
    }
    
    fillUpGasTank(arg){
    if(typeof arg === 'number'){
    if(arg>0){
    if(arg+this.#currentFuelVolume<=this.#maxFuelVolume) this.#currentFuelVolume =+ arg
    else throw new Error('Топливный бак переполнен')
    }
    else throw new Error('Неверное количество топлива для заправки')
    }
    else throw new Error('Неверное количество топлива для заправки')
    }
    
    drive(speed, time){
    if(typeof speed === 'number'&&!speed<=0){
    if(typeof time === 'number'&&!time<=0){
    if(speed<=this.#maxSpeed){
    if(this.#isStarted){
    const plannedDistance = speed * time;
    const calculatedDistance = this.currentFuelVolume/(this.#fuelConsumption/100)
    if(plannedDistance<=calculatedDistance){
    this.#currentFuelVolume -= plannedDistance*(this.#fuelConsumption/100)
    this.#mileage += plannedDistance;
    }
    else throw new Error(`Недостаточно топлива`)
    
    }
    else throw new Error('Машина должна быть заведена, чтобы ехать')
    }
    else throw new Error(`Машина не может ехать так быстро`)
    }
    else throw new Error('Неверное количество часов')
    }
    else throw new Error('Неверная скорость')
    }
    
    }
    
    
    module.exports = Car;

    