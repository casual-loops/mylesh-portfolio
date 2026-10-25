import type { Metadata } from 'next';
import { Header,Footer } from '@/components/site-shell';
import {site} from '@/content/site';
import './globals.css';
export const metadata:Metadata={title:{default:site.title,template:'%s | Myles'},description:site.description};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body><Header/><main id="main">{children}</main><Footer/></body></html>}
