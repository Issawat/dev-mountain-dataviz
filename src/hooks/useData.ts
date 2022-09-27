import { useEffect, useState } from "react";

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
        const response = await fetch("data.json");
        const parsedData = (await response.json()) as DataShape[];
        setData(parsedData);
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
