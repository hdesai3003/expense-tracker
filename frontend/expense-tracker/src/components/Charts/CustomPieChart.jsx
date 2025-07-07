import React from 'react'
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer, Legend } from 'recharts'
import CustomTooltip from './CustomTooltip'
import CustomLegend from './CustomLegend'


const renderLegend = ({ payload }) => {
    return (
        <ul style={{ listStyle: 'none', padding: 0, margin: 0, textAlign: 'center' }}>
            {payload.map((entry, index) => (
                <li key={`item-${index}`} style={{ display: 'inline-block', marginRight: 20 }}>
                    <span
                        style={{
                            display: 'inline-block',
                            width: 10,
                            height: 10,
                            borderRadius: '50%',
                            backgroundColor: entry.color,
                            marginRight: 8,
                        }}
                    ></span>
                    {entry.value}
                </li>
            ))}
        </ul>
    )
}

const CustomPieChart = ({ data, label, totalAmount, colors, showTextAnchor }) => {
    return (
        <ResponsiveContainer width="100%" height={380}>
            <PieChart>
                <Pie
                    data={data}
                    dataKey="amount"
                    nameKey="name"
                    cx="50%"
                    cy="50%"
                    outerRadius={130}
                    innerRadius={100}
                    labelLine={false}
                >
                    {data.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
                    ))}
                </Pie>
                <Tooltip content={CustomTooltip} />
                <Legend content={CustomLegend} />

                {showTextAnchor && (
                    <>
                        <text x="50%" y="50%" dy={-25} textAnchor="middle" fill="#666" fontSize="14px">
                            {label}
                        </text>
                        <text x="50%" y="50%" dy={8} textAnchor="middle" fill="#333" fontSize="24px" fontWeight="600">
                            {totalAmount}
                        </text>
                    </>
                )}
            </PieChart>
        </ResponsiveContainer>
    )
}

export default CustomPieChart