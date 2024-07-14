import { useEffect, useState } from "react";
import { useReadContract } from "wagmi";
import voucherFactoryAbi from "@/utils/VoucherFactoryabi.json"; 
import { factoryVoucher } from "@/utils/address"; 

const useGetVoucherContracts = () => {
  const [voucherContracts, setVoucherContracts] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const { data, isError, error: contractError, refetch } = useReadContract({
    address: factoryVoucher,
    abi: voucherFactoryAbi,
    functionName: "getVoucherContracts",
  });

  useEffect(() => {
    setIsLoading(true);
    refetch();
  }, [refetch]);

  useEffect(() => {
    if (data) {
      setVoucherContracts(data as string[]);
      setIsLoading(false);
    }
    if (isError && contractError) {
      setError(contractError.message);
      setIsLoading(false);
    }
  }, [data, isError, contractError]);

  return {
    voucherContracts,
    isLoading,
    error,
  };
};

export default useGetVoucherContracts;
