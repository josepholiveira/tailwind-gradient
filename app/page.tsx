import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className={`flex min-h-screen flex-col p-5 ${inter.className}`}>
      <h1 className="text-2xl font-bold">Gradient border&bg cards</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 mt-4 gap-4">
        <div className="border border-transparent bg-gradient-to-b from-gray-600 to-gray-800 rounded-xl [background-origin:border-box] overflow-hidden">
          <div className="flex flex-col gap-2 p-4 bg-gradient-to-b from-gray-800 to-gray-700">
            <h1 className="font-bold text-lg">Hello World</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem
              dolorum sapiente tempora ab eos itaque blanditiis temporibus autem
              magni, ullam amet odio necessitatibus ipsam. Consequatur dolores
              praesentium fugiat rem similique?
            </p>
          </div>
        </div>
        <div className="border border-transparent bg-gradient-to-b from-gray-600 to-gray-800 rounded-xl [background-origin:border-box] overflow-hidden">
          <div className="flex flex-col gap-2 p-4 bg-gradient-to-b from-gray-800 to-gray-700">
            <h1 className="font-bold text-lg">Hello World</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem
              dolorum sapiente tempora ab eos itaque blanditiis temporibus autem
              magni, ullam amet odio necessitatibus ipsam. Consequatur dolores
              praesentium fugiat rem similique?
            </p>
          </div>
        </div>
        <div className="border border-transparent bg-gradient-to-b from-gray-600 to-gray-800 rounded-xl [background-origin:border-box] overflow-hidden">
          <div className="flex flex-col gap-2 p-4 bg-gradient-to-b from-gray-800 to-gray-700">
            <h1 className="font-bold text-lg">Hello World</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem
              dolorum sapiente tempora ab eos itaque blanditiis temporibus autem
              magni, ullam amet odio necessitatibus ipsam. Consequatur dolores
              praesentium fugiat rem similique?
            </p>
          </div>
        </div>
        <div className="border border-transparent bg-gradient-to-b from-gray-600 to-gray-800 rounded-xl [background-origin:border-box] overflow-hidden">
          <div className="flex flex-col gap-2 p-4 bg-gradient-to-b from-gray-800 to-gray-700">
            <h1 className="font-bold text-lg">Hello World</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem
              dolorum sapiente tempora ab eos itaque blanditiis temporibus autem
              magni, ullam amet odio necessitatibus ipsam. Consequatur dolores
              praesentium fugiat rem similique?
            </p>
          </div>
        </div>
        <div className="border border-transparent bg-gradient-to-b from-gray-600 to-gray-800 rounded-xl [background-origin:border-box] overflow-hidden">
          <div className="flex flex-col gap-2 p-4 bg-gradient-to-b from-gray-800 to-gray-700">
            <h1 className="font-bold text-lg">Hello World</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem
              dolorum sapiente tempora ab eos itaque blanditiis temporibus autem
              magni, ullam amet odio necessitatibus ipsam. Consequatur dolores
              praesentium fugiat rem similique?
            </p>
          </div>
        </div>
        <div className="border border-transparent bg-gradient-to-b from-gray-600 to-gray-800 rounded-xl [background-origin:border-box] overflow-hidden">
          <div className="flex flex-col gap-2 p-4 bg-gradient-to-b from-gray-800 to-gray-700">
            <h1 className="font-bold text-lg">Hello World</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem
              dolorum sapiente tempora ab eos itaque blanditiis temporibus autem
              magni, ullam amet odio necessitatibus ipsam. Consequatur dolores
              praesentium fugiat rem similique?
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}