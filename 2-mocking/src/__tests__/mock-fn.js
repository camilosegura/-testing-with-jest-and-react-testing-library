
const thumbWar = require('../thumb-war')
const getWinner = require('../utils')

jest.mock('../utils');

test('returns winner', () => {
  getWinner.mockImplementation((p1, p2) => p1);

  const winner = thumbWar('Camilo S', 'Andres R')
  expect(winner).toBe('Camilo S')
  expect(getWinner.mock.calls).toEqual([
    ['Camilo S', 'Andres R'],
    ['Camilo S', 'Andres R']
  ])
  // could also do these assertions:
  expect(getWinner).toHaveBeenCalledTimes(2)
  expect(getWinner).toHaveBeenNthCalledWith(
    1,
    'Camilo S', 'Andres R'
  )
  expect(getWinner).toHaveBeenNthCalledWith(
    2,
    'Camilo S', 'Andres R'
  )
})
