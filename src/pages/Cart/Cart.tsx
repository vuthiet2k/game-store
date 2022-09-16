import { Box, Button, TextField } from "@mui/material";
import { postData, getData, deleteData } from "../../apis";
import { useEffect, useState } from "react";

function Cart() {
  const [job, setJob] = useState<string>("");
  const [data, setData] = useState<any[]>([]);
  console.log(data);
  async function handleOnClick() {
    setJob("");
    postData("job", { job: job }).then((res) => setData([res.data, ...data]));
  }
  const handlerDelete = (id: string) => {
    deleteData(`job/${id}`);
    setData(data.filter((item) => item.id !== id));
  };

  useEffect(() => {
    getData("job").then((res) => setData(res?.data));
  }, []);

  return (
    <Box m={10}>
      <TextField
        id="post"
        label="TEST POST"
        variant="outlined"
        value={job}
        onChange={(e) => setJob(e.target.value)}
      />
      <Button type="submit" onClick={() => handleOnClick()}>
        Submit
      </Button>

      <Box>
        <ul>
          {data && data.length > 0
            ? data?.map((jobapi, index) => {
                return (
                  <li key={index}>
                    {jobapi?.job}
                    <Button
                      type="submit"
                      onClick={() => handlerDelete(jobapi?.id)}
                    >                      
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
