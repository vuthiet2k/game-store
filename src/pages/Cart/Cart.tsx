import { Box, Button, TextField } from "@mui/material";
import { postData, getData, deleteData } from "../../apis";
import { useContext, useEffect, useState } from "react";
import { CartContext } from "../../context/CartContext";
import Header from "../../components/Haeder/Header";

function Cart() {
  // const [job, setJob] = useState<string>("");
  // const [data, setData] = useState<any[]>([]);
  // async function handleOnClick() {
  //   setJob("");
  //   postData("job", { job: job }).then((res) => setData([res.data, ...data]));
  // }
  // const handlerDelete = (id: string) => {
  //   deleteData(`job/${id}`);
  //   setData(data.filter((item) => item.id !== id));
  // };

  // useEffect(() => {
  //   getData("job").then((res) => setData(res?.data));
  // }, []);
  const { cart, setCart } = useContext(CartContext);

  const handlerDelete = () => {};

  return (
    <Box m={10}>
      <Header />
      <Box>
        <ul>
          {cart && cart.length > 0
            ? cart?.map((game, index) => {
                return (
                  <li key={index}>
                    {game.name}
                    <Button type="submit" onClick={handlerDelete}>
                      X
                    </Button>
                  </li>
                );
              })
            : "loading"}
        </ul>
      </Box>
    </Box>
  );
}

export default Cart;
