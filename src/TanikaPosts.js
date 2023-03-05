import { useEffect, useState } from "react";
import axios from "axios";
const TanikaPosts = (props) => {
  const searchQuary = props.searchQuary;
  const [data, setData] = useState("");
  console.log(searchQuary);
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/photos")
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => console.dir(err));
  }, []);

  const seachedList = data && data.filter((item)=>item.title.toLowerCase().includes(searchQuary.toLowerCase()))
  console.log(seachedList)
  // console.log(data);
  return (
    <>
      <div
        class="row row-cols-1 row-cols-md-4 g-4 m-2"
        style={{ padding: "0 80px" }}
      >
        {seachedList &&
          seachedList.map((item) => {
            return (
              <div
                class="card p-0 m-2"
                style={{
                  width: "19.7rem",
                  height: "16rem",
                  backgroundColor: "#283593",
                }}
              >
                <img
                  src={item.url}
                  style={{ height: "70%", width: "100%" }}
                  alt=".."
                />

                <div class="row no-gutters">
                  <div class="col-md-8">
                    <div className="m-2">
                      <div class="" style={{ height: "100%%", width: "100%" }}>
                        <h6 class="card-title text-white">{item.title}</h6>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-4 pt-3">
                    <div></div>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </>
  );
};
export default TanikaPosts;
