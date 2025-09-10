"use client";

import { ArrowRight } from "lucide-react";
import { ProjectDetails } from "./project-details";
import { useContext, useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "motion/react";
import { AnchorContext } from "@/contexts/AnchorContext";

type Project = {
  name: string;
  screenshot_url: string;
  id: string;
  ssl_url: string;
};

export function ProjectsSection() {
  const { projectsRef } = useContext(AnchorContext);
  const [projects, setProjects] = useState<Project[] | null>(null);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [previewImage, setPreviewImage] = useState<string | null>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { damping: 10, stiffness: 50 });
  const springY = useSpring(y, { damping: 10, stiffness: 50 });
  const handleMouseMove = (
    event: React.MouseEvent<HTMLElement, MouseEvent>
  ) => {
    x.set(event.clientX + 20);
    y.set(event.clientY + 20);
  };

  useEffect(() => {
    async function getProjects() {
      const url = "https://api.netlify.com/api/v1/sites";
      try {
        const response = await fetch(url, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_TOKEN}`,
          },
        });

        if (!response.ok) {
          throw new Error(`Response status: ${response.status}`);
        }

        const data = await response.json();

        // procura projetos pelo nome
        const forestProject = data.find((project: { name: string }) =>
          project.name.toLowerCase().includes("forest")
        );
        const petshopProject = data.find((project: { name: string }) =>
          project.name.toLowerCase().includes("petshop")
        );

        // monta só os dois definidos
        const selectedProjects = [forestProject, petshopProject].filter(
          Boolean
        );

        setProjects(selectedProjects);

        console.log(selectedProjects);
      } catch (error) {
        if (error instanceof Error) {
          console.error(error.message);
        } else {
          console.error(error);
        }
      }
    }

    getProjects();
  }, []);

  async function getProjectDetail(id: string) {
    const url = `https://api.netlify.com/api/v1/sites/${id}`;
    try {
      const response = await fetch(url, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_TOKEN}`,
        },
      });

      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }

      const data = await response.json();
      setSelectedProject(data);
      setPreviewImage(null);
      setIsOpen(!isOpen);
      console.log(data);
    } catch (error) {
      if (error instanceof Error) {
        console.error(error.message);
      } else {
        console.error(error);
      }
    }
  }
  return (
    <section
      ref={projectsRef}
      onMouseMove={handleMouseMove}
      className="relative sm:px-10 px-5 lg:px-15 mt-20 md:mt-30"
    >
      <h2 className="font-bold text-3xl md:text-4xl font-poppins text-white">
        Meus Projetos
      </h2>

      {projects?.map((project) => (
        <div key={project.name}>
          <div className="bg-gradient-to-r from-transparent via-neutral-700 to-transparent mt-12 h-[1px] w-full" />
          <div
            onMouseEnter={() => setPreviewImage(project.screenshot_url)}
            onMouseLeave={() => setPreviewImage(null)}
            className="flex-wrap items-center py-10 justify-between space-y-14 sm:flex sm:space-y-0 font-dm-sans"
          >
            <div>
              <p className="text-2xl text-white capitalize">{project.name}</p>

              <div className="flex gap-5 mt-2 text-[#d6995c]">
                <span>NextJS</span>
                <span>TypeScript</span>
                <span>TailwindCSS</span>
              </div>
            </div>
            <button
              className="text-white flex items-center gap-1 cursor-pointer hover:scale-105 transition-all"
              onClick={() => getProjectDetail(project.id)}
            >
              Ver Mais
              <ArrowRight />
            </button>

            {isOpen && selectedProject && (
              <ProjectDetails
                setIsOpen={(value) => {
                  setIsOpen(value);
                  if (value === false) setPreviewImage(null);
                }}
                isOpen={isOpen}
                project={selectedProject}
              />
            )}
          </div>
        </div>
      ))}

      <div className="bg-gradient-to-r from-transparent via-neutral-700 to-transparent mt-12 h-[1px] w-full" />

      {previewImage && !isOpen && (
        <motion.img
          src={previewImage}
          style={{ x: springX, y: springY }}
          className="fixed top-0 left-0 z-50 object-cover h-64 rounded-lg shadow-lg pointer-events-none w-96"
        />
      )}
    </section>
  );
}
