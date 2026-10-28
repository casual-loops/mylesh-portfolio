export const site = {
  name: 'Myles',
  url: 'https://mylesh.dev',
  title: 'Myles Hobdy | Portfolio',
  description: 'A personal engineering portfolio exploring the space between systems, software, and infrastructure.',
  github: 'https://github.com/casual-loops',
  linkedin: 'https://www.linkedin.com/in/myleshobdy/',
  email: 'myles@pyxishl.net',
};
export type Project = {
  slug: string; name: string; tagline: string; summary: string;
  status: string; areas: string[]; technologies: string[];
  idea: string; approach: string; evidence: string[]; next: string;
  live?: string; repo?: string;
};
export const projects: Project[] = [
  {
    slug:'domain-doctor', name:'Domain Doctor', tagline:'What can a domain tell us?',
    summary:'A web-based diagnostic platform for examining DNS, TLS, HTTP behavior, and security headers.',
    status:'Deployed', areas:['Software','Infrastructure'], technologies:['Python','FastAPI','Docker','Caddy'],
    idea:'Domain configuration is distributed across several layers. I wanted a single place to inspect those layers and make the results easier to understand.',
    approach:'Build a focused API and frontend, keep the checks readable, and operate the application as a containerized public service.',
    evidence:['Four diagnostic sections: DNS, TLS, HTTP, and security headers','Automated tests and container-based deployment','Operational monitoring and privacy-conscious analytics'],
    next:'Continue improving diagnostic coverage and report clarity.'
  },
  {
    slug:'tapestree', name:'Tapestree', tagline:'Making change easier to govern.',
    summary:'An evolving multi-tenant platform for change capture, approvals, evidence, and accountability.',
    status:'In development', areas:['Software','Cloud'], technologies:['Next.js','TypeScript','PostgreSQL','Supabase','Azure'],
    idea:'Smaller teams need a change process that is traceable without becoming unnecessarily complex.',
    approach:'Design a multi-tenant application with scoped authorization, clear workflows, and automated tests, then deploy iteratively into cloud infrastructure.',
    evidence:['Tenant-aware data model and access controls','Automated application and database tests','Azure deployment pipeline and infrastructure'],
    next:'Continue iterating on the product and documenting design tradeoffs.'
  },
  {
    slug:'queueforge', name:'QueueForge', tagline:'Testing the limits of backend reliability.',
    summary:'A progressive backend engineering lab investigating concurrency, database correctness, asynchronous processing, and distributed systems reliability.',
    status:'In progress', areas:['Software','Infrastructure'], technologies:['Python','PostgreSQL','FastAPI','Docker'],
    idea:'Reliable backend systems must behave correctly when requests overlap, dependencies fail, and traffic grows.',
    approach:'Develop one job-processing platform through controlled experiments, failing tests, comparative implementations, and engineering reports.',
    evidence:['Initial Python concurrency experiments and PostgreSQL schema','Docker Compose laboratory setup','16-week engineering roadmap with progressively introduced components'],
    next:'Complete concurrency and transactional correctness labs, then extend the platform with verified database and distributed processing features.',
    repo:'https://github.com/casual-loops/bdse-course'
  },
  {
    slug:'the-observatory', name:'The Observatory', tagline:'The project behind this portfolio.',
    summary:'A responsive engineering portfolio built to connect project stories, technical decisions, and professional experience.',
    status:'Deployed', areas:['Software'], technologies:['Next.js','TypeScript'],
    idea:'A portfolio should show not only what was built, but also why it was built and which decisions shaped it.',
    approach:'Build a content-driven Next.js site with reusable case studies, responsive layouts, and a shared registry that powers project discovery.',
    evidence:['Live Next.js portfolio with project case studies and responsive layouts','Shared project registry powering routes, featured work, and the sitemap','Custom technical diagrams, accessible navigation, and route metadata'],
    next:'Continue refining case studies, design consistency, accessibility, and engineering evidence.',
    live:'https://mylesh.dev', repo:'https://github.com/casual-loops/mylesh-portfolio'
  },
  {
    slug:'infrastructure-lab', name:'Infrastructure Lab', tagline:'A place to experiment.',
    summary:'My home environment for virtualization, containerization, networking, and hands-on systems exploration.',
    status:'Ongoing', areas:['Systems','Networking'], technologies:['Proxmox','Linux','Docker','Networking'],
    idea:'Understanding infrastructure is easier when I can build it, break it, inspect it, and improve it.',
    approach:'Use a personal Proxmox environment to host services and explore the relationships between virtual machines, applications, and networking.',
    evidence:['Proxmox-based virtual machines and containers','Self-hosted application environments','Practical networking and service administration experiments'],
    next:'Expand network experimentation and document repeatable lab exercises.'
  }
];
