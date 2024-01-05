'use client';

import { Header } from '@/components/organisms/header';
import { PropsWithChildren, useCallback } from 'react';
// import { Header } from '../..';
// import { IUser } from '@/lib/types';
// import { logOut, useAppDispatch, useAppSelector } from '@/app/hooks/hooks';
// import { selectUser } from '@/app/store/features';

export default function HeaderLayout({ children }: PropsWithChildren) {
  // const userInfo: IUser = useAppSelector(selectUser);
  // const dispatch = useAppDispatch();

  // const logOutHandler = useCallback(() => {
  //   logOut(dispatch);
  // }, [dispatch]);

  return (
    <>
      {/* <Header /> */}
      <main id='container'>{children}</main>
    </>
  );
}
