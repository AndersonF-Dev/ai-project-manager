import styles
from "./GitHubRepoCard.module.css"

interface Props {
  name: string
  description: string
  language: string
  status: string
  stars: number
}

export default function GitHubRepoCard({
  name,
  description,
  language,
  status,
  stars,
}: Props) {
  return (
    <div className={styles.card}>
      <div>
        <h3>{name}</h3>

        <p>{description}</p>
      </div>

      <div className={styles.footer}>
        <span>
          {language}
        </span>

        <span>
          ⭐ {stars}
        </span>

        <span>
          {status}
        </span>
      </div>
    </div>
  )
}