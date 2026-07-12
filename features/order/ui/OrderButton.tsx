import type { Cake } from "@/entities/cake/model";

import OrderDialog from "./OrderDialog";

interface Props {
  cake: Cake;
}

export default function OrderButton({
  cake,
}: Props) {
  return <OrderDialog cake={cake} />;
}