import $ = require('jquery');

module usersGroup {

    export class API {

        public static init(data: any) {
            new ViewModel(data.someJSON);
        }

    }

    class ViewModel {

        constructor(jsonDataToLoad: string) {
            this.initOnClickEvent();
        }

        private initOnClickEvent(): void {
            $('someSelector').click(function (): void {
                $.ajax({
                    url: 'someURL',
                    type: 'GET',
                    dataType: 'JSON',
                    success: function (response): void {
                        $.ajax({
                            url: 'successURL',
                            type: 'POST',
                            contentType: 'application/json',
                            dataType: 'JSON',
                            data: {success: true}
                        });
                    },
                    error: function (response): void {
                        $.ajax({
                            url: 'errorURL',
                            type: 'POST',
                            contentType: 'application/json',
                            dataType: 'JSON',
                            data: {success: false}
                        });
                    }
                });
            });
        }

    }

    class ViewModelTwo {

        constructor(jsonDataToLoad: string) {
            this.initOnClickEvent();
        }

        private initOnClickEvent(): void {
            $('someSelector').click(() => {this.clickHandler()});
        }

        public clickHandler(): void {
            $.ajax({
                url: 'someURL',
                type: 'GET',
                dataType: 'JSON',
                success: this.getSuccess,
                error: this.getError
            });
        }

        public getSuccess(): void {
            $.ajax({
                url: 'successURL',
                type: 'POST',
                contentType: 'application/json',
                dataType: 'JSON',
                data: {success: true}
            });
        }

        public getError(): void {
            $.ajax({
                url: 'errorURL',
                type: 'POST',
                contentType: 'application/json',
                dataType: 'JSON',
                data: {success: false}
            });
        }

    }

}

export = usersGroup;
