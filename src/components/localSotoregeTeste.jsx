import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ViewLocalStorage from "./viwLOcalStorage.jsx";
import "./local.css";

export default function LocalSotoregeTeste() {
  const [state, setState] = useState([]);
  //const [ values, setValues ] = useState(recebe)

  const url = "https://api-in-product-for-store.herokuapp.com/";

  useEffect(() => {
    const ResGet = async () => {
      const req = await fetch(url);
      const res = await req.json();

      console.clear();
      console.log(res);
      setState(res);
    };
    ResGet();
  }, []);

  const localCreate = (e) => {
    localStorage.setItem("name", JSON.stringify(e.title));
    localStorage.setItem("preco", JSON.stringify(e.price));
    localStorage.setItem("image", JSON.stringify(e.image1));
  };

  const localDell = (e) => {
    localStorage.clear();

    function refresh() {
      window.location.reload();
    }

    refresh();
  };

  function refresh() {
    window.location.reload();
  }

  function teste(e) {
    const { name, value } = e.target;

    console.log({ name, value });
  }

  return (
    <div className="container">
      <h1 className="h1">Lista de Produtos</h1>
      <header>
        <Link to="/" className="btn btn-primary " onClick={refresh}>
          Ver Store
        </Link>
        <Link to="/form" className="btn btn-primary mrg">
          Form
        </Link>
        <Link to="/boot" className="btn btn-primary mrg">
          ChatBoot
        </Link>
        <div className="input-group mb-3 mt-2">
          <input
            type="text"
            className="form-control"
            onChange={teste}
            name="title"
            placeholder="Adicione algo"
            aria-label="Adicione algo"
            aria-describedby="basic-addon2"
          />
          <div className="input-group-append">
            <button
              className="btn btn-outline-secondary"
              type="button"
              onClick={teste}
            >
              Button
            </button>
          </div>
        </div>
      </header>

      <br />
      <button
        className="btn btn-danger btn-block f"
        onClick={() => localDell()}
      >
        Dellete LocalStorage
      </button>
      <div className="f">
        <ViewLocalStorage />
      </div>
      <br />

      {state.map((e) => (
        <div className="div card" key={e.id}>
          <img src={e.image1} alt="" className="img" />
          <h6>{e.title}</h6>
          <h5>R$ {e.price}</h5>
          <div className="marg">
            <button
              className="btn btn-success mt-1 btn-block marg"
              onClick={() => localCreate(e)}
            >
              Guarda
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
