import axios from "axios";
import { useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";
import Cupcake from "../components/Cupcake";

export default function CupcakeDetailspage() {
  const { id } = useParams();
  const [cupcakeDetail, setCupcakeDetail] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:4000/cupcakes/${id}`)
      .then((response) => response.data)
      .then((data) => setCupcakeDetail(data));
  }, []);

  return <Cupcake cupcake={cupcakeDetail} />;
}
