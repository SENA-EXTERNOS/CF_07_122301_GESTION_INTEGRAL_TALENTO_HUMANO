<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5.bloque-fondo5
    .titulo-principal.color-acento-contenido(data-aos="zoom-in-left")
      .titulo-principal__numero
        span 5
      h1 Dotación
    .row.justify-content-center.align-items-start.mb-5           
      .col-lg-4
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/54.png', alt='')    
      .col-lg-8
        p(data-aos="fade-down") La dotación laboral se refiere a las herramientas, insumos o lo que se requiera para desempeñar las funciones en cada puesto de trabajo. Para llevarlo a cabo, la empresa suministra la vestimenta o bonos que les deben ser entregados a los trabajadores. Este tipo de entregas están registradas en la normativa y deben darse para cumplir con sus funciones y por el bienestar de sus empleados, con el objetivo que se implemente una adecuada imagen de la empresa y por parte de los trabajadores se fortalezca el sentido de pertenencia hacia esta. Lo invitamos para que consulte en el material complementario, los siguientes artículos del Código Sustantivo del Trabajo donde se especifica este tema: artículos 230 a 235 del Código Sustantivo del Trabajo, y artículos 7 al 10 de la Ley 11 de 1984. 

        .cajon.color-primario.p-4(data-aos="flip-down")
          p(data-aos="fade-down").mb-0 De acuerdo con el Código Sustantivo del Trabajo, en su Artículo 230, se habla del #[b suministro de calzado y vestido de labor:] todo empleador que habitualmente ocupe uno o más trabajadores permanentes, deberá suministrar cada cuatro meses, en forma gratuita, un par de zapatos y un vestido de labor al trabajador, cuya remuneración mensual sea hasta dos meses el salario mínimo más alto vigente. Tiene derecho a esta prestación el trabajador que, en las fechas de entrega de calzado y vestido, haya cumplido más de tres meses al servicio del empleador.  

    .row.justify-content-center.align-items-center.mb-5           
      .col-lg-10
        .tarjeta.color-secundario.p-3.mb-5
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-1
              img(src="@/assets/curso/temas/55.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  h4.mb-1 Suministro de calzado y vestido de labor a los trabajadores
                  p.mb-0 Para ampliar esta información, diríjase al material complementario para visualizar el video sobre el suministro de calzado y vestido de labor a los trabajadores.
 
                .col-sm-auto
                  a.boton.color-acento-botones(href="https://www.youtube.com/watch?v=UxRUnnUJZ0w" target="_blank")
                    span.ts Ver video
                    i.ts.fas.fa-play-circle 

    .row.justify-content-start.align-items-center.mb-5           
      .col-lg-6
        .bgp.p-1(data-aos="fade-right")
          h4(data-aos="fade-down").mb-0 Tipos de dotación, según el cargo y la organización 

    p(data-aos="fade-down") Como se ha explicado anteriormente, la dotación es la indumentaria entregada por la empresa, para dar uniformidad o reconocimiento a los empleados, y para el desempeño de determinadas funciones por parte de estos. Este tipo de dotación es una prestación social, consistente en la entrega gratuita y material de un vestido y un calzado a cargo del empleador a sus empleados, para el desempeño de sus funciones. 
    p(data-aos="fade-down").mb-5 Conforme con el cargo que debe realizar cada uno de los trabajadores y el sector en el cual se desempeña, se realiza la entrega de la dotación adecuada.
    .row.justify-content-center.align-items-center.mb-5           
      .col-lg-10
        ImagenInfograficaC.color-acento-botones.mb-5(data-aos="zoom-in")
          template(v-slot:imagen)
            figure
              img.img-a.img-t(src='@/assets/curso/temas/56.png', alt='')

          .tarjeta.color-primario.p-3(x="40%" y="20%" numero="+")
            p.mb-0 Para este tipo de trabajo, es necesario usar la tela antifluido y antimicrobial, para mejor protección de los profesionales.
          .tarjeta.color-primario.p-3(x="60%" y="20%" numero="+")
            p.mb-0 Para este tipo de trabajo, es necesario calzado antideslizante y telas antifluidos, además de gorros de cocina, delantales, tapabocas y guantes.   
          .tarjeta.color-primario.p-3(x="40%" y="78%" numero="+")
            p.mb-0 Para este tipo de trabajo se debe dotar con uniformes de mayor resistencia, calidad en telas y doble costura para mayor durabilidad.
          .tarjeta.color-primario.p-3(x="60%" y="78%" numero="+")
            p.mb-0 Las dotaciones más utilizadas en este sector son: camisas y pantalones de dril, camibusos, jeans clásicos, overoles, camisetas y delantales, según el grado de dificultad de la ocupación del empleado. 
</template>

<script>
import ImagenInfograficaC from '../components/ImagenInfograficaC.vue'
export default {
  name: 'Tema5',
  components: {
    ImagenInfograficaC,
  },
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
