
import { cn } from "@/lib/utils";

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

const Container = ({ children, className }: ContainerProps) => {
  return (
    <div className={cn("mx-auto px-[5%] w-full max-w-[1920px]", className)}>
      {children}
    </div>
  );
};

export default Container;
