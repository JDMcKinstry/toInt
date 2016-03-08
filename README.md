# toInt
Adds `toInt()` method to `String`s for easy conversion of a String to Int|Float.

### Easy to use with only one possible parameter [<sub>`BOOLEAN`</sub>].

##Examples:

    "abc123.def.456.)(*.789".toInt() // = 123.456789
    "abc123.def.456.)(*.789".toInt(true) // = 123
