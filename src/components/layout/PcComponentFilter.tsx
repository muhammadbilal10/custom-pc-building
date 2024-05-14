"use client";
import React from "react";
import { CustomDropdownMen } from "../common/CustomeDropdownMenu";
import { Button } from "../ui/button";
import { Link } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const SORT_OPTIONS = [
  {
    label: "Most Popular",
    value: "most-popular",
  },
  {
    label: "Newest",
    value: "newest",
  },
  {
    label: "Price: Low to High",
    value: "price-low-to-high",
  },
  {
    label: "Price: High to Low",
    value: "price-high-to-low",
  },
  {
    label: "Best Selling",
    value: "best-selling",
  },
] as const;

const PRICE_RANGE_OPTIONS = [
  {
    label: "Under $25",
    value: "under-25",
  },
  {
    label: "$25 to $50",
    value: "25-to-50",
  },
  {
    label: "$50 to $100",
    value: "50-to-100",
  },
  {
    label: "$100 to $200",
    value: "100-to-200",
  },
  {
    label: "$200 & Above",
    value: "200-and-above",
  },
] as const;

const STORAGE_TYPE = [
  {
    label: "All",
    value: "all",
  },
  {
    label: "AMD 2650",
    value: "amd-2650",
  },
  {
    label: "AMD 5350",
    value: "amd-5350",
  },
  {
    label: "AMD 5150",
    value: "amd-5150",
  },
  {
    label: "AMD 3850",
    value: "amd-3850",
  },
] as const;

const CPU_OVERCLOCKED_OPTIONS = [
  {
    label: "All",
    value: "all",
  },
  {
    label: "Yes",
    value: "yes",
  },

  {
    label: "No",
    value: "no",
  },
] as const;

const CPU_COOLER_OPTIONS = [
  {
    label: "All",
    value: "all",
  },
  {
    label: "Stock",
    value: "stock",
  },
  {
    label: "ARCTIC",
    value: "arctic",
  },
  {
    label: "Cooler Master",
    value: "cooler-master",
  },
  {
    label: "Corsair",
    value: "corsair",
  },
  {
    label: "Deepcool",
    value: "deepcool",
  },
];

const CPU_SOCKET = [
  {
    label: "All",
    value: "all",
  },
  {
    label: "AM4",
    value: "am4",
  },
  {
    label: "AM3+",
    value: "am3+",
  },
  {
    label: "AM1",
    value: "am1",
  },
  {
    label: "FM2+",
    value: "fm2+",
  },
] as const;

const VIDEO_CARD_OPTIONS = [
  {
    label: "All",
    value: "all",
  },
  {
    label: "Nvidia GTX 1050",
    value: "nvidia-gtx-1050",
  },
  {
    label: "Nvidia GTX 1060",
    value: "nvidia-gtx-1060",
  },
  {
    label: "Nvidia GTX 1070",
    value: "nvidia-gtx-1070",
  },
  {
    label: "Nvidia GTX 1080",
    value: "nvidia-gtx-1080",
  },
] as const;

const FEATURE_BUILD_OPTIONS = [
  {
    label: "All",
    value: "all",
  },
  {
    label: "Yes",
    value: "yes",
  },
  {
    label: "No",
    value: "no",
  },
] as const;

type Filter = {
  sort: string;
  priceRange: string;
  cpu: string;
  socket: string;
  videoCard: string;
  [key: string]: string;
};

export default function PcComponentFilter() {
  const [filter, setFilter] = React.useState<Filter>({
    sort: SORT_OPTIONS[0].value,
    priceRange: PRICE_RANGE_OPTIONS[0].value,
    cpu: STORAGE_TYPE[0].value,
    socket: CPU_SOCKET[0].value,
    videoCard: VIDEO_CARD_OPTIONS[0].value,
    cpuOverclocked: CPU_OVERCLOCKED_OPTIONS[0].value,
    cpuCooler: CPU_COOLER_OPTIONS[0].value,
  });

  const handleFilterChange = (key: string, value: string) => {
    setFilter((prev) => ({
      ...prev,
      [key]: value,
    }));

    console.log(filter);
  };

  return (
    <div className="">
      <div className="xl:hidden bg-[#F1F1F1] p-4 my-8 rounded-md">
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1" className="border-none">
            <AccordionTrigger className="text-md font-bold uppercase hover:no-underline">
              Filter
            </AccordionTrigger>
            <AccordionContent className="">
              <div className="flex-1 bg-">
                <div className=" flex-col justify-between space-y-4">
                  <div className="flex flex-col space-y-8">
                    <CustomDropdownMen
                      values={PRICE_RANGE_OPTIONS}
                      onChange={handleFilterChange}
                      label="Price Range"
                      name="priceRange"
                      filter={filter}
                    />
                    <CustomDropdownMen
                      values={STORAGE_TYPE}
                      onChange={handleFilterChange}
                      label="Cpu"
                      name="cpu"
                      filter={filter}
                    />
                  </div>
                  <div className="flex items-center">
                    <span className="text-md font-bold uppercase">
                      Sort by:{" "}
                    </span>
                    <Select>
                      <SelectTrigger className="bg-transparent w-[180px] border-none hover:border-none focus:border-none">
                        <SelectValue placeholder="Feature" />
                      </SelectTrigger>
                      <SelectContent>
                        {SORT_OPTIONS.map((option) => (
                          <SelectItem key={option.value} value={option.value}>
                            {option.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Button className="text-lg" variant="link">
                      clear
                    </Button>
                  </div>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
      <div className=" max-xl:hidden flex bg-[#F1F1F1] p-4 my-8 space-x-4 items-center justify-between">
        <span className="text-md font-bold uppercase">Filters</span>
        <div className="flex-1">
          <div className=" flex justify-between items-center">
            <div className="flex space-x-8">
              <CustomDropdownMen
                values={PRICE_RANGE_OPTIONS}
                onChange={handleFilterChange}
                label="Price Range"
                name="priceRange"
                filter={filter}
              />

              <CustomDropdownMen
                values={CPU_COOLER_OPTIONS}
                onChange={handleFilterChange}
                label="Storage Type"
                name="cpuCooler"
                filter={filter}
              />
              {/* <CustomDropdownMen />
            <CustomDropdownMen />
            <CustomDropdownMen />
            <CustomDropdownMen /> */}
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-md font-bold uppercase">Sort by: </span>
              <Select>
                <SelectTrigger className="bg-transparent w-[180px] border-none hover:border-none focus:border-none">
                  <SelectValue placeholder="Feature" />
                </SelectTrigger>
                <SelectContent>
                  {SORT_OPTIONS.map((option) => (
                    <SelectItem key={option.value} value={option.value}>
                      {option.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div>
              <Button className="text-lg" variant="link">
                clear
              </Button>
            </div>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
}
