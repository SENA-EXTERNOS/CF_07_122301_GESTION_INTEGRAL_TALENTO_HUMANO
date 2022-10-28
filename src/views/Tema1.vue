<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5.bloque-fondo1
    .titulo-principal.color-acento-contenido(data-aos="zoom-in-left")
      .titulo-principal__numero
        span 1
      h1 Normativa

    .row.justify-content-center.align-items-center.mb-5           
      .col-lg-3
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/2.svg', alt='')    
      .col-lg-9
        .cajon.color-primario.p-4(data-aos="flip-down")
          p(data-aos="fade-down") Para realizar una adecuada vinculación de personal en una organización, se requiere reconocer cuáles son los documentos solicitados para el proceso de contratación, cuál es la aplicación de procesos y cuáles son los procedimientos establecidos por la organización.
 
          p(data-aos="fade-down").mb-0 Además, cuál es la normativa vigente, su aplicación, y las leyes, decretos y resoluciones, relacionados con la contratación laboral; cómo se liquida la seguridad social, cómo se entrega la dotación al personal y cómo se crea una historia laboral. Para esto, es importante conocer sobre la normativa que actualmente rige en Colombia. 

    p(data-aos="fade-down").mb-5 La normativa laboral de un país establece las reglas de juego entre el empleador y el empleado. Es ahí donde se determinan los deberes y derechos de ambas partes y esta es cambiante porque se debe ajustar a la realidad social de su entorno. 

    .tarjeta.tarjeta--azul.p-4.mb-5
      SlyderA(tipo="b")
        .row.justify-content-center.align-items-center
          .col-md-4.mb-4.mb-md-0
            p La normativa laboral en Colombia se surte cada año de importantes novedades, como la definición del salario mínimo mensual legal vigente y el auxilio de transporte, entre otros pronunciamientos o jurisprudenciales en torno a situaciones específicas que dejan entrever cómo debe actuar el sistema laboral en pro de las obligaciones y derechos de empleadores y trabajadores, dependientes e independientes.         
          .col-md-7
            img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/3.png', alt='')   
        .row.justify-content-center.align-items-center
          .col-md-4.mb-4.mb-md-0
            p Adicionalmente, desde el año 2020, Colombia ha venido percibiendo los efectos de la pandemia; entre estos se cuenta con los concernientes a la normativa laboral, que estuvo sujeta a cambios, debido al impacto en que el sector empresarial se vio afectado. Es así como, ante la quiebra y cierre de empresas en algunos sectores, la reducción de salarios, suspensión de contratos, etc., han surgido nuevas modalidades de contratación que se han masificado con la reactivación económica.          
          .col-md-7
            img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/4.png', alt='')  
        .row.justify-content-center.align-items-center
          .col-md-4.mb-4.mb-md-0
            p Dichas modalidades conllevan una serie de condiciones que deben analizarse con detenimiento y, en su conjunto, en correspondencia con lo que se ha venido aplicando hasta el momento y ante lo cual, con las situaciones específicas y cotidianas de cada empresa, empleado o trabajador independiente, visibilizan la necesidad de contar con mecanismos de actualización permanente en el componente laboral.         
          .col-md-7
            img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/5.png', alt='') 

    .row.justify-content-start.align-items-center.mb-5           
      .col-lg-3
        .bgp.p-1(data-aos="fade-right")
          h4(data-aos="fade-down").mb-0 Características

    p(data-aos="fade-down").mb-5 Después de identificar la normativa laboral nacional, es importante saber cuáles son las características de esta, las cuales están comprendidas en el Código Sustantivo del Trabajo. 
    .bg1
      .row.justify-content-center.align-items-center.mb-5           
        .col-lg-12.up.bgwhite
          TabsC.color-acento-contenido
            .py-3.py-md-4(titulo="Compuesto por artículos")
              .row.justify-content-center.align-items-center
                .col-md-5.mb-4.mb-md-0
                  p El Código Sustantivo del Trabajo (CST) está escrito por medio de artículos, los cuales son disposiciones, enumeradas de forma consecutiva. Estos conforman un tratado, una ley o un reglamento, y contiene 492 artículos, divididos en 3 partes, conformadas por títulos y capítulos, los cuales representan sus diferentes temáticas.         
                .col-md-5
                  img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/6.png', alt='')    
            .py-3.py-md-4(titulo="Aclaraciones con parágrafos")
              .row.justify-content-center.align-items-center
                .col-md-5.mb-4.mb-md-0
                  p El CST contiene parágrafos en los artículos para explicar la temática que se está mencionando y lograr que se entienda la decisión descrita al interior del texto.        
                .col-md-5
                  img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/7.png', alt='')  
            .py-3.py-md-4(titulo="División por capítulos")
              .row.justify-content-center.align-items-center
                .col-md-5.mb-4.mb-md-0
                  p El CST está dividido en títulos, que están compuestos por los temas gruesos de la normativa, los cuales contienen capítulos donde se especifican y definen los subtemas de los que se trata cada apartado.       
                .col-md-5
                  img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/8.png', alt='')  
            .py-3.py-md-4(titulo="Presentación tipos de contratos")
              .row.justify-content-center.align-items-center
                .col-md-5.mb-4.mb-md-0
                  p En la normativa se nombran cada uno de los contratos laborales y allí se especifica toda su reglamentación.        
                .col-md-5
                  img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/9.png', alt='')  
            .py-3.py-md-4(titulo="Deberes y derechos del empleador y el empleado")
              .row.justify-content-center.align-items-center
                .col-md-5.mb-4.mb-md-0
                  p Describe los derechos, deberes y obligaciones del empleador y el empleado, para que exista una correcta y coordinada relación laboral entre ambas partes.        
                .col-md-5
                  img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/10.png', alt='')  

      .row.justify-content-start.align-items-center.mb-5           
        .col-lg-6
          .bgp.p-1(data-aos="fade-right")
            h4(data-aos="fade-down").mb-0 Leyes, decretos, resoluciones, relacionados con la contratación laboral
 
      .row.justify-content-center.align-items-center.mb-5           
        .col-lg-4
          img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/11.png', alt='')    
        .col-lg-8
          .cajon.color-primario.p-4.mb-4(data-aos="flip-down")
            p(data-aos="fade-down") El Código Sustantivo del Trabajo, es un compendio de normas que están expedidas por el Decreto Ley 3743 de 1950. Su objetivo es reglamentar la relación que tienen los empleadores con sus empleados, dentro de las organizaciones. Está ordenado a través de 492 artículos, dispuestos en 3 partes conformadas por títulos y capítulos. Este fue adoptado por el Decreto Ley 2663 del 5 de agosto de 1950 sobre el Código Sustantivo del Trabajo y fue publicado en el Diario Oficial No 27.407 del 9 de septiembre de 1950, en virtud del Estado de Sitio promulgado por el Decreto Extraordinario No 3518 de 1949. Únicamente ha tenido algunas modificaciones en el marco jurídico que rige las relaciones entre trabajadores y empleadores. Por este motivo, el Consejo Privado de Competitividad -CPC- en su informe nacional de competitividad 2019-2020, correspondiente al mercado laboral, recomendó modificar y actualizar del Código Sustantivo del Trabajo, teniendo en cuenta el contexto económico y social del país, para darle mayor flexibilidad al mercado laboral y adecuar las relaciones laborales que surgen de las nuevas economías, como la verde, la digital o la del cuidado.
          p(data-aos="fade-down") Antes de explorar el Código, es necesario identificar qué es ley, decreto y resolución, porque estos conceptos están relacionados con reglas que se deben cumplir y porque así lo exige el Estado. En Colombia, las leyes, decretos, resoluciones y demás sobre la contratación, se emiten por el Ministerio del Trabajo de Colombia.

    p(data-aos="fade-down").mb-5 A continuación, encontrará la diferencia entre ley, decreto y resolución. 

    .row.justify-content-center.align-items-start.mb-5
      .col-lg-8 
        AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta bg6")
          .row.justify-content-center.align-items-center(titulo="Leyes")
            .col-10
              P Reglas o normas elaboradas y aprobadas por el poder legislativo, es decir el Congreso.
          .row.justify-content-center.align-items-center(titulo="Decretos")
            .col-10
              P Actos administrativos elaborados y emitidos por el poder ejecutivo. Son disposiciones dictadas por la autoridad en asuntos de su competencia, con contenido normativo reglamentario, por lo que su rango es jerárquicamente inferior a las leyes.
          .row.justify-content-center.align-items-center(titulo="Resoluciones")
            .col-10
              P Fallos o providencias de una autoridad. Una resolución judicial es el acto procesal proveniente de un tribunal, mediante el cual resuelve las peticiones de las partes o autoriza u ordena el cumplimiento de determinadas medidas.                                                    
      .col-lg-4
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/12.png', alt='')    

      .row.justify-content-start.align-items-center.mb-5           
        .col-lg-3
          .bgp.p-1(data-aos="fade-right")
            h4(data-aos="fade-down").mb-0 Seguridad Social

    .row.justify-content-center.align-items-start.mb-5           
      .col-lg-2
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/13.svg', alt='')    
      .col-lg-10
        p(data-aos="fade-down").mb-0 En Colombia, la seguridad social hace referencia a los derechos que tiene un trabajador, con el fin que se le garantice el bienestar actual y futuro, por lo que está conformado por los regímenes definidos por la ley y establecidos para la pensión, salud, riesgos laborales, y subsidio familiar. 

    p(data-aos="fade-down").mb-5 A continuación, encontrará los regímenes definidos por la ley para la seguridad social en Colombia. 

    .row.justify-content-center.align-items-start.mb-5
      .col-lg-4
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/14.png', alt='')    
      .col-lg-8 
        AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta bg6")
          .row.justify-content-center.align-items-center(titulo="Salud")
            .col-10
              P Prestación del servicio de salud, creando condiciones de acceso al servicio, a toda la población; el objetivo es el de regular el servicio público esencial de salud y en todos los niveles de atención.
 
              P Las Entidades Promotoras de Salud (EPS) y la prestación del servicio, está a cargo de las Instituciones Prestadoras de Servicios de Salud (IPS), encargadas de prestar dicho servicio en el territorio nacional colombiano. 
 
          .row.justify-content-center.align-items-center(titulo="Pensión")
            .col-10
              P Amparo contra las contingencias derivadas de la vejez, la invalidez y la muerte; tiene por objeto garantizar a la población un reconocimiento de las pensiones y prestaciones determinadas en la Ley 100 de 1993. 
          .row.justify-content-center.align-items-center(titulo="Riesgos Laborales")
            .col-10
              P Normas y procedimientos destinados a prevenir, proteger y atender a los empleados que sufren enfermedades o accidentes, ocasionados por el desempeño de las funciones en el desarrollo de su trabajo. Las entidades que se encargan de prestar este servicio se llaman Administradoras de riesgos laborales (ARL).                                               
          .row.justify-content-center.align-items-center(titulo="Subsidio familiar")
            .col-10
              P Es el conjunto de instituciones, políticas y normativas orientadas a la protección integral, tanto del trabajador como de su familia. De la misma forma, a través de las Cajas de Compensación, se reconocen servicios sociales a los afiliados, orientados a: recreación, cultura, educación, prevención en salud, subsidio de vivienda, crédito y protección al cesante. 

      .row.justify-content-start.align-items-center.mb-5           
        .col-lg-5
          .bgp.p-1(data-aos="fade-right")
            h4(data-aos="fade-down").mb-0 Dotaciones y elementos de protección personal

    .row.justify-content-center.align-items-start.mb-5           
      .col-lg-2
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/15.svg', alt='')    
      .col-lg-10
        p(data-aos="fade-down").mb-0 La dotación es la indumentaria entregada por la empresa, para dar uniformidad o reconocimiento a los empleados, y para el desempeño de determinadas funciones por parte de estos; en cambio, los elementos de protección personal son equipos o dispositivos utilizados por los empleados para protegerse de los riesgos a los que pueden enfrentarse durante el desarrollo de su labor en la empresa. Estos aumentan su seguridad y la salud en el trabajo.

    p(data-aos="fade-down").mb-5 Dentro de la normativa de contratación laboral, también se hace referencia a la dotación y a los elementos de protección personal, como se puede observar a continuación:

    .row.justify-content-center.align-items-start.mb-5
      .col-lg-8 
        AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta bg6")
          .row.justify-content-center.align-items-center(titulo="La dotación debe cumplir con los siguientes parámetros")
            .col-10
              ul.lista-ul
                li 
                  i.fas.fa-angle-right.colorv
                  p.mb-0 #[b Leyes:] se encuentran reguladas mediante los siguientes artículos: 230 a 235 del Código Sustantivo del Trabajo; y 7 al 10 de la Ley 11 de 1984.
 
                li 
                  i.fas.fa-angle-right.colorv
                  p.mb-0 #[b Elementos:] vestido de labor (overol, camisetas, traje de oficina, etc.) y un par de zapatos. Según la ocupación, serán entregados otros elementos.

                li 
                  i.fas.fa-angle-right.colorv
                  p.mb-0 #[b Entregas:] tres fechas establecidas por el Código Sustantivo del Trabajo: 30 de abril, 31 de agosto y 20 de diciembre.
 
          .row.justify-content-center.align-items-center(titulo="Los elementos de protección personal deben cumplir con los siguientes parámetros")
            .col-10
              ul.lista-ul            
                li 
                  i.fas.fa-angle-right.colorv
                  p.mb-0 #[b Leyes:] se encuentran regulados a través de los artículos: 122 a 124 de la Ley 9 de 1979 y 176 a 201 de la Resolución de 1979.

                li 
                  i.fas.fa-angle-right.colorv
                  p.mb-0 #[b Elementos:] cascos, protectores auditivos anatómicos, protectores auditivos tipo copa, gafas de seguridad, respirador con protección para material particulado, respirador con filtros para vapores orgánicos, botas con puntera de acero, protección de manos y brazos, eslinga y arnés de seguridad, tapabocas, batas quirúrgicas, entre otros.

                li 
                  i.fas.fa-angle-right.colorv
                  p.mb-0 #[b Entrega:] cuando lo requiera el trabajador, dada la importancia que estos elementos tienen para su protección.

                li 
                  i.fas.fa-angle-right.colorv
                  p.mb-0 #[b Costos:] son mayores gastos para el empleador, al ser elementos específicos y de mayor complejidad. 
      .col-lg-4
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/16.png', alt='') 

      .row.justify-content-start.align-items-center.mb-5           
        .col-lg-5
          .bgp.p-1(data-aos="fade-right")
            h4(data-aos="fade-down").mb-0 Tratamiento de datos y reglamento interno de trabajo

      .row.justify-content-center.align-items-center.mb-5           
        .col-lg-5
          img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/17.png', alt='')    
        .col-lg-7
          .cajon.color-acento-contenido.p-4.mb-4(data-aos="flip-down")
            p(data-aos="fade-down").mb-0 El tratamiento de datos personales se refiere al uso de la información proporcionada por una persona, bien sea natural o jurídica. La ley que lo rige es la Ley Estatutaria 1581 de 2012, que obliga a las entidades publicas y privadas a tener un control sobre el manejo de la información, para resguardar los derechos de la intimidad del usuario. Por esta razón, el objetivo del tratamiento de datos personales es el de almacenar información de la persona para cumplir con la ley colombiana y extranjera; tramitar solicitudes; diligenciar la información para cumplir con las obligaciones tributarias y de la empresa en general; actualizar la información del archivo para mantener protegida dicha información, y evitar fraudes u otros delitos informáticos.

          p(data-aos="fade-down").mb-5 Por otro lado, está el reglamento interno de trabajo, el cual está reglamentado en el Código Sustantivo del Trabajo a partir del título IV: reglamento de trabajo y mantenimiento del orden en el establecimiento capítulo I. Aquí se establece todo lo referente a este reglamento.  

    .row.justify-content-center.align-items-center.mb-5           
      .col-lg-10
        .cajon.color-primario.p-4.mb-5(data-aos="flip-down")
          p(data-aos="fade-down").mb-0 Según el artículo 104 del CST, el reglamento interno de trabajo es el conjunto de normas que determinan las condiciones a que deben sujetarse el empleador y sus trabajadores en la prestación del servicio. El objetivo de su implementación es tener claridad y orden en las relaciones laborales y determinar el proceso disciplinario, las sanciones que impone el empleador y la estructura jerárquica en las empresas. Según lo estipulado en el artículo 108 del Código Sustantivo del Trabajo, el Reglamento Interno de Trabajo contiene 19 puntos fundamentales para su creación. En la Figura 1 puede precisar cuáles son.

        .titulo-sexto.color-primario(data-aos="zoom-in-left")
          h5 Figura 1
          span Puntos del Reglamento Interno del Trabajo

        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/18.svg', alt='')                                             
</template>

<script>
export default {
  name: 'Tema1',
  components: {},
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
