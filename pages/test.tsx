"use client";
import { CorePortfolio } from "@/backend/src/API";
import { Navbar } from "@/components/navbar";
import { useState, useEffect } from "react";

export default function Profile() {
  const [data, setData] = useState<[] | CorePortfolio[]>([]);
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
              <tr className="hover">
                <td>{explanation.ticker}</td>
                <td>{(Number(explanation.weight) * 100).toFixed(1)}%</td>
                <td>{(Number(explanation.return) * 100).toFixed(1)}%</td>
                <td>
                  {(Number(explanation.weighted_return) * 100).toFixed(1)}%
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
