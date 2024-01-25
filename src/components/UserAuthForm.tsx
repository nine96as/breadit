'use client';

import { cn } from '@/lib/utils';
import { signIn } from 'next-auth/react';
import { FC, useState } from 'react';
import { toast } from 'sonner';
import { Icons } from './Icons';
import { Button } from './ui/Button';

interface UserAuthFormProps extends React.HTMLAttributes<HTMLDivElement> {}

const UserAuthForm: FC<UserAuthFormProps> = ({ className, ...props }) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const loginWithGoogle = async () => {
    setIsLoading(true);

    try {
      await signIn('google');
    } catch (error) {
      // toast notification
      toast.error('There was a problem', {
        description: 'There was an error logging in with Google'
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className={cn('flex justify-center', className)} {...props}>
      <Button
        onClick={loginWithGoogle}
        isLoading={isLoading}
        size='sm'
        className='w-full'
      >
        {isLoading ? null : <Icons.google className='w-4 h-4 mr-2' />}
        Google
      </Button>
    </div>
  );
};

export default UserAuthForm;
