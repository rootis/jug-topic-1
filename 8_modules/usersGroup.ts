module usersGroup {

    export class API {

        public static init(data: any) {
            new ViewModel(data.someJSON);
        }

    }

    class ViewModel {

        constructor(jsonDataToLoad: string) {
            console.log('Loading...');
        }

    }

    class SomeInnerClass {
    }

}

export = usersGroup;
