$(document).ready(function(){
    /*Til August:
    1. Byt om på paths'ene så de bliver tegnet i rigtig rækkefølge. Blandt andet i'et.

    2. Bestem hastigheden som outlinen bliver tegnet.
        a. Ændr variablen August nedenfor.
        b. Jo højere variablen "August" er sat til, jo hurtigere vil alting blive animeret.
        c. Ændr variablen til en passende hastighed for outlinen (stroken)
        d. Tænk ikke på fyldet (scribling)

    3. Ændr hastigheden som scribbling bliver tegnet
        a. Gå til index.html, og find svg filen (i body).
        b. Den som hedder Layer_2 er den som er scribbling
        c. Ved hver enkelt path, tilføj data-duration="x", så det ser således ud:
            <path data-duration="x"  fill="none" stroke="#000000" stroke-width="0.3" stroke-linecap="round" stroke-linejoin="round" d="Surka er min gud" />
        d. Ændr x til et tal, fx 30, 60, 70, 80, 111 osv. Bare et eller andet tal. Så det ser således ud:
            data-duration="120"
        e. Bliv ved indtil du finder den rigige hastighed.
        f. For at gøre det nemmere kan du bruge CTRL+F og skrive "data-duration", uden "" i feltet "Find in current buffer"
            i atom for at finde dem alle.
    */

    var August = 5000;

    var skitzeVivus = new Vivus('loadingVideo', {type: 'oneByOne', duration: August});
});
