import React, { useEffect, useRef } from "react";
import * as d3 from "d3";
import styles from './graph-activity.module.css'


interface Data {
  day: string;
  deposit: number;
  withdraw: number;
}


const data: Data[] = [
  { day: "Sat", deposit: 480, withdraw: 220 },
  { day: "Sun", deposit: 340, withdraw: 120 },
  { day: "Mon", deposit: 320, withdraw: 260 },
  { day: "Tue", deposit: 480, withdraw: 370 },
  { day: "Wed", deposit: 150, withdraw: 230 },
  { day: "Thu", deposit: 390, withdraw: 230 },
  { day: "Fri", deposit: 400, withdraw: 320 }
];

export const GraphActivity: React.FC = () => {

  const svgRef = useRef<SVGSVGElement | null>(null);

  useEffect(() => {
    if (!svgRef.current) return;

    const svg = d3.select(svgRef.current);
    const width = 600;
    const height = 226;
    const margin = { top: 20, right: 20, bottom: 40, left: 40 };

  
    const xScale = d3.scaleBand<string>()
      .domain(data.map((d) => d.day))
      .range([margin.left, width - margin.right])
      .padding(0.1);

  
    const yScale = d3.scaleLinear<number>()
      .domain([0, d3.max(data, (d) => Math.max(d.deposit, d.withdraw)) || 0]) 
      .nice()
      .range([height - margin.bottom, margin.top])

    
    svg.selectAll(".deposit")
      .data(data)
      .join("rect")
      .attr("class", "deposit")
      .attr("x", (d) => xScale(d.day) || 0)
      .attr("y", (d) => yScale(d.deposit))
      .attr("width", '15px')
      .attr("height", (d) => height - margin.bottom - yScale(d.deposit))
      .attr("fill", "#1814F3")
      .attr("rx", 8) 
      .attr("ry", 8)

  
    svg.selectAll(".withdraw")
      .data(data)
      .join("rect")
      .attr("class", "withdraw")
      .attr("x", (d) => (xScale(d.day) || 0) + xScale.bandwidth() / 2)
      .attr("y", (d) => yScale(d.withdraw))
      .attr("width", '15px')
      .attr("height", (d) => height - margin.bottom - yScale(d.withdraw))
      .attr("fill", "#16DBCC")
      .attr("rx", 8) 
      .attr("ry", 8)

    
    const xAxis = svg.selectAll(".x-axis")
      .data([0])
      .join("g")
      .attr("class", "x-axis")
      .attr("transform", `translate(0,${height - margin.bottom})`)
      .call(d3.axisBottom(xScale) as any) 

      xAxis.selectAll("text")
      .style("fill", "#718EBF")  
      .style("font-family", "Inter")
    
    const yAxis = d3.axisLeft(yScale).ticks(6).tickFormat(d3.format("d")); 
    const yAxisGroup = svg.selectAll(".y-axis")
      .data([0])
      .join("g")
      .attr("class", "y-axis")
      .attr("transform", `translate(${margin.left},0)`)
      .attr("transform", `translate(${margin.left},0)`)
      .call(yAxis as any)
      .call((g) => g.selectAll(".tick line").attr("stroke", "#ccc")); 

      yAxisGroup.selectAll("text")
  .style("fill", "#718EBF")  
  .style("font-family", "Inter")
  }, [data]);

  return (
      <div className={styles.container}>
          <h2>Weekly Activity</h2>
        <div className={styles.graphContainer}>
            <div className={styles.descriptionColors}>
                <div className={styles.depositBlock}>
                    <div className={styles.circleOne}></div>
                    <p className={styles.textStyle}>Diposit</p>
                </div>
                <div className={styles.withdrawBlock}>
                    <div className={styles.circleTwo}></div>
                    <p className={styles.textStyle}>Withdraw</p>
                </div>
            </div>
          <svg 
                ref={svgRef} 
                width={670} 
                height={230}
                className={styles.graph}
          >
          </svg>
        </div>
      </div>
  );
};

