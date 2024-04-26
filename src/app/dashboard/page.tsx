'use client'
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    ArcElement,
    Title,
    Tooltip,
    Legend,
} from "chart.js";

import { Bar, Pie, Line, Radar } from "react-chartjs-2";

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    ArcElement,
    Title,
    Tooltip,
    Legend
);

export default function Dashboard() {
    const optionsBar = {
        responsive: true,
        plugins: {
        legend: {
            position: "top" as const,
        },
        title: {
            display: true,
            text: "Graficos de la gestion de ingresos",
        },
        },
    };

    const optionsPie = {
        responsive: true,
        plugins: {
        legend: {
            position: "right" as const,
        },
        title: {
            display: true,
            text: "Graficos de los ingresos",
        },
        },
    };








    const labels = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre']
    const data = {
        labels: labels,
        datasets: [{
            label: 'My First Dataset',
            data: [65, 59, 80, 81, 56, 55, 40],
            fill: false,
            borderColor: 'rgb(75, 192, 192)',
            tension: 0.1
        }]
    };
    
    const optionsLine = {
        type: 'line', 
        data: data
    }





    const optionsRadar = {
        type: 'radar',
        data: data,
        options: {
            elements: {
                line: {
                    borderWidth: 3
                }
            }
        },
    };

    const dataRadar = {
            labels: [
            'Eating',
            'Drinking',
            'Sleeping',
            'Designing',
            'Coding',
            'Cycling',
            'Running'
            ],
            datasets: [{
            label: 'My First Dataset',
            data: [65, 59, 90, 81, 56, 55, 40],
            fill: true,
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            borderColor: 'rgb(255, 99, 132)',
            pointBackgroundColor: 'rgb(255, 99, 132)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgb(255, 99, 132)'
            }, {
            label: 'My Second Dataset',
            data: [28, 48, 40, 19, 96, 27, 100],
            fill: true,
            backgroundColor: 'rgba(54, 162, 235, 0.2)',
            borderColor: 'rgb(54, 162, 235)',
            pointBackgroundColor: 'rgb(54, 162, 235)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgb(54, 162, 235)'
            }]
        };

    const Cantidad = [10, 20, 30, 40, 50]

    return (
        <main className="flex justify-center items-center flex-wrap p-8 gap-8 w-full h-full">
            <div className="w-2/5">
                <Bar options={optionsBar} data={data} className="w-64 h-64"/>
            </div>
            <div className="w-2/5">
                <Pie options={optionsPie} data={data} className="w-64 h-64"/>
            </div>
            {/* <div className="w-2/5">
                <Line options={optionsLine} data={data} className="w-64 h-64"/>
            </div> */}
            <div className="w-2/5">
                <Radar options={optionsRadar} data={dataRadar} className="w-64 h-64"/>
            </div>
        </main>
    )
}
