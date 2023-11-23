
let caluCulate = document.getElementById("submit");



caluCulate.addEventListener("click" , volume_sphere);

function volume_sphere(){
	event.preventDefault();
	let radius = document.getElementById("radius");
	let volume = document.getElementById("volume");

	let rValue = parseFloat(radius.value);

	if(!isNaN(rValue))
	{
		
		let volValue = (4/3) * Math.PI * Math.pow(rValue,3);
      volume.value = volValue.toFixed(4);
	}
	else
	{
	volume.value="NaN"; 
	}
}
