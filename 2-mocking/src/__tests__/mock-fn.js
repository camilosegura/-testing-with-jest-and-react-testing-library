const thumbWar = require('../thumb-war')
const getWinner = require('../utils')

jest.mock('../utils');
// console.log('utils', utils)
test('returns winner', () => {
  const originalGetWinner = getWinner
  // utils.getWinner = jest.fn((p1, p2) => p1)
  // getWinner = jest.fn((p1, p2) => p1)
  console.log('getWinner', getWinner)

  const winner = thumbWar('Kent C. Dodds', 'Ken Wheeler')
  expect(winner).toBe('Kent C. Dodds')
  expect(getWinner.mock.calls).toEqual([
    ['Kent C. Dodds', 'Ken Wheeler'],
    ['Kent C. Dodds', 'Ken Wheeler']
  ])
  // could also do these assertions:
  expect(getWinner).toHaveBeenCalledTimes(2)
  expect(getWinner).toHaveBeenNthCalledWith(
    1,
    'Kent C. Dodds',
    'Ken Wheeler'
  )
  expect(getWinner).toHaveBeenNthCalledWith(
    2,
    'Kent C. Dodds',
    'Ken Wheeler'
  )

  // cleanup
  getWinner = originalGetWinner
})
