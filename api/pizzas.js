const availablePizzas = [
  {
    id: 'life',
    name: 'Life Pizza',
    description: 'All you need in Life!',
    price: '€4,20'
  },
  {
    id: 'universe',
    name: 'Universe Pizza',
    description: 'All you need in the Universe!',
    price: '€4,20'
  },
  {
    id: 'everything',
    name: 'Everything Pizza',
    description: 'Everything you need!',
    price: '€4,20'
  }
]

export async function GET(_request) {
  return Response.json(availablePizzas);
}
