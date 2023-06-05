function fliniowa() {
    document.querySelector("#dkwadratowa").style = "display: none";
    document.querySelector("#wkwadratowa").style = "display: none";
    document.querySelector("#fkwadratowa").style = "display: none";

    document.querySelector("#dlogarytmiczna").style = "display: none";
    document.querySelector("#wlogarytmiczna").style = "display: none";
    document.querySelector("#flogarytmiczna").style = "display: none";

    document.querySelector("#dliniowa").style = "display: block";
    document.querySelector("#wliniowa").style = "display: block";
    document.querySelector("#fliniowa").style = "display: block";

    let wykres = document.querySelector("#wliniowa");

    let wlasnosci = document.querySelector("#fliniowa");

    let a = document.querySelector("#aliniowa").value*1;

    let b = document.querySelector("#bliniowa").value*1;

    wykres.innerHTML = "";
    wlasnosci.innerHTML = "";

    let x0 = (-1*b/a).toFixed(2);

    let l = document.querySelector("#lliniowa").value*1;

    let p = document.querySelector("#pliniowa").value*1;

    let wstaw = "";

    wstaw += `<h2>Własności funkcji liniowej</h2><h3>f(x) = ${a}x + ${b}</h3>`;

    wstaw += "<ol class='liniowa'>";
    wstaw += "<li><b>Dziedzina:</b> x &isin; &#8477;</li><br>";
        
    if(a!=0) wstaw += "<li><b>Zbiór wartości:</b> y &isin; &#8477;</li><br>";
    else wstaw += `<li><b>Zbiór wartości:</b> {${b}}</li><br>`;

    if(a!=0) wstaw += `<li><b>Miejsce zerowe:</b> x<sub>0</sub> = ${x0}</li><br>`;
    else wstaw += "<li><b>Miejsce zerowe:</b> x<sub>0</sub> &isin; &empty;</li><br>";
    

    wstaw += `<li><b>Przecięcie z osią OY:</b> OY = (0, ${b})</li><br>`;

    if(a>0) {
        wstaw += "<li><b>Monotoniczność:</b> Funkcja jest rosnąca.</li><br>";

        wstaw += `<li><b>Funkcja przyjmuje wartości dodatnie:</b> x &isin; (${x0}; +&infin;)</li><br>`;

        wstaw += `<li><b>Funkcja przyjmuje wartości ujemne:</b> x &isin; (-&infin;; ${x0})</li><br>`;
    } else if(a<0) {
        wstaw += "<li><b>Monotoniczność:</b> Funkcja jest malejąca.</li><br>";

        wstaw += `<li><b>Funkcja przyjmuje wartości dodatnie:</b> x &isin; (-&infin;; ${x0})</li><br>`;

        wstaw += `<li><b>Funkcja przyjmuje wartości ujemne:</b> x &isin; (${x0}; +&infin;)</li><br>`;
    } else {
        wstaw += "<li><b>Monotoniczność:</b> Funkcja jest stała.</li><br>";
        
        if(b>0) wstaw += `<li><b>Funkcja przyjmuje wartości dodatnie:</b> x &isin; {${b}}</li><br>`;
        else wstaw += "<li><b>Funkcja przyjmuje wartości dodatnie:</b> x &isin; &empty;</li><br>";

        if(b<0) wstaw += `<li><b>Funkcja przyjmuje wartości ujemne:</b> x &isin; {${b}}</li><br>`;
        else wstaw += `<li><b>Funkcja przyjmuje wartości ujemne:</b> x &isin; &empty;</li><br>`;
    }

    wstaw += "<li><b>Wartość maksymalna:</b> Nie istnieje.</li><br>";

    wstaw += "<li><b>Wartość minimalna:</b> Nie istnieje.</li><br>";

    wstaw += `<li><b>Pochodna funkcji:</b> f'(x) = ${a}</li><br>`;

    if(a>0) {
        wstaw += `<li><b>Wartość maksymalna w przedziale domkniętym <${l}, ${p}>:</b> ${(a*p+b).toFixed(2)}</li><br>`;
        wstaw += `<li><b>Wartość minimalna w przedziale domkniętym <${l}, ${p}>:</b> ${(a*l+b).toFixed(2)}</li><br>`;
    } else if(a<0) {
        wstaw += `<li><b>Wartość maksymalna w przedziale domkniętym <${l}, ${p}>:</b> ${(a*l+b).toFixed(2)}</li><br>`;
        wstaw += `<li><b>Wartość minimalna w przedziale domkniętym <${l}, ${p}>:</b> ${(a*p+b).toFixed(2)}</li><br>`;
    } else {
        wstaw += `<li><b>Wartość maksymalna w przedziale domkniętym <${l}, ${p}>:</b> Nie istnieje.</li><br>`;
        wstaw += `<li><b>Wartość minimalna w przedziale domkniętym <${l}, ${p}>:</b> Nie istnieje.</li><br>`;
    }

    wstaw += "</ol><hr>";

    wlasnosci.innerHTML += wstaw;

    wykres.innerHTML += `<h2>Wykres funkcji liniowej</h2><h3>f(x) = ${a}x + ${b}</h3><canvas id='wykresliniowa'></canvas><br><hr>`;

    let ctx = document.getElementById('wykresliniowa').getContext('2d');

    new Chart(ctx, {
        type: 'line',
        data: {
            labels: [-4, -3, -2, -1, 0, 1, 2, 3, 4],
            datasets: [{
                label: `f(x)`,
                data: [a*-4+b, a*-3+b, a*-2+b, a*-1+b, a*0+b, a*1+b, a*2+b, a*3+b, a*4+b],
                borderColor: '#009900',
                pointRadius: 1,
                fill: false
            }]
        },
        options: {
            legend: {
                display: false
            },
            scales: {
                xAxes: [{
                    ticks: {
                        fontColor: 'blue' 
                    }
                }],
                yAxes: [{
                    ticks: {
                        fontColor: 'red' 
                    }
                }]
            }
        }
    });
}

