import { BuildIcon, PlusIcon, ShopIcon, TrashIcon, TruckIcon } from "@/components/Icons";
import { BoxWrapper } from "./BoxWrapper";
import { ChartAccount } from "./Charts/ChartAccount";
import ChartBottom from "./Charts/ChartBottom";
import ChartBuilding from "./Charts/ChartBuilding";
import { ChartContractCircle } from "./Charts/ChartContractCircle";
import ChartContractExpired from "./Charts/ChartContractExpired";
import ChartRevenues from "./Charts/ChartRevenues";
import { WrapperChart } from "./Charts/WrapperChart";


const Home = () => {

  return (
    <div className={`main-content my-8 flex-1 !min-h-screen pb-4`}>

      <div className="flex gap-4 px-6 h-[100lvh] mb-4">
        {/* <button onClick={loadData}>load data</button> */}
        <div className="flex-1 flex flex-col -translate-y-4 h-full gap-4">
          <div className="flex-1 shadow overflow-hidden bg-white dark:bg-dark-bg dark:text-gray-200 rounded-md p-2 h-1/2">
            <WrapperChart
              name="contract"
            >
              <ChartContractCircle />
            </WrapperChart>
          </div>
          <div className="flex-1 shadow overflow-hidden bg-white dark:bg-dark-bg dark:text-gray-200 rounded-md p-2 h-1/2">
            <WrapperChart
              name="building"
            >
              <ChartBuilding />
            </WrapperChart>
          </div>
        </div>
        <div className="flex-[2] flex flex-col gap-4">
          <div className="flex gap-4 h-1/5">
            <div className="flex-1 shadow hover:shadow-md hover:border bg-white dark:bg-dark-bg dark:text-gray-200 rounded-md p-2">
              {/* <ChartFlat name="Flats"/> */}
              <BoxWrapper
                className="flex flex-col gap-2 items-center justify-center text-primary"
                icon={
                  <span className="bg-yellow-600 flex items-center justify-center h-8 w-8 rounded-full"><BuildIcon className="text-white h-6 w-6" /></span>
                }
                title={`Flats`}
                number={`2459`}
              />
            </div>
            <div className="flex-1 shadow hover:shadow-md hover:border bg-white dark:bg-dark-bg dark:text-gray-200 rounded-md p-2">
              <BoxWrapper
                className="flex flex-col gap-2 items-center justify-center text-primary"
                icon={
                  <span className="bg-indigo-600 flex items-center justify-center h-8 w-8 rounded-full"><TruckIcon className="text-white h-6 w-6" /></span>
                }
                title={`parking`}
                number={`320`}
              />
            </div>
            <div className="flex-1 shadow hover:shadow-md hover:border bg-white dark:bg-dark-bg dark:text-gray-200 rounded-md p-2">
              <BoxWrapper
                className="flex flex-col gap-2 items-center justify-center text-primary"
                icon={
                  <span className="bg-green-600 flex items-center justify-center h-8 w-8 rounded-full"><ShopIcon className="text-white h-6 w-6" /></span>
                }
                title={`Shops`}
                number={`350`}
              />
            </div>
          </div>
          <div className="flex-1 flex flex-col gap-4">
            <div className="flex-1 flex gap-4">
              <div className=" shadow hover:shadow-md hover:border bg-white dark:bg-dark-bg dark:text-gray-200 rounded-md p-2 flex-1">
                <WrapperChart name="Expired Contract">
                  <ChartContractExpired />
                </WrapperChart>
              </div>
              <div className="flex flex-col gap-4 h-full w-1/3">
                <div className=" shadow hover:shadow-md hover:border bg-white dark:bg-dark-bg dark:text-gray-200 rounded-md p-2 flex-1">
                  {/* <ReportCount name="land" href="/list/land" /> */}

                  <BoxWrapper
                    icon={<span className="bg-red-600 flex items-center justify-center h-8 w-8 rounded-full"><TrashIcon className="text-white h-6 w-6" /></span>}
                    number={350}
                    title="Contract Near to expired"
                  />
                </div>
                <div className=" shadow hover:shadow-md hover:border bg-white dark:bg-dark-bg dark:text-gray-200 rounded-md p-2 flex-1">
                  {/* <ReportCount name="villa" href="/list/villa" /> */}
                  <BoxWrapper
                    icon={<span className="bg-teal-600 flex items-center justify-center h-8 w-8 rounded-full"><PlusIcon className="text-white h-6 w-6" /></span>}
                    number={31}
                    title="new Contract"
                  />
                </div>
              </div>
            </div>
            <div className="flex-1 flex-col flex gap-4 mb-2">
              <div className="shadow hover:shadow-md hover:border bg-white dark:bg-dark-bg dark:text-gray-200 rounded-md p-2 flex-1">
                <ChartBottom />
              </div>
            </div>
            {/* <div className="flex-1 flex-col flex gap-4">
            <div className="shadow hover:shadow-md hover:border bg-white dark:bg-dark-bg dark:text-gray-200 rounded-md p-2 flex-1">
              <WrapperChart name="Revenues ">
                <ChartRevenues />
              </WrapperChart>
            </div>
          </div> */}
          </div>
        </div>
        <div className="flex-1 flex flex-col -translate-y-4 h-full gap-4">
          <div className="flex-1 shadow overflow-hidden bg-white dark:bg-dark-bg dark:text-gray-200 rounded-md p-2  h-1/2">
            <WrapperChart
              name="account"
            >
              <ChartAccount />
            </WrapperChart>
          </div>
          <div className="flex-1 shadow overflow-hidden bg-white dark:bg-dark-bg dark:text-gray-200 rounded-md p-2  h-1/2">
            {/* <ReportLatest
            itemHref="/update/cheque"
            colSearchName="number"
            name="cheque"
            title="cheque"
            href="/reports/cheques"
          /> */}
            <WrapperChart
              name="Cheques"
            >
              <ChartRevenues />
            </WrapperChart>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home