import React from "react";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";

const Page404 = () => {
  return (
    <div>
      <h4>Página não encontrada</h4>
      <Link className="link-default" to="/">
        <Button>Voltar</Button>
      </Link>
    </div>
  );
};

export default Page404;
