import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLongIcon, ChevronIcon, PowerIcon } from '@/components/Icons';
import { useTranslation } from 'react-i18next';
import useGlobalOptions from '@/hook/useGlobalOptions';


const Sidebar = ({ menu }) => {
  const { t } = useTranslation();
  const { open, setOpen } = useGlobalOptions()
  const [stack, setStack] = useState([])


  useEffect(() => {
    resetStack();
  }, [])

  const resetStack = () => {
    setStack([{ list: menu }]);
  }

  const onBack = () => {
    let list = stack;
    list.pop()
    setStack([...list])
  }

  const onNextList = (list, name) => {
    setStack(prev => [...prev, { list, name }])
  }

  const list = (links) => {
    return links?.map((item) => {
      if (item?.children) {
        return (
          <li
            key={item?.name}
            className={`relative group w-full border-b dark:border-black border-gray-200`}
          >
            <button
              className={`ltr:hover:pl-6 rtl:hover:pr-6 transition-all whitespace-nowrap py-2  border-b gap-3 justify-between hover:text-blue-600 hover:bg-gray-100 dark:hover:bg-transparent dark:hover:text-white ltr:pl-4 rtl:pr-4 w-full flex `}
              onClick={(e) => {
                e.stopPropagation()
                onNextList(item.children, item?.name)
              }}
            >
              <span className="scale-[80%] px-2">{item?.icon}</span>
              {item.name}
              <span
                className={`scale-[60%] rtl:rotate-90 ltr:ml-auto rtl:mr-auto pl-2 rtl:pr-2 ltr:-rotate-90 transition-transform duration-200`}
              >
                <ChevronIcon />
              </span>
            </button>
          </li>
        );
      }
      if (item?.subChild) {
        return (
          <li
            key={item?.name}
            className={`relative group w-full`}
          >
            <button
              className={`ltr:hover:pl-6 rtl:hover:pr-6 transition-all whitespace-nowrap py-2  border-b gap-3 justify-between hover:text-blue-600 hover:bg-gray-100 dark:hover:bg-transparent dark:hover:text-white ltr:pl-4 rtl:pr-4 w-full flex `}
              onClick={(e) => {
                e.stopPropagation()
                // handleClick(item?.name, level);
                onNextList(item.subChild, item?.name)
              }}
            >
              {item.name}
              <span
                className={`scale-[60%] rtl:rotate-90 ltr:ml-auto rtl:mr-auto pl-2 rtl:pr-2 -rotate-90 transition-transform duration-200`}
              >
                <ChevronIcon />
              </span>
            </button>
          </li>
        );
      }
      return (
        <li key={item?.name} className="relative w-full">
          {item?.path === '' ? (
            <button onClick={resetStack} className="whitespace-nowrap py-2  border-b hover:text-blue-600 dark:hover:bg-transparent dark:hover:text-white px-4 w-full flex">
              {item.name}
            </button>
          ) : (
            <Link
              onClick={resetStack}
              className="whitespace-nowrap py-2  border-b  hover:text-blue-600 dark:hover:bg-transparent dark:hover:text-white px-4 w-full flex"
              to={item?.path}
            >
              {item.name}
            </Link>
          )}
        </li>
      );
    });
  };

  if(!open) return;

  return (
    <div className='bg-[#00000021] h-screen fixed top-[72px] left-0 w-full' onClick={() => setOpen(false)}>
      <aside
        className={`lg:hidden relative transition-all h-full w-72 flex flex-col shadow z-[101] duration-300 bg-white dark:bg-dark-bg ${open ? 'left-0' : '-left-72'
          }`}
      >
        {stack.length > 1 ?
          (
            <button
              onClick={(e) => {
                e.stopPropagation()
                onBack()
              }}
              className='flex items-center gap-2 p-4 bg-blue-100 text-primary font-medium '><ArrowLongIcon className="h-5 w-5 rotate-180" /> {stack.at(-1)?.name} </button>
          )
          : null}
        <ul className="flex-col flex-1 overflow-auto max-h-screen text-gray-500 dark:text-gray-400 text-sm font-medium min-h-[40px] flex items-start capitalize">
          {list(stack?.at(-1)?.list)}
          <li className="relative w-full">
            <button
              className={`whitespace-nowrap py-2  border-b gap-3 flex items-center text-red-500 ltr:hover:pl-6 rtl:hover:pr-6 hover:bg-red-500 hover:text-white duration-300 w-full `}
            >
              <span className="scale-[80%] px-2">
                <PowerIcon className="text-inherit h-6 w-6" />{' '}
              </span>
              {t('logout')}
            </button>
          </li>
        </ul>
      </aside>
    </div>
  );
};

export default Sidebar;
