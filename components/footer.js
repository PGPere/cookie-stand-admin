import React from "react";

export default function Footer() {
  return(
      <footer className='bg-emerald-400 text-xs mb-auto py-2 pl-3'>0 Locations Available</footer>
  );
}

// import React from "react";
// import Link from "next/link";
// import { useSelector } from "react-redux";

// export default function Footer() {
//   const count = useSelector((state) => state.countSlice.value);
//   return (
//     <footer className="p-4 bg-green-500">
//       <p> {count} Locations WorldWide</p>
//     </footer>
//   );
// }