import axios from "axios";
import { useEffect, useState } from "react";
import { Ipokemonlist } from "../atom/atom";


const PokeTypes = () => {

  const [typeList, setTypeList] = useState<Ipokemonlist[]>([]);
  const [type, setType] = useState({
    name: "normal",
    url: "https://pokeapi.co/api/v2/type/1/"
  });


  useEffect(() => {
    const typeListData = async () => {
      try {
        let res = await axios
          .get("https://pokeapi.co/api/v2/type")
          .then((res) => {
            if (res.status === 200) {
              return res.data.results;
            }
          });

        setTypeList(res);
        return res;
      } catch (error) {
        console.log(error);
      }
    };

    typeListData();
  }, []);



  return (
      <ul className="typeInfo hover">
        {typeList.map((i) => (
          <li
            key={i.name}
            className={`r-btn ${i.name === type.name ? type.name : "normal"}`}
            onClick={() => setType({ name: i.name, url: i.url })}
          >
            {i.name}
          </li>
        ))}
      </ul>

     
  );
};

export default PokeTypes;
