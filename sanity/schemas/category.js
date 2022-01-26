export default {
    name: 'category',
    type: 'document',
    title: 'Categoria',
    fields: [
      {
        name: 'categoryName',
        type: 'string',
        title: 'Nome'
      },
      {
        name: 'categoryImage',
        type: 'image',
        title: 'Immagine categoria'
      },
      {
        name: 'dishes',
        title: 'Piatti',
        type: 'array',
        of: [
          {
            type: 'reference',
            to: [
              {type: 'dish'}
            ]
          }
        ]
      }
    ]
  }