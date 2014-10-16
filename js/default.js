var yaw,pitch,roll;

var render = function () {
	requestAnimationFrame(render);

   //To Add Rendering Function

	yaw = Number(document.getElementById("yaw").innerText); 
    pitch = Number(document.getElementById("pitch").innerText);
    roll = Number(document.getElementById("roll").innerText);

    console.log(yaw + " " + pitch + " " + roll);
};
render();