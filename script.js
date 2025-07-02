
    $(document).ready(function() {
      // Botón para activar la lectura de voz
      $('#playbutton').click(function() {
        $('.audio')[0].play();
      });
      // Botón para deactivar la lectura de voz
      $('#stopbutton').click(function() {
        $('audio')[0].play();
      });
    });

    //ACCEIBILIDAD
    $(window).load(function() {
        // Variable para saber si la lectura por voz está activa
        var activo = 0;
        // Al hacer clic en el botón activar, activa la lectura por voz
        playbutton.onclick = function() {
        activo = 1;
        //Guarda el estado
        localStorage.setItem("activo1", JSON.stringify(activo));
      };

      // Cuando el mouse pasa sobre textos, si está activo, se lee el contenido
      $('h1,h2,h3,h4,h5,h6,form,p,span,a,b,i,strong').mouseover(function() {
        if (activo == 1) {
          responsiveVoice.speak($(this).text());
          //Detiene la lectura
          responsiveVoice.cancel();
        }
      });

      // Cuando el mouse pasa sobre una imagen, lee el título si está activo
      $('img').mouseover(function() {
        if (activo == 1) {
          responsiveVoice.speak($(this).attr('title'));
          //Detiene la lectura
          responsiveVoice.cancel();
        }
      });

      // Recupera el estado anterior desde localStorage
      var activo = JSON.parse(localStorage.getItem("activo1"));
      // Al hacer clic en el botón de desactivar, desactiva la lectura por voz
      stopbutton.onclick = function() {
        activo = 0;
        //Detiene la lectura
        responsiveVoice.cancel();
        localStorage.setItem("activo1", JSON.stringify(0));
      };

      // Establece la voz por defecto
      var voicelist = responsiveVoice.getVoices();
      responsiveVoice.setDefaultVoice("Spanish Latin American Female");
    });
