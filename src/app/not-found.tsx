import Link from "next/link";
export default function () {
  return (
    <div>
         <div className="text-center justify-items-center text-gray-500 m-20 ">
            <h1 className="text-5xl font-bold  text-lime-600 my-40">You’ve found a 404 bug!</h1>
            <p className="text-gray-600 text-2xl font-bold">
            Unfortunately, the page you requested could not be found.</p>
           <p className="text-gray-500 text-2xl items-start">The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.</p>
            <div>
            <div className="flex text-start">
            <p>Please try the following:</p>
            </div>
            <div className="flex text-start">
            <ul className=" list-inside list-disc">
                <li>If you typed the page address in the Address bar, make sure that it is spelled correctly.</li>
                <li>Open the <Link href="/" className="text-blue-600 underline">homepage</Link>, and then look for links to the information you want.</li>
                <li>Click your browsers Back button to try another link.</li>
                <li><Link href="https://www.ambius.com/contact-us" className="text-blue-600 underline">Contact us</Link></li>
            </ul>
            </div>
            <div className="flex text-center text-2xl">
                <p>Use our search facility to enter search criteria for the information you require. HTTP 404 - File not found</p>
            </div>
            </div>
            </div>
        
      </div>
      
    
  );
}
