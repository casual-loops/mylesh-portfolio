export const site = {
  name: 'Myles',
  title: 'Myles | The Observatory',
  description: 'A personal engineering portfolio exploring the space between systems, software, and infrastructure.',
  // Replace these values when your public profile URLs and contact address are ready.
  github: 'https://github.com/',
  linkedin: 'https://www.linkedin.com/',
  email: '',
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
    slug:'infrastructure-lab', name:'Infrastructure Lab', tagline:'A place to experiment.',
    summary:'My home environment for virtualization, containerization, networking, and hands-on systems exploration.',
    status:'Ongoing', areas:['Systems','Networking'], technologies:['Proxmox','Linux','Docker','Networking'],
    idea:'Understanding infrastructure is easier when I can build it, break it, inspect it, and improve it.',
    approach:'Use a personal Proxmox environment to host services and explore the relationships between virtual machines, applications, and networking.',
    evidence:['Proxmox-based virtual machines and containers','Self-hosted application environments','Practical networking and service administration experiments'],
    next:'Expand network experimentation and document repeatable lab exercises.'
  }
];
