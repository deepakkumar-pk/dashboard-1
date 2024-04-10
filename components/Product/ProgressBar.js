'use client'
import * as React from "react";
import { useState } from "react";
import CircularProgress from "@mui/joy/CircularProgress";
import { useCountUp } from "use-count-up";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

export default function ProgressBar({ percentage, color, strokeColor }) {

  const { value: value2 } = useCountUp({
    isCounting: true,
    duration: 1,
    start: 0,
    end: percentage,
  });

  return (
    <div className="h-14 w-14">
      <CircularProgressbar
        value={value2}
        text={`${value2}%`}
        strokeWidth={14}
        styles={{
          path: {
            stroke: color, // Fix: Remove unnecessary curly braces
            strokeLinecap: "round",
            transition: "stroke-dashoffset 0.5s ease 0s",
            transformOrigin: "center center",
          },
          trail: {
            stroke: strokeColor, // Fix: Remove unnecessary curly braces
            strokeLinecap: "butt",
            transformOrigin: "center center",
          },
          text: {
            fill: color,
            fontSize: "18px",
          },
        }}
      />
    </div>
  );
}
