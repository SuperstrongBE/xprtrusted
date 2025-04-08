"use client"
import useAppUser from '@/hooks/tg-user';
import classNames from 'classnames';

type AppFooterProps = React.HTMLAttributes<HTMLDivElement> & {}
export const AppFooter: React.FunctionComponent<AppFooterProps> = ({ className}) => { 
  const rootClasses = classNames({
  "container":true,
  "grid grid-cols-[min-content_1fr_min-content]":true,
  "p-4":true,
[`${className}`]: className,
  });
  
  const {telegramUser} = useAppUser()

  return <footer className={`${rootClasses}`}>
     <div></div>
    <div className='justify-center items-center flex flex-col '>
      <p className='text-center'>Copyright Metallicus {new Date().getFullYear()}</p>
      <p className='text-center'>Your TG id:{ telegramUser?.id}</p>
     </div>
     <div></div>
   </footer>
}