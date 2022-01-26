export default {
    name: 'speciality',
    type: 'document',
    title: 'Specialità',
    fields: [
      {
        name: 'name',
        type: 'string',
        title: 'Nome Specialità'
      },
      {
        name: 'price',
        type: 'string',
        title: 'Prezzo'
      },
      {
        name: 'info',
        type: 'string',
        title: 'Informazioni'
      },
      {
        name: 'dishes',
        title:'Piatti nella proposta',
        type: 'array',
        of: [
          {
            type: 'string'
          }
        ]
      },
    ]
  }