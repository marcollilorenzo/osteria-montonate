export default {
    name: 'gallery',
    type: 'document',
    title: 'Galleria immagini',
    fields: [
        {
            name: 'galleryImage',
            title:'Immagini',
            type: 'array',
            of: [{type: 'image'}]
          },
    ]
  }