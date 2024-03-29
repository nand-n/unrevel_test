import Link from 'next/link';
import './Header.scss';
import { AtomicLogo, AtomicSubtitle } from '../../atoms';
import { LoginButton, UserButton } from '@/components/molecules/button';
// import { CartButton, LoginButton, UserButton } from '../..';
// import { IUser } from '@/lib/types';

type IProps = {
  userInfo: any;
  logOut: () => void;
};
/**
 * Responsible for rendering a Header
 *
 * - Responsible for components begin to have the final shape
 * - Responsible for combination of molecules that work together or atoms that compose more elaborate interfaces
 */
export default function Header({ userInfo, logOut }: IProps) {
  return (
    <div className='header' id='header'>
      <div className='header__left'>
        <Link href='/'>
          <AtomicLogo size='l' />
        </Link>
      </div>

      <div className='header__center'>
        <AtomicSubtitle size='l' strength='600'>
          MEN
        </AtomicSubtitle>
        <AtomicSubtitle size='l' strength='600'>
          WOMEN
        </AtomicSubtitle>
        <Link href='/products'>
          <AtomicSubtitle size='l' strength='600'>
            ALL
          </AtomicSubtitle>
        </Link>
      </div>

      <div className='header__right'>
        <Link href='/cart'>
          {/* <CartButton /> */}
        </Link>

        {userInfo && userInfo.token ? (
          <UserButton logOut={logOut} />
        ) : (
          <Link href='/login'>
            <LoginButton />
          </Link>
        )}
      </div>
    </div>
  );
}
