export default function AfterLoginLayout ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>애프터 로그인 레이아웃{children}</div>
  );
}

// 로그인 후 사용할 레이아웃