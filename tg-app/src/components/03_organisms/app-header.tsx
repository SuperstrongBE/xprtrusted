"use client"
import classNames from 'classnames';
import { BrandBlockLogo } from '../01_atoms/brand-block-logo';
type AppHeaderProps = React.HTMLAttributes<HTMLDivElement> & {}
export const AppHeader: React.FunctionComponent<AppHeaderProps> = ({ className}) => { 
  const rootClasses = classNames({
  "container":true,
  "grid grid-cols-[min-content_1fr_min-content]":true,
  "py-4":true,
[`${className}`]: className,
  });

  return <header className={`${rootClasses}`}>
    
    <div className='justify-center items-center flex gap-2'>
      <BrandBlockLogo />
      <p className='text-xl font-bold'>Metal Quest</p>
     </div>
     <div></div>
   </header>
}