import Header from "../../components/molecules/Header";
import Head from "next/head";
import { Container } from "../../styles/pages/preLogin";

import { FiMail } from 'react-icons/fi';
import { Input } from "../../components/molecules/Input";
import { Button } from "../../components/atoms/Button";
import { useRouter } from "next/router";

const Register = () => {
  const router = useRouter();

  function handleNavigateToContinueRecover(e:React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    e.preventDefault();

    router.push('recover/token');
  }

  return (
    <>
      <Head>
        <title>Recuperação de senha | Último</title>
      </Head>

      <Header/>
      <Container>
        <form>
          <div className="title">
            <h1>Recuperação de senha</h1>
            <p>Para recuperar sua senha, informe seu email para receber o token para poder realizar a alteração da senha.</p>
          </div>

          <div className="inputContainer">
            <Input 
              label="Email" 
              type="email" 
              placeholder="example@gmail.com"
              icon={<FiMail size={20} color="var(--black-800);" />} 
            />
          </div>
          
          <div className="buttonContainer">
            <Button onClick={handleNavigateToContinueRecover} title="CONTINUAR" />
          </div>
        </form>
      </Container>
    </>
  );
};

export default Register;
