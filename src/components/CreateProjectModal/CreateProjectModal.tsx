"use client"

import { useState } from "react"

import styles from "./CreateProjectModal.module.css"

import {
  FaTimes,
} from "react-icons/fa"

interface CreateProjectModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function CreateProjectModal({
  isOpen,
  onClose,
}: CreateProjectModalProps) {
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [hoursPerDay, setHoursPerDay] = useState("")
  const [difficulty, setDifficulty] =
    useState("Medium")

  if (!isOpen) {
    return null
  }

  function HandleCreateProject() {
    console.log({
      title,
      description,
      hoursPerDay,
      difficulty,
    })

    onClose()
  }

  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <div className={styles.header}>
          <div>
            <h2>Create Project</h2>

            <p>
              Create and organize a
              new project.
            </p>
          </div>

          <button
            onClick={onClose}
            className={styles.closeButton}
          >
            <FaTimes />
          </button>
        </div>

        <div className={styles.form}>
          <div className={styles.inputGroup}>
            <label>
              Project Name
            </label>

            <input
              type="text"
              placeholder="Toolverse"
              value={title}
              onChange={(e) =>
                setTitle(e.target.value)
              }
            />
          </div>

          <div className={styles.inputGroup}>
            <label>
              Description
            </label>

            <textarea
              placeholder="Describe your project..."
              value={description}
              onChange={(e) =>
                setDescription(
                  e.target.value
                )
              }
            />
          </div>

          <div className={styles.row}>
            <div className={styles.inputGroup}>
              <label>
                Hours Per Day
              </label>

              <input
                type="number"
                placeholder="2"
                value={hoursPerDay}
                onChange={(e) =>
                  setHoursPerDay(
                    e.target.value
                  )
                }
              />
            </div>

            <div className={styles.inputGroup}>
              <label>
                Difficulty
              </label>

              <select
                value={difficulty}
                onChange={(e) =>
                  setDifficulty(
                    e.target.value
                  )
                }
              >
                <option>
                  Easy
                </option>

                <option>
                  Medium
                </option>

                <option>
                  Hard
                </option>
              </select>
            </div>
          </div>

          <button
            onClick={
              HandleCreateProject
            }
            className={styles.createButton}
          >
            Create Project
          </button>
        </div>
      </div>
    </div>
  )
}