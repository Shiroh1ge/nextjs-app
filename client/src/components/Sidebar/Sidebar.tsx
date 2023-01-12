import React from 'react';
import { useGetPublicKey } from '../../data/queries/useGetPublicKey.query';
import HomeIcon from '@mui/icons-material/Home';
import GroupsIcon from '@mui/icons-material/Groups';
import Link from 'next/link';
import { useRouter } from 'next/router';

const routes = [
  { name: 'Home', icon: <HomeIcon />, path: '/' },
  { name: 'Following', icon: <GroupsIcon />, path: '/following' },
];

const Sidebar = ({ title, subtitle }: { title: string; subtitle?: string }): JSX.Element => {
  const { data: key } = useGetPublicKey();
  const router = useRouter();
  console.log('router', router);
  console.log('router.pathname', router.pathname);

  return (
    <div className=" w-full h-16 flex">
      <div className="flex w-[180px] flex-col h-full ml-auto mr-6 ">
        {routes.map((route, index) => {
          const isActiveRoute = router.pathname === route.path;
          const RouteElement = isActiveRoute
            ? ({ children }: { children: any }) => (
                <b className="flex items-center w-full h-full text-xl p-4 hover:bg-sky-700 ease-in duration-150 border rounded-md">
                  {children}
                </b>
              )
            : ({ children }: { children: any }) => (
                <span className="flex items-center w-full h-full text-xl p-4 hover:bg-sky-700 ease-in duration-150 rounded-md">
                  {children}
                </span>
              );

          return (
            <Link href={route.path} key={index}>
              <div className={`flex cursor-pointer`}>
                <RouteElement>
                  <span className="mr-2">{route.icon}</span>
                  <span>{route.name}</span>
                </RouteElement>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Sidebar;
