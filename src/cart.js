function notImplemented() {
  throw new Error('Корзина ещё не реализована. Сначала прочитайте тесты.')
}

function addToCart(cart, product, quantity) {
  if (quantity <= 0) {
    throw new RangeError('Количество должно быть положительным')
  }

  const existingProduct = cart.find((item) => item.id === product.id)
  const newQuantity = (existingProduct?.quantity || 0) + quantity

  if (newQuantity > product.stock) {
    throw new RangeError('Недостаточно товара на складе')
  }

  if (existingProduct) {
    return cart.map((item) =>
      item.id === product.id ? { ...item, quantity: newQuantity } : item,
    )
  }

  return [...cart, { ...product, quantity }]
}

function changeQuantity(cart, id, quantity) {
  if (quantity <= 0) {
    throw new RangeError('Количество должно быть положительным')
  }

  const existingProduct = cart.find((item) => item.id === id)

  if (!existingProduct) {
    return cart
  }

  if (quantity > existingProduct.stock) {
    throw new RangeError('Недостаточно товара на складе')
  }

  return cart.map((item) => (item.id === id ? { ...item, quantity } : item))
}

function removeFromCart(cart, id) {
  return cart.filter((item) => item.id !== id)
}

function calculateCartSubtotal(cart) {
  return cart.reduce((total, item) => total + item.price * item.quantity, 0)
}

function calculateOrderTotal(cart, promoCode) {
  const subtotal = calculateCartSubtotal(cart)

  const discount =
    promoCode === 'SAVE10' && subtotal >= 20000 ? subtotal * 0.1 : 0

  const delivery = subtotal < 50000 ? 30000 : 0

  const total = subtotal - discount + delivery

  return {
    subtotal,
    discount,
    delivery,
    total,
  }
}

const cartApi = {
  addToCart,
  changeQuantity,
  removeFromCart,
  calculateCartSubtotal,
  calculateOrderTotal,
}

if (typeof module !== 'undefined') module.exports = cartApi
if (typeof window !== 'undefined') window.cartApi = cartApi
