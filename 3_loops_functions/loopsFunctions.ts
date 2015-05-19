var sizes: Array<number> = [128, 256, 512];

for (var amount in sizes) {
    console.log(sizes[amount]);
}

sizes.forEach(function(amount: number): void {
    console.log(amount);
});



function f1() {
}

function f2(): void {
}

function f3(): () => void {
    return null;
}

function f4(p: string): void {
}

function f5(p?: string): void {
}

function f6(p1?: string, p2?: number, p3?: string, p4?: number): void {
}

function f7(p1: number, ... p2: number[]): void {
}
