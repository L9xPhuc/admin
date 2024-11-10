import StatusCard from "components/StatusCard";
// import ChartLine from "components/ChartLine";
// import ChartBar from "components/ChartBar";
import PageVisitsCard from "components/PageVisitsCard";
import TrafficCard from "components/TrafficCard";

export default function Dashboard() {
  let todayDate = new Date();
  return (
    <>
      <div className="bg-light-blue-500 px-3 md:px-8 h-40" />

      <div className="px-3 md:px-8 -mt-24">
        <div className="container mx-auto max-w-full">
          <div className="grid grid-cols-1 xl:grid-cols-5">
            <div className="xl:col-start-1 xl:col-end-4 px-4 mb-14">
              {/* <ChartLine /> */}
            </div>
            <div className="xl:col-start-4 xl:col-end-6 px-4 mb-14">
              {/* <ChartBar /> */}
            </div>
          </div>
        </div>
      </div>

      <div className="px-3 md:px-8">
        <div className="container mx-auto max-w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 mb-4">
            <StatusCard
              color="pink"
              icon="groups"
              title="Total player's"
              amount="293"
              // percentage="3.48"
              // percentageIcon="arrow_upward"
              percentageColor="green"
              date="Since start"
            />
            <StatusCard
              color="orange"
              icon="people"
              title="New Player's"
              amount="148"
              // percentage="3.48"
              // percentageIcon="arrow_downward"
              percentageColor="red"
              date="Since last week"
            />
            <StatusCard
              color="purple"
              icon="people"
              title="New Gamers's"
              amount="24"
              // percentage="1.10"
              // percentageIcon="arrow_downward"
              // percentageColor="orange"
              date="Since yesterday"
            />
            {/* <StatusCard
              color="blue"
              icon="poll"
              title="Performance"
              amount="49,65%"
              percentage="12"
              percentageIcon="arrow_upward"
              percentageColor="green"
              date="Since last month"
            /> */}
          </div>
        </div>
      </div>

      <div className="px-3 md:px-8 h-auto">
        <div className="container mx-auto max-w-full">
          <div className="grid grid-cols-1 xl:grid-cols-5">
            <div className="xl:col-start-1 xl:col-end-6 px-4 mb-14">
              <PageVisitsCard date={todayDate.toLocaleDateString()} />
            </div>
            <div className="xl:col-start-4 xl:col-end-6 px-4 mb-14">
              {/* <TrafficCard /> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
