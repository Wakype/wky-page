import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export function Footer() {
  return (
    <footer className="text-center mt-72 pb-5 relative z-20 flex justify-center">
      <Card className="w-fit px-5 py-3 hover:translate-y-0">
        <div>
          <p className="text-gray-300 text-sm">
            Made with 💖 and <Badge variant={"secondary"}>(＾▽＾)</Badge>
          </p>
          <p className="text-gray-300 text-sm">© 2025 WAKYPE. All rights reserved.</p>
        </div>
      </Card>
    </footer>
  );
}