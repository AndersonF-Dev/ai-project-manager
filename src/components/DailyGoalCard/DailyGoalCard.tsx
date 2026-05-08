"use client"

import styles from "./DailyGoalCard.module.css"

import {
  FaCheckCircle,
} from "react-icons/fa"

interface DailyGoalCardProps {
  title: string
  completed?: boolean
}

export default function DailyGoalCard({
  title,
  completed = false,
}: DailyGoalCardProps) {
  return (
    <div
      className={`${styles.card} ${
        completed
          ? styles.completed
          : ""
      }`}
    >
      <div className={styles.left}>
        <div className={styles.checkbox}>
          {completed && (
            <FaCheckCircle />
          )}
        </div>

        <span>{title}</span>
      </div>

      <button className={styles.button}>
        {completed
          ? "Completed"
          : "Mark Done"}
      </button>
    </div>
  )
}