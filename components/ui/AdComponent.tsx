import { ArrowRightIcon } from "lucide-react";

import { cn } from "@/lib/utils";
import AnimatedShinyText from "@/components/magicui/animated-shiny-text";

export function AdComponent() {
  return (
    <div className="z-10 flex pb-2 items-center justify-center">
      <div
        className={cn(
          "group rounded-full border border-black/5 bg-neutral-100 text-base text-white transition-all ease-in hover:cursor-pointer hover:bg-neutral-200 dark:border-white/5 dark:bg-neutral-900 dark:hover:bg-neutral-800"
        )}
        // onClick={() => window.open("https://asp24.vercel.app")}
        onClick={() =>
          window.open("https://72buefq3vo3.typeform.com/to/Qx4CBhSL")
        }
      >
        <AnimatedShinyText className="text-sm sm:text-base inline-flex items-center justify-center px-4 py-1 transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400">
          {/* <span>✨ Check out ASP</span> */}
          <span>✨ Suggest an Event</span>
          <ArrowRightIcon className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
        </AnimatedShinyText>
      </div>
    </div>
  );
}
