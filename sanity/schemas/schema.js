import createSchema from 'part:@sanity/base/schema-creator'
import schemaTypes from 'all:part:@sanity/base/schema-type'

//schema
import allergens from './allergens'
import category from './category'
import dish from './dish'
import gallery from './gallery'
import generalInfo from './generalInfo'
import specialita from './specialita'

export default createSchema({

  name: 'default',
  types: schemaTypes.concat([
      allergens,
      category,
      dish,
      gallery,
      generalInfo,
      specialita
  ]),
})
