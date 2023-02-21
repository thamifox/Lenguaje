

typeof function () {}; // 'function'

//Script de mi pagina web
    (function () {
    console.log("Visualizar consola:");
    })();

//Funcion para login de usuario

// parametro: nombre de la coockie, calor de la cookie, dias de expiración)

function setCookie(cname, cvalue, exdays) { 
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+ d.toUTCString();
    document.cookie = cname + "=" + cvalue + "; " + expires;
}


function checkCookie(cname) {
    var cookieName=getCookie(cname);
    if (cookieName!="") {
        alert("Welcome again " + cookieName);
        return true;
    } else {
       /* cookieName = prompt("Please enter your name:", "");
        if (cookieName != "" && cookieName != null) {
            setCookie("username", cookieName,1);
        ;    
        }*/
        ;
    }
}


function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i = 0; i <ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length,c.length);
        }
    }
    return "";
}

function comprobarUsuario(correo,password){
    alert("LLega usuario "+ correo +"-----" +password);
    console.log(correo);

    console.log(password);
    var httpRequest;
	if (window.XMLHttpRequest)
	{
		//El explorador implementa la interfaz de forma nativa
		httpRequest = new XMLHttpRequest();
	} 
	else if (window.ActiveXObject)
	{
		//El explorador permite crear objetos ActiveX para exploradores antiguos
		try {
			httpRequest = new ActiveXObject("MSXML2.XMLHTTP");
		} catch (e) {
			try {
				httpRequest = new ActiveXObject("Microsoft.XMLHTTP");
			} catch (e) {}
		}
	}
	if (!httpRequest)
	{
		alert("No ha sido posible crear una instancia de XMLHttpRequest");
	}
 

// Abrimos el archivo que esta alojado en el servidor usuarios.xml
httpRequest.open("GET","docsup/usuarios.xml",false);
httpRequest.send();
 
// Obtenemos un objeto XMLDocument con el contenido del archivo xml del servidor
xmlDoc=httpRequest.responseXML;
console.log(httpRequest.responseText);

 

var usuarios=xmlDoc.getElementsByTagName("usuario");
console.log(usuarios);
 
// Hacemos un bucle por todos los elementos usuarios
for(var i=0;i<usuarios.length;i++)
{
	// Del elemento usuarios, obtenemos del primer elemento denominado "user" y del segundo llamado "pwd"
	user=usuarios[i].getElementsByTagName("user")[0].childNodes[0].nodeValue;
 	pwd=usuarios[i].getElementsByTagName("pwd")[0].childNodes[0].nodeValue;
     
    if (user===correo && pwd===password)  { 
        console.log(cumplecondicion);
        $('#usuarioLogeado').html($('#email').val()); $('#btn_logout').show();$('#btn_login').hide();  
        $('#div_validacion').hide();
        setCookie('username_thami', $('#email').val(), 1); 
       $('#perfil').show();
       varencontrado=true;
       break;
    } 

    }
   
    if (!encontrado) {alert("usuario encontrado");}
	/*document.write("<div>");
		document.write("<span>");
		document.write(user);
		document.write("</span><span>");
		document.write(pwd);
		document.write("</span>");
	document.write("</div>");*/
}
