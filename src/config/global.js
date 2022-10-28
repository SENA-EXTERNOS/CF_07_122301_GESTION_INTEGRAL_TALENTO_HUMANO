export default {
  global: {
    componenteFormativo: 'Análisis y normativa para la vinculación laboral',
    descripcionCurso:
      'El análisis de la normativa para la vinculación laboral es importante en el proceso ejecutado por cualquier departamento de talento humano, debido a que después de la selección de los candidatos, se realiza la vinculación del personal, lo que posibilita el crecimiento de la organización y para su legalización se debe cumplir, con el proceso requerido, según la normativa vigente.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/1.png'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/2.png'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/3.png'),
      },
      {
        clases: ['banner-principal-decorativo-4'],
        imagen: require('@/assets/curso/portada/4.png'),
      },
      {
        clases: ['banner-principal-decorativo-5'],
        imagen: require('@/assets/curso/portada/5.png'),
      },
      {
        clases: ['banner-principal-decorativo-6'],
        imagen: require('@/assets/curso/portada/6.png'),
      },
      {
        clases: ['banner-principal-decorativo-7'],
        imagen: require('@/assets/curso/portada/7.svg'),
      },
      {
        clases: ['banner-principal-decorativo-8'],
        imagen: require('@/assets/curso/portada/8.svg'),
      },
      {
        clases: ['banner-principal-decorativo-9'],
        imagen: require('@/assets/curso/portada/9.svg'),
      },
      {
        clases: ['banner-principal-decorativo-11'],
        imagen: require('@/assets/curso/portada/11.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Normativa',
        desarrolloContenidos: true,
      },

      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Comunicación en la vinculación laboral',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Contratación laboral',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo: 'Seguridad social',
        desarrolloContenidos: true,
      },

      {
        nombreRuta: 'tema5',
        icono: 'far fa-file-alt',
        numero: '5',
        titulo: 'Dotación',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema6',
        icono: 'far fa-file-alt',
        numero: '6',
        titulo: 'Historia laboral',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Normativa',
      referencia:
        'Ley Estatutaria 1581 de 2012. Por la cual se dictan disposiciones generales para la protección de datos personales. Octubre 17 de 2012. ',
      tipo: 'PDF',
      descarga: '/downloads/Ley_1581_de_2012.pdf',
    },
    {
      tema: 'Normativa',
      referencia:
        'Ley 100 de 1933. Por la cual se crea el sistema de seguridad social integral y se dictan otras disposiciones. Diciembre 23 de 1993. DO. No. 41.148',
      tipo: 'PDF',
      descarga: '/downloads/Ley_100_de_1993.pdf',
    },
    {
      tema: 'Requisitos para la seguridad social',
      referencia:
        'MinTrabajoCol. (20 de octubre de 2015). <i>Formalización laboral: seguridad social.</i> ',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=V511rTZqLiE&t=1s',
    },
    {
      tema: 'Historia laboral',
      referencia:
        'Decreto 1072 de 2015. Por medio del cual se expide el Decreto Único Reglamentario del Sector Trabajo. Mayo 26 de 2015. ',
      tipo: 'PDF',
      descarga: '/downloads/Decreto_1072_de_2015.pdf',
    },
    {
      tema: 'Dotación',
      referencia:
        'Henao Abogados. (02 de marzo de 2020). <i>Suministro de calzado y vestido de labor a los trabajadores.</i> ',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=UxRUnnUJZ0w',
    },
  ],
  glosario: [
    {
      termino: 'Circular',
      significado:
        'es una comunicación emitida por una autoridad superior a una inferior, sobre un tema y con un propósito específico.',
    },
    {
      termino: 'Comunicación asertiva',
      significado:
        'habilidad de un locutor para transmitir su información de manera clara, respetuosa y directa, a uno o varios interlocutores.',
    },
    {
      termino: 'Decreto',
      significado:
        'Es un acto administrativo promulgado por el poder ejecutivo con contenido normativo reglamentario, sin necesidad de ser sometido al órgano legislativo.',
    },
    {
      termino: 'Dotación',
      significado:
        'indumentaria requerida para el desempeño de determinadas funciones por parte de los trabajadores. También sirve para dar uniformidad o reconocimiento a los empleados.',
    },
    {
      termino: 'Ley',
      significado:
        'es una norma jurídica en que el Estado se dirige a sus súbditos, para fijar entre ellos y Él mismo, los límites de lo permitido.',
    },
    {
      termino: 'Normativa',
      significado:
        'conjunto de normas o reglas que buscan regular las relaciones sociales frente a un tema común y cuyo cumplimiento está garantizado por el Estado.',
    },
    {
      termino: 'Proceso de contratación',
      significado:
        'serie de interacciones entre la organización y los candidatos que buscan ocupar alguna vacante, hasta llegar a la selección y ejecución del contrato.',
    },
    {
      termino: 'Resolución',
      significado:
        'son decisiones no normativas por parte de una autoridad ya sea política, administrativa o judicial, que solventa un conflicto o da pautas a seguir sobre una materia determinada.',
    },
    {
      termino: 'Seguridad Social',
      significado:
        'derecho que tiene el trabajador, en el que se le garantiza el bienestar actual y futuro, a través de la salud, la pensión y la protección ante posibles accidentes laborales. En Colombia, está contemplado en la Ley 100 de 1993.',
    },
    {
      termino: 'Tratamiento de datos',
      significado:
        'término utilizado por los abogados para especificar cualquier operación o trámite del derecho que implica el uso de información proporcionada por una persona, bien sea natural o jurídica. ',
    },
  ],
  referencias: [
    {
      referencia:
        'Departamento Nacional de Planeación. (s.f.). <i>Seguridad Social Integral.</i>',
      link:
        'https://www.dnp.gov.co/programas/desarrollo-social/subdireccion-de-empleo-y-seguridad-social/Paginas/Seguridad-Social-Integral.aspx#:~:text=De%20acuerdo%20con%20la%20Ley%20100%20de%201993%2C,servicios%20sociales%20complementarios.%201.%20Sistema%20General%20de%20Pensiones.',
    },
    {
      referencia:
        'Tus Abogados & Contadores. (s.f.). <i>Todo sobre: Reglamento Interno de Trabajo en Colombia.</i>',
      link:
        'https://tusabogadosycontadores.co/blog/reglamento-interno-trabajo/',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Desarrollo front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Álvaro Andrés Angarita Ramirez',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Daniel Felipe Varón Molina',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
