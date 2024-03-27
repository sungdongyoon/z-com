import { ReactNode } from "react";

type Props = {children: ReactNode, modal: ReactNode}
export default function HomeLayout ({
  children,
}: Props) {
  return (
    <div>홈 레이아웃{children}</div>
  );
}
