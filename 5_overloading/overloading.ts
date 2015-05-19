interface UsersGroup {

    getLanguage(isUpperCase: boolean): string;

    getLanguage(versionPrefix: string): string;

}

class KaunasJug implements UsersGroup {

    getLanguage(property?: any): string {
        if (typeof property === 'boolean'){
            return property ? "JAVA v1.8" : "Java v1.8";
        } else if (typeof property === "string") {
            return "Java " + property + "1.8";
        }
    }

}

function printUsersGroupLanguage(usersGroup: UsersGroup): void {
    console.log(usersGroup.getLanguage(false));
    console.log(usersGroup.getLanguage("version"));
    console.log(usersGroup.getLanguage(true));
    console.log(usersGroup.getLanguage("versija"));
}

printUsersGroupLanguage(new KaunasJug());
