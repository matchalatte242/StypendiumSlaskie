function dane() {
    //Treść zadania
    let m1 = document.getElementById("sbwmaszyny");
    let l1 = document.getElementById("sbwludzie");
    let b1 = document.getElementById("sbwbarwnik");

    let m2 = document.getElementById("sbbmaszyny");
    let l2 = document.getElementById("sbbludzie");

    let z1 = document.getElementById("sbwzysk");
    let z2 = document.getElementById("sbbzysk");

    let dm = document.getElementById("sdmaszyny");
    let dl = document.getElementById("sdludzie");
    let db = document.getElementById("sdbarwnik");

    m1.innerHTML = document.getElementById("bwmaszyny").value;
    l1.innerHTML = document.getElementById("bwludzie").value;
    b1.innerHTML = document.getElementById("bwbarwnik").value;

    m2.innerHTML = document.getElementById("bbmaszyny").value;
    l2.innerHTML = document.getElementById("bbludzie").value;

    z1.innerHTML = document.getElementById("bwzysk").value;
    z2.innerHTML = document.getElementById("bbzysk").value;

    dm.innerHTML = document.getElementById("dmaszyny").value;
    dl.innerHTML = document.getElementById("dludzie").value;
    db.innerHTML = document.getElementById("dbarwnik").value;

    //Postać standardowa
    let om1 = document.getElementById("obwm");
    let ol1 = document.getElementById("obwl");
    let ob1 = document.getElementById("obwb");

    let om2 = document.getElementById("obbm");
    let ol2 = document.getElementById("obbl");

    let oz1 = document.getElementById("obwz");
    let oz2 = document.getElementById("obbz");

    let odm = document.getElementById("odm");
    let odl = document.getElementById("odl");
    let odb = document.getElementById("odb");

    om1.innerHTML = document.getElementById("bwmaszyny").value;
    ol1.innerHTML = document.getElementById("bwludzie").value;
    ob1.innerHTML = document.getElementById("bwbarwnik").value;

    om2.innerHTML = document.getElementById("bbmaszyny").value;
    ol2.innerHTML = document.getElementById("bbludzie").value;

    oz1.innerHTML = document.getElementById("bwzysk").value;
    oz2.innerHTML = document.getElementById("bbzysk").value;

    odm.innerHTML = document.getElementById("dmaszyny").value;
    odl.innerHTML = document.getElementById("dludzie").value;
    odb.innerHTML = document.getElementById("dbarwnik").value;

    //Postać kanoniczna
    let km1 = document.getElementById("kbwm");
    let kl1 = document.getElementById("kbwl");
    let kb1 = document.getElementById("kbwb");

    let km2 = document.getElementById("kbbm");
    let kl2 = document.getElementById("kbbl");

    let kz1 = document.getElementById("kbwz");
    let kz2 = document.getElementById("kbbz");

    let kdm = document.getElementById("kdm");
    let kdl = document.getElementById("kdl");
    let kdb = document.getElementById("kdb");

    km1.innerHTML = document.getElementById("bwmaszyny").value;
    kl1.innerHTML = document.getElementById("bwludzie").value;
    kb1.innerHTML = document.getElementById("bwbarwnik").value;

    km2.innerHTML = document.getElementById("bbmaszyny").value;
    kl2.innerHTML = document.getElementById("bbludzie").value;

    kz1.innerHTML = document.getElementById("bwzysk").value;
    kz2.innerHTML = document.getElementById("bbzysk").value;

    kdm.innerHTML = document.getElementById("dmaszyny").value;
    kdl.innerHTML = document.getElementById("dludzie").value;
    kdb.innerHTML = document.getElementById("dbarwnik").value;

    //Bazowa postać kanoniczna
    let bkm1 = document.getElementById("bkbwm");
    let bkl1 = document.getElementById("bkbwl");
    let bkb1 = document.getElementById("bkbwb");

    let bkm2 = document.getElementById("bkbbm");
    let bkl2 = document.getElementById("bkbbl");

    let bkz1 = document.getElementById("bkbwz");
    let bkz2 = document.getElementById("bkbbz");

    let bkdm = document.getElementById("bkdm");
    let bkdl = document.getElementById("bkdl");
    let bkdb = document.getElementById("bkdb");

    bkm1.innerHTML = document.getElementById("bwmaszyny").value; 
    bkl1.innerHTML = document.getElementById("bwludzie").value;
    bkb1.innerHTML = document.getElementById("bwbarwnik").value;

    bkm2.innerHTML = document.getElementById("bbmaszyny").value;
    bkl2.innerHTML = document.getElementById("bbludzie").value;

    bkz1.innerHTML = document.getElementById("bwzysk").value;
    bkz2.innerHTML = document.getElementById("bbzysk").value;

    bkdm.innerHTML = document.getElementById("dmaszyny").value;
    bkdl.innerHTML = document.getElementById("dludzie").value;
    bkdb.innerHTML = document.getElementById("dbarwnik").value;
    
    //Pierwsza tabela dla metody simpleks
    let bwzysk = document.getElementById("bwzysk").value;
    let bbzysk = document.getElementById("bbzysk").value;
    
    
    let dmaszyny = document.getElementById("dmaszyny").value;
    let dludzie = document.getElementById("dludzie").value;
    let dbarwnik = document.getElementById("dbarwnik").value;

    let licznik = 0;

    let Cb = [];
    let Cj = [];
    let b = [];
    let a1 = [];
    let a2 = [];
    let a3 = [];
    let a4 = [];
    let a5 = [];

    Cb[licznik] = [0, 0, 0];
    Cj[licznik] = [bwzysk, bbzysk, 0, 0, 0];
    b[licznik] = [dmaszyny, dludzie, dbarwnik];
    a1[licznik] = [document.getElementById("bkbwm").innerHTML, document.getElementById("bkbwl").innerHTML, document.getElementById("bkbwb").innerHTML];
    a2[licznik] = [document.getElementById("bkbbm").innerHTML, document.getElementById("bkbbl").innerHTML, 0];
    a3[licznik] = [1, 0, 0];
    a4[licznik] = [0, 1, 0];
    a5[licznik] = [0, 0, 1];

    //let szukaj = 1;
    
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

    document.getElementsByClassName("Cj0")[licznik].innerHTML = Cj[licznik][0];  
    document.getElementsByClassName("Cj1")[licznik].innerHTML = Cj[licznik][1];
    document.getElementsByClassName("Cj2")[licznik].innerHTML = Cj[licznik][2]; 
    document.getElementsByClassName("Cj3")[licznik].innerHTML = Cj[licznik][3];
    document.getElementsByClassName("Cj4")[licznik].innerHTML = Cj[licznik][4];         
    
    document.getElementsByClassName("Cb0")[licznik].innerHTML = Cb[licznik][0];
    document.getElementsByClassName("Cb1")[licznik].innerHTML = Cb[licznik][1]; 
    document.getElementsByClassName("Cb2")[licznik].innerHTML = Cb[licznik][2];
    
    document.getElementsByClassName("b0")[licznik].innerHTML = b[licznik][0];   
    document.getElementsByClassName("b1")[licznik].innerHTML = b[licznik][1]; 
    document.getElementsByClassName("b2")[licznik].innerHTML = b[licznik][2];
    
    document.getElementsByClassName("a10")[licznik].innerHTML = a1[licznik][0];   
    document.getElementsByClassName("a11")[licznik].innerHTML = a1[licznik][1];
    document.getElementsByClassName("a12")[licznik].innerHTML = a1[licznik][2];

    document.getElementsByClassName("a20")[licznik].innerHTML = a2[licznik][0];   
    document.getElementsByClassName("a21")[licznik].innerHTML = a2[licznik][1];
    document.getElementsByClassName("a22")[licznik].innerHTML = a2[licznik][2];

    document.getElementsByClassName("a30")[licznik].innerHTML = a3[licznik][0];   
    document.getElementsByClassName("a31")[licznik].innerHTML = a3[licznik][1];
    document.getElementsByClassName("a32")[licznik].innerHTML = a3[licznik][2];

    document.getElementsByClassName("a40")[licznik].innerHTML = a4[licznik][0];   
    document.getElementsByClassName("a41")[licznik].innerHTML = a4[licznik][1];
    document.getElementsByClassName("a42")[licznik].innerHTML = a4[licznik][2];

    document.getElementsByClassName("a50")[licznik].innerHTML = a5[licznik][0];   
    document.getElementsByClassName("a51")[licznik].innerHTML = a5[licznik][1];
    document.getElementsByClassName("a52")[licznik].innerHTML = a5[licznik][2];

    document.getElementsByClassName("W0")[licznik].innerHTML = Cb[licznik][0]*b[licznik][0] + Cb[licznik][1]*b[licznik][1] + Cb[licznik][2]*b[licznik][2];

    document.getElementsByClassName("W1")[licznik].innerHTML = Cj[licznik][0] - (Cb[licznik][0]*a1[licznik][0] + Cb[licznik][1]*a1[licznik][1] + Cb[licznik][2]*a1[licznik][2]);
    document.getElementsByClassName("W2")[licznik].innerHTML = Cj[licznik][1] - (Cb[licznik][0]*a2[licznik][0] + Cb[licznik][1]*a2[licznik][1] + Cb[licznik][2]*a2[licznik][2]);
    document.getElementsByClassName("W3")[licznik].innerHTML = Cj[licznik][2] - (Cb[licznik][0]*a3[licznik][0] + Cb[licznik][1]*a3[licznik][1] + Cb[licznik][2]*a3[licznik][2]);
    document.getElementsByClassName("W4")[licznik].innerHTML = Cj[licznik][3] - (Cb[licznik][0]*a4[licznik][0] + Cb[licznik][1]*a4[licznik][1] + Cb[licznik][2]*a4[licznik][2]);
    document.getElementsByClassName("W5")[licznik].innerHTML = Cj[licznik][4] - (Cb[licznik][0]*a5[licznik][0] + Cb[licznik][1]*a5[licznik][1] + Cb[licznik][2]*a5[licznik][2]);

    let WW = [];
    WW[licznik] = [document.getElementsByClassName("W1")[licznik].innerHTML, document.getElementsByClassName("W2")[licznik].innerHTML, document.getElementsByClassName("W3")[licznik].innerHTML, document.getElementsByClassName("W4")[licznik].innerHTML, document.getElementsByClassName("W5")[licznik].innerHTML];

    let max;
    let min;
    let KK;
    let WK;
    let ER;

    let k;

    if(!(WW[licznik][0]<=0 && WW[licznik][1]<=0 && WW[licznik][2]<=0 && WW[licznik][3]<=0 && WW[licznik][4]<=0)) {
        max = Math.max(document.getElementsByClassName("W1")[licznik].innerHTML, document.getElementsByClassName("W2")[licznik].innerHTML, document.getElementsByClassName("W3")[licznik].innerHTML, document.getElementsByClassName("W4")[licznik].innerHTML, document.getElementsByClassName("W5")[licznik].innerHTML);

        if(max==document.getElementsByClassName("W1")[licznik].innerHTML) {
            //kolumna a1 to KK
            KK = 1;

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
            //kolumna a2 to KK
            KK = 2;

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
            //kolumna a3 to KK
            KK = 3;

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
            //kolumna a4 to KK
            KK = 4;

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
            //kolumna a5 to KK
            KK = 5;

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

    while(licznik<3) {
    //while(!(WW[licznik-1][0]<=0 && WW[licznik-1][1]<=0 && WW[licznik-1][2]<=0 && WW[licznik-1][3]<=0 && WW[licznik-1][4]<=0)) {
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

        document.getElementsByClassName(`Wb${WK}`)[licznik].innerHTML = `a<sub>${KK}</sub>`;
        document.getElementsByClassName(`Cb${WK}`)[licznik].innerHTML = WW[licznik-1][KK-1];

        Cb[licznik] = [];
        Cj[licznik] = [];
        b[licznik] = [];
        a1[licznik] = [];
        a2[licznik] = [];
        a3[licznik] = [];
        a4[licznik] = [];
        a5[licznik] = [];

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
                k = 0;

                while(document.getElementsByClassName(`a${KK}${i}`)[licznik-1].innerHTML-k*document.getElementsByClassName(`a${KK}${WK}`)[licznik].innerHTML!=0) {
                    ++k;
                }

                document.getElementsByClassName(`Cb${i}`)[licznik].innerHTML = 0;
                document.getElementsByClassName(`b${i}`)[licznik].innerHTML = document.getElementsByClassName(`b${i}`)[licznik-1].innerHTML-k*document.getElementsByClassName(`b${WK}`)[licznik].innerHTML;
                document.getElementsByClassName(`a1${i}`)[licznik].innerHTML = document.getElementsByClassName(`a1${i}`)[licznik-1].innerHTML-k*document.getElementsByClassName(`a1${WK}`)[licznik].innerHTML;
                document.getElementsByClassName(`a2${i}`)[licznik].innerHTML = document.getElementsByClassName(`a2${i}`)[licznik-1].innerHTML-k*document.getElementsByClassName(`a2${WK}`)[licznik].innerHTML;
                document.getElementsByClassName(`a3${i}`)[licznik].innerHTML = document.getElementsByClassName(`a3${i}`)[licznik-1].innerHTML-k*document.getElementsByClassName(`a3${WK}`)[licznik].innerHTML;
                document.getElementsByClassName(`a4${i}`)[licznik].innerHTML = document.getElementsByClassName(`a4${i}`)[licznik-1].innerHTML-k*document.getElementsByClassName(`a4${WK}`)[licznik].innerHTML;
                document.getElementsByClassName(`a5${i}`)[licznik].innerHTML = document.getElementsByClassName(`a5${i}`)[licznik-1].innerHTML-k*document.getElementsByClassName(`a5${WK}`)[licznik].innerHTML;
            
                //tutaj2

                Cb[licznik][i] = 0;
                b[licznik][i] = document.getElementsByClassName(`b${i}`)[licznik].innerHTML;
                a1[licznik][i] = document.getElementsByClassName(`a1${i}`)[licznik].innerHTML;
                a2[licznik][i] = document.getElementsByClassName(`a2${i}`)[licznik].innerHTML;
                a3[licznik][i] = document.getElementsByClassName(`a3${i}`)[licznik].innerHTML;
                a4[licznik][i] = document.getElementsByClassName(`a4${i}`)[licznik].innerHTML;
                a5[licznik][i] = document.getElementsByClassName(`a5${i}`)[licznik].innerHTML;
            }
        }

        for(let i=0; i<5; ++i) {
            Cj[licznik][i] = Cj[licznik-1][i];
            document.getElementsByClassName(`Cj${i}`)[licznik].innerHTML = Cj[licznik][i];
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

        //alert(`${Cb[licznik][0]}*${a5[licznik][0]} + ${Cb[licznik][1]}*${a5[licznik][1]} + ${Cb[licznik][2]}*${a5[licznik][2]}`);

        //tutaj

        if(!(WW[licznik][0]<=0 && WW[licznik-1][1]<=0 && WW[licznik][2]<=0 && WW[licznik][3]<=0 && WW[licznik][4]<=0)) {
            max = Math.max(document.getElementsByClassName("W1")[licznik].innerHTML, document.getElementsByClassName("W2")[licznik].innerHTML, document.getElementsByClassName("W3")[licznik].innerHTML, document.getElementsByClassName("W4")[licznik].innerHTML, document.getElementsByClassName("W5")[licznik].innerHTML);

            if(max==document.getElementsByClassName("W1")[licznik].innerHTML) {
                //kolumna a1 to KK
                KK = 1;

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
                //kolumna a2 to KK
                KK = 2;

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
                //kolumna a3 to KK
                KK = 3;

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
                //kolumna a4 to KK
                KK = 4;

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
                //kolumna a5 to KK
                KK = 5;

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

            //alert(`licznik: ${licznik}, KK: ${KK}, WK: ${WK}, min: ${min}, ER: ${ER}`);
            //alert(typeof WW[licznik-1][0]);
        }
    }
}