"use client"

import * as React from "react"
import { cn } from "@/lib/utils"
import { Dialog, DialogContent } from "./dialog"
import { useRouter } from "next/navigation"

const AuthModal = ({
    className,
    children,
    ...props
}: React.HTMLAttributes<HTMLDivElement>) => {
    const router = useRouter();
    const handleOnOpenChange = (open: boolean) => {
        console.log(router)
        if (!open) {
            router.back();
        }
    };
    return (
        <Dialog open onOpenChange={handleOnOpenChange}>
            <DialogContent className="w-fit p-0 bg-transparent">
                {children}
            </DialogContent>
        </Dialog>
    )
}
AuthModal.displayName = "Modal"

export { AuthModal }
