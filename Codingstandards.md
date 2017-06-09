# Coding Standards

## <u>Naming Conventions:</u>
* We will use <i>lowerCamelCase</i> for variable names i.e. beaconName = "Laurier";
* We will use <i>PascalCase</i> for function names.
* Function names have to be descriptive. i.e Don't name a function that creates a beacon "Banana". Use "CreateBeacon".
* We will use <i>UPPERCASE</i> for global variables and constants.

## <u>Spacing:</u>
* Always put spaces around operators( = + - * / ), and after commas.
* There should be no trailing spaces after any line of code.

## <u>Code Indentation:</u>
* Properly indent code for ease of readability.

## <u>Statement Rules:</u>
* Always end a statement with a semicolon.
* Put the opening bracket at the end of the first line.
* Use one space before the opening bracket.
* Put the closing bracket on a new line.

```js
if (condition) {
    statements;
}
```

## <u>Object Rules:</u>
* Place the opening bracket on the same line as the object name.
* Use a colon plus one space between each property and its value.
* Do not add a comma after the last property-value pair.
* Place the closing bracket on a new line.
* Always end an object definition with a semicolon.

```js
var beacon = {
    name: "Science Building",
    id: 15,
    location: "King Street and Bricker Avenue"
};
```

## <u>Commenting:</u>
* Have a block on top of a function which describes what the method does.
* If necessary, include a comment on the side of a line of code that describes what that line is doing.

```js
/* 
   A detailed description about what the method does
   params: @var1 @var2
   returns: @var3
   Date Updated: DD/MM/YYYY
*/
function FunctionName () {
   var1, var2  bbb
   statements;
   return var3;
}
```
