import styled from "@emotion/styled";
import { LoadingImage } from "../../assets";

function LoadingSvg() {
  return <_Loading src={LoadingImage} />;
}
const _Loading = styled.img`
  display: block;
  margin: 0 auto;
`;

export default LoadingSvg;
