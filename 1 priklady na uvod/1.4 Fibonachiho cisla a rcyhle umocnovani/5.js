class RootFive {
    constructor(a, b) {
        this.a = a;
        this.b = b;
    }

    static add(x, y) {
        return new RootFive(x.a + y.a, x.b + y.b);
    }

    static subtract(x, y) {
        return new RootFive(x.a - y.a, x.b - y.b);
    }

    static multiply(x, y) {
        return new RootFive(x.a * y.a + 5 * x.b * y.b, x.a * y.b + x.b * y.a);
    }

    static divide(x, y) {
        const denominator = y.a * y.a - 5 * y.b * y.b;
        return new RootFive((x.a * y.a - 5 * x.b * y.b) / denominator, (x.b * y.a - x.a * y.b) / denominator);
    }

    static power(x, n) {
        if (n === 0) {
            return new RootFive(1, 0);
        }
        const t = RootFive.power(x, Math.floor(n / 2));
        return RootFive.multiply(RootFive.multiply(t, t), n % 2 === 0 ? new RootFive(1, 0) : x);
    }
}

function magicFormula(n) {
    return RootFive.multiply(new RootFive(0, 1 / 5), RootFive.subtract(RootFive.power(new RootFive(1 / 2, 1 / 2), n), RootFive.power(new RootFive(1 / 2, -1 / 2), n))).a;
}

// for (let i = 0; i < 10; i++) {
//     console.log(i, magicFormula(i));
// }

console.log(magicFormula(1200))