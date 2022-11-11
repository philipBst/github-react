import React from "react";

import { TbExternalLink } from "react-icons/tb";

export type ChipProps = {
  withExternalLink?: string;
};

const Chip: React.FC<React.PropsWithChildren<ChipProps>> = ({
  withExternalLink,
  children,
}) => (
  <span
    className={`text-xs text-gray-400 border border-gray-600 px-2 py-1 rounded-full ${
      withExternalLink ? "flex items-center gap-2" : ""
    }`}
  >
    {children}
    {Boolean(withExternalLink) && <TbExternalLink />}
  </span>
);

export default Chip;
