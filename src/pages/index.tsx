import styled from "styled-components";
import BasicLayout from "../layout/GlobalStyle";
//import IndexLayout from "../styles/pages";
import Header from "../components/molecules/Header";
import GlobalStyle from "../layout/GlobalStyle";
import { Input } from "../components/molecules/Input";

import { FiLock } from 'react-icons/fi';

const Home = () => {
  return (
    <div>
      <Header/>
      <Input label="Nome" password icon={<FiLock size={20} color="var(--black-800);" />} />
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#F5E7CD" fill-opacity="1" d="M0,128L18.5,112C36.9,96,74,64,111,48C147.7,32,185,32,222,42.7C258.5,53,295,75,332,90.7C369.2,107,406,117,443,112C480,107,517,85,554,64C590.8,43,628,21,665,16C701.5,11,738,21,775,32C812.3,43,849,53,886,74.7C923.1,96,960,128,997,117.3C1033.8,107,1071,53,1108,32C1144.6,11,1182,21,1218,42.7C1255.4,64,1292,96,1329,144C1366.2,192,1403,256,1422,288L1440,320L1440,320L1421.5,320C1403.1,320,1366,320,1329,320C1292.3,320,1255,320,1218,320C1181.5,320,1145,320,1108,320C1070.8,320,1034,320,997,320C960,320,923,320,886,320C849.2,320,812,320,775,320C738.5,320,702,320,665,320C627.7,320,591,320,554,320C516.9,320,480,320,443,320C406.2,320,369,320,332,320C295.4,320,258,320,222,320C184.6,320,148,320,111,320C73.8,320,37,320,18,320L0,320Z"></path></svg>
    </div>
  );
};

export default Home;