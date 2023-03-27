const editProduct = (product) => {
  const id = product._id;
  return async (dispatch, getState) => {
    const res = await fetch(`http://localhost:5000/products/${id}`, {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(product),
    });
    const data = await res.json();

    if (data.acknowledged) {
      dispatch(alert("YOUR DATA IS SUCCESSFULLY EDITED"));
    }
  };
};

export default editProduct;
