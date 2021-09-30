import React from 'react'

export default function EddUpdate() {

    const addEdit = (obj) => {
        
    }

    return (
      <>
			<div className="container col-sm-7">
				<br />
				<h1>Formulario de Cadastra Produtos</h1>
				<form onSubmit={onSubmit}>
					<div>
						<label htmlFor="title">Title</label>
						<input type="text" className="form-control" value={values.title} id="title" name="title" placeholder="titolo do produto" />
					</div>
					<div>
						<label htmlFor="price">Price</label>
						<input type="number" className="form-control" value={values.price} id="price" name="price" placeholder="Preco do produto" />
					</div>
					<div>
						<label htmlFor="image1">Image1</label>
						<input type="text" className="form-control" value={values.image1} id="image1" name="image1" placeholder="Image do produto" />
					</div>
					<div>
						<label htmlFor="description">Description</label>
						<input type="text" className="form-control" value={values.description} id="description" name="description" placeholder="description" />
					</div>
					<div>
						<label htmlFor="quantity">quantity</label>
						<input type="text" className="form-control" value={values.quantity} id="quantity" name="quantity" placeholder="contity" />
					</div>
					<div>
						<label htmlFor="cor">Cor</label>
						<input type="text" className="form-control" value={values.cor} id="cor" name="cor" placeholder="cor" />
					</div>
					<div>
						<label htmlFor="slug">Slug</label>
						<input type="text" className="form-control" value={values.slug} id="slug" name="slug" placeholder="slug" />
					</div>
					<div>
						<label htmlFor="tags">Tags</label>
						<input type="text" className="form-control" value={values.tags} id="tags" name="tags" placeholder="tags" />
					</div>
					<div>
						<button type="submit" className="btn btn-primary btn-block wit">Salvar</button>
					</div>
				</form>
			</div>
    </>
    )
}
