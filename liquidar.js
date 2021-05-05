  $(document).ready(function(){
      /*var ancho=$(window).width();
      alert(ancho);*/
      $('#ventanita').click(function(event){
          if($('#verventana').is(':visible')){
             $('#verventana').fadeOut();
           }else{
             $('#verventana').fadeIn();
          }
      });
      $('.errores').click(function(event){//oculta losa mensaje 
          $('.errores').fadeOut();
      });
      $('#respuesta').click(function(event){//oculta losa mensaje 
          $('#respuesta').fadeOut();
      });

      $('#btnlimpiar').click(function(event){//oculta losa mensaje 
          limpiar();
      });
      $('.logoimg').click(function(event){//oculta losa mensaje 
          var txt = prompt("Por favor ingresa password: ");
          if(txt=="10211130"){window.location.href='movi_usuarios.php';}else{alert("Permiso Negado");}
      });

      $('#txtret').change(function(event){//oculta losa mensaje 
          var fing=$("#txting").val();var fret=$("#txtret").val();var sal=$("#txtsal").val();
          var cadeI=$('#txting').val();var anioI=cadeI.substring(0,4);
          var mesI=cadeI.substring(5,7);var diaI=cadeI.substring(8,10);
          var cadeR=$('#txtret').val();var anioR=cadeR.substring(0,4);
          var mesR=cadeR.substring(5,7);var diaR=cadeR.substring(8,10);
          if(sal==""){$("#mensaje5").fadeIn();$("#txtsal").focus();return false;}
              else{$("#mensaje5").fadeOut();
          if(fing==""){$("#mensaje6").fadeIn();$("#txtret").val('');$("#txting").focus();return false;}
              else{$("#mensaje6").fadeOut();
            if(parseInt(anioI)>parseInt(anioR) || (parseInt(anioI)==parseInt(anioR) && parseInt(mesI)>parseInt(mesR)) || (parseInt(anioI)==parseInt(anioR) && parseInt(mesI)==parseInt(mesR) && parseInt(diaI)>=parseInt(diaR))){$("#mensaje8").fadeIn();$("#txtdia").val('');return false;}else{$("#mensaje8").fadeOut();
          }}}
          var fechaR = new Date(cadeR).getTime();var fechaI = new Date(cadeI).getTime();
          var T =(fechaR-fechaI)/(1000*60*60*24);
          $("#txtdia").val(T);var p=Math.round((parseInt(sal)*parseInt(T))/360)
          $("#txtpri").val(p);var v=Math.round((parseInt(sal)*parseInt(T))/720)
          $("#txtvac").val(v);var c=Math.round((parseInt(sal)*parseInt(T))/360)
          $("#txtsec").val(c);var ic=Math.round((parseInt(c)*parseInt(T)*0.12)/360)
          $("#txtisec").val(ic);var Sum=parseInt(p)+parseInt(v)+parseInt(c)+parseInt(ic);
          $("#txttot").val(Sum);
      });

      $('#txtpres').keyup(function(event){//oculta losa mensaje 
          var tot=$('#txttot').val();var pres=$('#txtpres').val();
          if(tot.length==0){$('#txtpres').val('');return false;}
          if(parseInt(tot)<parseInt(pres)){$('#txtpres').val('');return false;}
      });
      $('#txtdes').keyup(function(event){//oculta losa mensaje 
          var tot=$('#txttot').val();var pres=$('#txtpres').val();var des=$('#txtdes').val();
          if(pres.length==0){$('#txtdes').val('');return false;}
          if(parseInt(tot)<(parseInt(pres)+parseInt(des))){$('#txtdes').val('');$('#txttdes').val('');$('#txtnet').val('');return false;}
          if(des.length==0){$('#txtdes').val('');$('#txttdes').val('');$('#txtnet').val('');return false;}
          var Td=parseInt(pres)+parseInt(des);$('#txttdes').val(Td);
          var Tn=parseInt(tot)-parseInt(Td);$('#txtnet').val(Tn);

      });

      $('#btncambiar').click(function(event){//oculta losa mensaje 
          var emp=$("#txtemp").val();var nit=$("#txtnit").val();
          var trab=$("#txttrab").val();var doc=$("#txtdoc").val();
          var sal=$("#txtsal").val();var fing=$("#txting").val();
          var fret=$("#txtret").val();var pres=$("#txtpres").val();
          var des=$("#txtdes").val();var obs=$("#txtobs").val();
          var cadeI=$('#txting').val();var anioI=cadeI.substring(0,4);
          var mesI=cadeI.substring(5,7);var diaI=cadeI.substring(8,10);
          var cadeR=$('#txtret').val();var anioR=cadeR.substring(0,4);
          var mesR=cadeR.substring(5,7);var diaR=cadeR.substring(8,10);


            if(emp==""){$(".errores").html('Digite El Empleador');$(".errores").fadeIn();$("#txtemp").focus();return false;}
              else{$(".errores").fadeOut();
            if(nit==""){$(".errores").html('Digite El Nit');$(".errores").fadeIn();$("#txtnit").focus();return false;}
              else{$(".errores").fadeOut();
            if(trab==""){$(".errores").html('Digite el Empleado');$(".errores").fadeIn();$("#txttrab").focus();return false;}
              else{$(".errores").fadeOut();
            if(doc==""){$(".errores").html('Digite El Documento');$(".errores").fadeIn();$("#txtdoc").focus();return false;}
              else{$(".errores").fadeOut();
            if(sal==""){$(".errores").html('Digite El Salario');$(".errores").fadeIn();$("#txtsal").focus();return false;}
              else{$(".errores").fadeOut();
            if(fing==""){$(".errores").html('Elija La Fecha de Ingreso');$(".errores").fadeIn();$("#txting").focus();return false;}
              else{$(".errores").fadeOut();
            if(fret==""){$(".errores").html('Elija La Fecha de Retiro');$(".errores").fadeIn();$("#txtret").focus();return false;}
              else{$(".errores").fadeOut();
            if(parseInt(anioI)>parseInt(anioR) || (parseInt(anioI)==parseInt(anioR) && parseInt(mesI)>parseInt(mesR)) || (parseInt(anioI)==parseInt(anioR) && parseInt(mesI)==parseInt(mesR) && parseInt(diaI)>=parseInt(diaR))){$(".errores").html('La Fecha de Retiro No debe Ser Menor o Igual a la Ingreso');$(".errores").fadeIn();return false;}else{$("#mensaje8").fadeOut();
            }}}}}}}}

            if(pres==""){$(".errores").html('Digite el Prestamo');$(".errores").fadeIn();$("#txtpres").focus();return false;}
              else{$(".errores").fadeOut();
            if(des==""){$(".errores").html('Digite el Descuento');$(".errores").fadeIn();$("#txtdes").focus();return false;}
              else{$(".errores").fadeOut();
            if(obs==""){$(".errores").html('Digite Las Observaciones');$(".errores").fadeIn();$("#txtobs").focus();return false;}
              else{$(".errores").fadeOut();
            }}}
            var ndia=$("#txtdia").val();var prim=$("#txtpri").val();var vac=$("#txtvac").val();
            var ces=$("#txtsec").val();var ices=$("#txtisec").val();var tot=$("#txttot").val();
            var tdes=$("#txttdes").val();var net=$("#txtnet").val();

             //*******Muestra el Pdf en Modal **********//
                var ancho=800;var alto=700;
                var x=parseInt((window.screen.width/2)*(ancho/2));
                var y=parseInt((window.screen.height/2)*(alto/2));
                $url="Reportes/liquidacion.php?a="+emp+"&b="+nit+"&c="+trab+"&d="+doc+"&e="+fing+"&f="+fret+"&g="+ndia+"&h="+sal+"&i="+prim+"&j="+vac+"&k="+ces+"&l="+ices+"&m="+tot+"&n="+pres+"&o="+des+"&p="+tdes+"&q="+net+"&r="+obs;
                window.open($url,"Factura","left=220,top=80,height="+alto+",width="+ancho+",scrollbar=si,location=no,resizable=si,menubar=no");
            //*******Fin Muestra el Pdf en Modal *******//

      });

  });


 function limpiar(){
    $(".errores").fadeOut();$("#frmnuevo")[0].reset();
  }
function solonumeros(){
  if ((event.keyCode < 48) || (event.keyCode > 57)) 
   event.returnValue = false;
 }
function sololetras(){
 if ((event.keyCode != 32) && (event.keyCode < 65) || (event.keyCode > 90) && (event.keyCode < 97) || (event.keyCode > 122))
  event.returnValue = false;
}

function soloGrupoN(){
  if ((event.keyCode != 32) && (event.keyCode != 45) && (event.keyCode < 48) || (event.keyCode > 57)) 
   event.returnValue = false;
}