Clearcode Number filters
=========

Filters that hides 0, and cut numbers to set precision.

Installation
--------------
TODO


Usage
------

Add ``` cc.number.filters ``` module to your app module list :


```
angular
    .module('yourAwesomeApp', [
        'cc.number.filters'
    ]);
```
and you are ready to go!

Filters :

*showonzero*

```
showonzero(input);

\\ OR in html

showonzero



```

*pnumber*

```
pnumber(number, minSize, maxSize);

\\ OR in html

pnumber:minSize :maxSize



```



Author
------

Pawel Galazka


License
----

LGPL

