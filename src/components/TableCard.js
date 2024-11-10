import Card from "@material-tailwind/react/Card";
import CardHeader from "@material-tailwind/react/CardHeader";
import CardBody from "@material-tailwind/react/CardBody";
import Image from "@material-tailwind/react/Image";
import Progress from "@material-tailwind/react/Progress";
import Team1 from "assets/img/team-1-800x800.jpg";
import Team2 from "assets/img/team-2-800x800.jpg";
import Team3 from "assets/img/team-3-800x800.jpg";
import Team4 from "assets/img/team-4-470x470.png";

export default function CardTable() {
  let todayDate = new Date();
  // console.log(todayDate.toLocaleDateString());

  return (
    <>
      <Card>
        <CardHeader color="purple" contentPosition="left">
          <h2 className="text-white text-2xl">All Player's</h2>
        </CardHeader>
        <CardBody>
          <div className="overflow-x-auto">
            <table className="items-center w-full bg-transparent border-collapse">
              <thead>
                <tr>
                  <th className="px-2 text-purple-500 align-middle border-b border-solid border-gray-200 py-3 text-md whitespace-nowrap text-left font-bold ">
                    Player name
                  </th>
                  <th className="px-2 text-purple-500 align-middle border-b border-solid border-gray-200 py-3 text-md whitespace-nowrap text-left font-bold ">
                    Date
                  </th>
                  <th className="px-2 text-purple-500 align-middle border-b border-solid border-gray-200 py-3 text-md whitespace-nowrap text-left font-bold ">
                    Prizes
                  </th>
                  {/* <th className="px-2 text-purple-500 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-light text-left">
                  Users
                </th> */}
                  {/* <th className="px-2 text-purple-500 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-light text-left">
                  Completion
                </th> */}
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                    palyer102
                  </th>
                  <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                    {todayDate.toLocaleDateString()}
                  </th>
                  <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                    <i className="fas fa-circle fa-sm text-orange-500 mr-2"></i>{" "}
                    10
                  </th>
                </tr>
                <tr>
                  <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                    player283
                  </th>
                  <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                    {todayDate.toLocaleDateString()}
                  </th>
                  <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                    <i className="fas fa-circle fa-sm text-blue-gray-900 mr-2"></i>{" "}
                    4
                  </th>
                </tr>
                <tr>
                  <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                    player24
                  </th>
                  <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                    {todayDate.toLocaleDateString()}
                  </th>
                  <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                    <i className="fas fa-circle fa-sm text-teal-500 mr-2"></i>
                    {""}
                    12
                  </th>
                </tr>
                <tr>
                  <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                    player822
                  </th>
                  <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                    {todayDate.toLocaleDateString()}
                  </th>
                  <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                    <i className="fas fa-circle fa-sm text-blue-gray-900 mr-2"></i>{" "}
                    29
                  </th>
                </tr>
              </tbody>
            </table>
          </div>
        </CardBody>
      </Card>
      <span className="mt-5 pt-10 text-center">
        <button className="bg-purple-300 px-4 py-2 rounded-xl hover:bg-purple-400">Load more...</button>
      </span>
    </>
  );
}
