import styles from "./ProjectCard.module.css"

import {
  FaClock,
  FaCheckCircle,
} from "react-icons/fa"

interface ProjectCardProps {
  title: string
  description: string
  status: "Planning" | "In Progress" | "Completed"
  progress: number
  tasks: number
}

export default function ProjectCard({
  title,
  description,
  status,
  progress,
  tasks,
}: ProjectCardProps) {
  return (
    <div className={styles.card}>
      <div className={styles.top}>
        <div>
          <h3>{title}</h3>

          <p>{description}</p>
        </div>

        <span className={styles.status}>
          {status}
        </span>
      </div>

      <div className={styles.progressSection}>
        <div className={styles.progressInfo}>
          <span>Progress</span>

          <strong>
            {progress}%
          </strong>
        </div>

        <div className={styles.progressBar}>
          <div
            className={styles.progressFill}
            style={{
              width: `${progress}%`,
            }}
          />
        </div>
      </div>

      <div className={styles.footer}>
        <div className={styles.footerItem}>
          <FaClock />

          <span>
            {tasks} Tasks
          </span>
        </div>

        <div className={styles.footerItem}>
          <FaCheckCircle />

          <span>
            Active
          </span>
        </div>
      </div>
    </div>
  )
}