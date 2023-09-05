function Cotizar(){
    let n_personas = parseFloat(document.getElementById("people").value);
    let vl_personas = parseFloat(document.querySelector("#value").value);
    let n_dias = parseFloat(document.getElementById("days").value);
    let resultado=document.getElementById("result");
    
    if(!n_personas || !vl_personas || !n_dias){
        alert('Los campos son obligatorios')
    }
    else{
     if(n_personas>6){
        let total= (n_personas*vl_personas*n_dias)
        let totalfinal= total - (total*0.20)
        resultado.textContent=("El valor de su cotización con descuento del 20% es $"  + totalfinal.toLocaleString())
     }
     else{

        let total= (n_personas*vl_personas*n_dias)
        let totalfinal= total - (total*0.05)
        resultado.textContent=("El valor de su cotización con descuento del 5% es $"  + totalfinal.toLocaleString())

     }  
    }
}
