export default {
    name: 'info',
    type: 'document',
    title: 'Informazioni generali',
    fields: [
        {
            name: 'hours',
            title:'Orari',
            type: 'array',
            of: [{type: 'string'}]
          },
    ]
  }