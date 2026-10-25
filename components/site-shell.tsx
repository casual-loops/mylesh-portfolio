import Link from 'next/link';
import { ArrowUpRight, Github, Linkedin, Mail } from 'lucide-react';
import { site } from '@/content/site';
import { HeaderNavigation } from '@/components/header-navigation';
export function OrbitMark({ small = false }: { small?: boolean }) {
  return <span aria-hidden="true" className={`orbit-mark ${small ? 'orbit-mark-small' : ''}`}>
    <span className="orbit-mark-ring" />
    <span className="orbit-mark-center" />
    <span className="orbit-mark-track orbit-mark-track-red"><span className="orbit-mark-satellite orbit-mark-satellite-red" /></span>
    <span className="orbit-mark-track orbit-mark-track-blue"><span className="orbit-mark-satellite orbit-mark-satellite-blue" /></span>
  </span>;
}
export function Header() { return <header className="site-header shell"><Link className="brand" href="/" aria-label="Myles Hobdy, home"><OrbitMark/><span>MYLES HOBDY</span></Link><HeaderNavigation /></header>; }
export function Footer() { return <footer className="site-footer shell"><div className="footer-intro"><OrbitMark/><div><h2>Let's connect.</h2><p>Always up for a conversation about technology, space, or something you're building.</p></div></div><div className="footer-links"><a href={site.github} target="_blank" rel="noreferrer"><Github size={18}/>GitHub</a><a href={site.linkedin} target="_blank" rel="noreferrer"><Linkedin size={18}/>LinkedIn</a>{site.email ? <a href={`mailto:${site.email}`}><Mail size={18}/>Email</a>:<span className="footer-note">Contact email coming soon</span>}</div><div className="footer-bottom"><span>© {new Date().getFullYear()} Myles</span><span>Made with curiosity. <ArrowUpRight size={13}/></span></div></footer>; }
export function PageHeader({index,kicker,title,children}:{index:string;kicker:string;title:string;children:React.ReactNode}) {return <section className="page-heading shell"><div className="eyebrow">{index} <span className="eyebrow-divider">/</span> {kicker}</div><h1>{title}</h1><div className="page-lead">{children}</div><span className="heading-orbit" aria-hidden="true"/></section>}
export function SectionTitle({index,name,href,label}:{index:string;name:string;href?:string;label?:string}) {return <div className="section-title"><div><span>{index}</span> <span className="eyebrow-divider">/</span> {name}</div>{href&&<Link href={href}>{label??'Explore'} <ArrowUpRight size={16}/></Link>}</div>}
