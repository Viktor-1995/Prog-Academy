// function Auto(brend, model, year, wincode) {
//     this.brend = brend;
//     this.model = model;
//     this.year = year;
//     this.wincode = wincode;
// }
// Auto.prototype.log = function () {
//     console.log(`${this.brend} ${this.model} of  ${this.year} year`);
// };
// Auto.prototype.checkWin = function () {
//     let winlength = this.wincode.toString();
//     winlength.length >= 16
//         ? console.log(`win check for ${this.model} ` + true)
//         : console.log(`win check for ${this.model} ` + false);
// };

// let tesla = new Auto("tesla", "model S", 2015, 123456780222123456);

// tesla.checkWin();
// tesla.log();

// function Auto_Fuel(brend, model, year, wincode, engine, consumption) {
//     this.brend = brend;
//     this.model = model;
//     this.year = year;
//     this.wincode = wincode;
//     this.engine = engine;
//     this.consumption = consumption;
// }
// Auto_Fuel.prototype = Object.create(Auto.prototype);
// Auto_Fuel.prototype.showFuelConsumption = function () {
//     console.log(`fuel consumption for ${this.model} is ${this.consumption}`);
// };
// let passat = new Auto_Fuel("VW", "Passat", 2015, 123456780, 2, 5);

// passat.checkWin();
// passat.log();
// passat.showFuelConsumption();

// function Auto_Electric(
//     brend,
//     model,
//     year,
//     wincode,
//     engine,
//     consumption,
//     batteryCapacity
// ) {
//     this.brend = brend;
//     this.model = model;
//     this.year = year;
//     this.wincode = wincode;
//     this.engine = engine;
//     this.consumption = consumption;
//     this.batteryCapacity = batteryCapacity;
// }
// Auto_Electric.prototype = Object.create(Auto.prototype);
// Auto_Electric.prototype.showBatteryConfig = function () {
//     console.log(`Batteru Capacity - ` + this.batteryCapacity);
// };
// let tesla2 = new Auto_Electric(
//     "tesla2",
//     "model X",
//     2015,
//     123456780222123456,
//     0,
//     0,
//     100
// );

// tesla2.checkWin();
// tesla2.log();
// tesla2.showBatteryConfig();

// ------------------------------------------------------------------------------------------------
class AutoClass {
    constructor(brend, model, year, wincode) {
        this.brend = brend;
        this.model = model;
        this.year = year;
        this.wincode = wincode;
    }
    checkWin() {
        let winlength = this.wincode.toString();
        winlength.length >= 16
            ? console.log(`win check for ${this.model} ` + true)
            : console.log(`win check for ${this.model} ` + false);
    }
    log() {
        console.log(`${this.brend} ${this.model} of  ${this.year} year`);
    }
}
let teslaX = new AutoClass("Tesla", "model X", 2017, "winCode123456789");
teslaX.log();
teslaX.checkWin();

class AutoClass_Fuel extends AutoClass {
    constructor(brend, model, year, wincode, engine, consumption) {
        super();
        this.brend = brend;
        this.model = model;
        this.year = year;
        this.wincode = wincode;
        this.engine = engine;
        this.consumption = consumption;
    }
    showFuelConsumption() {
        console.log(
            `fuel consumption for ${this.model} is ${this.consumption}`
        );
    }
}
let golf = new AutoClass_Fuel(
    "VW",
    "Golf",
    2016,
    "wertyuiop[fghjk46",
    "2.0L",
    "5 l/100km"
);
golf.log();
golf.checkWin();
golf.showFuelConsumption();

class AutoClass_Electric extends AutoClass {
    constructor(
        brend,
        model,
        year,
        wincode,
        engine,
        consumption,
        batteryCapacity
    ) {
        super();
        this.brend = brend;
        this.model = model;
        this.year = year;
        this.wincode = wincode;
        this.engine = engine;
        this.consumption = consumption;
        this.batteryCapacity = batteryCapacity;
    }
    showBatteryConfig() {
        console.log(`Batteru Capacity - ` + this.batteryCapacity);
    }
}

let tesla22 = new AutoClass_Electric(
    "tesla22",
    "model X",
    2015,
    "winCodeCHeck16",
    0,
    0,
    "100 kW/hr"
);

tesla22.checkWin();
tesla22.log();
tesla22.showBatteryConfig();
