/** @jsx jsx */
import { jsx } from "@emotion/core";
import { forwardRef } from "react";
import Box from "../Box";
import { inputSizes } from "../Input/styles";

const InputElement = forwardRef(
  (
    {
      size,
      children,
      placement = "left",
      disablePointerEvents = false,
      ...props
    },
    ref,
  ) => {
    const { height, fontSize } = inputSizes[size];
    const placementProp = { [placement]: "0" };

    return (
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        position="absolute"
        height={height}
        width={height}
        fontSize={fontSize}
        top="0"
        zIndex={1}
        ref={ref}
        {...(disablePointerEvents && { pointerEvents: "none" })}
        {...placementProp}
        {...props}
      >
        {children}
      </Box>
    );
  },
);

const InputLeftElement = forwardRef((props, ref) => (
  <InputElement ref={ref} placement="left" {...props} />
));

const InputRightElement = forwardRef((props, ref) => (
  <InputElement ref={ref} placement="right" {...props} />
));

export { InputLeftElement, InputRightElement };
export default InputElement;
