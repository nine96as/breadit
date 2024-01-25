import { FC } from 'react';
import { Icons } from './Icons';

const SignIn: FC = () => {
  return (
    <div className='container mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[400px]'>
      <div className='flex flex-col space-y-2 text-center'>
        <Icons.logo className='w-6 h-6 mx-auto' />
        <h1 className='text-2xl font-semibold tracking-tight'>Welcome back</h1>
        <p className='max-w-xs text-sm'>
          By continuing, you are setting up a Breadit account and agree to our
          User Agreement and Privacy Policy.
        </p>
      </div>
    </div>
  );
};

export default SignIn;
