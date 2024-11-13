import Link from 'next/link';
import Image from 'next/image';
import { auth, signIn, signOut } from '@/auth';
const Navbar = async () => {
  const session = await auth();
  console.log(session);

  return (
    <div className='px-5 py-3 bg-white shadow-sm font-works-sans'>
      <nav className='flex justify-between items-center'>
        <Link href='/'>
          <Image src='/logo.png' alt='logo' width={144} height={30} />
        </Link>
        <div className='flex items-center gap-5 text-black'>
          {session && session?.user ? (
            <>
              <Link href='/startup/create'>
                <span>Create</span>
              </Link>
              <form
                action={async () => {
                  'use server';
                  await signOut({ redirectTo: '/' });
                }}
              >
                <button type='submit'>Logout</button>
              </form>

              <Link href={`/user/${session?.id}`}>
                <Image
                  src={session?.user?.image || ''}
                  alt='profile pic'
                  width={30}
                  height={30}
                ></Image>
              </Link>
            </>
          ) : (
            <form
              action={async () => {
                'use server';
                await signIn('github');
              }}
            >
              <button type='submit'>Login</button>
            </form>
          )}
        </div>
      </nav>
    </div>
  );
};
export default Navbar;
