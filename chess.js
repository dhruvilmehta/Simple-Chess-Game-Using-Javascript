document.addEventListener("DOMContentLoaded", () => {
    var count = 0;
    for (var i = 7; i >= 0; i--) {
      for (var j = 0; j <= 7; j++) {
        let box = document.createElement("div");
        box.className = `boxes box${i}${j}`;
        box.id = `box${i}${j}`;

        box.style.transform = `translate(calc(${j}*62.5px),calc(${count}*62.5px))`;
        if ((i + j) % 2 === 0) {
          box.style.backgroundColor = "white";
        } else {
          box.style.backgroundColor = "gray";
        }
        document.querySelector(".board").appendChild(box);
      }
      count++;
    }

    let bR1 = document.createElement("div");
    bR1.classList.add("bR1");
    document.querySelector(".box00").classList.add("notfree");
    document.querySelector(".box00").appendChild(bR1);
    
    let bN1 = document.createElement("div");
    bN1.classList.add("bN1");
    document.querySelector(".box01").classList.add("notfree");
    document.querySelector(".box01").appendChild(bN1);

    let bB1 = document.createElement("div");
    bB1.classList.add("bB1");
    document.querySelector(".box02").classList.add("notfree");
    document.querySelector(".box02").appendChild(bB1);

    let bQ = document.createElement("div");
    bQ.classList.add("bQ");
    document.querySelector(".box03").classList.add("notfree");
    document.querySelector(".box03").appendChild(bQ);

    let bK = document.createElement("div");
    bK.classList.add("bK");
    document.querySelector(".box04").classList.add("notfree");
    document.querySelector(".box04").appendChild(bK);

    let bB2 = document.createElement("div");
    bB2.classList.add("bB2");
    document.querySelector(".box05").classList.add("notfree");
    document.querySelector(".box05").appendChild(bB2);

    let bN2 = document.createElement("div");
    bN2.classList.add("bN2");
    document.querySelector(".box06").classList.add("notfree");
    document.querySelector(".box06").appendChild(bN2);

    let bR2 = document.createElement("div");
    bR2.classList.add("bR2");
    document.querySelector(".box07").classList.add("notfree");
    document.querySelector(".box07").appendChild(bR2);

    let bp1 = document.createElement("div");
    bp1.classList.add("bp");
    document.querySelector(".box10").classList.add("notfree");
    document.querySelector(".box10").appendChild(bp1);

    let bp2 = document.createElement("div");
    bp2.classList.add("bp");
    document.querySelector(".box11").classList.add("notfree");
    document.querySelector(".box11").appendChild(bp2);

    let bp3 = document.createElement("div");
    bp3.classList.add("bp");
    document.querySelector(".box12").classList.add("notfree");
    document.querySelector(".box12").appendChild(bp3);

    let bp4 = document.createElement("div");
    bp4.classList.add("bp");
    document.querySelector(".box13").classList.add("notfree");
    document.querySelector(".box13").appendChild(bp4);

    let bp5 = document.createElement("div");
    bp5.classList.add("bp");
    document.querySelector(".box14").classList.add("notfree");
    document.querySelector(".box14").appendChild(bp5);

    let bp6 = document.createElement("div");
    bp6.classList.add("bp");
    document.querySelector(".box15").classList.add("notfree");
    document.querySelector(".box15").appendChild(bp6);

    let bp7 = document.createElement("div");
    bp7.classList.add("bp");
    document.querySelector(".box16").classList.add("notfree");
    document.querySelector(".box16").appendChild(bp7);

    let bp8 = document.createElement("div");
    bp8.classList.add("bp");
    document.querySelector(".box17").classList.add("notfree");
    document.querySelector(".box17").appendChild(bp8);

    let wR1 = document.createElement("div");
    wR1.classList.add("wR1");
    document.querySelector(".box70").classList.add("notfree");
    document.querySelector(".box70").appendChild(wR1);

    let wR2 = document.createElement("div");
    wR2.classList.add("wR2");
    document.querySelector(".box77").classList.add("notfree");
    document.querySelector(".box77").appendChild(wR2);

    let wN1 = document.createElement("div");
    wN1.classList.add("wN1");
    document.querySelector(".box71").classList.add("notfree");
    document.querySelector(".box71").appendChild(wN1);

    let wN2 = document.createElement("div");
    wN2.classList.add("wN2");
    document.querySelector(".box76").classList.add("notfree");
    document.querySelector(".box76").appendChild(wN2);

    let wB1 = document.createElement("div");
    wB1.classList.add("wB1");
    document.querySelector(".box72").classList.add("notfree");
    document.querySelector(".box72").appendChild(wB1);

    let wB2 = document.createElement("div");
    wB2.classList.add("wB2");
    document.querySelector(".box75").classList.add("notfree");
    document.querySelector(".box75").appendChild(wB2);

    let wQ = document.createElement("div");
    wQ.classList.add("wQ");
    document.querySelector(".box73").classList.add("notfree");
    document.querySelector(".box73").appendChild(wQ);

    let wK = document.createElement("div");
    wK.classList.add("wK");
    document.querySelector(".box74").classList.add("notfree");
    document.querySelector(".box74").appendChild(wK);

    let wp1 = document.createElement("div");
    wp1.classList.add("wp");
    document.querySelector(".box60").classList.add("notfree");
    document.querySelector(".box60").appendChild(wp1);

    let wp2 = document.createElement("div");
    wp2.classList.add("wp");
    document.querySelector(".box61").classList.add("notfree");
    document.querySelector(".box61").appendChild(wp2);

    let wp3 = document.createElement("div");
    wp3.classList.add("wp");
    document.querySelector(".box62").classList.add("notfree");
    document.querySelector(".box62").appendChild(wp3);

    let wp4 = document.createElement("div");
    wp4.classList.add("wp");
    document.querySelector(".box63").classList.add("notfree");
    document.querySelector(".box63").appendChild(wp4);

    let wp5 = document.createElement("div");
    wp5.classList.add("wp");
    document.querySelector(".box64").classList.add("notfree");
    document.querySelector(".box64").appendChild(wp5);

    let wp6 = document.createElement("div");
    wp6.classList.add("wp");
    document.querySelector(".box65").classList.add("notfree");
    document.querySelector(".box65").appendChild(wp6);

    let wp7 = document.createElement("div");
    wp7.classList.add("wp");
    document.querySelector(".box66").classList.add("notfree");
    document.querySelector(".box66").appendChild(wp7);

    let wp8 = document.createElement("div");
    wp8.classList.add("wp");
    document.querySelector(".box67").classList.add("notfree");
    document.querySelector(".box67").appendChild(wp8);

    // function listeninside(e) {
    //   if (e.target === document.getElementById("box00")) {
    //   } else {
    //     let box = document.createElement("div");
    //     e.target.appendChild(box).classList.add("redbg");
    //     console.log("abcde");
    //     document.removeEventListener("click", listeninside);
    //   }
    // }
    // function listen() {
    //   if (document.getElementById("box00").classList.contains("notfree")) {
    //     document.addEventListener("click", listeninside);
    //     console.log("abcd");
    //   }
    //   document.getElementById("box00").removeEventListener("click", listen);
    // }
    // document.getElementById("box00").addEventListener("click", listen);

    // document.getElementById('box01').addEventListener("click",()=>{console.log("abcd");});
    // $(".box01").one("click",(e)=>{console.log(e);})
    // $().one("click",(e)=>{console.log(e.target);})
    var bg;
    function listen(event) {
      if($(event.target).parent().hasClass("notfree")){
        document.getElementById($(event.target).parent().attr('id')).click();
      }
      else if(event.target.classList.contains("notfree")) {
        var element=document.getElementById(event.target.id);
        document.addEventListener("click", listeninside);
        bg=element.firstChild.className;
        element.classList.remove("notfree");
        console.log("in listen");
        element.removeChild(element.childNodes[0]);
      }
      document.removeEventListener("click", listen);
    }
    
    function listeninside(e) {
      let box = document.createElement("div");
      // console.log(e.target.className);
      // console.log("in listeninsides");
      if($(e.target).parent().hasClass("notfree")){
        // console.log("acbd",e.target.appendChild(box).classList.add());
        console.log("if part");
        document.getElementById($(e.target).parent().attr('id')).click();
      }
      else if(e.target.classList.contains("notfree")){
        var element=document.getElementById(e.target.id);
        element.removeChild(element.childNodes[0]);
        e.target.appendChild(box);
        box.classList.add(bg);
        e.target.classList.add("notfree");
        console.log("else if part");
      }
      else{
        e.target.appendChild(box);
        box.classList.add(bg);
        e.target.classList.add("notfree");
        console.log("else part");
      }
      console.log("outside  if else ");
      document.addEventListener("click",listen); 
      document.removeEventListener("click", listeninside);
    }
    document.addEventListener("click",listen);
  });