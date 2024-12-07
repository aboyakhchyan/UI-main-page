import { useRef, useEffect } from "react"
import * as d3 from "d3"
import styles from './graph.statistics.module.css'

export const GraphStatistics = () => {
  const svgRef = useRef<SVGSVGElement | null>(null)

  useEffect(() => {
    if (!svgRef.current) return

    const svg = d3.select(svgRef.current)
    const width = 290
    const height = 290
    const radius = Math.min(width, height) / 2

    const data = [35, 20, 25, 20]
    const labels = ['Investment', 'Entertainment', 'Bill Expense', 'Others']
    const colors = ['#1814F3', '#FC7900', '#FA00FF', '#343C6A']

    const pie = d3.pie<number>().value(d => d)
    const arc = d3.arc<d3.PieArcDatum<number>>()
      .innerRadius(6)
      .outerRadius(radius)
      .padAngle(0.06)

    const pieData = pie(data)

    svg.selectAll('*').remove()

    const chart = svg
      .attr("width", width)
      .attr("height", height)
      .append("g")
      .attr("transform", `translate(${width / 2}, ${height / 2})`)

    chart.selectAll("path")
      .data(pieData)
      .join("path")
      .attr("d", arc)
      .attr("fill", (_, i) => colors[i])

    chart.selectAll("text")
      .data(pieData)
      .join("text")
      .attr("transform", (d) => {
        const [x, y] = arc.centroid(d)
        return `translate(${x}, ${y})`
      })
      .attr("text-anchor", "middle")
      .attr("fill", "white")
      .attr("font-size", "12px")
      .style("font-family", "Inter")
      .text((d, _) => `${Math.round(d.data)}%`)

    chart.selectAll("text.label")
      .data(pieData)
      .join("text")
      .attr("transform", (d) => {
        const [x, y] = arc.centroid(d)
        return `translate(${x}, ${y})`
      })
      .attr("text-anchor", "middle")
      .attr("dy", "-1.2em")
      .attr("fill", "white")
      .attr("font-size", "10px")
      .style("font-family", "Inter")
      .text((_, i) => labels[i])
  }, [])

  return (
    <div className={styles.container}>
      <h2>Expense Statistics</h2>
      <div className={styles.chartContainer}>
        <svg ref={svgRef}></svg>
      </div>
    </div>
  )
}
