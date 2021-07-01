# Diego
## Tellez
### Barrero
#### ___________________________________________________________________

##### En esta carpeta aparecerán todos los **ejercicios** de *Diego* para el ***Bootcamp Full Stack***

> Una gran responsabilidad requiere un gran poder. - Anonymous

[¿Como surgió la idea para crear Youtube? - Jawed Karim (Cofounder)][link]

[link]: https://www.youtube.com/watch?v=XAJEXUNmP5M&t=923s

```JAVASCRIPT
    function Burbuja() {
    var lista = [389, 703, 247, 563, 224, 714, 464, 953, 708, 201, 887, 550, 515, 206, 131];
    var n, i, k, aux;
    n = lista.length;
    console.log(lista); // Mostramos, por consola, la lista desordenada
    // Algoritmo de burbuja
    for (k = 1; k < n; k++) {
        for (i = 0; i < (n - k); i++) {
            if (lista[i] > lista[i + 1]) {
                aux = lista[i];
                lista[i] = lista[i + 1];
                lista[i + 1] = aux;
            }
        }
    }

    console.log(lista); // Mostramos, por consola, la lista ya ordenada
}
```

[fuente del algoritmo previo][fuente]

[fuente]: https://3con14.biz/js/tips-and-tricks/17-ordenamiento-por-burbuja.html

![foto de Javascript](https://www.tutorialrepublic.com/lib/images/javascript-illustration.png "foto de JavaScript")