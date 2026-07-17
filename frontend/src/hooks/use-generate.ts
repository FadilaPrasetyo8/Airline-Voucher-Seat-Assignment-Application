import { generateVoucher } from "@/utils"
import { useMutation } from "@tanstack/react-query"
import { toast } from "sonner"

export const useGenerate = () => {
    return useMutation({
        mutationFn: generateVoucher,
        onSuccess: (data) => {
            console.log(data);
        },
        onError: (error) => {
            console.error(error);
            toast.error("Error generating voucher");
        },
    })
}