function fkwadratowa() {
    document.querySelector("#dliniowa").style = "display: none";
    document.querySelector("#wliniowa").style = "display: none";
    document.querySelector("#fliniowa").style = "display: none";

    document.querySelector("#dlogarytmiczna").style = "display: none";
    document.querySelector("#wlogarytmiczna").style = "display: none";
    document.querySelector("#flogarytmiczna").style = "display: none";

    document.querySelector("#dkwadratowa").style = "display: block";
    document.querySelector("#wkwadratowa").style = "display: block";
    document.querySelector("#fkwadratowa").style = "display: block";

    let wykres = document.querySelector("#wkwadratowa");

    let wlasnosci = document.querySelector("#fkwadratowa");

    let a = document.querySelector("#akwadratowa").value*1;

    let b = document.querySelector("#bkwadratowa").value*1;

    let c = document.querySelector("#c").value*1;

    let l = document.querySelector("#lkwadratowa").value*1;

    let p = document.querySelector("#pkwadratowa").value*1;

    if(a==0) {
        wykres.innerHTML = "";
        wlasnosci.innerHTML = "";

        let out = document.querySelector("#kkwadratowa");
        out.innerHTML = "<p><b>Współczynnik kierunkowy funkcji kwadratowej musi być różny od 0.</b></p><hr>";
    } else {
        let out = document.querySelector("#kkwadratowa");
        out.innerHTML = "";

        wykres.innerHTML = "";
        wlasnosci.innerHTML = "";

        let delta = b*b+(-4)*a*c;

        let pw = ((-1*b)/(2*a)).toFixed(2);

        let qw = ((-1*delta)/(4*a)).toFixed(2);

        let x0 = ((-1*b)/2*a).toFixed(2);

        let x1 = ((-1*b-Math.sqrt(delta))/(2*a)).toFixed(2);

        let x2 = ((-1*b+Math.sqrt(delta))/(2*a)).toFixed(2);

        let wstaw = "";

        wstaw += "<h2>Własności funkcji kwadratowej</h2>";
		
		wstaw += `<p><b>Wzór w postaci ogólnej:</b> f(x) = ${a}x<sup>2</sup> + ${b}x + ${c}</p>`;
		wstaw += `<p><b>Wzór w postaci kanonicznej:</b> f(x) = ${a}(x + ${-1*pw})<sup>2</sup> + ${qw}</p>`;
		
		if(delta>=0) {
			wstaw += `<p><b>Wzór w postaci iloczynowej:</b> f(x) = ${a}(x + ${(-1*x1).toFixed(2)})(x + ${(-1*x2).toFixed(2)})</p>`;
		} else {
			wstaw += `<p><b>Wzór w postaci iloczynowej:</b> f(x) = ${a}(x + ${(-1*x0).toFixed(2)})<sup>2</sup></p>`;
		}

        wstaw += "<ol class='kwadratowa'>";

        wstaw += "<li><b>Dziedzina:</b> x &isin; &#8477;</li><br>";
            
        if(a>0) wstaw += `<li><b>Zbiór wartości:</b> x &isin; <${qw}; +&infin;></li><br>`;
        else wstaw += `<li><b>Zbiór wartości:</b> x &isin; <-&infin;; ${qw}></li><br>`;

        if(delta>0) {
            wstaw += `<li><b>Miejsca zerowe:</b> x<sub>1</sub> = ${x1}, x<sub>2</sub> = ${x2}</li><br>`;
        } else if(delta<0) {
            wstaw += `<li><b>Miejsce zerowe:</b> x<sub>0</sub> = ${x0}</li><br>`;
        } else {
            wstaw += "<li><b>Miejsca zerowe:</b> Brak miejsc zerowych.</li><br>";
        }

        wstaw += `<li><b>Przecięcie z osią OY:</b> OY = (0, ${c})</li><br>`;

        if(a>0) {
			wstaw += `<li><b>Funkcja jest rosnąca</b> &hArr; x &isin; (${pw}; +&infin;)</li><br>`;
			wstaw += `<li><b>Funkcja jest malejąca</b> &hArr; x &isin; (-&infin;; ${pw})</li><br>`;

            if(delta>0) {
                wstaw += `<li><b>Funkcja przyjmuje wartości dodatnie:</b> f(x) > 0 &hArr; x &isin; (-&infin;; ${x1}) &cup; (${x2}; +&infin;)</li><br>`;
                wstaw += `<li><b>Funkcja przyjmuje wartości ujemne:</b> f(x) < 0 &hArr; x &isin; (${x1}; ${x2})</li><br>`;
            } else if(delta<0) {
                wstaw += `<li><b>Funkcja przyjmuje wartości dodatnie:</b> f(x) > 0 &hArr; x &isin; &#8477;</li><br>`;
                wstaw += `<li><b>Funkcja przyjmuje wartości ujemne:</b> f(x) < 0 &hArr; x &isin; &empty;</li><br>`;
            } else {
                wstaw += `<li><b>Funkcja przyjmuje wartości dodatnie:</b> f(x) > 0 &hArr; x &isin; (-&infin;; ${x0}) &cup; (${x0}; +&infin;)</li><br>`;
                wstaw += `<li><b>Funkcja przyjmuje wartości ujemne:</b> f(x) < 0 &hArr; x &isin; &empty;</li><br>`;
            }

            wstaw += "<li><b>Wartość maksymalna:</b> f<sub>max</sub> - nie istnieje</li><br>";
            wstaw += `<li><b>Wartość minimalna:</b> f<sub>min</sub> = ${qw}</li><br>`;
        } else if(a<0) {
			wstaw += `<li><b>Funkcja jest rosnąca</b> &hArr; x &isin; (-&infin;; ${pw})</li><br>`;
			wstaw += `<li><b>Funkcja jest malejąca</b> &hArr; x &isin; (${pw}; +&infin;)</li><br>`;

            if(delta>0) {
                wstaw += `<li><b>Funkcja przyjmuje wartości dodatnie:</b> f(x) > 0 &hArr; x &isin; (${x1}; ${x2})</li><br>`;
                wstaw += `<li><b>Funkcja przyjmuje wartości ujemne:</b> f(x) < 0 &hArr; x &isin; (-&infin;; ${x1}) &cup; (${x2}; +&infin;)</li><br>`;
            } else if(delta<0) {
                wstaw += `<li><b>Funkcja przyjmuje wartości dodatnie:</b> f(x) > 0 &hArr; x &isin; &empty;</li><br>`;
                wstaw += `<li><b>Funkcja przyjmuje wartości ujemne:</b> f(x) < 0 &hArr; x &isin; &#8477;</li><br>`;
            } else {
                wstaw += `<li><b>Funkcja przyjmuje wartości dodatnie:</b> f(x) > 0 &hArr; x &isin; &empty;</li><br>`;
                wstaw += `<li><b>Funkcja przyjmuje wartości ujemne:</b> f(x) < 0 &hArr; x &isin; (-&infin;; ${x0}) &cup; (${x0}; +&infin;)</li><br>`;
            }

            wstaw += `<li><b>Wartość maksymalna:</b> f<sub>max</sub> = ${qw}</li><br>`;
            wstaw += "<li><b>Wartość minimalna:</b> f<sub>min</sub> - nie istnieje</li><br>";
        }

        wstaw += `<li><b>Wierzchołek:</b> W = (${pw}, ${qw})</li><br>`;

        wstaw += `<li><b>Pochodna funkcji:</b> f'(x) = ${2*a}x+${b}</li><br>`;
		
		if(a>0) {
			wstaw += `<li><b>Wartość maksymalna w przedziale domkniętym <${l}, ${p}>:</b> nie istnieje</li><br>`;
			
			if(pw>=l && pw<=p) {
				wstaw += `<li><b>Wartość minimalna w przedziale domkniętym <${l}, ${p}>:</b> ${(Math.min(a*pw*pw+b*pw+c, a*l*l+b*l+c, a*p*p+b*p+c)).toFixed(2)}</li><br>`;
			} else {
				wstaw += `<li><b>Wartość minimalna w przedziale domkniętym <${l}, ${p}>:</b> ${(Math.min(a*l*l+b*l+c, a*p*p+b*p+c)).toFixed(2)}</li><br>`;
			}
		} else {
			if(pw>=l && pw<=p) {
				wstaw += `<li><b>Wartość maksymalna w przedziale domkniętym <${l}, ${p}>:</b> ${(Math.max(a*pw*pw+b*pw+c, a*l*l+b*l+c, a*p*p+b*p+c)).toFixed(2)}</li><br>`;
			} else {
				wstaw += `<li><b>Wartość maksymalna w przedziale domkniętym <${l}, ${p}>:</b> ${(Math.max(a*l*l+b*l+c, a*p*p+b*p+c)).toFixed(2)}</li><br>`;
			}
			
			wstaw += `<li><b>Wartość minimalna w przedziale domkniętym <${l}, ${p}>:</b> nie istnieje</li><br>`;
		}

        wstaw += "</ol><hr>";

        wlasnosci.innerHTML += wstaw;

        wykres.innerHTML += `<h2>Wykres funkcji kwadratowej</h2><h3>f(x) = ${a}x<sup>2</sup> + ${b}x + ${c}</h3><canvas id='wykreskwadratowa'></canvas><br><hr>`;

        let ctx = document.getElementById('wykreskwadratowa').getContext('2d');

        new Chart(ctx, {
            type: 'line',
            data: {
                labels: [-4, -3, -2, -1, 0, 1, 2, 3, 4],
                datasets: [{
                    label: `f(x)`,
                    data: [a*-4*-4+b*-4+c, a*-3*-3+b*-3+c, a*-2*-2+b*-2+c, a*-1*-1+b*-1+c, a*0*0+b*0+c, a*1*1+b*1+c, a*2*2+b*2+c, a*3*3+b*3+c, a*4*4+b*4+c],
                    borderColor: '#3366CC',
                    radius: 1,
                    fill: false
                }]
            },
            options: {
                legend: {
                    display: false
                },
                scales: {
                    xAxes: [{
                        ticks: {
                            fontColor: 'blue' 
                        }
                    }],
                    yAxes: [{
                        ticks: {
                            fontColor: 'red' 
                        }
                    }]
                }
            }
        });
    }
}

