import React, { useState, useEffect } from "react";
import { Grid, Left, Right, Logo, Map } from "./Network";

const Network = () => {
  const [photo, setPhoto] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    await fetch("https://jsonplaceholder.typicode.com/photos")
      .then((response) => response.json())
      .then((data) => setPhoto(data))
      .catch((err) => {
        console.log(err);
      });
  };

  const slidePhoto = photo.slice(4994);
  return (
    <>
      <Grid>
        <Left>
          Join a network <br /> of curious <br /> minds.
        </Left>
        <div>
          <Right>
            {slidePhoto.map(({ url, title, thumbnailUrl }) => {
              return (
                <Map>
                  <Logo src={url} />
                  <div>
                    <div>{title}</div>
                    <div>{thumbnailUrl}</div>
                  </div>
                </Map>
              );
            })}
          </Right>
        </div>
      </Grid>
    </>
  );
};

export default Network;
