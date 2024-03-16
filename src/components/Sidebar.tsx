"use client";
import { useContext } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronDown, faThermometer } from "@fortawesome/free-solid-svg-icons"
import { faGaugeHigh } from "@fortawesome/free-solid-svg-icons"
import Link from "next/link"
import { BarStateContext } from "./toggleBarContext"


const links = [
  {
    title: 'Admin Dashboard',
    path: '/admin-dashboard'
  },
  {
    title: 'Employee Dashboard',
    path: '/employee-dashboard'
  },
  {
    title: 'All Employees',
    path: '/all-employees'
  }
]



export default function Sidebar() {

  const {barState, setBar} = useContext(BarStateContext)
  // const size = () => (window.innerWidth) >= 1024 ? 224 : 229;
  return (
    <>
    <div className="hidden lg:block desktop-screen h-screen bg-[#34444C] fixed top-16 left-0 pt-[10px] transition-all duration-300 overflow-hidden" style={{
      width: barState ? 229 : 59
    }}>
      <h1 className="px-[15px] py-[5px] text-sm text-[#bbc4cc] font-extrabold" style={{display: barState ? 'block' : 'none'}}>Main</h1>
      <div className="dashboard-link">
        <button className="flex text-sm text-[#bbc4cc] font-extrabold px-[15px] py-[8px] w-full items-center">
          <FontAwesomeIcon icon={faGaugeHigh} style={{fontSize: barState ? 16 : 30}} />
          <span className="pl-[15px]" style={{display: barState ? 'inline' : 'none'}}>Dashobard</span>
          <FontAwesomeIcon icon={faChevronDown} className="w-4 ml-auto" style={{display: barState ? 'inline' : 'none'}} />
        </button>
        <div className="dashboard-list" style={{display: barState ? 'inline' : 'none'}}>
          {links.map(({title, path},index) => (<div key={title+index} className="py-[9px] pl-[50px] pr-[15px]">
            <Link href={path} className="text-sm text-[#bbc4cc]">{title}</Link>
          </div>))}
        </div>
      </div>
    </div>

    {/* ----------------------------------------------------------------------- */}

    <div className="mobile-screen w-[224px] lg:hidden h-screen bg-[#34444C] fixed top-16 pt-[10px] transition-all duration-300 overflow-hidden" style={{
      left: barState ? 0 : -224,
    }}>
      <h1 className="px-[15px] py-[5px] text-sm text-[#bbc4cc] font-extrabold">Main</h1>
      <div className="dashboard-link">
        <button className="flex text-sm text-[#bbc4cc] font-extrabold px-[15px] py-[8px] w-full items-center">
          <FontAwesomeIcon icon={faGaugeHigh} className="text-base" />
          <span className="pl-[15px]">Dashobard</span>
          <FontAwesomeIcon icon={faChevronDown} className="w-4 ml-auto" />
        </button>
        <div className="dashboard-list">
          {links.map(({title, path},index) => (<div key={title+index} className="py-[9px] pl-[50px] pr-[15px]">
            <Link href={path} className="text-sm text-[#bbc4cc]">{title}</Link>
          </div>))}
        </div>
      </div>
    </div>
    </>
  )
}
