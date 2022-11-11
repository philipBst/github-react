import React from "react";
import Container from "./Container";

const Card: React.FC<React.PropsWithChildren> = ({ children }) => (
  <Container>
    <div className="w-full min-h-max p-4 rounded-md overflow-hidden drop-shadow-lg">
      {children}
    </div>
  </Container>
);

export default Card;
