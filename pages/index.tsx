import { ListStockExplanationsQuery, StockExplanation } from "@/src/API";
import { deleteStockExplanation } from "@/src/graphql/mutations";
import { listStockExplanations } from "@/src/graphql/queries";
import { GraphQLResult } from "@aws-amplify/api-graphql";
import { useAuthenticator } from "@aws-amplify/ui-react";
import { API } from "aws-amplify";
import Link from "next/link";
import { useEffect, useState } from "react";

function Home() {
  const [explanations, setExplanations] = useState<[] | StockExplanation[]>([]);
  const { user } = useAuthenticator((context) => [context.user]);
  console.log({ user });
  useEffect(() => {
    const explanationPromise = API.graphql({
      query: listStockExplanations,
      authMode: user ? "AMAZON_COGNITO_USER_POOLS" : "AWS_IAM",
    }) as Promise<GraphQLResult<ListStockExplanationsQuery>>;

    explanationPromise.then((res) => {
      console.log(res.data?.listStockExplanations?.items);
      const items = res.data?.listStockExplanations?.items ?? [];

      setExplanations(
        items.filter((item): item is StockExplanation => Boolean(item))
      );
    });
  }, [user]);

  const handleExplanationDelete = async (id: string) => {
    if (user) {
      await API.graphql({
        query: deleteStockExplanation,
        variables: { input: { id } },
      });
    }
  };
  return (
    <div className="justify-items-center bg-gradient-to-bl from-base-300 to-slate-700">
      <div className="hero min-h-screen">
        <div className="hero-content text-center">
          <div className="">
            <h1 className="text-5xl font-bold text-primary-content">
              James Laurie
            </h1>
            <p className="py-6">
              Software Development & Machine Learning Portfolio
            </p>

            <div className="flex justify-around">
              <Link
                href={""}
                type="button"
                data-twe-ripple-init
                data-twe-ripple-color="light"
                className="mb-2 inline-block rounded bg-[#0077b5] px-6 py-2.5 text-xs font-medium uppercase leading-normal text-white shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg"
              >
                <span className="[&>svg]:h-4 [&>svg]:w-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 448 512"
                  >
                    <path d="M100.3 448H7.4V148.9h92.9zM53.8 108.1C24.1 108.1 0 83.5 0 53.8a53.8 53.8 0 0 1 107.6 0c0 29.7-24.1 54.3-53.8 54.3zM447.9 448h-92.7V302.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.8V148.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V448z" />
                  </svg>
                </span>
              </Link>
              <Link
                href={""}
                type="button"
                data-twe-ripple-init
                data-twe-ripple-color="light"
                className="mb-2 inline-block rounded bg-[#ea4335] px-6 py-2.5 text-xs font-medium uppercase leading-normal text-white shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg"
              >
                Resume
              </Link>
              <Link
                href={""}
                type="button"
                data-twe-ripple-init
                data-twe-ripple-color="light"
                className="mb-2 inline-block rounded bg-[#333] px-6 py-2.5 text-xs font-medium uppercase leading-normal text-white shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg"
              >
                <span className="[&>svg]:h-4 [&>svg]:w-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 496 512"
                  >
                    <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" />
                  </svg>
                </span>
              </Link>
            </div>
            <div className="h-96 carousel carousel-vertical rounded-box gap-5 mt-3">
              <div className="carousel-item">
                <Link
                  href={"/home"}
                  className="card w-96 bg-base-100 shadow-xl"
                >
                  {/* <figure>
                  <img
                    src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
                    alt="Shoes"
                  />
                </figure> */}
                  <div className="card-body">
                    <h2 className="card-title text-primary-content justify-between">
                      Investor Dashboard
                      <div className="badge badge-secondary">LIVE</div>
                    </h2>

                    <p>
                      A web applications to provide predictions and suggestions
                      on Asset Pricing (Stocks & Real Estate) using AWS
                      SageMaker and MlFlow machine learning pipeline.
                    </p>

                    <div>
                      <div className="flex">
                        <div className="badge badge-outline">NextJs</div>
                        <div className="badge badge-outline">CDK</div>
                        <div className="badge badge-outline">SageMaker</div>
                        <div className="badge badge-outline">MlFlow</div>
                        <div className="badge badge-outline">Mlops</div>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>

              <div className="carousel-item">
                <Link
                  href={"/my-explanations"}
                  className="card w-96 bg-slate-700 shadow-xl"
                >
                  {/* <figure>
                  <img
                    src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
                    alt="Shoes"
                  />
                </figure> */}
                  <div className="card-body">
                    <h2 className="card-title text-primary-content justify-between">
                      Machine Learning Pipeline
                      <div className="badge badge-secondary">GitHub</div>
                    </h2>

                    <p>
                      This repository provides AI/ML service(MachineLearning
                      model serving) modernization solution using Amazon
                      SageMaker, AWS CDK, and AWS Fargate and Lambda. This
                      repository is basically a CDK-Project, but it is organized
                      so that MLDevOps(ML Scientist + SW Developer + Infra
                      Operator) can collaborate.
                    </p>

                    <div>
                      <div className="flex">
                        <div className="badge badge-outline">AI</div>
                        <div className="badge badge-outline">ML</div>
                        <div className="badge badge-outline">Pipeline</div>
                        <div className="badge badge-outline">SageMaker</div>
                        <div className="badge badge-outline">Fargate</div>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
              <div className="carousel-item">
                <Link
                  href={"/my-explanations"}
                  className="card w-96 bg-base-100 shadow-xl"
                >
                  {/* <figure>
                  <img
                    src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
                    alt="Shoes"
                  />
                </figure> */}
                  <div className="card-body">
                    <h2 className="card-title text-primary-content justify-between">
                      Fullstack Web Application
                      <div className="badge badge-secondary">GitHub</div>
                    </h2>

                    <p>
                      GitHub repo of the the fullstack code for the investor
                      dashboard. Built with NextJs and AWS CDK all using
                      Typescript. Utilizing Amplify, Cognito, DynamoDB, S3, IAM
                      and more..
                    </p>

                    <div>
                      <div className="flex">
                        <div className="badge badge-outline">Typescript</div>
                        <div className="badge badge-outline">NextJs</div>
                        <div className="badge badge-outline">AWS</div>
                        <div className="badge badge-outline">CDK</div>
                        <div className="badge badge-outline">Fullstack</div>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
              <div className="carousel-item">
                <Link
                  href={"/my-explanations"}
                  className="card w-96 bg-slate-700 shadow-xl"
                >
                  {/* <figure>
                  <img
                    src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
                    alt="Shoes"
                  />
                </figure> */}
                  <div className="card-body">
                    <h2 className="card-title text-primary-content justify-between">
                      Research{" "}
                      <div className="badge badge-secondary">GitHub</div>
                    </h2>

                    <p>
                      This repository provides Machine Learning model research
                      for our ML Pipeline
                    </p>

                    <div>
                      <div className="flex">
                        <div className="badge badge-outline">AI</div>
                        <div className="badge badge-outline">ML</div>
                        <div className="badge badge-outline">
                          Juypter Notebook
                        </div>
                        <div className="badge badge-outline">Python</div>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <section className="flex justify-center mt-6">
        <ul className="flex">
          {explanations.map((explanation) => (
            <li
              onClick={() => {
                handleExplanationDelete(explanation.id);
              }}
              className="m-3"
              key={explanation.id}
            >
              <div className="card w-96 bg-secondary text-primary-content">
                <div className="card-body">
                  <h2 className="card-title">{explanation.title}</h2>
                  <p>{explanation.description}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </section> */}
    </div>
  );
}

export default Home;
