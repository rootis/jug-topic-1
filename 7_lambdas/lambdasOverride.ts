interface UsersGroup {

    getTitle(): string;

}

class JavaUsersGroup implements UsersGroup {

    protected language: string;
    private version: number;

    constructor(language: string, version: number) {
        this.language = language;
        this.version = version;
    }

    public getTitle = (): string => {
        return this.getLanguage() + " v" + this.version + " Users Group";
    };

    public getLanguage = (): string => {
        return this.language;
    };

}

class CityJUG extends JavaUsersGroup {

    private city: string;

    constructor(city: string, language: string, version: number) {
        super(language, version);
        this.city = city;
    }

    public getLanguage = (): string => {
        return this.city + ' ' + this.language;
    }

}

var jug: UsersGroup = new JavaUsersGroup("Java", 1.8);
var cityJug: UsersGroup = new CityJUG("Kaunas", "Java", 1.8);

console.log(jug.getTitle());
console.log(cityJug.getTitle());

console.log("---");

var ref1: () => void = jug.getTitle;
var ref2: () => void = cityJug.getTitle;

console.log(ref1());
console.log(ref2());
