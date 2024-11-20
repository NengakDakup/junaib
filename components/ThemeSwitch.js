import React from 'react'

const ThemeSwitch = ({theme, setTheme}) => {
  return (
    <div className="fixed top-1/4 -left-2 z-3">
      <span className="relative inline-block rotate-90">
        <input type="checkbox" className="checkbox opacity-0 absolute" id="chk" onChange={(e) => setTheme(!theme)} />
        <label className="label bg-slate-900 dark:bg-white shadow dark:shadow-gray-700 cursor-pointer rounded-full flex justify-between items-center p-1 w-14 h-8" for="chk">
          <i className="uil uil-moon text-[20px] text-yellow-500 mt-1"></i>
          <i className="uil uil-sun text-[20px] text-yellow-500 mt-1"></i>
          <span className="ball bg-white dark:bg-slate-900 rounded-full absolute top-[2px] start-[2px] w-7 h-7"></span>
        </label>
      </span>
    </div>
  )
}

export default ThemeSwitch