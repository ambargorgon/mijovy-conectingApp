const EventsList = [
    {   
        id: 1,
        title: "Recital de Guitarras",
        price: 0,
        location: "Anfiteatro",
        author: "Escuela de Musica",
        time: 'Martes 16, a las 20hs.',
        category: 5,
        date: '2023-06-16'

    },
    {   
        id: 2,
        title: "Encuentro de Yoga",
        price: 1000,
        location: "Parque Central",
        author: "Yoga Academy",
        time: 'Miercoles 3 de Julio, a las 10hs.',
        category: 3,
        date: '2023-07-03'
    },
    {   
        id: 3,
        title: "Partido de Handball",
        price: 0,
        location: "Gimansio de Deportes",
        author: "Equipo de Handball",
        time: 'Sabado 19 de Julio, a las 15hs.',
        date: '2023-07-19'
    },
    
    

]

export default EventsList
export const datesList = [];
  for (let item of EventsList) {
    datesList.push(item.date);
  }