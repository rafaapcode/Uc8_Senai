function rodandoAsala(n) {
    for (let index = 0; index <= n; index++) {
        if (index % 2 === 0) {
            if (index === 0) {
                console.log('O número é zero ' + index);
            } else {
                console.log('O número é par ' + index);
            }
        } else if (index % 2 !== 0) {
            console.log('O número é impar ' + index);
        }
    }
}

rodandoAsala(20);