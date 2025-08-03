import ScrollScene from "../matrix/ScrollScene";
import { useNavigate } from "react-router-dom";

const LandingMatrix = () => {
  const navigate = useNavigate();

  const handleRedPillComplete = () => {
    navigate("/home");
  };

  return <ScrollScene onRedPill={handleRedPillComplete} />;
};

export default LandingMatrix;
