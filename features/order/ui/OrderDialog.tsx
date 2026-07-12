"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { Button } from "@/components/ui/button";

import OrderForm from "./OrderForm";

import type { Cake } from "@/entities/cake/model";

interface OrderDialogProps {
  cake: Cake;
}

export default function OrderDialog({
  cake,
}: OrderDialogProps) {
  return (
    <Dialog>
      <DialogTrigger
  render={
    <Button className="h-12 px-10">
      Замовити
    </Button>
  }
/>

      <DialogContent className="sm:max-w-lg">
        <DialogHeader>
          <DialogTitle>
            Замовлення торта
          </DialogTitle>
        </DialogHeader>

        <p className="text-sm text-muted-foreground">
          {cake.title}
        </p>

        <OrderForm cake={cake} />
      </DialogContent>
    </Dialog>
  );
}