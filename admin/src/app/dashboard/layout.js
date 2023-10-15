import Sidenav from "../../../components/sidenav";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function DashboardLayout({ children }) {
  return (
     
         
       <main className="grid grid-cols-2 max-h-[100vh]   transition-[grid-template-columns] lg:grid-cols-[200px_1fr]  lg:[&:has(>*:first-child:hover)]:grid-cols-[210px_1fr]">
     <div className=" ">  <Sidenav /></div>
        <div className=" ">{children}</div>
      </main>
     
  );
}
