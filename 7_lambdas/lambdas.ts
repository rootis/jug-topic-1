class JavaUsersGroup {

    private city: string;

    constructor(city: string) {
        this.city = city;
    }

    public printTitle1(): void {
        console.log(this.city + " JUG");
    }

    public printTitle2 = (): void => {
        console.log(this.city + " JUG");
    };

}

var jug: JavaUsersGroup = new JavaUsersGroup("Kaunas");

jug.printTitle1();
jug.printTitle2();

/*
console.log("---");

var ref1: () => void = jug.printTitle1;
var ref2: () => void = jug.printTitle2;

ref1();
ref2();
*/
