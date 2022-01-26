export default {
    name: 'dish',
    type: 'document',
    title: 'Piatti',
    fields: [
      {
        name: 'name',
        type: 'string',
        title: 'Nome Piatto'
      },
      {
        name: 'price',
        type: 'string',
        title: 'Prezzo'
      },
      {
        name: 'allergens',
        title:'Allergeni',
        type: 'array',
        of: [
          {
            type: 'reference',
            to: [
              {type: 'allergens'}
            ]
          }
        ]
      },
    ]
  }