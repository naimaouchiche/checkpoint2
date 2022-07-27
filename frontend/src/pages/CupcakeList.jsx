import Cupcake from "@components/Cupcake";
import axios from "axios";
import { useEffect, useState } from "react";

export default function CupcakeList() {
  // Step 1: get all cupcakes
  const [cupCakesList, setCupCakesList] = useState([]);
  const [accessories, setAccessories] = useState([]);
  const [accessorieFilter, setAccessorieFilter] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:4000/cupcakes")
      .then((res) => res.data)
      .then((data) => setCupCakesList(data));
  }, []);

  // Step 3: get all accessories
  useEffect(() => {
    axios
      .get("http://localhost:4000/accessories")
      .then((response) => response.data)
      .then((data) => setAccessories(data));
  }, []);

  return (
    <>
      <h1>My cupcakes</h1>
      <form className="center">
        <label htmlFor="cupcake-select">
          Filter by{" "}
          <select
            id="cupcake-select"
            onChange={(e) => setAccessorieFilter(e.target.value)}
          >
            <option value=""></option>
            {/* Step 4: add an option for each accessory */}
            {accessories &&
              accessories.map((accessorie) => (
                <option value={accessorie.id} key={accessorie.id}>
                  {accessorie.name}
                </option>
              ))}
          </select>
        </label>
      </form>
      <ul className="cupcake-list" id="cupcake-list">
        {/* Step 2: repeat this block for each cupcake */}
        {cupCakesList &&
          cupCakesList
            .filter(
              (cupcake) =>
                !accessorieFilter || cupcake.accessory_id === accessorieFilter
            )
            .map((cupcake) => (
              <li className="cupcake-item" key={cupcake.id}>
                <Cupcake cupcake={cupcake} />
              </li>
            ))}

        {/* end of block */}
      </ul>
    </>
  );
}
