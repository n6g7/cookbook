import styled from "styled-components";
import { HealthLevel } from "../data";

const colorMap: Record<HealthLevel, string> = {
  Indulging: "red",
  Comforting: "orange",
  Energising: "yellow",
};

export default styled.p.attrs((p) => ({ children: p.level }))`
  color: ${(p) => p.theme.colors[colorMap[p.level]]};
  font-family: ${(p) => p.theme.fonts.petit};
  font-size: ${(p) => (p.large ? 16 : 12)}px;
  line-height: ${(p) => (p.large ? 20 : 15)}px;
  margin: 0;
`;
