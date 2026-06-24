import { ExternalLink } from 'lucide-react';
import { GithubIcon } from '../components/icons/BrandIcons';
import NexvoraPreview from '../components/previews/NexvoraPreview';
import CallFormPreview from '../components/previews/CallFormPreview';
import { PROJECTS } from '../data/links';
import './Projects.css';

const nexvora   = PROJECTS.find(p => p.id === 'nexvora');
const calltaking = PROJECTS.find(p => p.id === 'calltaking');

function ProjectCard({ project, Preview }) {
  return (
    <article className="project-card card">
      <div className="project-preview">
        <Preview />
      </div>
      <div className="project-info">
        <h3 className="project-title">{project.title}</h3>
        <p className="project-desc">{project.desc}</p>
        <div className="project-stack">
          {project.stack.map(s => (
            <span key={s} className="badge">{s}</span>
          ))}
        </div>
        <div className="project-links">
          {project.links.demo && (
            <a href={project.links.demo} target="_blank" rel="noopener noreferrer"
              className="btn btn-primary btn-sm">
              <ExternalLink size={13} /> Live Demo
            </a>
          )}
          {project.links.github && (
            <a href={project.links.github} target="_blank" rel="noopener noreferrer"
              className="btn btn-outline btn-sm">
              <GithubIcon size={13} /> View Code
            </a>
          )}
        </div>
      </div>
    </article>
  );
}

export default function Projects() {
  return (
    <section className="section section-alt" aria-label="Other projects">
      <div className="container">
        <div className="label">
          <span className="label-line" aria-hidden="true" />
          Other Work
        </div>
        <div className="section-heading" style={{ marginBottom: 36 }}>
          More Projects
        </div>

        <div className="projects-grid">
          <ProjectCard project={nexvora}    Preview={NexvoraPreview}  />
          <ProjectCard project={calltaking} Preview={CallFormPreview} />
        </div>
      </div>
    </section>
  );
}
