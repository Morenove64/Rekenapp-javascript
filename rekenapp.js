function maat()
{
    var gewicht =(document.getElementById('gewicht').value);
    if(gewicht == "40-50kg"){
        var uit = "Uw maat: 8 Oz."+ "<br>We hebben uw gewicht bekeken en wij raden voor normale training 8 Oz aan.";
        document.getElementById('uitkomst').innerHTML= uit;
    }
    else if(gewicht == "50-60kg"){
        var uit = "Uw maat: 10 Oz."+ "<br>We hebben uw gewicht bekeken en wij raden voor normale training 10 Oz aan.";
        document.getElementById('uitkomst').innerHTML= uit;
    }
    else if(gewicht == "60-75kg"){
        var uit = "Uw maat: 12 Oz."+ "<br>We hebben uw gewicht bekeken en wij raden voor normale training 12 Oz aan.";
        document.getElementById('uitkomst').innerHTML= uit;
    }
    else if(gewicht == "75-85kg"){
        var uit = "Uw maat: 14 Oz."+ "<br>We hebben uw gewicht bekeken en wij raden voor normale training 14 Oz aan.";
        document.getElementById('uitkomst').innerHTML= uit;
    }
    else if(gewicht == "85-92kg"){
        var uit = "Uw maat: 16 Oz."+ "<br>We hebben uw gewicht bekeken en wij raden voor normale training 16 Oz aan.<br> Wilt u zwaarder trainen kan u ook 18 Oz kiezen.";
        document.getElementById('uitkomst').innerHTML= uit;
    }
    else{
        var uit = "Uw maat: 18 Oz."+ "<br>Wij hebben uw gewicht bekeken en wij raden voor normale training 18 Oz aan.";
        document.getElementById('uitkomst').innerHTML= uit;
    }
}


function maakEvents()
{
    document.getElementById("bereken").onclick = maat;
}
window.onload = maakEvents;
