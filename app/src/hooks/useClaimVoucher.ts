import { useState, useEffect } from "react";
import { useAccount, useWriteContract } from "wagmi";
import voucherAbi from "@/utils/Voucherabi.json"; 

const useClaimVoucher = () => {
  const [code, setCode] = useState<string>("");
  const [voucherAddress, setVoucherAddress] = useState<string>("");
  const [isClaiming, setIsClaiming] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [isSuccess, setIsSuccess] = useState<boolean>(false);

  const { address } = useAccount();

  const {
    data,
    writeContract,
    isSuccess: isWriteSuccess,
    isError: isWriteError,
    error: writeError,
  } = useWriteContract({
    address: voucherAddress,
    abi: voucherAbi,
    functionName: "claimVoucher",
  });

  const handleClaimVoucher = (e: React.FormEvent) => {
    e.preventDefault();
    setIsClaiming(true);
    setError(null);
    setIsSuccess(false);

    try {
      writeContract({
        args: [code, address],
      });
    } catch (err: any) {
      setError(err.message);
    } finally {
      setIsClaiming(false);
    }
  };

  useEffect(() => {
    if (isWriteSuccess) {
      setIsSuccess(true);
    }
    if (isWriteError && writeError) {
      setError(writeError.message);
    }
  }, [isWriteSuccess, isWriteError, writeError]);

  return {
    code,
    setCode,
    voucherAddress,
    setVoucherAddress,
    handleClaimVoucher,
    isClaiming,
    isSuccess,
    error,
  };
};

export default useClaimVoucher;
