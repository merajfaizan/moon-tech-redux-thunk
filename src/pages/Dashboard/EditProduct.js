import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useLoaderData } from "react-router-dom";
import editProduct from "../../redux/thunk/products/editProduct";

const EditProduct = () => {
  const product = useLoaderData();
  const { model, brand, image, price, rating, status, keyFeature, _id } =
    product;

  const { register, handleSubmit } = useForm();
  const dispatch = useDispatch();

  const updatedProduct = (data) => {
    const product = {
      _id: _id,
      model: data.model,
      brand: data.brand,
      image: data.image,
      status: data.status === "true" ? true : false,
      price: data.price,
      rating: data.rating,
      keyFeature: [
        data.keyFeature1,
        data.keyFeature2,
        data.keyFeature3,
        data.keyFeature4,
      ],
      spec: [],
    };

    dispatch(editProduct(product));
  };
  return (
    <div className="flex justify-center items-center h-full ">
      <form
        className="shadow-lg p-10 rounded-md flex flex-wrap gap-3 max-w-3xl justify-between bg-white"
        onSubmit={handleSubmit(updatedProduct)}
      >
        <div className="flex flex-col w-full max-w-xs">
          <label className="mb-2" htmlFor="model">
            Model
          </label>
          <input
            type="text"
            id="model"
            defaultValue={model}
            {...register("model")}
          />
        </div>
        <div className="flex flex-col w-full max-w-xs">
          <label className="mb-2" htmlFor="image">
            Image
          </label>
          <input
            type="text"
            name="image"
            defaultValue={image}
            id="image"
            {...register("image")}
          />
        </div>

        <div className="flex flex-col w-full max-w-xs">
          <label className="mb-3" htmlFor="brand">
            Brand
          </label>
          <select
            defaultValue={brand}
            name="brand"
            id="brand"
            {...register("brand")}
          >
            <option value="amd">AMD</option>
            <option value="intel">Intel</option>
          </select>
        </div>
        <div className="flex flex-col w-full max-w-xs">
          <label className="mb-2" htmlFor="price">
            price
          </label>
          <input
            type="text"
            defaultValue={price}
            name="price"
            id="price"
            {...register("price")}
          />
        </div>

        <div className="flex flex-col w-full max-w-xs">
          <h1 className="mb-3">Availability</h1>
          <div className="flex gap-3">
            {status ? (
              <>
                <div>
                  <input
                    type="radio"
                    id="available"
                    value={true}
                    defaultChecked
                    {...register("status")}
                  />
                  <label className="ml-2 text-lg" htmlFor="available">
                    Available
                  </label>
                </div>
                <div>
                  <input
                    type="radio"
                    id="stockOut"
                    name="status"
                    value={false}
                    {...register("status")}
                  />
                  <label className="ml-2 text-lg" htmlFor="stockOut">
                    Stock out
                  </label>
                </div>
              </>
            ) : (
              <>
                <div>
                  <input
                    type="radio"
                    id="available"
                    value={true}
                    {...register("status")}
                  />
                  <label className="ml-2 text-lg" htmlFor="available">
                    Available
                  </label>
                </div>
                <div>
                  <input
                    type="radio"
                    id="stockOut"
                    name="status"
                    value={false}
                    defaultChecked
                    {...register("status")}
                  />
                  <label className="ml-2 text-lg" htmlFor="stockOut">
                    Stock out
                  </label>
                </div>
              </>
            )}
          </div>
        </div>
        <div className="flex flex-col w-full max-w-xs">
          <h1 className="mb-3">Rating</h1>
          <input
            type="number"
            name="rating"
            id="rating"
            defaultValue={rating}
            {...register("rating")}
          />
        </div>
        <div className="flex flex-col w-full max-w-xs">
          <label className="mb-2" htmlFor="keyFeature1">
            Key Feature 1
          </label>
          <input
            type="text"
            name="keyFeature1"
            id="keyFeature1"
            defaultValue={keyFeature[0]}
            {...register("keyFeature1")}
          />
        </div>
        <div className="flex flex-col w-full max-w-xs">
          <label className="mb-2" htmlFor="keyFeature2">
            Key Feature 2
          </label>
          <input
            type="text"
            name="keyFeature2"
            id="keyFeature2"
            defaultValue={keyFeature[1]}
            {...register("keyFeature2")}
          />
        </div>
        <div className="flex flex-col w-full max-w-xs">
          <label className="mb-2" htmlFor="keyFeature3">
            Key Feature 3
          </label>
          <input
            type="text"
            name="keyFeature3"
            id="keyFeature3"
            {...register("keyFeature3")}
            defaultValue={keyFeature[2]}
          />
        </div>
        <div className="flex flex-col w-full max-w-xs">
          <label className="mb-2" htmlFor="keyFeature4">
            Key Feature 4
          </label>
          <input
            type="text"
            name="keyFeature4"
            id="keyFeature4"
            {...register("keyFeature4")}
            defaultValue={keyFeature[3]}
          />
        </div>

        <div className="flex justify-between items-center w-full">
          <button
            className=" px-4 py-3 bg-indigo-500 rounded-md font-semibold text-white text-lg disabled:bg-gray-500"
            type="submit"
          >
            Update
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditProduct;
