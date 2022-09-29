import { useEffect, useState } from "react";

const ISO3_DB_URL =
  "https://raw.githubusercontent.com/lukes/ISO-3166-Countries-with-Regional-Codes/master/slim-3/slim-3.json";

export type DataShape = {
  employeeId: string;
  passportNo: string;
  firstname: string;
  lastname: string;
  gender: string;
  birthDate: string;
  nationality: string;
  hiredDate: string;
  department: string;
  position: string;
  status: string;
  workRegion: string;
  nationalityCountryCode: string;
};

export type DataComponentProps = {
  data: DataShape[];
  isLoading: boolean;
};

export const useData = (): DataComponentProps => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState<DataShape[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const iso3 = await fetch(ISO3_DB_URL);
        const dataRes = await fetch("data.json");
        const parsedIso3 = (await iso3.json()) as [];
        const parsedData = (await dataRes.json()) as DataShape[];
        const parsedDatawithIso3 = parsedData.map((item) => {
          const foundIso3 =
            parsedIso3.find((iso3) => iso3["name"] === item.nationality)?.[
              "alpha-3"
            ] ?? "";
          return {
            ...item,
            nationalityCountryCode: foundIso3,
          };
        });
        setData(parsedDatawithIso3);
        console.debug(parsedDatawithIso3)
        setIsLoading(false);
      } catch (e) {
        throw new Error("Couldn't fetch data. File is missing?");
      }
    };
    fetchData();
  }, []);

  return {
    data,
    isLoading,
  };
};
