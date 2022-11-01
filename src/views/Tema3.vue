<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5.bloque-fondo3
    .titulo-principal.color-acento-contenido(data-aos="zoom-in-left")
      .titulo-principal__numero
        span 3
      h1 Contratación laboral

    .row.justify-content-center.align-items-start.mb-5           
      .col-lg-2
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/31.svg', alt='')    
      .col-lg-10
        p(data-aos="fade-down").mb-0 La contratación laboral es un acuerdo entre un trabajador y un empleador. El primero, presta su capacidad productiva y el segundo lo remunera por esto. Esta relación es regulada mediante los artículos 22 al 75 del Código Sustantivo del Trabajo. 

    p(data-aos="fade-down").mb-5 El CST define qué es contrato laboral, cuáles son los elementos de dotación y los tipos de contratos.

    .row.justify-content-center.align-items-start.mb-5
      .col-lg-8 
        AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta bg6")
          .row.justify-content-center.align-items-center(titulo="Contrato laboral")
            .col-10
              P Según el #[b artículo 22]: “el contrato laboral es aquel por medio del cual una persona natural se obliga a prestar un servicio a otra persona, natural o jurídica, bajo continuada subordinación y a cambio de una remuneración”.

          .row.justify-content-center.align-items-center(titulo="Dotación")
            .col-10
              P El #[b artículo 23], precisa cuáles son los elementos esenciales para la existencia de un contrato de trabajo: prestación personal del servicio, subordinación y remuneración. 
          .row.justify-content-center.align-items-center(titulo="Tipos de contratos")
            .col-10
              P Por otro lado, la legislación laboral estipula el contrato a término fijo, indefinido, ocasional y por obra o labor. Si bien en cada uno de ellos el trabajador tiene derecho a las mismas acreencias laborales, existen determinados aspectos que los diferencian o los rigen y que el interesado por estos temas debe aprender para no incurrir en inconsistencias o errores.
                                                  
      .col-lg-4
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/32.png', alt='')

    .row.justify-content-start.align-items-center.mb-5           
      .col-lg-3
        .bgp.p-1(data-aos="fade-right")
          h4(data-aos="fade-down").mb-0 Características

    .cajon.color-primario.p-4.mb-5(data-aos="flip-down")
      p(data-aos="fade-down").mb-0 Como ya se mencionó, el artículo 22 del Código Sustantivo del Trabajo, en el literal 1, establece que: el contrato de trabajo es un acuerdo de voluntades, verbal o escrito, por medio del cual una persona natural se obliga a prestar un servicio personal a favor de otra (que puede ser natural o jurídica), bajo subordinación y a cambio de una remuneración salarial.   

    p(data-aos="fade-down").mb-5 Esto significa que este tipo de contrato tiene 7 características, las cuales son:
    
    .row.justify-content-center.align-items-center.mb-5           
      .col-lg-10
        ImagenInfografica.color-acento-botones.mb-5
          template(v-slot:imagen)
            figure
              img(src='@/assets/curso/temas/33.svg', alt='características')


          .tarjeta.color-acento-botones(x="19.3%" y="21.5%" numero="+")
            .row.justify-content-center.align-items-stretch         
              .col-auto.bg3.p-3
                img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/34.svg', alt='')
              .col.bg4.p-3
                p.mb-0 Es decir, se perfecciona con el consentimiento de las partes. 

          .tarjeta.color-acento-botones(x="36%" y="25%" numero="+")
            .row.justify-content-center.align-items-stretch         
              .col-auto.bg3.p-3
                img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/35.svg', alt='')
              .col.bg4.p-3
                p.mb-0 Al suponer que las partes se obligan de manera recíproca.   

          .tarjeta.color-acento-botones(x="56%" y="40%" numero="+")
            .row.justify-content-center.align-items-stretch         
              .col-auto.bg3.p-3
                img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/36.svg', alt='')
              .col.bg4.p-3
                p.mb-0 Se refiere a que las obligaciones pactadas son ciertas y determinadas, es decir, el empleador conoce la prestación del servicio que recibirá, y el trabajador la remuneración que percibirá como salario.    

          .tarjeta.color-acento-botones(x="28%" y="47%" numero="+")
            .row.justify-content-center.align-items-stretch         
              .col-auto.bg3.p-3
                img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/37.svg', alt='')
              .col.bg4.p-3
                p.mb-0 Porque tiene vida autónoma o independiente, sin que se requiera otro tipo de contrato para que surta efecto legal. 

          .tarjeta.color-acento-botones(x="60%" y="62%" numero="+")
            .row.justify-content-center.align-items-stretch         
              .col-auto.bg3.p-3
                img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/38.svg', alt='')
              .col.bg4.p-3
                p.mb-0 Es decir se ejecuta en la medida en que las obligaciones se van cumpliendo con el tiempo.  

          .tarjeta.color-acento-botones(x="18.5%" y="72%" numero="+")
            .row.justify-content-center.align-items-stretch         
              .col-auto.bg3.p-3
                img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/39.svg', alt='')
              .col.bg4.p-3
                p.mb-0 #[b Nominado], porque la ley le asignó una denominación especial.  

          .tarjeta.color-acento-botones(x="47.5%" y="72%" numero="+")
            .row.justify-content-center.align-items-stretch         
              .col-auto.bg3.p-3
                img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/40.svg', alt='')
              .col.bg4.p-3
                p.mb-0 #[b Oneroso], porque se dan contraprestaciones de contenido económico.

    .row.justify-content-start.align-items-center.mb-5           
      .col-lg-3
        .bgp.p-1(data-aos="fade-right")
          h4(data-aos="fade-down").mb-0 Tipos y principios 

    p(data-aos="fade-down") La legislación laboral fija diferentes tipos de contratos de trabajo: término fijo, término indefinido, por obra o labor determinada y accidental u ocasional. En términos generales, contienen los mismos efectos, o sea, su elaboración se efectúa con formalidades similares, y a las partes les asisten los mismos derechos y deberes bajo la celebración de cualquiera de estas modalidades. No obstante, se diferencian particularmente, por sus términos de duración y formas de terminación.

    p(data-aos="fade-down").mb-5 La organización debe identificar los tipos de contratos existentes, para determinar cuáles son los que requiere para cumplir con las metas.

    .row.justify-content-center.align-items-start.mb-5
      .col-lg-4
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/41.png', alt='')      
      .col-lg-8 
        AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta bg6")
          .row.justify-content-center.align-items-center(titulo="Término fijo")
            .col-10
              P Previsto en el #[b artículo 46] del CST, este tipo de contrato debe constar por escrito. Se caracteriza porque su duración corresponde al período en él pactado, cuyo periodo no puede ser superior a tres años; consta por escrito e implica un preaviso para su terminación. El empleador debe notificarlo con no menos de treinta días de anticipación. 
              P Si este preaviso no se notifica con esta antelación, el contrato se prorrogará de manera automática por un término igual al inicialmente pactado.
 
          .row.justify-content-center.align-items-center(titulo="Término indefinido")
            .col-10
              P Este se encuentra previsto a través del #[b artículo 47] del CST. Puede ser celebrado de forma verbal o escrita y su duración es indefinida: se conoce la fecha de inicio, pero no la de su finalización. Para este tipo de contrato, debido a su particularidad, no proceden las prórrogas o entrega del preaviso por parte del empleador. Esto último supone que puede darse por terminado en cualquier momento. 
          .row.justify-content-center.align-items-center(titulo="Por obra o labor determinada")
            .col-10
              P Previsto en el #[b artículo 45] del CST, tiene lugar cuando un empleador contrata a alguien para desarrollar una actividad determinada. En estos casos, la duración del contrato no puede establecerse, pues no se tiene conocimiento de la fecha en la que se terminará la ejecución de la labor; sin embargo, esta característica no lo convierte en un contrato indefinido, pues terminará una vez se cumpla con la labor o actividad que dio origen al acuerdo. 
          .row.justify-content-center.align-items-center(titulo="Accidental, ocasional o transitorio")
            .col-10
              P El #[b artículo 6 ]del CST señala que el trabajo ocasional, accidental o transitorio, no es mayor a un mes y es un trabajo en el que se ejecutan diferentes labores a las del objeto económico o social de la empresa o del empleador. Este tipo de contrato surge por eventos extraordinarios, en los que el empleador requiere suplir una necesidad momentánea, por lo que la labor a ejecutar dependerá de las exigencias del momento, lo que justifica su brevedad.               
                                                  
    .row.justify-content-start.align-items-center.mb-5           
      .col-lg-3
        .bgp.p-1(data-aos="fade-right")
          h4(data-aos="fade-down").mb-0 Requisitos para la contratación laboral

    .row.justify-content-center.align-items-start.mb-5           
      .col-lg-2
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/42.svg', alt='')    
      .col-lg-10
        p(data-aos="fade-down").mb-0 En un contrato laboral, ambas partes deben cumplir con una serie de requisitos para que se logren las propuestas planteadas al momento de firmarlo. 

    p(data-aos="fade-down").mb-5 Ambas partes deben cumplir sus requisitos, los cuales son:

    .row.justify-content-center.align-items-start.mb-5
      .col-lg-8 
        AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta bg6")
          .row.justify-content-center.align-items-center(titulo="En el caso del empleador")
            .col-10
              P
              ul.lista-ul
                li 
                  i.fas.fa-angle-right.colorv
                  p.mb-0 Ofrecerle un ambiente sano al empleado, implementando todos los procesos y procedimientos del sistema de seguridad y salud en el trabajo, siempre y cuando el trabajador labore de forma presencial.

                li 
                  i.fas.fa-angle-right.colorv
                  p.mb-0 Realizar los pagos a las siguientes entidades: Sistema General de Pensiones (Fondo de Pensión), Sistema General de Salud (EPS), Sistema General de riesgos profesionales (ARL) y Caja de Compensación Familiar.

                li 
                  i.fas.fa-angle-right.colorv
                  p.mb-0 Pagar la remuneración.
              
          .row.justify-content-center.align-items-center(titulo="Por parte del empleado u ocupante")
            .col-10
              P
              ul.lista-ul
                li 
                  i.fas.fa-angle-right.colorv
                  p.mb-0 Acatar con las competencias y habilidades para desempeñarse en determinado puesto de trabajo y con las cuales debe cumplir para que la empresa lo pueda contratar. 
                li 
                  i.fas.fa-angle-right.colorv
                  p.mb-0 Pasar la entrevista.
                li 
                  i.fas.fa-angle-right.colorv
                  p.mb-0 Cumplir con las habilidades.
                li 
                  i.fas.fa-angle-right.colorv
                  p.mb-0 Tener experiencia previa.
                li 
                  i.fas.fa-angle-right.colorv
                  p.mb-0 Pasar los exámenes exigidos por la empresa.
                            
      .col-lg-4
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/42.png', alt='')

</template>

<script>
export default {
  name: 'Tema3',
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
