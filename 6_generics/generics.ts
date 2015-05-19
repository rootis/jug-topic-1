function printProperty<T>(property: T): void {
    console.log(property);
}

printProperty(10);
printProperty("JUG");



console.log("---");



interface Language {

    getTitle(): string;

}

interface UserGroupArray<T extends Language> {

    add(... languages: T[]): void;

    printAllGroups(): void;

}

class UserGroupArrayImpl<T extends Language> implements UserGroupArray<T> {

    private languages: T[] = [];

    add(... languages: T[]): void {
        languages.forEach(function (language: T): void {
            this.languages[this.languages.length] = language;
        }, this);
    }

    printAllGroups(): void {
        this.languages.forEach(function (language: T): void {
            console.log(language.getTitle());
        });
    }

}

class Java implements Language {

    getTitle(): string {
        return "Java";
    }

}

class JavaScript implements Language {

    getTitle(): string {
        return "JavaScript";
    }

}

var userGroups: UserGroupArray<Language> = new UserGroupArrayImpl();

userGroups.add(new Java(), new JavaScript());

userGroups.printAllGroups();
