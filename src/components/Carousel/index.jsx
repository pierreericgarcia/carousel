import classnames from "classnames";
import {
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import Button from "../Button";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

function Carousel({ children }) {
  const containerRef = useRef();
  const contentRef = useRef();
  const [containerWidth, setContainerWidth] = useState(0);
  const [contentWidth, setContentWidth] = useState(0);
  const [position, setPosition] = useState(0);

  useLayoutEffect(() => {
    setContainerWidth(containerRef.current.offsetWidth);
    setContentWidth(contentRef.current.offsetWidth);
  }, []);

  const callback = useCallback(() => {
    setContainerWidth(containerRef.current.offsetWidth);
  }, []);

  useEffect(() => {
    window.addEventListener("resize", callback);
    return () => window.removeEventListener("resize", callback);
  }, []);

  const onBack = () => {
    setPosition((prevPosition) => {
      if (prevPosition - containerWidth < containerWidth) {
        return 0;
      } else {
        return prevPosition - containerWidth;
      }
    });
  };

  const onNext = () => {
    setPosition((prevPosition) => {
      if (prevPosition + containerWidth < contentWidth - containerWidth) {
        return prevPosition + containerWidth;
      } else {
        return contentWidth - containerWidth;
      }
    });
  };

  return (
    <div
      ref={containerRef}
      className="flex mx-8 justify-between items-center relative w-full"
    >
      <div
        ref={contentRef}
        className="absolute flex gap-5 transition-all"
        style={{
          left: `-${position}px`,
        }}
      >
        {children}
      </div>
      <Button
        onClick={onBack}
        className="absolute rounded-md left-0 transform text-2xl -translate-x-1/2"
      >
        <FaAngleLeft />
      </Button>
      <Button
        onClick={onNext}
        className="absolute rounded-md right-0 transform text-2xl translate-x-1/2"
      >
        <FaAngleRight />
      </Button>
    </div>
  );
}

export default Carousel;
