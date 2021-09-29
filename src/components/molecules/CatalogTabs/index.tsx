import { useState } from "react";
import { Container } from "./styles";
("./styles");

interface CatalogProps extends React.AllHTMLAttributes<HTMLAllCollection> {
  tab1: string;
  tab2: string;
  content1: React.ReactElement;
  content2: React.ReactElement;
}

const CatalogTabs = ({
  tab1,
  tab2,
  content1,
  content2,
  ...rest
}: CatalogProps) => {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <Container>
      <div className="container">
        <div className="bloc-tabs">
          <button
            className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
            onClick={() => toggleTab(1)}
          >
            {tab1}
          </button>
          <button
            className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
            onClick={() => toggleTab(2)}
          >
            {tab2}
          </button>
        </div>

        <div className="content-tabs">
          <div
            className={
              toggleState === 1 ? "content  active-content" : "content"
            }
          >
            {content1}
          </div>

          <div
            className={
              toggleState === 2 ? "content  active-content" : "content"
            }
          >
            {content2}
          </div>
        </div>
      </div>
    </Container>
  );
};

export default CatalogTabs;
