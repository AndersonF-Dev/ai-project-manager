"use client";

import { useEffect, useState } from "react";

import Navbar from "@/components/Navbar/Navbar";
import ProjectCard from "@/components/ProjectCard/ProjectCard";
import CreateProjectModal from "@/components/CreateProjectModal/CreateProjectModal";
import DailyGoalCard from "@/components/DailyGoalCard/DailyGoalCard";
import GitHubRepoCard from "@/components/GitHubRepoCard/GitHubRepoCard";

import styles from "./page.module.css";

import { FaFolderOpen, FaCheckCircle, FaClock, FaFire } from "react-icons/fa";

interface Project {
  id: string;
  title: string;
  description: string;
  status: string;
  progress: number;
}

interface GitHubRepo {
  id: number;
  name: string;
  description: string | null;
  language: string | null;
  stargazers_count: number;
  status: string;
  stars?: number;
}

export default function HomePage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [projects, setProjects] = useState<Project[]>([]);
  const [repos, setRepos] = useState<GitHubRepo[]>([]);

  useEffect(() => {
    FetchProjects();
    FetchRepos();
  }, []);

  async function FetchProjects() {
    try {
      const response = await fetch("/api/projects");

      const data = await response.json();

      setProjects(data);
    } catch (error) {
      console.log(error);
    }
  }

  async function FetchRepos() {
    try {
      const response = await fetch("/api/github/repos");

      const data = await response.json();

      setRepos(data);
    } catch (error) {
      console.log(error);
    }
  }

  function OpenModal() {
    setIsModalOpen(true);
  }

  function CloseModal() {
    setIsModalOpen(false);
  }

  return (
    <section className={styles.dashboard}>
      <Navbar />

      <CreateProjectModal
        isOpen={isModalOpen}
        onClose={() => {
          CloseModal();

          FetchProjects();
        }}
      />

      <div className={styles.header}>
        <div>
          <h1>Dashboard</h1>

          <p>Manage your projects, goals and productivity.</p>
        </div>
      </div>

      <div className={styles.statsGrid}>
        <div className={styles.statCard}>
          <div className={styles.statIcon}>
            <FaFolderOpen />
          </div>

          <div>
            <h2>12</h2>
            <span>Projects</span>
          </div>
        </div>

        <div className={styles.statCard}>
          <div className={styles.statIcon}>
            <FaCheckCircle />
          </div>

          <div>
            <h2>5</h2>
            <span>Completed</span>
          </div>
        </div>

        <div className={styles.statCard}>
          <div className={styles.statIcon}>
            <FaClock />
          </div>

          <div>
            <h2>18</h2>
            <span>Daily Tasks</span>
          </div>
        </div>

        <div className={styles.statCard}>
          <div className={styles.statIcon}>
            <FaFire />
          </div>

          <div>
            <h2>7 Days</h2>
            <span>Productivity Streak</span>
          </div>
        </div>
      </div>

      <div className={styles.contentGrid}>
        <div className={styles.contentGridProjects}>
          <div className={styles.projectsSection}>
            <div className={styles.sectionHeader}>
              <h2>Active Projects</h2>
              <button onClick={OpenModal}>New Project</button>
            </div>
            <div className={styles.projectList}>
              {projects.map((project) => (
                <ProjectCard
                  key={project.id}
                  title={project.title}
                  description={project.description}
                  status={
                    project.status as "Planning" | "In Progress" | "Completed"
                  }
                  progress={project.progress}
                  tasks={0}
                />
              ))}
            </div>
          </div>
          <div className={styles.projectsSection}>
            <div className={styles.sectionHeader}>
              <h2>GitHub Repositories</h2>
            </div>
            <div className={styles.projectList}>
              {repos.map((repo) => (
                <GitHubRepoCard
                  key={repo.id}
                  name={repo.name}
                  description={repo.description || "No description provided"} // Fallback para null
                  language={repo.language || "Mix"} // Fallback para null
                  status={repo.status || "Public"} // Caso o status venha vazio da sua API
                  stars={repo.stargazers_count} // Aqui você usa o valor que vem da API
                />
              ))}
            </div>
          </div>
        </div>

        <div className={styles.goalsSection}>
          <div className={styles.sectionHeader}>
            <h2>Today Goals</h2>
          </div>

          <div className={styles.goalList}>
            <DailyGoalCard title="Create hitbox system" />

            <DailyGoalCard title="Improve NPC AI" />

            <DailyGoalCard title="Organize roadmap" completed />

            <DailyGoalCard title="Setup GitHub sync" />
          </div>
        </div>
      </div>
    </section>
  );
}
