"use client";

import { toast } from "sonner";
import { ToastProps } from "../interfaces";

export default function useToast() {
  function success(props: ToastProps) {
    toast.success(props.message, { id: props.id });
  }

  function error(props: ToastProps) {
    toast.error(props.message, { id: props.id });
  }

  return { success, error };
}
