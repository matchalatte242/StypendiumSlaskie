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
    let Cj = [bwzysk, bbzysk, 0, 0, 0];
    
    let dmaszyny = document.getElementById("dmaszyny").value;
    let dludzie = document.getElementById("dludzie").value;
    let dbarwnik = document.getElementById("dbarwnik").value;
    let b = [dmaszyny, dludzie, dbarwnik];
    
    let Cb = [0, 0, 0];
    
    let a1 = [document.getElementById("bkbwm").innerHTML, document.getElementById("bkbwl").innerHTML, document.getElementById("bkbwb").innerHTML];
    
    let a2 = [document.getElementById("bkbbm").innerHTML, document.getElementById("bkbbl").innerHTML, 0];
    
    let a3 = [1, 0, 0];
    
    let a4 = [0, 1, 0];
    
    let a5 = [0, 0, 1];

    let szukaj = true;
    
    let tabela1 = document.getElementById("pierwsza");
    
    tabela1.innerHTML = `<table border='1'>
    <tr>
        <td rowspan='2'>C<sub>b</sub></td>
        <td rowspan='2'>wektory<br>bazowe</td>
        <td>C<sub>j</sub></td><td id='Cj0'>&nbsp;</td>
        <td id='Cj1'>&nbsp;</td><td id='Cj2'>&nbsp;</td>
        <td id='Cj3'>&nbsp;</td><td id='Cj4'>&nbsp;</td>
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
        <td id='Cb0'></td>
        <td>a<sub>3</sub></td>
        <td id='b0'>&nbsp;</td>
        <td id='a10'>&nbsp;</td>
        <td id='a20'>&nbsp;</td>
        <td id='a30'>&nbsp;</td>
        <td id='a40'>&nbsp;</td>
        <td id='a50'>&nbsp;</td>
        <td id="I0">&nbsp;</td>
    </tr>
    <tr>
        <td id='Cb1'></td>
        <td>a<sub>4</sub></td>
        <td id='b1'>&nbsp;</td>
        <td id='a11'>&nbsp;</td>
        <td id='a21'>&nbsp;</td>
        <td id='a31'>&nbsp;</td>
        <td id='a41'>&nbsp;</td>
        <td id='a51'>&nbsp;</td>
        <td id="I1">&nbsp;</td>
    </tr>
    <tr>
        <td id='Cb2'>&nbsp;</td>
        <td>a<sub>5</sub></td>
        <td id='b2'>&nbsp;</td>
        <td id='a12'>&nbsp;</td>
        <td id='a22'>&nbsp;</td>
        <td id='a32'>&nbsp;</td>
        <td id='a42'>&nbsp;</td>
        <td id='a52'>&nbsp;</td>
        <td id="I2">&nbsp;</td>
    </tr>
    <tr>
        <td colspan='2'>wiersz wskaźników&nbsp;</td>
        <td id='W0'>&nbsp;</td>
        <td id='W1'>&nbsp;</td>
        <td id='W2'>&nbsp;</td>
        <td id='W3'>&nbsp;</td>
        <td id='W4'>&nbsp;</td>
        <td id='W5'>&nbsp;</td>
        <td>&nbsp;</td>
    </tr>
</table>`;

    document.getElementById("Cj0").innerHTML = Cj[0];  
    document.getElementById("Cj1").innerHTML = Cj[1];
    document.getElementById("Cj2").innerHTML = Cj[2]; 
    document.getElementById("Cj3").innerHTML = Cj[3];
    document.getElementById("Cj4").innerHTML = Cj[4];         
    
    document.getElementById("Cb0").innerHTML = Cb[0];
    document.getElementById("Cb1").innerHTML = Cb[1]; 
    document.getElementById("Cb2").innerHTML = Cb[2];
    
    document.getElementById("b0").innerHTML = b[0];   
    document.getElementById("b1").innerHTML = b[1]; 
    document.getElementById("b2").innerHTML = b[2];
    
    document.getElementById("a10").innerHTML = a1[0];   
    document.getElementById("a11").innerHTML = a1[1];
    document.getElementById("a12").innerHTML = a1[2];

    document.getElementById("a20").innerHTML = a2[0];   
    document.getElementById("a21").innerHTML = a2[1];
    document.getElementById("a22").innerHTML = a2[2];

    document.getElementById("a30").innerHTML = a3[0];   
    document.getElementById("a31").innerHTML = a3[1];
    document.getElementById("a32").innerHTML = a3[2];

    document.getElementById("a40").innerHTML = a4[0];   
    document.getElementById("a41").innerHTML = a4[1];
    document.getElementById("a42").innerHTML = a4[2];

    document.getElementById("a50").innerHTML = a5[0];   
    document.getElementById("a51").innerHTML = a5[1];
    document.getElementById("a52").innerHTML = a5[2];

    document.getElementById("W0").innerHTML = Cb[0]*b[0] + Cb[1]*b[1] + Cb[2]*b[2];

    document.getElementById("W1").innerHTML = Cj[0] - (Cb[0]*a1[0] + Cb[1]*a1[1] + Cb[2]*a1[2]);
    document.getElementById("W2").innerHTML = Cj[1] - (Cb[0]*a2[0] + Cb[1]*a2[1] + Cb[2]*a2[2]);
    document.getElementById("W3").innerHTML = Cj[2] - (Cb[0]*a3[0] + Cb[1]*a3[1] + Cb[2]*a3[2]);
    document.getElementById("W4").innerHTML = Cj[3] - (Cb[0]*a4[0] + Cb[1]*a4[1] + Cb[2]*a4[2]);
    document.getElementById("W5").innerHTML = Cj[4] - (Cb[0]*a5[0] + Cb[1]*a5[1] + Cb[2]*a5[2]);

    let WW = [document.getElementById("W1").innerHTML, document.getElementById("W2").innerHTML, document.getElementById("W3").innerHTML, document.getElementById("W4").innerHTML, document.getElementById("W5").innerHTML];

    let max;

    for(let i=0; i<5; ++i) {
        if(WW[i]>0) break;
        else if(i==4) szukaj = false;
    }

    //while(szukaj) {
        max = Math.max(document.getElementById("W1").innerHTML, document.getElementById("W2").innerHTML, document.getElementById("W3").innerHTML, document.getElementById("W4").innerHTML, document.getElementById("W5").innerHTML);

        if(max==document.getElementById("W1").innerHTML) {
            //kolumna a1 to KK


        }

        if(max==document.getElementById("W2").innerHTML) {
            //kolumna a2 to KK


        }

        if(max==document.getElementById("W3").innerHTML) {
            //kolumna a3 to KK


        }

        if(max==document.getElementById("W4").innerHTML) {
            //kolumna a4 to KK


        }

        if(max==document.getElementById("W5").innerHTML) {
            //kolumna a5 to KK


        }
    //}
}