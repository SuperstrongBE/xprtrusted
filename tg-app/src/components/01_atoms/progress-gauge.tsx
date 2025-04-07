"use client"
import classNames from 'classnames';
import { useMemo } from 'react';
type ProgressGaugeProps = React.HTMLAttributes<HTMLDivElement> & {progress?:number}
export const ProgressGauge: React.FunctionComponent<ProgressGaugeProps> = ({ className,progress}) => { 
  const rootClasses = classNames({
  "shadow-[inset_0_-0px_6px_rgba(0,0,0,0.6)]":true,
  "rounded-sm overflow-hidden":true,
  "relative":true,
  "h-3 w-full":true,
[`${className}`]: className,
  });
  
  const percentToClass = useMemo(() => {
    if (!progress) return '0'
    if (progress == 0) return '0'
    return  `${Math.ceil(progress * 100)}%`;
    

    
  },[])

  return <div className={`${rootClasses}`}>
     <div style={{transform:`scaleX(${percentToClass})`}} className={`absolute left-0 right-0 top-0 bottom-0 bg-green-600  origin-left`}></div>
   </div>
}