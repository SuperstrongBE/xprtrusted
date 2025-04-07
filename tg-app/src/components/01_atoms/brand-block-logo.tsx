"use client"
import classNames from 'classnames';
import Image from 'next/image';
type BrandBlockLogoProps = React.HTMLAttributes<HTMLDivElement> & {}
export const BrandBlockLogo: React.FunctionComponent<BrandBlockLogoProps> = ({className}) => { 
const rootClasses = classNames({
[`${className}`]: className,
});
  return <div className={`${rootClasses}`}>
     <Image width={30} height={30} src={'/metallicus-block.png'} alt='Metallicus block'></Image>
   </div>
}