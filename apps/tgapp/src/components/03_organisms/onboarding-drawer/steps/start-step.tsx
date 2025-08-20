"use client";
import {Button} from "@/components/button";
import classNames from "classnames";
type WebViewFallBackProps = React.HTMLAttributes<HTMLDivElement> & {};
export const WebViewFallBack: React.FunctionComponent<WebViewFallBackProps> = ({
  className,
}) => {
  const rootClasses = classNames({
    "grid grid-cols-1 gap-5": true,
    [`${className}`]: className,
  });

  return (
    <div className={`${rootClasses}`}>
      <h2 className="text-2xl font-bold text-black">
        Mobile Telegram have fuss with webview, please open the app in your
        default browser with the
      </h2>
      <Button
        onClick={() => {
          window.open(location.href, "_blank");
        }}
      >
        Start trusting process
      </Button>
    </div>
  );
};
