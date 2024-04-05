import { getAll } from "@/utils/db";

// export async function GET() {
//   const data = await getAll();
//   return Response.json(data, { status: 200 });
//   // return date;
// }

// export default GET;

export default async function GET(
  req: any,
  res: {
    statusCode: number;
    setHeader: (arg0: string, arg1: string) => void;
    end: (arg0: string) => void;
    json: (arg0: any) => void;
    status: (arg0: number) => {
      (): any;
      new (): any;
      end: { (): void; new (): any };
    };
  }
) {
  return new Promise<void>((resolve, reject) => {
    getAll()
      .then((response) => {
        res.statusCode = 200;
        res.setHeader("Content-Type", "application/json");
        res.setHeader("Cache-Control", "max-age=180000");
        res.end(JSON.stringify(response));
        resolve();
      })
      .catch((error) => {
        res.status(405).end();
        resolve(); // in case something goes wrong in the catch block (as vijay commented)
      });
  });
}
