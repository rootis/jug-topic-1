interface UsersGroup {

    getLanguage: () => string;

}

class Jug implements UsersGroup {

    public getLanguage(): string {
        return "Java " + this.getJavaVersionTitle();
    }

    protected getJavaVersion(): number {
        return 1.7;
    }

    private getJavaVersionTitle(): string {
        return "v" + this.getJavaVersion();
    }

}

class KaunasJug extends Jug {

    protected getJavaVersion(): number {
        return 1.8;
    }

}

function printUsersGroupLanguage(usersGroup: UsersGroup): void {
    console.log(usersGroup.getLanguage());
}

printUsersGroupLanguage(new Jug());
printUsersGroupLanguage(new KaunasJug());
