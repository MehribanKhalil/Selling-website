import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { FaTrash } from "react-icons/fa";
import "./index.scss";
import Loader from "../../components/CommonComponents/Loader";

const Admin = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchText, setSearchText] = useState("");
  const [property, setProperty] = useState(null);

  const getProducts = async () => {
    const res = await axios.get("http://localhost:8000/product");
    setProducts(res.data);
    setIsLoading(false);
  };

  const createProduct = async (data) => {
    const res = await axios.post("http://localhost:8000/product", data);
    getProducts();
  };

  const deleteProduct = async (id) => {
    const res = await axios.delete(`http://localhost:8000/product/${id}`);
    getProducts();
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div className=" section py-24">
      <Helmet>
        <title>Home</title>
      </Helmet>

      {isLoading && <Loader />}

      <div>
        <Formik
          initialValues={{
            image: "",
            title: "",
            info: "",
            rating: "",
            price: "",
          }}
          validationSchema={Yup.object({
            image: Yup.string().required("Required"),
            title: Yup.string()
              .max(20, "Must be 20 characters or less")
              .required("Required"),
            info: Yup.string().required("Required"),
            rating: Yup.number()
              .required("Required")
              .positive("rating must be positive value"),
            price: Yup.number()
              .required("Required")
              .positive("price must be positive value"),
          })}
          onSubmit={(values, { resetForm }) => {
            createProduct(values);
            resetForm();
          }}
        >
          <Form className="form-component mb-16 flex flex-col gap-6 bg-gray-200 px-10 py-10  rounded-xl max-w-[700px]  mx-auto">
            <div className=" flex flex-col">
              <label htmlFor="image">Image</label>
              <Field
                name="image"
                type="text"
                className="border  border-main-color rounded-full  outline-none px-6 py-2 text-black"
              />
              <div className="text-sm text-red-600 font-bold px-2">
                <ErrorMessage name="image" />
              </div>
            </div>

            <div className=" flex flex-col">
              <label htmlFor="title">Title</label>
              <Field
                name="title"
                type="text"
                className="border  border-main-color  rounded-full  outline-none px-6 py-2 text-black"
              />
              <div className="text-sm text-red-600 font-bold px-2">
                <ErrorMessage name="title" />
              </div>
            </div>

            <div className=" flex flex-col">
              <label htmlFor="info">Info</label>
              <Field
                name="info"
                type="text"
                className="border  border-main-color  rounded-full  outline-none px-6 py-2 text-black"
              />
              <div className="text-sm text-red-600 font-bold px-2">
                <ErrorMessage name="info" />
              </div>
            </div>

            <div className=" flex flex-col">
              <label htmlFor="rating">Rating</label>
              <Field
                name="rating"
                type="number"
                className="border  border-main-color  rounded-full  outline-none px-6 py-2 text-black"
              />
              <div className="text-sm text-red-600 font-bold px-2">
                <ErrorMessage name="rating" />
              </div>
            </div>

            <div className=" flex flex-col">
              <label htmlFor="price">Price</label>
              <Field
                name="price"
                type="number"
                className="border   border-main-color rounded-full  outline-none px-6 py-2 text-black"
              />
              <div className=" text-sm text-red-600 font-bold px-2">
                <ErrorMessage name="price" />
              </div>
            </div>

            <div className=" flex justify-center  ">
              <button
                type="submit"
                className="border  bg-blue-800 text-white  rounded-full  outline-none px-6 py-2"
              >
                Add
              </button>
            </div>
          </Form>
        </Formik>
      </div>

      <div className=" flex justify-between py-9">
        <div>
          <input
            type="text"
            name=""
            id=""
            placeholder="Search by Name"
            className=" rounded-xl px-4 py-2 border-2 outline-none "
            onChange={(e) => setSearchText(e.target.value)}
          />
        </div>
        <div className=" flex gap-3">
          <button
            onClick={() => setProperty({ name: "title", asc: true })}
            className=" rounded-xl px-4 py-2 border-2 outline-none "
          >
            A-Z
          </button>
          <button
            onClick={() => setProperty({ name: "title", asc: false })}
            className=" rounded-xl px-4 py-2 border-2 outline-none "
          >
            Z-A
          </button>
          <button
            onClick={() => setProperty({ name: "price", asc: true })}
            className=" rounded-xl px-4 py-2 border-2 outline-none "
          >
            Low to High
          </button>
          <button
            onClick={() => setProperty({ name: "price", asc: false })}
            className=" rounded-xl px-4 py-2 border-2 outline-none "
          >
            High to Low
          </button>
          <button
            onClick={() => setProperty({ name: "price", asc: null })}
            className=" rounded-xl px-4 py-2 border-2 outline-none "
          >
            Def
          </button>
        </div>
      </div>

      <div>
        <div className="flex flex-col">
          <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
              <div className="overflow-hidden">
                <table className="min-w-full text-left text-sm font-light">
                  <thead className="border-b font-medium dark:border-neutral-500">
                    <tr>
                      <th scope="col" className="px-6 py-4">
                        Image
                      </th>
                      <th scope="col" className="px-6 py-4">
                        Title
                      </th>
                      <th scope="col" className="px-6 py-4">
                        Info
                      </th>
                      <th scope="col" className="px-6 py-4">
                        Rating
                      </th>
                      <th scope="col" className="px-6 py-4">
                        Price
                      </th>
                      <th scope="col" className="px-6 py-4">
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {products &&
                      products
                        .filter((item) =>
                          item.title
                            .toLowerCase()
                            .includes(searchText.toLowerCase())
                        )
                        .sort((a, b) => {
                          if (property && property.asc === true) {
                            return a[property.name] < b[property.name]
                              ? -1
                              : b[property.name] < a[property.name]
                              ? 1
                              : 0;
                          } else if (property && property.asc === false) {
                            return a[property.name] > b[property.name]
                              ? -1
                              : b[property.name] > a[property.name]
                              ? 1
                              : 0;
                          } else {
                            return 0;
                          }
                        })
                        .map((product) => (
                          <tr
                            key={product._id}
                            className="border-b dark:border-neutral-500"
                          >
                            <td className="whitespace-nowrap px-6 py-4 font-medium">
                              <img
                                src={product.image}
                                alt=""
                                className=" w-[120px]"
                              />
                            </td>
                            <td className="whitespace-nowrap px-6 py-4">
                              {product.title}
                            </td>
                            <td className="whitespace-nowrap px-6 py-4">
                              {product.info}
                            </td>
                            <td className="whitespace-nowrap px-6 py-4">
                              {product.rating}
                            </td>
                            <td className="whitespace-nowrap px-6 py-4">
                              ${product.price}
                            </td>
                            <td className="whitespace-nowrap px-6 py-4 flex justify-center items-center">
                              <button
                                onClick={() => deleteProduct(product._id)}
                              >
                                <FaTrash />
                              </button>
                            </td>
                          </tr>
                        ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin;