function flogarytmiczna() {
    document.querySelector("#dliniowa").style = "display: none";
    document.querySelector("#wliniowa").style = "display: none";
    document.querySelector("#fliniowa").style = "display: none";

    document.querySelector("#dkwadratowa").style = "display: none";
    document.querySelector("#wkwadratowa").style = "display: none";
    document.querySelector("#fkwadratowa").style = "display: none";

    document.querySelector("#dlogarytmiczna").style = "display: block";
    document.querySelector("#wlogarytmiczna").style = "display: block";
    document.querySelector("#flogarytmiczna").style = "display: block";

    let wykres = document.querySelector("#wlogarytmiczna");

    let wlasnosci = document.querySelector("#flogarytmiczna");

    let a = document.querySelector("#alogarytmiczna").value*1;

    let l = document.querySelector("#llogarytmiczna").value*1;

    let p = document.querySelector("#plogarytmiczna").value*1;

    if(a<=0 || a==1 || p<=0 || l<=0) {
        wykres.innerHTML = "";
        wlasnosci.innerHTML = "";

        let out = document.querySelector("#klogarytmiczna");
        out.innerHTML = "<p><b>Wartość a musi być większa od 0 i różna od 1.</b></p><p><b>Początek i koniec przedziału domkniętego muszą być większe od 0.</b></p><hr>";
    } else {
        let out = document.querySelector("#klogarytmiczna");
        out.innerHTML = "";

        wykres.innerHTML = "";
        wlasnosci.innerHTML = "";

        let wstaw = "";

        wstaw += `<h2>Własności funkcji logarytmicznej</h2><h3>f(x) = log<sub>${a}</sub>x</h3>`;

        wstaw += "<ol class='logarytmiczna'>";

        wstaw += "<li><b>Dziedzina:</b> x &isin; &#8477;<sup>+</sup></li><br>";
            
        wstaw += "<li><b>Zbiór wartości:</b> x &isin; &#8477;</li><br>";

        wstaw += `<li><b>Miejsce zerowe:</b> x<sub>0</sub> = 1</li><br>`;

        wstaw += "<li><b>Przecięcie z osią OY:</b> brak</li><br>";

        if(a>1) {
            wstaw += "<li><b>Monotoniczność:</b> Funkcja jest rosnąca.</li><br>";
            wstaw += `<li><b>Funkcja przyjmuje wartości dodatnie:</b> x &isin; (1; +&infin;)</li><br>`;
            wstaw += `<li><b>Funkcja przyjmuje wartości ujemne:</b> x &isin; (-&infin;; 1)</li><br>`;
            wstaw += `<li><b>Wartość maksymalna w przedziale domkniętym <${l}, ${p}>:</b> ${((Math.log(p))/(Math.log(a))).toFixed(2)}</li><br>`;
            wstaw += `<li><b>Wartość minimalna w przedziale domkniętym <${l}, ${p}>:</b> ${((Math.log(l))/(Math.log(a))).toFixed(2)}</li><br>`;
        } else {
            wstaw += "<li><b>Monotoniczność:</b> Funkcja jest malejąca.</li><br>";
            wstaw += `<li><b>Funkcja przyjmuje wartości dodatnie:</b> x &isin; (-&infin;; 1)</li><br>`;
            wstaw += `<li><b>Funkcja przyjmuje wartości ujemne:</b> x &isin; (1; +&infin;)</li><br>`;
            wstaw += `<li><b>Wartość maksymalna w przedziale domkniętym <${l}, ${p}>:</b> ${((Math.log(l))/(Math.log(a))).toFixed(2)}</li><br>`;
            wstaw += `<li><b>Wartość minimalna w przedziale domkniętym <${l}, ${p}>:</b> ${((Math.log(p))/(Math.log(a))).toFixed(2)}</li><br>`;
        }

        wstaw += "<li><b>Wartość maksymalna:</b> Nie istnieje.</li><br>";

        wstaw += "<li><b>Wartość minimalna:</b> Nie istnieje.</li><br>";

        wstaw += `<li><b>Pochodna funkcji:</b> f'(x) = <span class='fractup'>log<sub>${a}</sub>e</span><span class='fractline'>&#8260;</span><span class='fractdn'>x</span></li><br>`;

        wstaw += "</ol><hr>";

        wlasnosci.innerHTML += wstaw;

        wykres.innerHTML += `<h2>Wykres funkcji logarytmicznej</h2><h3>f(x) = log<sub>${a}</sub>x</h3><canvas id='wykreslogarytmiczna'></canvas><br><hr>`;

        let ctx = document.getElementById('wykreslogarytmiczna').getContext('2d');

        new Chart(ctx, {
            type: 'line',
            data: {
                labels: [0.25, 0.50, 0.75, 1, 1.25, 1.50, 1.75, 2, 2.25],
                datasets: [{
                    label: `f(x)`,
                    data: [(Math.log(0.25))/(Math.log(a)), (Math.log(0.50))/(Math.log(a)), (Math.log(0.75))/(Math.log(a)), (Math.log(1))/(Math.log(a)), (Math.log(1.25))/(Math.log(a)), (Math.log(1.50))/(Math.log(a)), (Math.log(1.75))/(Math.log(a)), (Math.log(2))/(Math.log(a)), (Math.log(2.25))/(Math.log(a))],
                    borderColor: 'mediumpurple',
                    radius: 1,
                    fill: false
                }]
            },
            options: {
                legend: {
                    display: false
                },
                scales: {
                    xAxes: [{
                        ticks: {
                            fontColor: 'blue' 
                        }
                    }],
                    yAxes: [{
                        ticks: {
                            fontColor: 'red' 
                        }
                    }]
                }
            }
        });
    }
}

function wybor() {
    let n = document.querySelector("#rodzaj").value;

    switch(n) {
        case '1':
            fliniowa();
            break;
        case '2':
            fkwadratowa();
            break;
        case '3':
            flogarytmiczna();
            break;
    }
}