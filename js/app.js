function result(){
  let convergencia = 0;
	let divergencia = 0;
	var quantidade = 0;
	let array_list = ["ritmo", "dinamismo", "velocidade","habilidade", "letra", "ataque", 
	"remate", "gramas_form", "gramas_posicao", "habitos_graficos", "trajetoria",
	"espontaneidade", "tracos_ligacao", "alinhamento", "momentos_graficos",
	"espaçamentos_graficos", "inclinacao_axial", "proporcionalidade",
	"calibre", "pressao", "gladiolagem", "tendencia_de_punho"];

  calculate(convergencia, divergencia, quantidade, array_list);

}

function calculate(convergencia, divergencia, quantidade, array_list){
	for(var index=0; index < array_list.length; index++) {
		value_a = document.getElementById(`${array_list[index]}`).value;
		value_b = document.getElementById(`${array_list[index]}2`).value;

		if(value_a === value_b && value_a != "" && value_b != ""){
			convergencia ++
			quantidade ++
		}
		if(value_a != value_b){
			divergencia ++
			quantidade ++
			
		}
  }
	console.log("convergencia: " + convergencia)
	console.log("divergencia: "+ divergencia)
	console.log("quantidade: "+ quantidade)

	data_input(quantidade, divergencia, convergencia);
}

function data_input(quantidade, divergencia, convergencia) {
	var conver_percent = 0, diver_percent = 0;
	var conver_result = 0; diver_result = 0;
	const total = 100;
  var convergencia_result = document.getElementById('convergencia');
  convergencia_result.innerHTML = convergencia

	var divergencia_result = document.getElementById('divergencia');
  divergencia_result.innerHTML = divergencia

	var divergencia_result = document.getElementById('divergencia');
  divergencia_result.innerHTML = divergencia

	conver_percent = (total * convergencia)
	diver_percent = conver_percent / quantidade

	conver_result = Math.round(conver_percent / quantidade);
  diver_result = Math.round(total - diver_percent);

	if(isNaN(conver_result)&& isNaN(diver_result)){
		conver_result = 0;
		diver_result = 0;
	}

	var percentual_convergencia = document.getElementById("percentual_convergencia");
  percentual_convergencia.innerHTML = conver_result + "%"

	var percentual_divergencia = document.getElementById("percentual_divergencia");
  percentual_divergencia.innerHTML = diver_result  + "%"

	result_calculate(conver_result, diver_result);
}

function result_calculate(convergencias, divergencias){
	var resultado = document.getElementById('resultado');
  if(convergencias > divergencias){
		resultado.innerHTML = '<div class="alert alert-success" role="alert">CONVERGENTE</div>';
		Swal.fire(
			'CONVERGENTE!',
			`Divergência: ${divergencias}% Convergencia: ${convergencias}%`,
			'success'
		)
  }
	if(convergencias < divergencias){
		resultado.innerHTML = '<div class="alert alert-warning" role="alert">DIVERGENTE</div>';
		Swal.fire(
			'DIVERGÊNTE!',
			`Divergência: ${divergencias}% Convergencia: ${convergencias}%`,
			'warning'
		)
  }
	if(convergencias === divergencias){
	  resultado.innerHTML = '<div class="alert alert-secondary" role="alert">INCONCLUSIVO</div>';
	}
}
