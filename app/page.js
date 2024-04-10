import DefaultLayout from "@/components/Layout/DefaultLayout";
import TotalSection from "@/components/Product/TotalSection";
import LineChart from "@/components/Product/LineChart";

export default function Home() {
  return (
    <DefaultLayout>
      <div className="w-full h-full">
        <div className="grid grid-cols-1 sm:grid-cols-5 gap-4 place-items-center">
          <div className="sm:col-span-2 w-full">
            <TotalSection />
          </div>
          <div className="sm:col-span-3 w-full">
            <h1>ok</h1>{" "}
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-5 mt-6 gap-4 place-items-center">
          <div className="sm:col-span-3 w-full bg-white py-4 px-4 rounded-lg">
            <div className="flex justify-between">
              <div className="space-y-0.5 flex justify-start items-center space-x-1">
                <div>
                  <h6 className="text-sm text-text">Overall Task</h6>
                  <h3 className="text-2xl font-semibold">56,000</h3>
                </div>
                <span className=" bg-textGreen rounded-full flex justify-center items-center py-1 px-2 space-x-1 text-sm text-white font-medium">
                  <svg
                    width="13"
                    height="12"
                    viewBox="0 0 13 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1.71161 8.5L4.71161 5.5L6.71161 7.5L10.7116 3.5"
                      stroke="white"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M7.21161 3.5H10.7116V7"
                      stroke="white"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                  <p className="text-[0.68rem] font-medium text-white">23.5%</p>
                </span>
              </div>
              <div className="flex items-center justify-between gap-6">
                <div className="flex items-center justify-between gap-6">
                  <div className="flex items-center justify-center font-medium text-xs text-textSecondary gap-2">
                    <svg
                      width="16"
                      height="15"
                      viewBox="0 0 16 15"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <ellipse
                        cx="7.79854"
                        cy="7.5"
                        rx="7.58577"
                        ry="7"
                        fill="#4C8E4B"
                      />
                    </svg>
                    Design
                  </div>
                  <div className="flex items-center justify-center font-medium text-xs text-textSecondary gap-2">
                    <svg
                      width="16"
                      height="15"
                      viewBox="0 0 16 15"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <ellipse
                        cx="7.65629"
                        cy="7.5"
                        rx="7.58577"
                        ry="7"
                        fill="#A6C7A5"
                      />
                    </svg>
                    Development
                  </div>
                </div>
                <div className="flex items-center justify-center gap-4">
                  <div className="flex items-center justify-between border border-text/25 py-2 gap-1.5 px-3 rounded-sm">
                    <span className="text-[0.70rem] text-text">Last month</span>
                    <svg
                      width="17"
                      height="16"
                      viewBox="0 0 17 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M4.23883 5.20687C4.56471 4.90638 5.06371 4.93683 5.35339 5.27488L8.77716 9.27047C8.88184 9.39263 9.06585 9.39263 9.17053 9.27047L12.5943 5.27488C12.884 4.93683 13.383 4.90638 13.7089 5.20687C14.0347 5.50736 14.0641 6.025 13.7744 6.36305L10.3507 10.3586C9.61788 11.2138 8.32981 11.2138 7.59704 10.3586L4.17327 6.36305C3.8836 6.025 3.91295 5.50736 4.23883 5.20687Z"
                        fill="#818B9A"
                      />
                    </svg>
                  </div>
                  <div className="border border-text/25 py-2 gap-1.5 px-3 rounded-sm">
                    <svg
                      width="4"
                      height="14"
                      viewBox="0 0 4 14"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle cx="2.47385" cy="2" r="1.5" fill="#AAB2BE" />
                      <circle cx="2.47385" cy="7" r="1.5" fill="#AAB2BE" />
                      <circle cx="2.47385" cy="12" r="1.5" fill="#AAB2BE" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            <LineChart />
          </div>
          <div className="sm:col-span-2 w-full">
            <TotalSection />
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-5 mt-6 gap-4 place-items-center">
          <div className="sm:col-span-2 w-full">
            <TotalSection />
          </div>
          <div className="sm:col-span-3 w-full bg-white">
            <LineChart />
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
}

