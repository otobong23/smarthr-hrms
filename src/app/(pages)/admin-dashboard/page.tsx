import Image from "next/image";
import Link from 'next/link';
import { cards, cards2, statList, todayAbsent, invoice, payment, clients, recentProjects } from './AdminObj';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleDot } from "@fortawesome/free-regular-svg-icons";
// import { width } from "@fortawesome/free-brands-svg-icons/fa42Group";


export default function AdminDashboard() {
   return (
      <div className="p-[30px]">
         <header className="text-[#bbc4cc]">
            <h2 className=" text-lg font-semibold">Welcome Admin!</h2>
            <p className=" text-sm text-[#bbc4cc85] font-medium hidden md:block">
               Dashboard
            </p>
         </header>

         <div className="dash-stats grid md:grid-cols-2 lg:grid-cols-4 gap-7 mt-8">
            {cards.map((card, index) => (
               <div key={card.name + index} className="flex justify-between items-center bg-[#0000009f] p-4 rounded-md">
                  <div className="flex justify-center items-center bg-[#ff9b446e] rounded-full w-[59px] h-[59px] relative">
                     {card.icon}
                  </div>
                  <div className="stats-value text-[#bbc4cc]">
                     <h1 className="font-bold text-[23px] text-right">{card.stat}</h1>
                     <p className="text-[15px]">{card.name}</p>
                  </div>
               </div>
            ))}
         </div>

         <div className="grid gap-3 md:gap-0 md:grid-cols-4 my-8">
            {
               cards2.map((card2, index) => (
                  <div key={card2.name + index} className="card2 bg-[#0000009f] p-4 rounded-md">
                     <div className="head flex justify-between items-center font-semibold text-[#bbc4cc] text-[15px]">
                        <p>{card2.name}</p>
                        {card2.stat}
                     </div>
                     <div className=" flex flex-col gap-3 mt-3 mb-2">
                        <p className="text-[#bbc4cc] text-[14px] font-semibold">{card2.currentValue}</p>
                        <div className="progress h-[5px] w-full bg-white rounded">
                           <div className="bar bg-[#ff9b44] h-[5px] rounded" style={{
                              width: `${card2.percentage}%`
                           }}>
                           </div>
                        </div>
                     </div>
                     {card2.prevValue}

                  </div>
               ))
            }
         </div>

         <div className="grid gap-3 md:grid-cols-3">
            <div className="statistics bg-[#0000009f] rounded-md p-4 pb-6">
               <h1 className="text-[#bbc4cc] font-semibold text-lg">Statistics</h1>

               <ul className="statList grid grid-cols-1 gap-1 mt-6">
                  {
                     statList.map((list, index) => (
                        <li key={list.title + index} className=" flex flex-col gap-2 border border-[#2e3840] rounded p-3">
                           <div className="font-medium text-[12px] flex justify-between text-[#bbc4cc]">
                              <span>{list.title}</span>
                              <span>{list.result}</span>
                           </div>
                           <div className="w-full h-1 bg-white rounded">
                              <div className="h-1 rounded" style={{
                                 width: `${list.listBar}%`,
                                 backgroundColor: `${list.bg}`
                              }}></div>
                           </div>
                        </li>
                     ))
                  }
               </ul>
            </div>

            <div className="taskStatistics bg-[#0000009f] rounded-md p-4 pb-6">
               <h1 className="text-[#bbc4cc] font-semibold text-lg">Task Statistics</h1>
               <div className="flex justify-between items-center mt-6 gap-8">
                  <div className="total text-center  font-semibold border border-[#2e3840] text-[#bbc4cc] p-2 w-full">
                     <p className="text-[11px]">Total Tasks</p>
                     <p>385</p>
                  </div>
                  <div className="overdue text-center  font-semibold border border-[#2e3840] text-[#bbc4cc] p-2 w-full">
                     <p className="text-[11px]">Overdue Tasks</p>
                     <p>19</p>
                  </div>
               </div>

               <ul className="rateBar text-white text-[11px] font-semibold flex py-6">
                  <li className="bg-[#9386e9] w-[30%] text-center rounded-s">30%</li>
                  <li className="bg-[#ffbc34] w-[23%] text-center">22%</li>
                  <li className="bg-[#55ce63] w-[24%] text-center">24%</li>
                  <li className="bg-[#f62d51] w-[20%] text-center">21%</li>
                  <li className="bg-[#009efb] w-[10%] text-center rounded-e">10%</li>
               </ul>

               <ul className="taskStat flex flex-col gap-4 my-2">
                  <li className="flex justify-between">
                     <div className="flex items-center gap-2">
                        <FontAwesomeIcon icon={faCircleDot} className="w-4 text-[#9386e9]" />
                        <p className="font-semibold text-[#bbc4cc]">Completed Tasks</p>
                     </div>
                     <div>
                        <p className="font-semibold text-[#bbc4cc]">166</p>
                     </div>
                  </li>
                  <li className="flex justify-between">
                     <div className="flex items-center gap-2">
                        <FontAwesomeIcon icon={faCircleDot} className="w-4 text-[#ffbc34]" />
                        <p className="font-semibold text-[#bbc4cc]">Inprogress Tasks</p>
                     </div>
                     <div>
                        <p className="font-semibold text-[#bbc4cc]">166</p>
                     </div>
                  </li>
                  <li className="flex justify-between">
                     <div className="flex items-center gap-2">
                        <FontAwesomeIcon icon={faCircleDot} className="w-4 text-[#55ce63]" />
                        <p className="font-semibold text-[#bbc4cc]">On Hold Tasks</p>
                     </div>
                     <div>
                        <p className="font-semibold text-[#bbc4cc]">166</p>
                     </div>
                  </li>
                  <li className="flex justify-between">
                     <div className="flex items-center gap-2">
                        <FontAwesomeIcon icon={faCircleDot} className="w-4 text-[#f62d51]" />
                        <p className="font-semibold text-[#bbc4cc]">Pending Tasks</p>
                     </div>
                     <div>
                        <p className="font-semibold text-[#bbc4cc]">166</p>
                     </div>
                  </li>
                  <li className="flex justify-between">
                     <div className="flex items-center gap-2">
                        <FontAwesomeIcon icon={faCircleDot} className="w-4 text-[#009efb]" />
                        <p className="font-semibold text-[#bbc4cc]">Closed Tickets</p>
                     </div>
                     <div>
                        <p className="font-semibold text-[#bbc4cc]">166</p>
                     </div>
                  </li>
               </ul>

            </div>
            <div className="todayAbsent bg-[#0000009f] rounded-md p-4">
               <div className="flex items-center gap-2">
                  <h1 className="text-[#bbc4cc] text-semibold text-lg">Today Absent</h1>
                  <div className="w-6 bg-[#f211361f] rounded text-center">
                     <span className="text-[#e63c3c] font-semibold">5</span>
                  </div>
               </div>

               <div className="grid grid-col gap-3 my-3">
                  {
                     todayAbsent.map((item, index) => (
                        <div key={item.name + index} className="profile text-[12px] font-semibold p-3 border border-[#2e3840]">
                           <div className="flex items-center pb-4 gap-4">
                              <Image src={item.img} alt="alt" className="rounded-full w-9" />
                              <p className="text-[#bbc4cc]">{item.name}</p>
                           </div>
                           <div>
                              <p className="text-[#bbc4cc]">{item.date}</p>
                              <div className="flex justify-between items-center">
                                 <p className="text-[#8e8e8e]">Leave Date</p>
                                 {item.stat}
                              </div>
                           </div>
                        </div>
                     ))
                  }
               </div>

               <div className="button flex justify-center">
                  <button className="bg-white text-[#212529] p-2 px-4 rounded text-sm font-semibold">Load More</button>
               </div>
            </div>
         </div>

         <div className="grid gap-3 md:grid-cols-2 mt-8">
            <div className="table1 bg-[#34444c] rounded-md overflow-hidden">
               <div className="bg-[#16191c] rounded-t-md p-4">
                  <p className="text-[#bbc4cc] text-[22px] font-semibold">Invoices</p>
               </div>
               <div className="overflow-x-scroll whitespace-nowrap">
                  <table>
                     <thead>
                        <tr className="text-[#BBC4CC] text-[15px] font-semibold text-left">
                           <th className="py-2 px-4 border border-[#2e3840]">Invoice ID</th>
                           <th className="py-2 px-4 border border-[#2e3840]">Client</th>
                           <th className="py-2 px-4 border border-[#2e3840]">Due Date</th>
                           <th className="py-2 px-4 border border-[#2e3840]">Total</th>
                           <th className="py-2 px-4 border border-[#2e3840]">Status</th>
                        </tr>
                     </thead>
                     <tbody>
                        {invoice.map(({ id, client, dueDate, total, status }, index) => (
                           <tr key={client + index}>
                              <td className="py-2 px-4 border border-[#2e3840] text-[#8e8e8e]"><Link href="/">{id}</Link></td>
                              <td className="py-2 px-4 border border-[#2e3840] text-[#8e8e8e] text-sm"><Link href="/">{client}</Link></td>
                              <td className="py-2 px-4 border border-[#2e3840] text-[#fff]">{dueDate}</td>
                              <td className="py-2 px-4 border border-[#2e3840] text-[#fff]">{total}</td>
                              <td className="py-2 px-4 border border-[#2e3840]">{status}</td>
                           </tr>
                        ))}
                     </tbody>
                  </table>
               </div>
               <div className="text-center bg-[#16191c] rounded-b-md p-4">
                  <button className="text-[#bbc4cc] text-[15px] font-semibold">View all invoices</button>
               </div>
            </div>

            <div className="table2 bg-[#34444c] rounded-md overflow-hidden">
               <div className="bg-[#16191c] rounded-t-md p-4">
                  <p className="text-[#bbc4cc] text-[22px] font-semibold">Payments</p>
               </div>
               <div className="overflow-x-scroll whitespace-nowrap">
                  <table>
                     <thead>
                        <tr className="text-[#BBC4CC] text-[15px] font-semibold text-left">
                           <th className="py-2 px-4 border border-[#2e3840]">Invoice ID</th>
                           <th className="py-2 px-4 border border-[#2e3840]">Client</th>
                           <th className="py-2 px-4 border border-[#2e3840]">Payment Type</th>
                           <th className="py-2 px-4 border border-[#2e3840]">Paid Date</th>
                           <th className="py-2 px-4 border border-[#2e3840]">Paid Amount</th>
                        </tr>
                     </thead>
                     <tbody>
                        {payment.map(({ id, client, paymentType, paidDate, paidAmount }, index) => (
                           <tr key={client + index}>
                              <td className="py-2 px-4 border border-[#2e3840] text-[#8e8e8e]"><Link href="/">{id}</Link></td>
                              <td className="py-2 px-4 border border-[#2e3840] text-[#8e8e8e] text-sm"><Link href="/">{client}</Link></td>
                              <td className="py-2 px-4 border border-[#2e3840] text-[#fff]">{paymentType}</td>
                              <td className="py-2 px-4 border border-[#2e3840] text-[#fff]">{paidDate}</td>
                              <td className="py-2 px-4 border border-[#2e3840] text-[#fff]">{paidAmount}</td>
                           </tr>
                        ))}
                     </tbody>
                  </table>
               </div>
               <div className="text-center bg-[#16191c] rounded-b-md p-4">
                  <button className="text-[#bbc4cc] text-[15px] font-semibold">View all payments</button>
               </div>
            </div>

            <div className="table3 bg-[#34444c] rounded-md overflow-hidden">
               <div className="bg-[#16191c] rounded-t-md p-4">
                  <p className="text-[#bbc4cc] text-[22px] font-semibold">Clients</p>
               </div>
               <div className="overflow-x-scroll whitespace-nowrap">
                  <table>
                     <thead>
                        <tr className="text-[#BBC4CC] text-[15px] font-semibold text-left">
                           <th className="py-2 px-4 border border-[#2e3840]">Name</th>
                           <th className="py-2 px-4 border border-[#2e3840]">Email</th>
                           <th className="py-2 px-4 border border-[#2e3840]">Status</th>
                           <th className="py-2 px-4 border border-[#2e3840]">Action</th>
                        </tr>
                     </thead>
                     <tbody>
                        {clients.map(({ img, name, email, status, action }, index) => (
                           <tr key={name + index}>
                              <td className="px-5 pe-14 py-3 border border-[#2e3840] text-[#8e8e8e]"><Link href="/" className="flex items-center gap-3"><Image src={img} alt="alt" className="h-10 w-10 rounded-full" />{name}</Link></td>
                              <td className="px-5 py-3 border border-[#2e3840] text-[#fff] text-sm font-semibold"><Link href="/">{email}</Link></td>
                              <td className="px-3 py-3 border border-[#2e3840]">{status}</td>
                              <td className="px-9 border border-[#2e3840] text-[#fff] text-center">{action}</td>
                           </tr>
                        ))}
                     </tbody>
                  </table>
               </div>
               <div className="text-center bg-[#16191c] rounded-b-md p-4">
                  <button className="text-[#bbc4cc] text-[15px] font-semibold">View all clients</button>
               </div>
            </div>

            <div className="table4 bg-[#34444c] rounded-md overflow-hidden">
               <div className="bg-[#16191c] rounded-t-md p-4">
                  <p className="text-[#bbc4cc] text-[22px] font-semibold">Recent Projects</p>
               </div>
               <div className="overflow-x-scroll whitespace-nowrap">
                  <table>
                     <thead>
                        <tr className="text-[#BBC4CC] text-[15px] font-semibold text-left">
                           <th className="py-2 px-4 border border-[#2e3840]">Project Name</th>
                           <th className="py-2 px-4 border border-[#2e3840]">Progress</th>
                           <th className="py-2 px-4 border border-[#2e3840]">Action</th>
                        </tr>
                     </thead>
                     <tbody>
                        {recentProjects.map(({ projectName, openTasks, completed, progress, action }, index) => (
                           <tr key={projectName + index}>
                              <td className="px-3 py-3 border border-[#2e3840] text-[#8e8e8e]"><Link href="/" className="text-sm">
                                 <p>{projectName}</p>
                                 <p className="text-[12px] font-semibold">{openTasks} open tasks, {completed} tasks completed</p>
                              </Link></td>
                              <td className="px-3 py-3 border border-[#2e3840]">
                                 <div className="w-full h-1 bg-[#fff] rounded">
                                    <div className="bar h-1 rounded bg-[#25628f]" style={{ width: `${progress}%` }}></div>
                                 </div>
                              </td>
                              <td className="px-9 border border-[#2e3840] text-[#fff] text-center">{action}</td>
                           </tr>
                        ))}
                     </tbody>
                  </table>
               </div>
               <div className="text-center bg-[#16191c] rounded-b-md p-4">
                  <button className="text-[#bbc4cc] text-[15px] font-semibold">View all projects</button>
               </div>
            </div>
         </div>
      </div>
   );
}
