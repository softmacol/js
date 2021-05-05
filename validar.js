   $(document).ready(function (){
           $(".solo-numero").keyup(function (){
               this.value = (this.value + "").replace(/[^0-9]/g, "");
          });
          $(".solo-punto").keyup(function (){
               this.value = (this.value + "").replace(/[^0-9.]/g, "");
          });
          $(".solo-letra").keyup(function (){
               if (this.value.match(/[^a-zA-Z áéíóúÁÉÍÓÚüÜ]/g)){
                   this.value = (this.value + "").replace(/[^a-zA-Z áéíóúÁÉÍÓÚüÜ]/g, "");
               }
          });
          $(".solo-dire").keyup(function (){
               if (this.value.match(/[^A-Za-zñáéíóúÑÁÉÍÓÚüÜ0-9;\#\s\-]/g)){
                   this.value = (this.value + "").replace(/[^A-Za-zñáéíóúÑÁÉÍÓÚüÜ0-9;\#\s\-]/g,"");
               }
          });
   });