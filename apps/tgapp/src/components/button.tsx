"use client"
import classNames from 'classnames';
type ButtonProps = React.HTMLAttributes<HTMLButtonElement> & {}
export const Button: React.FunctionComponent<ButtonProps> = ({ children,className,...rest}) => { 
  const rootClasses = classNames({
  "p-4 bg-black w-full rounded-md":true, 
[`${className}`]: className,
});
   return <button {...rest} className={`${rootClasses} `}>{children}</button>
}