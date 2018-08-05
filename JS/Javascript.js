function Calc(ope) {
	switch(ope)
	{
		case 'a' : window.lblR.innerHTML = eval(window.txtnum1.value) + eval(window.txtnum2.value); break;
		case 'b' : window.lblR.innerHTML = eval(window.txtnum1.value) - eval(window.txtnum2.value); break;
		case 'c' : window.lblR.innerHTML = eval(window.txtnum1.value) / eval(window.txtnum2.value); break;
		case 'd' : window.lblR.innerHTML = eval(window.txtnum1.value) * eval(window.txtnum2.value); break;
		case 'e' : window.lblR.innerHTML = eval(window.txtnum1.value) % eval(window.txtnum2.value); break;
		case 'f' : window.lblR.innerHTML = Math.cos(txtnum1.value); break;
		case 'g' : window.lblR.innerHTML = Math.sin(txtnum1.value); break;
		case 'h' : window.lblR.innerHTML = Math.tan(txtnum1.value); break;
		case 'j' : window.lblR.innerHTML = Math.log(txtnum1.value); break;
		case 'k' : window.lblR.innerHTML = Math.pow(txtnum1.value, txtnum2.value); break;
		case 'l' : window.lblR.innerHTML = Math.sqrt(txtnum1.value); break;
		case 'm' : window.lblR.innerHTML = Math.exp(txtnum1.value); break;
		case 'n' : window.lblR.innerHTML = Math.min(txtnum1.value, txtnum2.value); break;
		case 'o' : window.lblR.innerHTML = Math.max(txtnum1.value, txtnum2.value); break;
		case 'p' : window.lblR.innerHTML = Math.abs(txtnum1.value); break;
		case 'u' : window.lblR.innerHTML = Math.cbrt(txtnum1.value); break;
		case 't' : window.lblR.innerHTML = Math.round(txtnum1.value); break;
		case 'r' : window.lblR.innerHTML = Math.floor(txtnum1.value); break;
		case 'q' : window.lblR.innerHTML = Math.ceil(txtnum1.value); break;
		case 'i' : window.lblR.innerHTML = Math.imul(txtnum1.value, txtnum2.value); break;
	}
}