export default {
  name: 'featured',
  title: 'Featured Menu categories',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Featured Category name',
      type: 'string',
    },
    {
      name: 'short_description',
      title: 'Name of dish',
      type: 'string',
      validation: (Rule) => Rule.max(200),
    },
    {
      name: 'price',
      title: 'Price',
      type: 'number',
    },
    {
      name: 'restaurants',
      title: 'Restaurants',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'restaurant' }] }],
    },
  ],
};
