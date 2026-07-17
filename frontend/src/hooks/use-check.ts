'use client'

import { checkVoucher } from "@/utils"
import { useMutation, useQueryClient } from "@tanstack/react-query"

    export const useCheck = () => {
        const queryClient = useQueryClient()
        return useMutation({ 
            mutationFn: checkVoucher,
            onSuccess: (data) => {
                queryClient.invalidateQueries({ queryKey: ['check'] })
                console.log(data);
            },
            onError: (error) => {
                console.error(error);
            },
        })
    }