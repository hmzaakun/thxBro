import { useState, useEffect } from "react";
import { useWriteContract } from "wagmi";
import { factoryVoucher } from "@/utils/address";
import factoryVoucherAbi from "@/utils/VoucherFactoryabi.json";

const useCreateVoucher = () => {
  const [codeHashes, setCodeHashes] = useState<string[]>([]);
  const [etherAmount, setEtherAmount] = useState<number>(0);
  const [isCreating, setIsCreating] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const {
    data,
    writeContract,
    isSuccess,
    isError,
    error: writeError,
  } = useWriteContract();

  const handleCreateVoucher = (e: React.FormEvent) => {
    e.preventDefault();
    setIsCreating(true);
    setError(null);

    try {
      writeContract({
        address: factoryVoucher,
        abi: factoryVoucherAbi,
        functionName: "createVoucherContract",
        args: [codeHashes, BigInt(etherAmount)],
        value: BigInt(etherAmount),
      });
    } catch (err: any) {
      setError(err.message);
    } finally {
      setIsCreating(false);
    }
  };

  useEffect(() => {
    if (writeError) {
      setError(writeError.message);
    }
  }, [writeError]);

  return {
    codeHashes,
    setCodeHashes,
    etherAmount,
    setEtherAmount,
    handleCreateVoucher,
    isCreating,
    isSuccess,
    isError,
    error,
  };
};

export default useCreateVoucher;
