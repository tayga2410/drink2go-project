var slider=document.getElementById("range-slider");slider&&noUiSlider.create(slider,{start:[0,900],connect:!0,step:.5,range:{min:[0],max:[1e3]}});const input0=document.getElementById("input-0"),input1=document.getElementById("input-1"),inputs=[input0,input1];slider.noUiSlider.on("update",(function(e,t){inputs[t].value=Math.round(e[t])}));var inputElement=document.getElementById("input-0");inputElement.style.color="grey",inputElement.addEventListener("input",(function(){""!==inputElement.value.trim()?inputElement.style.color="black":inputElement.style.color="grey"}));