import type { Metadata } from 'next';
import { Header,Footer } from '@/components/site-shell';
import { BackToTop } from '@/components/back-to-top';
import {site} from '@/content/site';
import './globals.css';
export const metadata:Metadata={title:{default:site.title,template:'%s | Myles Hobdy'},description:site.description};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body><a className="skip-link" href="#main">Skip to content</a><Header/><main id="main">{children}</main><Footer/><BackToTop/></body></html>}
