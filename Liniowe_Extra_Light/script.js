function dane() {
    //Tresc zadania
    document.getElementById("sbwmaszyny").innerHTML = document.getElementById("bwmaszyny").value;
    document.getElementById("sbwludzie").innerHTML = document.getElementById("bwludzie").value;
    document.getElementById("sbwbarwnik").innerHTML = document.getElementById("bwbarwnik").value;
    document.getElementById("sbbmaszyny").innerHTML = document.getElementById("bbmaszyny").value;
    document.getElementById("sbbludzie").innerHTML = document.getElementById("bbludzie").value;
    document.getElementById("sbwzysk").innerHTML = document.getElementById("bwzysk").value;
    document.getElementById("sbbzysk").innerHTML = document.getElementById("bbzysk").value;
    document.getElementById("sdmaszyny").innerHTML = document.getElementById("dmaszyny").value;
    document.getElementById("sdludzie").innerHTML = document.getElementById("dludzie").value;
    document.getElementById("sdbarwnik").innerHTML = document.getElementById("dbarwnik").value;

    //Postac standardowa
    document.getElementById("obwm").innerHTML = document.getElementById("bwmaszyny").value;
    document.getElementById("obwl").innerHTML = document.getElementById("bwludzie").value;
    document.getElementById("obwb").innerHTML = document.getElementById("bwbarwnik").value;
    document.getElementById("obbm").innerHTML = document.getElementById("bbmaszyny").value;
    document.getElementById("obbl").innerHTML = document.getElementById("bbludzie").value;
    document.getElementById("obwz").innerHTML = document.getElementById("bwzysk").value;
    document.getElementById("obbz").innerHTML = document.getElementById("bbzysk").value;
    document.getElementById("odm").innerHTML = document.getElementById("dmaszyny").value;
    document.getElementById("odl").innerHTML = document.getElementById("dludzie").value;
    document.getElementById("odb").innerHTML = document.getElementById("dbarwnik").value;

    //Postac kanoniczna
    document.getElementById("kbwm").innerHTML = document.getElementById("bwmaszyny").value;
    document.getElementById("kbwl").innerHTML = document.getElementById("bwludzie").value;
    document.getElementById("kbwb").innerHTML = document.getElementById("bwbarwnik").value;
    document.getElementById("kbbm").innerHTML = document.getElementById("bbmaszyny").value;
    document.getElementById("kbbl").innerHTML = document.getElementById("bbludzie").value;
    document.getElementById("kbwz").innerHTML = document.getElementById("bwzysk").value;
    document.getElementById("kbbz").innerHTML = document.getElementById("bbzysk").value;
    document.getElementById("kdm").innerHTML = document.getElementById("dmaszyny").value;
    document.getElementById("kdl").innerHTML = document.getElementById("dludzie").value;
    document.getElementById("kdb").innerHTML = document.getElementById("dbarwnik").value;

    //Bazowa postac kanoniczna
    document.getElementById("bkbwm").innerHTML = document.getElementById("bwmaszyny").value; 
    document.getElementById("bkbwl").innerHTML = document.getElementById("bwludzie").value;
    document.getElementById("bkbwb").innerHTML = document.getElementById("bwbarwnik").value;

    document.getElementById("bkbbm").innerHTML = document.getElementById("bbmaszyny").value;
    document.getElementById("bkbbl").innerHTML = document.getElementById("bbludzie").value;

    document.getElementById("bkbwz").innerHTML = document.getElementById("bwzysk").value;
    document.getElementById("bkbbz").innerHTML = document.getElementById("bbzysk").value;

    document.getElementById("bkdm").innerHTML = document.getElementById("dmaszyny").value;
    document.getElementById("bkdl").innerHTML = document.getElementById("dludzie").value;
    document.getElementById("bkdb").innerHTML = document.getElementById("dbarwnik").value;

    //Pierwsza tabela dla metody simpleks
    let bwzysk = document.getElementById("bwzysk").value;
    let bbzysk = document.getElementById("bbzysk").value;
    let dmaszyny = document.getElementById("dmaszyny").value;
    let dludzie = document.getElementById("dludzie").value;
    let dbarwnik = document.getElementById("dbarwnik").value;

    let licznik = 0; //zmienna pomocnicza informujaca, ktora obecnie z kolei tabela sie zajmujemy, 0 to tabela pierwsza

    let Cb = [], Cj = [], b = [], a1 = [], a2 = [], a3 = [], a4 = [], a5 = [];

    Cb[licznik] = [0, 0, 0]; //poczatkowe wartosci Cb
    Cj[licznik] = [bwzysk, bbzysk, 0, 0, 0]; 
    b[licznik] = [dmaszyny, dludzie, dbarwnik];
    a1[licznik] = [document.getElementById("bkbwm").innerHTML, document.getElementById("bkbwl").innerHTML, document.getElementById("bkbwb").innerHTML];
    a2[licznik] = [document.getElementById("bkbbm").innerHTML, document.getElementById("bkbbl").innerHTML, 0];
    a3[licznik] = [1, 0, 0];
    a4[licznik] = [0, 1, 0];
    a5[licznik] = [0, 0, 1];
    
    let tabela1 = document.getElementById("tabele");
    
    tabela1.innerHTML = `
        <table border='1'>
        <tr>
            <td rowspan='2'>C<sub>b</sub></td>
            <td rowspan='2'>wektory<br>bazowe</td>
            <td>C<sub>j</sub></td>
            <td class='Cj0'>&nbsp;</td>
            <td class='Cj1'>&nbsp;</td>
            <td class='Cj2'>&nbsp;</td>
            <td class='Cj3'>&nbsp;</td>
            <td class='Cj4'>&nbsp;</td>
            <td rowspan='2'><sup>b</sup>/<sub>KK</sub></td>
        </tr>
        <tr>
            <td>b</td>
            <td>a<sub>1</sub></td>
            <td>a<sub>2</sub></td>
            <td>a<sub>3</sub></td>
            <td>a<sub>4</sub></td>
            <td>a<sub>5</sub></td>
        </tr>
        <tr>
            <td class='Cb0'></td>
            <td class='Wb0'>a<sub>3</sub></td>
            <td class='b0'>&nbsp;</td>
            <td class='a10'>&nbsp;</td>
            <td class='a20'>&nbsp;</td>
            <td class='a30'>&nbsp;</td>
            <td class='a40'>&nbsp;</td>
            <td class='a50'>&nbsp;</td>
            <td class="I0">&nbsp;</td>
        </tr>
        <tr>
            <td class='Cb1'></td>
            <td class='Wb1'>a<sub>4</sub></td>
            <td class='b1'>&nbsp;</td>
            <td class='a11'>&nbsp;</td>
            <td class='a21'>&nbsp;</td>
            <td class='a31'>&nbsp;</td>
            <td class='a41'>&nbsp;</td>
            <td class='a51'>&nbsp;</td>
            <td class="I1">&nbsp;</td>
        </tr>
        <tr>
            <td class='Cb2'>&nbsp;</td>
            <td class='Wb2'>a<sub>5</sub></td>
            <td class='b2'>&nbsp;</td>
            <td class='a12'>&nbsp;</td>
            <td class='a22'>&nbsp;</td>
            <td class='a32'>&nbsp;</td>
            <td class='a42'>&nbsp;</td>
            <td class='a52'>&nbsp;</td>
            <td class="I2">&nbsp;</td>
        </tr>
        <tr>
            <td colspan='2'>wiersz wskaźników&nbsp;</td>
            <td class='W0'>&nbsp;</td>
            <td class='W1'>&nbsp;</td>
            <td class='W2'>&nbsp;</td>
            <td class='W3'>&nbsp;</td>
            <td class='W4'>&nbsp;</td>
            <td class='W5'>&nbsp;</td>
            <td>&nbsp;</td>
        </tr>
    </table>
    `;

    for(let i=0; i<5; ++i) document.getElementsByClassName(`Cj${i}`)[licznik].innerHTML = Cj[licznik][i];  

    for(let i=0; i<3; ++i) {
        document.getElementsByClassName(`Cb${i}`)[licznik].innerHTML = Cb[licznik][i];
        document.getElementsByClassName(`b${i}`)[licznik].innerHTML = b[licznik][i]; 
        document.getElementsByClassName(`a1${i}`)[licznik].innerHTML = a1[licznik][i];  
        document.getElementsByClassName(`a2${i}`)[licznik].innerHTML = a2[licznik][i];  
        document.getElementsByClassName(`a3${i}`)[licznik].innerHTML = a3[licznik][i]; 
        document.getElementsByClassName(`a4${i}`)[licznik].innerHTML = a4[licznik][i];  
        document.getElementsByClassName(`a5${i}`)[licznik].innerHTML = a5[licznik][i]; 
    }

    document.getElementsByClassName("W0")[licznik].innerHTML = Cb[licznik][0]*b[licznik][0] + Cb[licznik][1]*b[licznik][1] + Cb[licznik][2]*b[licznik][2]; //funkcja celu

    //wyznaczanie wiersza wskaznikow
    document.getElementsByClassName("W1")[licznik].innerHTML = Cj[licznik][0] - (Cb[licznik][0]*a1[licznik][0] + Cb[licznik][1]*a1[licznik][1] + Cb[licznik][2]*a1[licznik][2]);
    document.getElementsByClassName("W2")[licznik].innerHTML = Cj[licznik][1] - (Cb[licznik][0]*a2[licznik][0] + Cb[licznik][1]*a2[licznik][1] + Cb[licznik][2]*a2[licznik][2]);
    document.getElementsByClassName("W3")[licznik].innerHTML = Cj[licznik][2] - (Cb[licznik][0]*a3[licznik][0] + Cb[licznik][1]*a3[licznik][1] + Cb[licznik][2]*a3[licznik][2]);
    document.getElementsByClassName("W4")[licznik].innerHTML = Cj[licznik][3] - (Cb[licznik][0]*a4[licznik][0] + Cb[licznik][1]*a4[licznik][1] + Cb[licznik][2]*a4[licznik][2]);
    document.getElementsByClassName("W5")[licznik].innerHTML = Cj[licznik][4] - (Cb[licznik][0]*a5[licznik][0] + Cb[licznik][1]*a5[licznik][1] + Cb[licznik][2]*a5[licznik][2]);

    let WW = [];
    WW[licznik] = [document.getElementsByClassName("W1")[licznik].innerHTML, document.getElementsByClassName("W2")[licznik].innerHTML, document.getElementsByClassName("W3")[licznik].innerHTML, document.getElementsByClassName("W4")[licznik].innerHTML, document.getElementsByClassName("W5")[licznik].innerHTML];

    let max, min, KK, WK, ER, k; //maksimum w wierszu wskaznikow, minimum z wyznaczonych ilorazow, kolumna kluczowa, wiersz kluczowy, element rozwiazujacy, wielokrotnosc macierzy przy odejmowaniu

    if(WW[licznik][0]>0 || WW[licznik][1]>0 || WW[licznik][2]>0 || WW[licznik][3]>0 || WW[licznik][4]>0) {
        max = Math.max(document.getElementsByClassName("W1")[licznik].innerHTML, document.getElementsByClassName("W2")[licznik].innerHTML, document.getElementsByClassName("W3")[licznik].innerHTML, document.getElementsByClassName("W4")[licznik].innerHTML, document.getElementsByClassName("W5")[licznik].innerHTML);

        if(max==document.getElementsByClassName("W1")[licznik].innerHTML) {
            KK = 1; //kolumna a1 to KK

            if(a1[licznik][0]!=0) document.getElementsByClassName("I0")[licznik].innerHTML = b[licznik][0]/a1[licznik][0];
            else document.getElementsByClassName("I0")[licznik].innerHTML = "Null";
            
            if(a1[licznik][1]!=0) document.getElementsByClassName("I1")[licznik].innerHTML = b[licznik][1]/a1[licznik][1];
            else document.getElementsByClassName("I1")[licznik].innerHTML = "Null";

            if(a1[licznik][2]!=0) document.getElementsByClassName("I2")[licznik].innerHTML = b[licznik][2]/a1[licznik][2];
            else document.getElementsByClassName("I2")[licznik].innerHTML = "Null";

            if(document.getElementsByClassName("I0")[licznik].innerHTML>=0 && document.getElementsByClassName("I0")[licznik].innerHTML!="Null") {
                min = document.getElementsByClassName("I0")[licznik].innerHTML;
                WK = 0;
            }
            else if(document.getElementsByClassName("I1")[licznik].innerHTML>=0 && document.getElementsByClassName("I1")[licznik].innerHTML!="Null") {
                min = document.getElementsByClassName("I1")[licznik].innerHTML;
                WK = 1;
            }
            else if(document.getElementsByClassName("I2")[licznik].innerHTML>=0 && document.getElementsByClassName("I2")[licznik].innerHTML!="Null") {
                min = document.getElementsByClassName("I2")[licznik].innerHTML;
                WK = 2;
            }

            for(let i=0; i<3; ++i) {
                if(document.getElementsByClassName(`I${i}`)[licznik].innerHTML<min && document.getElementsByClassName(`I${i}`)[licznik].innerHTML>=0 && document.getElementsByClassName(`I${i}`)[licznik].innerHTML!="Null") {
                    min = document.getElementsByClassName(`I${i}`)[licznik].innerHTML;
                    WK = i;
                }
            }

            ER = a1[licznik][WK];
            ++licznik;
        } else if(max==document.getElementsByClassName("W2")[licznik].innerHTML) {
            KK = 2; //kolumna a2 to KK

            if(a2[licznik][0]!=0) document.getElementsByClassName("I0")[licznik].innerHTML = b[licznik][0]/a2[licznik][0];
            else document.getElementsByClassName("I0")[licznik].innerHTML = "Null";
            
            if(a2[licznik][1]!=0) document.getElementsByClassName("I1")[licznik].innerHTML = b[licznik][1]/a2[licznik][1];
            else document.getElementsByClassName("I1")[licznik].innerHTML = "Null";

            if(a2[licznik][2]!=0) document.getElementsByClassName("I2")[licznik].innerHTML = b[licznik][2]/a2[licznik][2];
            else document.getElementsByClassName("I2")[licznik].innerHTML = "Null";

            if(document.getElementsByClassName("I0")[licznik].innerHTML>=0 && document.getElementsByClassName("I0")[licznik].innerHTML!="Null") {
                min = document.getElementsByClassName("I0")[licznik].innerHTML;
                WK = 0;
            }
            else if(document.getElementsByClassName("I1")[licznik].innerHTML>=0 && document.getElementsByClassName("I1")[licznik].innerHTML!="Null") {
                min = document.getElementsByClassName("I1")[licznik].innerHTML;
                WK = 1;
            }
            else if(document.getElementsByClassName("I2")[licznik].innerHTML>=0 && document.getElementsByClassName("I2")[licznik].innerHTML!="Null") {
                min = document.getElementsByClassName("I2")[licznik].innerHTML;
                WK = 2;
            }

            for(let i=0; i<3; ++i) {
                if(document.getElementsByClassName(`I${i}`)[licznik].innerHTML<min && document.getElementsByClassName(`I${i}`)[licznik].innerHTML>=0 && document.getElementsByClassName(`I${i}`)[licznik].innerHTML!="Null") {
                    min = document.getElementsByClassName(`I${i}`)[licznik].innerHTML;
                    WK = i;
                }
            }

            ER = a2[licznik][WK];
            ++licznik;
        } else if(max==document.getElementsByClassName("W3")[licznik].innerHTML) {
            KK = 3; //kolumna a3 to KK

            if(a3[licznik][0]!=0) document.getElementsByClassName("I0")[licznik].innerHTML = b[licznik][0]/a3[licznik][0];
            else document.getElementsByClassName("I0")[licznik].innerHTML = "Null";
            
            if(a3[licznik][1]!=0) document.getElementsByClassName("I1")[licznik].innerHTML = b[licznik][1]/a3[licznik][1];
            else document.getElementsByClassName("I1")[licznik].innerHTML = "Null";

            if(a3[licznik][2]!=0) document.getElementsByClassName("I2")[licznik].innerHTML = b[licznik][2]/a3[licznik][2];
            else document.getElementsByClassName("I2")[licznik].innerHTML = "Null";

            if(document.getElementsByClassName("I0")[licznik].innerHTML>=0 && document.getElementsByClassName("I0")[licznik].innerHTML!="Null") {
                min = document.getElementsByClassName("I0")[licznik].innerHTML;
                WK = 0;
            }
            else if(document.getElementsByClassName("I1")[licznik].innerHTML>=0 && document.getElementsByClassName("I1")[licznik].innerHTML!="Null") {
                min = document.getElementsByClassName("I1")[licznik].innerHTML;
                WK = 1;
            }
            else if(document.getElementsByClassName("I2")[licznik].innerHTML>=0 && document.getElementsByClassName("I2")[licznik].innerHTML!="Null") {
                min = document.getElementsByClassName("I2")[licznik].innerHTML;
                WK = 2;
            }

            for(let i=0; i<3; ++i) {
                if(document.getElementsByClassName(`I${i}`)[licznik].innerHTML<min && document.getElementsByClassName(`I${i}`)[licznik].innerHTML>=0 && document.getElementsByClassName(`I${i}`)[licznik].innerHTML!="Null") {
                    min = document.getElementsByClassName(`I${i}`)[licznik].innerHTML;
                    WK = i;
                }
            }

            ER = a3[licznik][WK];
            ++licznik;
        } else if(max==document.getElementsByClassName("W4")[licznik].innerHTML) {
            KK = 4; //kolumna a4 to KK

            if(a4[licznik][0]!=0) document.getElementsByClassName("I0")[licznik].innerHTML = b[licznik][0]/a4[licznik][0];
            else document.getElementsByClassName("I0")[licznik].innerHTML = "Null";
            
            if(a4[licznik][1]!=0) document.getElementsByClassName("I1")[licznik].innerHTML = b[licznik][1]/a4[licznik][1];
            else document.getElementsByClassName("I1")[licznik].innerHTML = "Null";

            if(a4[licznik][2]!=0) document.getElementsByClassName("I2")[licznik].innerHTML = b[licznik][2]/a4[licznik][2];
            else document.getElementsByClassName("I2")[licznik].innerHTML = "Null";

            if(document.getElementsByClassName("I0")[licznik].innerHTML>=0 && document.getElementsByClassName("I0")[licznik].innerHTML!="Null") {
                min = document.getElementsByClassName("I0")[licznik].innerHTML;
                WK = 0;
            }
            else if(document.getElementsByClassName("I1")[licznik].innerHTML>=0 && document.getElementsByClassName("I1")[licznik].innerHTML!="Null") {
                min = document.getElementsByClassName("I1")[licznik].innerHTML;
                WK = 1;
            }
            else if(document.getElementsByClassName("I2")[licznik].innerHTML>=0 && document.getElementsByClassName("I2")[licznik].innerHTML!="Null") {
                min = document.getElementsByClassName("I2")[licznik].innerHTML;
                WK = 2;
            }

            for(let i=0; i<3; ++i) {
                if(document.getElementsByClassName(`I${i}`)[licznik].innerHTML<min && document.getElementsByClassName(`I${i}`)[licznik].innerHTML>=0 && document.getElementsByClassName(`I${i}`)[licznik].innerHTML!="Null") {
                    min = document.getElementsByClassName(`I${i}`)[licznik].innerHTML;
                    WK = i;
                }
            }

            ER = a4[licznik][WK];
            ++licznik;
        } else if(max==document.getElementsByClassName("W5")[licznik].innerHTML) {
            KK = 5; //kolumna a5 to KK

            if(a5[licznik][0]!=0) document.getElementsByClassName("I0")[licznik].innerHTML = b[licznik][0]/a5[licznik][0];
            else document.getElementsByClassName("I0")[licznik].innerHTML = "Null";
            
            if(a5[licznik][1]!=0) document.getElementsByClassName("I1")[licznik].innerHTML = b[licznik][1]/a5[licznik][1];
            else document.getElementsByClassName("I1")[licznik].innerHTML = "Null";

            if(a5[licznik][2]!=0) document.getElementsByClassName("I2")[licznik].innerHTML = b[licznik][2]/a5[licznik][2];
            else document.getElementsByClassName("I2")[licznik].innerHTML = "Null";

            if(document.getElementsByClassName("I0")[licznik].innerHTML>=0 && document.getElementsByClassName("I0")[licznik].innerHTML!="Null") {
                min = document.getElementsByClassName("I0")[licznik].innerHTML;
                WK = 0;
            } else if(document.getElementsByClassName("I1")[licznik].innerHTML>=0 && document.getElementsByClassName("I1")[licznik].innerHTML!="Null") {
                min = document.getElementsByClassName("I1")[licznik].innerHTML;
                WK = 1;
            } else if(document.getElementsByClassName("I2")[licznik].innerHTML>=0 && document.getElementsByClassName("I2")[licznik].innerHTML!="Null") {
                min = document.getElementsByClassName("I2")[licznik].innerHTML;
                WK = 2;
            }

            for(let i=0; i<3; ++i) {
                if(document.getElementsByClassName(`I${i}`)[licznik].innerHTML<min && document.getElementsByClassName(`I${i}`)[licznik].innerHTML>=0 && document.getElementsByClassName(`I${i}`)[licznik].innerHTML!="Null") {
                    min = document.getElementsByClassName(`I${i}`)[licznik].innerHTML;
                    WK = i;
                }
            }

            ER = a5[licznik][WK];
            ++licznik;
        }
    }

    let koniec = false;

    //Druga i kolejne tabele dla metody simpleks
    while((WW[licznik-1][0]>0 || WW[licznik-1][1]>0 || WW[licznik-1][2]>0 || WW[licznik-1][3]>0 || WW[licznik-1][4]>0) && koniec==false) {
        tabela1.innerHTML += `
            <br><table border='1'>
            <tr>
                <td rowspan='2'>C<sub>b</sub></td>
                <td rowspan='2'>wektory<br>bazowe</td>
                <td>C<sub>j</sub></td>
                <td class='Cj0'>&nbsp;</td>
                <td class='Cj1'>&nbsp;</td>
                <td class='Cj2'>&nbsp;</td>
                <td class='Cj3'>&nbsp;</td>
                <td class='Cj4'>&nbsp;</td>
                <td rowspan='2'><sup>b</sup>/<sub>KK</sub></td>
            </tr>
            <tr>
                <td>b</td>
                <td>a<sub>1</sub></td>
                <td>a<sub>2</sub></td>
                <td>a<sub>3</sub></td>
                <td>a<sub>4</sub></td>
                <td>a<sub>5</sub></td>
            </tr>
            <tr>
                <td class='Cb0'></td>
                <td class='Wb0'>&nbsp;</td>
                <td class='b0'>&nbsp;</td>
                <td class='a10'>&nbsp;</td>
                <td class='a20'>&nbsp;</td>
                <td class='a30'>&nbsp;</td>
                <td class='a40'>&nbsp;</td>
                <td class='a50'>&nbsp;</td>
                <td class="I0">&nbsp;</td>
            </tr>
            <tr>
                <td class='Cb1'></td>
                <td class='Wb1'>&nbsp;</td>
                <td class='b1'>&nbsp;</td>
                <td class='a11'>&nbsp;</td>
                <td class='a21'>&nbsp;</td>
                <td class='a31'>&nbsp;</td>
                <td class='a41'>&nbsp;</td>
                <td class='a51'>&nbsp;</td>
                <td class="I1">&nbsp;</td>
            </tr>
            <tr>
                <td class='Cb2'>&nbsp;</td>
                <td class='Wb2'>&nbsp;</td>
                <td class='b2'>&nbsp;</td>
                <td class='a12'>&nbsp;</td>
                <td class='a22'>&nbsp;</td>
                <td class='a32'>&nbsp;</td>
                <td class='a42'>&nbsp;</td>
                <td class='a52'>&nbsp;</td>
                <td class="I2">&nbsp;</td>
            </tr>
            <tr>
                <td colspan='2'>wiersz wskaźników&nbsp;</td>
                <td class='W0'>&nbsp;</td>
                <td class='W1'>&nbsp;</td>
                <td class='W2'>&nbsp;</td>
                <td class='W3'>&nbsp;</td>
                <td class='W4'>&nbsp;</td>
                <td class='W5'>&nbsp;</td>
                <td>&nbsp;</td>
            </tr>
        </table>
        `;

        Cb[licznik] = [], Cj[licznik] = [], b[licznik] = [], a1[licznik] = [], a2[licznik] = [], a3[licznik] = [], a4[licznik] = [], a5[licznik] = [];

        for(let i=0; i<5; ++i) {
            Cj[licznik][i] = Cj[licznik-1][i];
            document.getElementsByClassName(`Cj${i}`)[licznik].innerHTML = Cj[licznik][i];
        }

        for(let i=0; i<3; ++i) {
            Cb[licznik][i] = Cb[licznik-1][i];
            document.getElementsByClassName(`Cb${i}`)[licznik].innerHTML = Cb[licznik][i];
            document.getElementsByClassName(`Wb${i}`)[licznik].innerHTML = document.getElementsByClassName(`Wb${i}`)[licznik-1].innerHTML;
        }

        document.getElementsByClassName(`Wb${WK}`)[licznik].innerHTML = `a<sub>${KK}</sub>`;
        document.getElementsByClassName(`Cb${WK}`)[licznik].innerHTML = WW[licznik-1][KK-1];

        Cb[licznik][WK] = document.getElementsByClassName(`Cb${WK}`)[licznik].innerHTML;
        b[licznik][WK] = b[licznik-1][WK]/ER;
        a1[licznik][WK] = a1[licznik-1][WK]/ER;
        a2[licznik][WK] = a2[licznik-1][WK]/ER;
        a3[licznik][WK] = a3[licznik-1][WK]/ER;
        a4[licznik][WK] = a4[licznik-1][WK]/ER;
        a5[licznik][WK] = a5[licznik-1][WK]/ER;

        document.getElementsByClassName(`b${WK}`)[licznik].innerHTML = b[licznik][WK];
        document.getElementsByClassName(`a1${WK}`)[licznik].innerHTML = a1[licznik][WK];
        document.getElementsByClassName(`a2${WK}`)[licznik].innerHTML = a2[licznik][WK];
        document.getElementsByClassName(`a3${WK}`)[licznik].innerHTML = a3[licznik][WK];
        document.getElementsByClassName(`a4${WK}`)[licznik].innerHTML = a4[licznik][WK];
        document.getElementsByClassName(`a5${WK}`)[licznik].innerHTML = a5[licznik][WK];

        for(let i=0; i<3; ++i) {
            if(i!=WK) {
                k = document.getElementsByClassName(`a${KK}${i}`)[licznik-1].innerHTML / document.getElementsByClassName(`a${KK}${WK}`)[licznik].innerHTML;

                document.getElementsByClassName(`b${i}`)[licznik].innerHTML = document.getElementsByClassName(`b${i}`)[licznik-1].innerHTML-k*document.getElementsByClassName(`b${WK}`)[licznik].innerHTML;
                document.getElementsByClassName(`a1${i}`)[licznik].innerHTML = document.getElementsByClassName(`a1${i}`)[licznik-1].innerHTML-k*document.getElementsByClassName(`a1${WK}`)[licznik].innerHTML;
                document.getElementsByClassName(`a2${i}`)[licznik].innerHTML = document.getElementsByClassName(`a2${i}`)[licznik-1].innerHTML-k*document.getElementsByClassName(`a2${WK}`)[licznik].innerHTML;
                document.getElementsByClassName(`a3${i}`)[licznik].innerHTML = document.getElementsByClassName(`a3${i}`)[licznik-1].innerHTML-k*document.getElementsByClassName(`a3${WK}`)[licznik].innerHTML;
                document.getElementsByClassName(`a4${i}`)[licznik].innerHTML = document.getElementsByClassName(`a4${i}`)[licznik-1].innerHTML-k*document.getElementsByClassName(`a4${WK}`)[licznik].innerHTML;
                document.getElementsByClassName(`a5${i}`)[licznik].innerHTML = document.getElementsByClassName(`a5${i}`)[licznik-1].innerHTML-k*document.getElementsByClassName(`a5${WK}`)[licznik].innerHTML;
            
                b[licznik][i] = document.getElementsByClassName(`b${i}`)[licznik].innerHTML;
                a1[licznik][i] = document.getElementsByClassName(`a1${i}`)[licznik].innerHTML;
                a2[licznik][i] = document.getElementsByClassName(`a2${i}`)[licznik].innerHTML;
                a3[licznik][i] = document.getElementsByClassName(`a3${i}`)[licznik].innerHTML;
                a4[licznik][i] = document.getElementsByClassName(`a4${i}`)[licznik].innerHTML;
                a5[licznik][i] = document.getElementsByClassName(`a5${i}`)[licznik].innerHTML;
            }
        }

        document.getElementsByClassName("W0")[licznik].innerHTML = Cb[licznik][0]*b[licznik][0] + Cb[licznik][1]*b[licznik][1] + Cb[licznik][2]*b[licznik][2];

        WW[licznik] = [];

        WW[licznik][0] = Cj[licznik][0] - (Cb[licznik][0]*a1[licznik][0] + Cb[licznik][1]*a1[licznik][1] + Cb[licznik][2]*a1[licznik][2]);
        WW[licznik][1] = Cj[licznik][1] - (Cb[licznik][0]*a2[licznik][0] + Cb[licznik][1]*a2[licznik][1] + Cb[licznik][2]*a2[licznik][2]);
        WW[licznik][2] = Cj[licznik][2] - (Cb[licznik][0]*a3[licznik][0] + Cb[licznik][1]*a3[licznik][1] + Cb[licznik][2]*a3[licznik][2]);
        WW[licznik][3] = Cj[licznik][3] - (Cb[licznik][0]*a4[licznik][0] + Cb[licznik][1]*a4[licznik][1] + Cb[licznik][2]*a4[licznik][2]);
        WW[licznik][4] = Cj[licznik][4] - (Cb[licznik][0]*a5[licznik][0] + Cb[licznik][1]*a5[licznik][1] + Cb[licznik][2]*a5[licznik][2]);

        document.getElementsByClassName(`W1`)[licznik].innerHTML = WW[licznik][0];
        document.getElementsByClassName(`W2`)[licznik].innerHTML = WW[licznik][1];
        document.getElementsByClassName(`W3`)[licznik].innerHTML = WW[licznik][2];
        document.getElementsByClassName(`W4`)[licznik].innerHTML = WW[licznik][3];
        document.getElementsByClassName(`W5`)[licznik].innerHTML = WW[licznik][4];

        if(WW[licznik][0]>0 || WW[licznik][1]>0 || WW[licznik][2]>0 || WW[licznik][3]>0 || WW[licznik][4]>0) {
            max = Math.max(document.getElementsByClassName("W1")[licznik].innerHTML, document.getElementsByClassName("W2")[licznik].innerHTML, document.getElementsByClassName("W3")[licznik].innerHTML, document.getElementsByClassName("W4")[licznik].innerHTML, document.getElementsByClassName("W5")[licznik].innerHTML);

            if(max==document.getElementsByClassName("W1")[licznik].innerHTML) {
                KK = 1; //kolumna a1 to KK

                if(a1[licznik][0]!=0) document.getElementsByClassName("I0")[licznik].innerHTML = b[licznik][0]/a1[licznik][0];
                else document.getElementsByClassName("I0")[licznik].innerHTML = "Null";
                
                if(a1[licznik][1]!=0) document.getElementsByClassName("I1")[licznik].innerHTML = b[licznik][1]/a1[licznik][1];
                else document.getElementsByClassName("I1")[licznik].innerHTML = "Null";

                if(a1[licznik][2]!=0) document.getElementsByClassName("I2")[licznik].innerHTML = b[licznik][2]/a1[licznik][2];
                else document.getElementsByClassName("I2")[licznik].innerHTML = "Null";

                if(document.getElementsByClassName("I0")[licznik].innerHTML>=0 && document.getElementsByClassName("I0")[licznik].innerHTML!="Null") {
                    min = document.getElementsByClassName("I0")[licznik].innerHTML;
                    WK = 0;
                }
                else if(document.getElementsByClassName("I1")[licznik].innerHTML>=0 && document.getElementsByClassName("I1")[licznik].innerHTML!="Null") {
                    min = document.getElementsByClassName("I1")[licznik].innerHTML;
                    WK = 1;
                }
                else if(document.getElementsByClassName("I2")[licznik].innerHTML>=0 && document.getElementsByClassName("I2")[licznik].innerHTML!="Null") {
                    min = document.getElementsByClassName("I2")[licznik].innerHTML;
                    WK = 2;
                }

                for(let i=0; i<3; ++i) {
                    if(document.getElementsByClassName(`I${i}`)[licznik].innerHTML<min && document.getElementsByClassName(`I${i}`)[licznik].innerHTML>=0 && document.getElementsByClassName(`I${i}`)[licznik].innerHTML!="Null") {
                        min = document.getElementsByClassName(`I${i}`)[licznik].innerHTML;
                        WK = i;
                    }
                }

                ER = a1[licznik][WK];
                ++licznik;
            } else if(max==document.getElementsByClassName("W2")[licznik].innerHTML) {
                KK = 2; //kolumna a2 to KK

                if(a2[licznik][0]!=0) document.getElementsByClassName("I0")[licznik].innerHTML = b[licznik][0]/a2[licznik][0];
                else document.getElementsByClassName("I0")[licznik].innerHTML = "Null";
                
                if(a2[licznik][1]!=0) document.getElementsByClassName("I1")[licznik].innerHTML = b[licznik][1]/a2[licznik][1];
                else document.getElementsByClassName("I1")[licznik].innerHTML = "Null";

                if(a2[licznik][2]!=0) document.getElementsByClassName("I2")[licznik].innerHTML = b[licznik][2]/a2[licznik][2];
                else document.getElementsByClassName("I2")[licznik].innerHTML = "Null";

                if(document.getElementsByClassName("I0")[licznik].innerHTML>=0 && document.getElementsByClassName("I0")[licznik].innerHTML!="Null") {
                    min = document.getElementsByClassName("I0")[licznik].innerHTML;
                    WK = 0;
                }
                else if(document.getElementsByClassName("I1")[licznik].innerHTML>=0 && document.getElementsByClassName("I1")[licznik].innerHTML!="Null") {
                    min = document.getElementsByClassName("I1")[licznik].innerHTML;
                    WK = 1;
                }
                else if(document.getElementsByClassName("I2")[licznik].innerHTML>=0 && document.getElementsByClassName("I2")[licznik].innerHTML!="Null") {
                    min = document.getElementsByClassName("I2")[licznik].innerHTML;
                    WK = 2;
                }

                for(let i=0; i<3; ++i) {
                    if(document.getElementsByClassName(`I${i}`)[licznik].innerHTML<min && document.getElementsByClassName(`I${i}`)[licznik].innerHTML>=0 && document.getElementsByClassName(`I${i}`)[licznik].innerHTML!="Null") {
                        min = document.getElementsByClassName(`I${i}`)[licznik].innerHTML;
                        WK = i;
                    }
                    
                }

                ER = a2[licznik][WK];
                ++licznik;
            } else if(max==document.getElementsByClassName("W3")[licznik].innerHTML) {
                KK = 3; //kolumna a3 to KK

                if(a3[licznik][0]!=0) document.getElementsByClassName("I0")[licznik].innerHTML = b[licznik][0]/a3[licznik][0];
                else document.getElementsByClassName("I0")[licznik].innerHTML = "Null";
                
                if(a3[licznik][1]!=0) document.getElementsByClassName("I1")[licznik].innerHTML = b[licznik][1]/a3[licznik][1];
                else document.getElementsByClassName("I1")[licznik].innerHTML = "Null";

                if(a3[licznik][2]!=0) document.getElementsByClassName("I2")[licznik].innerHTML = b[licznik][2]/a3[licznik][2];
                else document.getElementsByClassName("I2")[licznik].innerHTML = "Null";

                if(document.getElementsByClassName("I0")[licznik].innerHTML>=0 && document.getElementsByClassName("I0")[licznik].innerHTML!="Null") {
                    min = document.getElementsByClassName("I0")[licznik].innerHTML;
                    WK = 0;
                }
                else if(document.getElementsByClassName("I1")[licznik].innerHTML>=0 && document.getElementsByClassName("I1")[licznik].innerHTML!="Null") {
                    min = document.getElementsByClassName("I1")[licznik].innerHTML;
                    WK = 1;
                }
                else if(document.getElementsByClassName("I2")[licznik].innerHTML>=0 && document.getElementsByClassName("I2")[licznik].innerHTML!="Null") {
                    min = document.getElementsByClassName("I2")[licznik].innerHTML;
                    WK = 2;
                }

                for(let i=0; i<3; ++i) {
                    if(document.getElementsByClassName(`I${i}`)[licznik].innerHTML<min && document.getElementsByClassName(`I${i}`)[licznik].innerHTML>=0 && document.getElementsByClassName(`I${i}`)[licznik].innerHTML!="Null") {
                        min = document.getElementsByClassName(`I${i}`)[licznik].innerHTML;
                        WK = i;
                    }
                }

                ER = a3[licznik][WK];
                ++licznik;
            } else if(max==document.getElementsByClassName("W4")[licznik].innerHTML) {
                KK = 4; //kolumna a4 to KK

                if(a4[licznik][0]!=0) document.getElementsByClassName("I0")[licznik].innerHTML = b[licznik][0]/a4[licznik][0];
                else document.getElementsByClassName("I0")[licznik].innerHTML = "Null";
                
                if(a4[licznik][1]!=0) document.getElementsByClassName("I1")[licznik].innerHTML = b[licznik][1]/a4[licznik][1];
                else document.getElementsByClassName("I1")[licznik].innerHTML = "Null";

                if(a4[licznik][2]!=0) document.getElementsByClassName("I2")[licznik].innerHTML = b[licznik][2]/a4[licznik][2];
                else document.getElementsByClassName("I2")[licznik].innerHTML = "Null";

                if(document.getElementsByClassName("I0")[licznik].innerHTML>=0 && document.getElementsByClassName("I0")[licznik].innerHTML!="Null") {
                    min = document.getElementsByClassName("I0")[licznik].innerHTML;
                    WK = 0;
                }
                else if(document.getElementsByClassName("I1")[licznik].innerHTML>=0 && document.getElementsByClassName("I1")[licznik].innerHTML!="Null") {
                    min = document.getElementsByClassName("I1")[licznik].innerHTML;
                    WK = 1;
                }
                else if(document.getElementsByClassName("I2")[licznik].innerHTML>=0 && document.getElementsByClassName("I2")[licznik].innerHTML!="Null") {
                    min = document.getElementsByClassName("I2")[licznik].innerHTML;
                    WK = 2;
                }

                for(let i=0; i<3; ++i) {
                    if(document.getElementsByClassName(`I${i}`)[licznik].innerHTML<min && document.getElementsByClassName(`I${i}`)[licznik].innerHTML>=0 && document.getElementsByClassName(`I${i}`)[licznik].innerHTML!="Null") {
                        min = document.getElementsByClassName(`I${i}`)[licznik].innerHTML;
                        WK = i;
                    }
                }

                ER = a4[licznik][WK];
                ++licznik;
            } else if(max==document.getElementsByClassName("W5")[licznik].innerHTML) {
                KK = 5; //kolumna a5 to KK

                if(a5[licznik][0]!=0) document.getElementsByClassName("I0")[licznik].innerHTML = b[licznik][0]/a5[licznik][0];
                else document.getElementsByClassName("I0")[licznik].innerHTML = "Null";
                
                if(a5[licznik][1]!=0) document.getElementsByClassName("I1")[licznik].innerHTML = b[licznik][1]/a5[licznik][1];
                else document.getElementsByClassName("I1")[licznik].innerHTML = "Null";

                if(a5[licznik][2]!=0) document.getElementsByClassName("I2")[licznik].innerHTML = b[licznik][2]/a5[licznik][2];
                else document.getElementsByClassName("I2")[licznik].innerHTML = "Null";

                if(document.getElementsByClassName("I0")[licznik].innerHTML>=0 && document.getElementsByClassName("I0")[licznik].innerHTML!="Null") {
                    min = document.getElementsByClassName("I0")[licznik].innerHTML;
                    WK = 0;
                } else if(document.getElementsByClassName("I1")[licznik].innerHTML>=0 && document.getElementsByClassName("I1")[licznik].innerHTML!="Null") {
                    min = document.getElementsByClassName("I1")[licznik].innerHTML;
                    WK = 1;
                } else if(document.getElementsByClassName("I2")[licznik].innerHTML>=0 && document.getElementsByClassName("I2")[licznik].innerHTML!="Null") {
                    min = document.getElementsByClassName("I2")[licznik].innerHTML;
                    WK = 2;
                }

                for(let i=0; i<3; ++i) {
                    if(document.getElementsByClassName(`I${i}`)[licznik].innerHTML<min && document.getElementsByClassName(`I${i}`)[licznik].innerHTML>=0 && document.getElementsByClassName(`I${i}`)[licznik].innerHTML!="Null") {
                        min = document.getElementsByClassName(`I${i}`)[licznik].innerHTML;
                        WK = i;
                    }
                }

                ER = a5[licznik][WK];
                ++licznik;
            }
        } else koniec = true;
    }

    let x1, x2, Z = 0;

    for(let i=0; i<3; ++i) {
        if(document.getElementsByClassName(`Wb${i}`)[licznik]!=null) {
            if(document.getElementsByClassName(`Wb${i}`)[licznik].innerHTML=="a<sub>1</sub>") {
                x1 = document.getElementsByClassName(`b${i}`)[licznik].innerHTML;
                Z += Number(document.getElementsByClassName(`Cb${i}`)[licznik].innerHTML)*Number(document.getElementsByClassName(`b${i}`)[licznik].innerHTML);
            } else if(document.getElementsByClassName(`Wb${i}`)[licznik].innerHTML=="a<sub>2</sub>") {
                x2 = document.getElementsByClassName(`b${i}`)[licznik].innerHTML;
                Z += Number(document.getElementsByClassName(`Cb${i}`)[licznik].innerHTML)*Number(document.getElementsByClassName(`b${i}`)[licznik].innerHTML);
            }
        }  
    }

    tabela1.innerHTML += `<br><p>Aby osiągnąć maksymalny zysk wynoszący ${Z} zł, należy wyprodukować ${x1}t płytek barwnych i ${x2}t płytek bezbarwnych.</p>`;
}