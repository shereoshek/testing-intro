const products = require('../../src/data/products')
const { getProductById } = require('../../src/catalog')

describe('getProductById', () => {
  test('ID 1 возвращает products[0]', () => {
    const result = getProductById(products, 1)

    expect(result).toEqual(products[0])
  })

  test('ID 4 возвращает products[3]', () => {
    const result = getProductById(products, 4)

    expect(result).toEqual(products[3])
  })

  test('ID 6 возвращает products[5]', () => {
    const result = getProductById(products, 6)

    expect(result).toEqual(products[5])
  })

  test('ID 0 возвращает null', () => {
    const result = getProductById(products, 0)

    expect(result).toBe(null)
  })

  test('ID 999 возвращает null', () => {
    const result = getProductById(products, 999)

    expect(result).toBe(null)
  })

  test('ID -1 возвращает null', () => {
    const result = getProductById(products, -1)

    expect(result).toBe(null)
  })

  test("строковый ID '1' возвращает null", () => {
    const result = getProductById(products, '1')

    expect(result).toBe(null)
  })

  test('ID undefined возвращает null', () => {
    const result = getProductById(products, undefined)

    expect(result).toBe(null)
  })

  test('ID NaN возвращает null', () => {
    const result = getProductById(products, NaN)

    expect(result).toBe(null)
  })
})
