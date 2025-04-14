"use client"
import { useTrustifyContext } from '@/components/05_providers/UserProvider';
import { Button } from '@/components/button';
import classNames from 'classnames';
type ButtonTestProps = React.HTMLAttributes<HTMLDivElement> & {}
export const ButtonTest: React.FunctionComponent<ButtonTestProps> = () => { 

  const { setUserState} = useTrustifyContext()

   return <main className="container flex justify-center items-center w-full flex-col gap-2">
   <Button onClick={()=>setUserState('prepare')}>Prepare</Button>
   <Button onClick={()=>setUserState('start')}>Start</Button>
   <Button onClick={()=>setUserState('connect')}>Connect</Button>
   <Button onClick={()=>setUserState('verify')}>Verify</Button>
   <Button onClick={()=>setUserState('link')}>Link</Button>
   <Button onClick={()=>setUserState('trusted')}>Trusted</Button>
   <Button onClick={()=>setUserState('processing')}>Processing</Button>
 </main>
}