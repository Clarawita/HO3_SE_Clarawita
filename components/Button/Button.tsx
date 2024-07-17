import { useRouter } from "next/router";

type ButtonProps = {
  content: string;
  className?: string;
  onClick?: () => void;
  href?: string;
};

function Button({
  content,
  className,
  onClick,
  href,
}: ButtonProps) {
  const router = useRouter();

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (onClick) {
      onClick();
    }
    if (href) {
      e.preventDefault();
      router.push(href);
    }
  };

  return (
    <button
      className={className}
      onClick={handleClick}
    >
      {content}
    </button>
  );
}

export { Button };