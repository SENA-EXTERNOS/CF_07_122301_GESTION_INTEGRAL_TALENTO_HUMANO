<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5.bloque-fondo2
    .titulo-principal.color-acento-contenido(data-aos="zoom-in-left")
      .titulo-principal__numero
        span 2
      h1 Comunicación en la vinculación laboral

    .row.justify-content-center.align-items-start.mb-5           
      .col-lg-3
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/20.svg', alt='')    
      .col-lg-9
        p(data-aos="fade-down").mb-0 La comunicación es un proceso esencial en el día a día del ser humano. En el ámbito empresarial y, específicamente, en la relación empleador-empleado, esta debe buscar ser eficaz para alcanzar los logros esperados. 

    p(data-aos="fade-down").mb-5 Lo invitamos a ver el siguiente video, donde se nos amplía la temática sobre la comunicación:

    .row.justify-content-center.align-items-center.mb-5           
      .col-lg-12(data-aos="fade-left")     
        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen) 

    p(data-aos="fade-down") Después de identificar qué es la comunicación eficaz y sus principales técnicas, para lograr transmitir un mensaje adecuado, también es importante reconocer los tipos de comunicación, con el fin de saber cuál emplear en determinados momentos.
    p(data-aos="fade-down").mb-5 A continuación, se presentan los diferentes tipos de comunicación:

    .row.justify-content-center.mb-5           
      .col-lg-4.my-3(data-aos="fade-left")
        .tarjeta-avatar
          img.img-a.img-t.img-w(src='@/assets/curso/temas/21.svg' alt='AvatarTop')
          div.text-center.bg2.p-5.h-100
            h4.pt-3.mb-3 Comunicación verbal
            p.mb-0 Su objetivo es la relación de quien genera el mensaje (emisor) y de quien lo recibe (receptor), a través del medio por el cual se recibe dicho mensaje (canal). En este tipo de comunicación se encuentran la oral (transmitida con palabras) y la escrita (transmitida en el papel o en las pantallas).                                 
      .col-lg-4.my-3(data-aos="fade-down")
        .tarjeta-avatar
          img.img-a.img-t.img-w(src='@/assets/curso/temas/22.svg' alt='AvatarTop')
          div.text-center.bg2.p-5.h-100
            h4.pt-3.mb-3 Comunicación no verbal
            p.mb-0 En este caso no se utilizan las palabras. Aquí predominan los gestos, la postura y la corporalidad. Sin decir palabra alguna, también se emiten mensajes.                                    
      .col-lg-4.my-3(data-aos="fade-right")
        .tarjeta-avatar
          img.img-a.img-t.img-w(src='@/assets/curso/temas/23.svg' alt='AvatarTop')
          div.text-center.bg2.p-5.h-100
            h4.pt-3.mb-3 Comunicación participativa
            p.mb-0 Depende de la participación entre emisor y receptor, que es una comunicación individual y la comunicación colectiva en la que intervienen varias personas con la finalidad de dar a conocer un tema en específico; es utilizada en el ámbito publicitario.  
      .col-lg-4.my-3(data-aos="fade-left")
        .tarjeta-avatar
          img.img-a.img-t.img-w(src='@/assets/curso/temas/24.svg' alt='AvatarTop')
          div.text-center.bg2.p-5.h-100
            h4.pt-3.mb-3 Comunicación de acuerdo con el canal
            p.mb-0 En este tipo de comunicación se tiene en cuenta cómo se transmite el mensaje, es decir, por cuál medio; puede ser vía telefónica, plataformas de Internet o medios de comunicación.                                 
      .col-lg-4.my-3(data-aos="fade-right")
        .tarjeta-avatar
          img.img-a.img-t.img-w(src='@/assets/curso/temas/25.svg' alt='AvatarTop')
          div.text-center.bg2.p-5.h-100
            h4.pt-3.mb-3 Comunicación por objetivo
            p.mb-0 Aquí es importante conocer cuál es el objetivo que se espera. En publicidad, para posicionar o vender un bien o un producto. En educación, para entregar un conocimiento. En la política, para dar a conocer las propuestas para convencer a los ciudadanos.

    .row.justify-content-start.align-items-center.mb-5           
      .col-lg-4
        .bgp.p-1(data-aos="fade-right")
          h4(data-aos="fade-down").mb-0 Documentos para la vinculación laboral

    .row.justify-content-center.align-items-start.mb-5           
      .col-lg-2
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/26.svg', alt='')    
      .col-lg-10
        p(data-aos="fade-down").mb-0 Luego de haber identificado cómo la comunicación es fundamental en la relación empleador-empleado, es importante saber solicitar los documentos para la vinculación laboral. En el proceso de elaboración de un contrato de trabajo, se requiere conocer sobre las normas de vinculación, modificación y terminación, así como también los documentos para contratación laboral en la organización, y verificar lo que se solicita al trabajador. En Colombia, al momento de su ingreso en la empresa, puede ser el requisito para la afiliación a la seguridad social, parafiscales, entre otros.

    p(data-aos="fade-down").mb-5 Luego de haber identificado cómo la comunicación es fundamental en la relación empleador-empleado, es importante saber solicitar los documentos para la vinculación laboral. En el proceso de elaboración de un contrato de trabajo, se requiere conocer sobre las normas de vinculación, modificación y terminación, así como también los documentos para contratación laboral en la organización, y verificar lo que se solicita al trabajador. En Colombia, al momento de su ingreso en la empresa, puede ser el requisito para la afiliación a la seguridad social, parafiscales, entre otros.
    
    .tarjeta.tarjeta--azul.p-4.mb-5
      SlyderA(tipo="b")
        .row.justify-content-center.align-items-start.pt-4
          .col-md-4.mb-4.mb-md-0
            h4.mb-3 Tipos de documentos
            p Los documentos que se requieren para la contratación laboral, tanto para empresas públicas como para privadas, son: 
            ul.lista-ul
              li 
                i.fas.fa-angle-right.colorv
                p.mb-0 Copia del documento de identificación.
              li 
                i.fas.fa-angle-right.colorv
                p.mb-0 Hoja de vida.
              li 
                i.fas.fa-angle-right.colorv
                p.mb-0 Copia del acta de grado o diploma de estudios.
              li 
                i.fas.fa-angle-right.colorv
                p.mb-0 Certificados laborales.
              li 
                i.fas.fa-angle-right.colorv
                p.mb-0 Recomendaciones laborales.
              li 
                i.fas.fa-angle-right.colorv
                p.mb-0 Foto.
              li 
                i.fas.fa-angle-right.colorv
                p.mb-0 Otros (los documentos que la empresa contratante solicite).

                    
          .col-md-7
            img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/27.png', alt='') 
        .row.justify-content-center.align-items-start.pt-4
          .col-md-4.mb-4.mb-md-0
            h4.mb-3 Clasificación de los documentos
            p Un documento es un escrito o registro materializado en papel, llevado a cabo por una persona u empresa. Se presenta de forma física o digital, para acreditar la información. Es importante aclarar que la finalidad de los documentos es la de almacenar la información para ser consultada en cualquier momento.
            p Los documentos, se pueden clasificar según su formato y su uso.
 
            ul.lista-ul
              li 
                i.fas.fa-angle-right.colorv
                p.mb-0 #[b Según su formato:] cómo se presenta el contenido del documento, ya sea texto, imágenes, auditivos o audiovisuales. 
              li 
                i.fas.fa-angle-right.colorv
                p.mb-0 #[b Según su uso:] carácter público o privado.
                    
          .col-md-7
            img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/28.png', alt='')  
        .row.justify-content-center.align-items-start.pt-4
          .col-md-4.mb-4.mb-md-0
            h4.mb-3 Características de los documentos
            p Las siguientes son las características para que los documentos cumplan con lo que se requiere: 
            ul.lista-ul
              li 
                i.fas.fa-angle-right.colorv
                p.mb-0 #[b Autenticidad y originalidad:] es un principio básico de todo documento, se debe acreditar la autoría y fecha de creación.
              li 
                i.fas.fa-angle-right.colorv
                p.mb-0 #[b Legible:] el documento debe ser de fácil lectura para que el lector pueda comprenderlo.
              li 
                i.fas.fa-angle-right.colorv
                p.mb-0 #[b Inalterable:] que se garantice la integridad del documento, no debe ser modificado.
              li 
                i.fas.fa-angle-right.colorv
                p.mb-0 #[b Valor probatorio:] proporciona información sobre hechos o trámites, con la finalidad de tener un interés testimonial.
              li 
                i.fas.fa-angle-right.colorv
                p.mb-0 #[b Accesible:] que se pueda encontrar tanto físico, como electrónico.
              li 
                i.fas.fa-angle-right.colorv
                p.mb-0 #[b Verificable:] el documento debe permitir comprobar la veracidad y autenticidad.
              li 
                i.fas.fa-angle-right.colorv
                p.mb-0 #[b Vigente:] el documento debe estar actualizado a la fecha de entrega.
                    
          .col-md-7
            img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/29.png', alt='')                                       
</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
