import { Outlet } from 'react-router-dom';
import { AuthStatus } from 'src/components/AuthStatus';
import { NavLink } from "react-router-dom";
import { useToggle } from "src/composables/useToggle"
import { Suspense } from 'react';
import { Loading } from 'src/components/ui/Loading';

export function DefaultLayout() {
  const [isShow, setIsShow] = useToggle(true);

  return (
    <div>
      <div className="absolute top-0 left-0 right-0 py-6">
        <div className="main-container flex justify-between items-center ">
          <p className="font-bold text-rm-yellow">Rick and Morty</p>
          <nav className="sm:block hidden">
            <ul className="flex gap-5">
              <li className="nav__item">
                <NavLink to="/">Home</NavLink>
              </li>
              <li className="nav__item">
                <NavLink to="/characters">Characters</NavLink>
              </li>
              <li className="nav__item">
                <NavLink to="/episodes">Episodes</NavLink>
              </li>
              <li className="nav__item">
                <NavLink to="/locations">Locations</NavLink>
              </li>
            </ul>
          </nav>
          
          <div className="hidden sm:block">
            <AuthStatus/>
          </div>

          {!isShow && <div className="mobile-menu" onClick={() => setIsShow()}>
            <nav className="">
              <ul className="flex flex-col gap-5">
                <li className="nav__item">
                  <NavLink to="/" replace="/">Home</NavLink>
                </li>
                <li className="nav__item">
                  <NavLink to="/characters">Characters</NavLink>
                </li>
                <li className="nav__item">
                  <NavLink to="/episodes">Episodes</NavLink>
                </li>
                <li className="nav__item">
                  <NavLink to="/locations">Locations</NavLink>
                </li>
                <li>
                  <AuthStatus/>
                </li>
              </ul>
            </nav>
          </div> }

          <button className="block sm:hidden z-50"
            onClick={() => setIsShow()}
          >
            {isShow ?
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="14" viewBox="0 0 18 14" fill="none">
              <path d="M17 1L1 1" stroke="#fff" strokeWidth="1.5" strokeLinecap="round"/>
              <path d="M17 7L1 7" stroke="#fff" strokeWidth="1.5" strokeLinecap="round"/>
              <path d="M17 13L1 13" stroke="#fff" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
            :
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M6.11936 6L18 18M17.8806 6L6 18" stroke="#fff" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
            }
          </button>
        </div>
      </div>
      <Suspense fallback={<Loading />}>
        <Outlet />
      </Suspense>
    </div>
  );
}

  