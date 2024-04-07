"use client";
// import { CorePortfolio } from "@/backend/src/API";
import { Navbar } from "@/components/navbar";
import type { InferGetStaticPropsType, GetStaticProps } from "next";
import { useState, useEffect } from "react";

type CorePortfolio = {
  __typename: "CorePortfolio";
  date: string;
  ticker: string;
  return?: string | null;
  weight?: string | null;
  weighted_return?: string | null;
  createdAt: string;
  updatedAt: string;
  owner?: string | null;
};

// export const getStaticProps = (async (context) => {
//   const res = await fetch("http://localhost:3000/api/date/route");
//   const data = await res.json();
//   return { props: { data } };
// }) satisfies GetStaticProps<{
//   data: CorePortfolio;
// }>;

// export default function Page({
//   data,
// }: InferGetStaticPropsType<typeof getStaticProps>) {
//   return (
//     <>
//       <Navbar />
//       <h1 className=" m-3 text-center">{data[0].date.substring(0, 10)}</h1>

//       <div className="hero min-h-screen m-3">
//         <table className="table hero-content text-center">
//           <thead className="text-xs text-gray-700 uppercase dark:text-gray-400">
//             <tr>
//               <th>Ticker</th>
//               <th>Weight</th>
//               <th>Return</th>
//               <th>Weighted Return</th>
//             </tr>
//           </thead>
//           <tbody>
//             {data?.map((explanation: any) => (
//               <tr key={explanation.ticker} className="hover">
//                 <td>{explanation.ticker}</td>
//                 <td>{(Number(explanation.weight) * 100).toFixed(1)}%</td>
//                 <td>{(Number(explanation.return) * 100).toFixed(1)}%</td>
//                 <td>
//                   {(Number(explanation.weighted_return) * 100).toFixed(1)}%
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </>
//   );
// }
export default function Profile() {
  const [data, setData] = useState<null | CorePortfolio[]>([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/date/route")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      });
    console.log(data);
  }, []);

  if (isLoading) return <p>Loading...</p>;
  if (!data) return <p>No profile data</p>;
  console.log(data);
  return (
    <>
      <Navbar />
      <h1 className=" m-3 text-center">{data[0].date.substring(0, 10)}</h1>

      <div className="hero min-h-screen m-3">
        <table className="table hero-content text-center">
          <thead className="text-xs text-gray-700 uppercase dark:text-gray-400">
            <tr>
              <th>Ticker</th>
              <th>Weight</th>
              <th>Return</th>
              <th>Weighted Return</th>
            </tr>
          </thead>
          <tbody>
            {data?.map((explanation) => (
              <tr key={explanation.ticker} className="hover">
                <td>{explanation.ticker}</td>
                <td>{(Number(explanation.weight) * 100).toFixed(0)}%</td>
                <td>{(Number(explanation.return) * 100).toFixed(2)}%</td>
                <td>
                  {(Number(explanation.weighted_return) * 100).toFixed(2)}%
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
