const moneyDiv = document.querySelector('.fallingMoney')

function addBag () {
  const bag = document.createElement('img')
  const imgSrc = `images/money-bag${1 + Math.floor(Math.random()*3) }.png`
  bag.setAttribute('src', imgSrc)
  bag.style.left = `${Math.random() * 100}%`
  moneyDiv.appendChild(bag)

  setTimeout(addBag, 5 * 1000)
  setTimeout(() => bag.remove(), 5 * 1000)
}

addBag()
