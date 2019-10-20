const state = {

  projects: [
    {
      id: 108,
      name: "Efectos de la familia disfuncional en la educación",
      budget: "$ 5.000.000",
      image: "pacientes_def.png",
      budgetStatus: "Approved",
      completed: "75%",
      status: "En Progreso",
      statusStyle: "#fcba03",
      startDate: "23/09/2019",
      projectType: "Social",
      endDate: "05/01/2020",
      introduction: "El siguiente tema de investigación trata del estudio del núcleo más importante para formar la sociedad, este es La Familia.",
      details: "La familia es la primera escuela de virtudes humanas sociales, que todas las sociedades necesitan; por medio de la familia se introduce en la sociedad civil a las personas. Es por ello necesario que los padres consideren la importancia que tiene la familia en la formación de futuros ciudadanos, que dirijan el destino del país, considerando que la educación es un proceso artesanal, personalizado, en donde se educa uno a uno; no puede hacerse industrialmente, por lo que solo puede hacerse en el seno de la familia. También desarrollaremos aspectos importantes relacionados a la formación de la familia, la importancia de difundir los valores a nuestros hijos, la importancia que tiene una familia para crear mujeres y hombres de bien, los tipos de familia, entre otros.",
      attachements: [
        "Anteproyecto.docx",
        "Reporte.pdf"
      ],
    },
    {
      id: 109,
      name: "Aprendizaje en Familias Bilingues",
      budget: "$ 8.000.000",
      image: "bilingue.jpg",
      budgetStatus: "Approved" ,
      completed: "100%",
      status: "Completado",
      statusStyle: "#43A047",
      startDate: "10/08/2019",
      projectType: "Social",
      endDate: "10/10/2019",
      introduction: "En algunos países, es habitual que los niños aprendan a hablar dos o más idiomas a la vez y que los utilicen a diario para comunicarse y entender a la gente de su alrededor.",
      details: "En países como EE.UU., puede haber un idioma dominante; es decir, el que utiliza el gobierno, los centros educativos y la sociedad. Teniendo esto presente, los padres que hablan otro idioma añadido por su herencia cultural se pueden enfrentar al siguiente dilema: ¿Deberíamos enseñar a nuestros hijos solo el idioma dominante o deberíamos educarlos para que sean bilingües?",
      attachements: [
        "Anteproyecto.docx",
        "Reporte.pdf"
      ],
    },
    {
      id: 110,
      name: "Salud Mental en Familias vulnerables al conflicto armado",
      budget: "$ 12.000.000",
      image: "saludmental.jpg",
      budgetStatus: "Approved" ,
      completed: "0%",
      status: "Nuevo",
      statusStyle: "#a6a6a6",
      startDate: "31/10/2019",
      projectType: "Social",
      endDate: "01/01/2020",
      introduction: "A partir de un recorrido durante 2014 por zonas que han padecido el conflicto en Colombia surgen estas propuestas de cara al proceso de paz que se adelanta en La Habana.",
      details: "Durante 2014 viaje junto con un colega que tuvo la iniciativa y el apoyo del Colegio Colombiano de Psicólogos por diversas regiones del país a 10 foros acompañados de la Unidad para la Atención y Reparación Integral a Victimas ( UARIV), la Agencia Colombiana para la Reintegración (ACR) y el Ministerio de Salud; participaron entidades gubernamentales locales (Secretarias de Salud, entre otras), organizaciones no gubernamentales que trabajan en terreno, facultades de psicología, operadores locales de diversos programas y, en ocasiones, víctimas y exofensores. Bajo el nombre 'El rol de la intervención psicosocial, la psicología y la salud mental en los diferentes escenarios de conflicto armado en Colombia'; con una asistencia de más de mil doscientas personas, los foros dejaron información muy rica en términos de las necesidades y problemas que deben afrontar quienes trabajan en terreno. ",
      attachements: [
        "Anteproyecto.docx",
        "Reporte.pdf"
      ],
    },
    {
      id: 111,
      name: "Drogas en la Universidad",
      budget: "$ 6.000.000",
      image: "logo_square.png",
      budgetStatus: "Approved" ,
      completed: "20%",
      status: "En Progreso",
      statusStyle: "#fcba03",
      startDate: "12/07/2019",
      projectType: "Social",
      endDate: "01/01/2020",
      introduction: "El consumo de sustancias ilícitas en los universitarios es una problemática que aumenta paulatinamente y que preocupa a los directivos de la educación superior en Colombia. En este informe especial encontrará cuál es la situación actual en las universidades de Manizales, qué consecuencias trae el consumo según expertos y cómo tratan las instituciones este tema.",
      details: "El uso de sustancias psicoactivas producen alteraciones en el sistema nervioso central y al consumirlas se corre el riesgo de crear en dependencia física o psicológica. El uso prolongado genera trastornos del comportamiento y psicóticos (desconexión de la realidad), que son motivo recurrente de hospitalización, según Katherine Salazar Martínez, médica psiquiatra y especialista en Adicciones y Drogodependencia.",
      attachements: [
        "Anteproyecto.docx",
        "Reporte.pdf"
      ],
    },
  ]

};

const getters = {
  allProjects: state => state.projects

};

const actions = {

};

const mutations = {

};

export default {
  state,
  getters,
  actions,
  mutations,
}