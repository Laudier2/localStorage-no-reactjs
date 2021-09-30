import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";

const initialValues = {
  title: "",
  price: 0,
  url: "",
  image1: "",
  tags: "",
  description: "",
  slug: "",
  cor: "",
  quantity: 0,
};

export default function FormUpdate() {
  //const[ state, setState ] = useState([])
  const [values, setValues] = useState(initialValues);
  const history = useHistory();

  useEffect(() => {
    const ResGet = async () => {
      const req = await axios.get(
        "https://api-in-product-for-store.herokuapp.com/"
      );

      console.clear();
      console.log(req.data[0].title);
    };
    ResGet();
  }, []);

  function onChenge(ev) {
    const { name, value } = ev.target;

    setValues({ ...values, [name]: value });
  }

  function onSubmit(ev) {
    ev.preventDefault();

    axios
      .post("https://api-in-product-for-store.herokuapp.com/", values)
      .then((response) => {
        history.push("/");
      });
  }

  return (
    <>
      <div className="container col-sm-7">
        <br />
        <h1>Formulario de Cadastra Produtos</h1>
        <form onSubmit={onSubmit}>
          <div>
            <label htmlFor="title">Title</label>
            <input
              type="text"
              className="form-control"
              value={values.title}
              onChange={onChenge}
              id="title"
              name="title"
              placeholder="titolo do produto"
            />
          </div>
          <div>
            <label htmlFor="price">Price</label>
            <input
              type="number"
              className="form-control"
              value={values.price}
              onChange={onChenge}
              id="price"
              name="price"
              placeholder="Preco do produto"
            />
          </div>
          <div>
            <label htmlFor="image1">Image1</label>
            <input
              type="text"
              className="form-control"
              value={values.image1}
              onChange={onChenge}
              id="image1"
              name="image1"
              placeholder="Image do produto"
            />
          </div>
          <div>
            <label htmlFor="description">Description</label>
            <input
              type="text"
              className="form-control"
              value={values.description}
              onChange={onChenge}
              id="description"
              name="description"
              placeholder="description"
            />
          </div>
          <div>
            <label htmlFor="quantity">quantity</label>
            <input
              type="text"
              className="form-control"
              value={values.quantity}
              onChange={onChenge}
              id="quantity"
              name="quantity"
              placeholder="contity"
            />
          </div>
          <div>
            <label htmlFor="cor">Cor</label>
            <input
              type="text"
              className="form-control"
              value={values.cor}
              onChange={onChenge}
              id="cor"
              name="cor"
              placeholder="cor"
            />
          </div>
          <div>
            <label htmlFor="slug">Slug</label>
            <input
              type="text"
              className="form-control"
              value={values.slug}
              onChange={onChenge}
              id="slug"
              name="slug"
              placeholder="slug"
            />
          </div>
          <div>
            <label htmlFor="tags">Tags</label>
            <input
              type="text"
              className="form-control"
              value={values.tags}
              onChange={onChenge}
              id="tags"
              name="tags"
              placeholder="tags"
            />
          </div>
          <div>
            <button type="submit" className="btn btn-primary btn-block wit">
              Salvar
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
