
import Chart from 'chart.js/auto'

const linearChartComponent = document.getElementById("linear-chart")
const labels = Array.from({ length: 8 }).map((_, i) => i)

const minNumbers = Array.from({ length: 8 }).map(() => 10)
const maxNumbers = Array.from({ length: 8 }).map(() => 0)
const numbers = Array.from({ length: 8 }).map((_, i) => {
    const randomNumber = Math.random() * 10
    return randomNumber
})

const data = {
    labels,
    datasets: [
        {
            label: "Numero Minimo",
            data: minNumbers
        },
        {
            label: "Numeros aletorios",
            data: numbers
        },
        {
            label: "Numero Maximo",
            data: maxNumbers
        }
    ]
}

const chart = new Chart(linearChartComponent, {
    type: "line",
    data,
    options: {
        onClick: (e) => {
            console.log(e)
            
        }
    }
})

