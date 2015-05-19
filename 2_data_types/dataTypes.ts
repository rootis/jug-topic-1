/*
    Boolean
 */
var isItTrue: boolean = false;

/*
    Number
 */
var age: number = 99;

/*
    String
 */
var name: string = 'Rutenis';
name += " Turcinas";

/*
    Array
 */
var items1: number[] = [1, 2, 3];
var items2: Array<number> = [1, 2, 3];

/*
    Enum
 */
enum Color {
    Red,
    Green,
    Blue
}
var value: Color = Color.Green;

/*
    Any
 */
var surname: any = null;
surname = 5;
surname = "Turcinas";

var listOfAny: Array<any> = [null, 5, "Any"];

/*
    Void
 */
function emptyFunction(): void {
}
