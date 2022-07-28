let score = 0 
let scoreP = document.getElementById('score')
let increment = 10

const btn = document.getElementById('pour-btn').addEventListener('click', addMoney);

function addMoney (event) {
    score += increment

    for (let i = 0; i < items.length; i++) {
        const item = items[i]
        if (score >= item.availableAt) {
            items.splice(i,1)
            availableItems.push(item)
        }
    }
    scoreP.innerText = `£${score}`
}

const availableItems = []

const purchasedItems = []

const items = [
    {
        name: 'Toilet Roll',
        cost: 70,
        incrementTo: 100,
        availableAt: 100
    },
    {
        name: 'Goldfish',
        cost: 200,
        incrementTo: 1000,
        availableAt: 1000
    },
    {
        name: 'Bike',
        cost: 75,
        incrementTo: 20,
        availableAt: 150
    }
    
]
