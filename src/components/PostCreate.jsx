import React, { useState } from "react";
import { Context, server } from "..";
import { useContext } from "react";
// import MyUserData from './MyUserData';

import axios from "axios";
import store from "store";
import compress from "compress-base64";
import { useNavigate } from "react-router-dom";
import Resizer from "react-image-file-resizer";

const resizeFile = (file) =>
  new Promise((resolve) => {
    Resizer.imageFileResizer(
      file,
      800,
      800,
      "JPEG",
      80,
      0,
      (uri) => {
        resolve(uri);
      },
      "base64"
    );
  });

function PostCreate(props) {
  console.log("props", props);
  const { setIsAuthenticated } = useContext(Context);
  const PostObj = {
    title: "",
    content: "",
    photosrc: "",
    date: "",
    username: "",
  };
  const [Cpost, setCpost] = useState(PostObj);
  const uploadedImage = React.useRef(null);
  const imageUploader = React.useRef(null);
  const [baseImage, setBaseImage] = useState("");
  const [show, setShow] = useState(false);
  const [dimg, setDimg] = useState(false);
  const navigate = useNavigate();
  const [state, setTime] = useState(0);

  const user = store.get('user');
  Cpost.username = user.username;
  function changeHandler(e) {
    e.preventDefault();
   
    setCpost(() => ({ ...Cpost, [e.target.name]: e.target.value }));
  }
  
  

  function deleteImage() {
    setBaseImage("");
    // setCpost({ ...Cpost, photosrc: ""});
    setShow(false);
  }

  const uploadImage = async (e) => {
    const file = e.target.files[0];
    // const image = sizeReducer(file);
    const image = await resizeFile(file);
    // const base64 = await convertBase64(file);

    setBaseImage(image);

    console.log("resized", image);
    setCpost({ ...Cpost, photosrc: image });
    setShow(true);
  };

  async function sendPost(e) {
    
    await axios
      .post(`${server}/api/posts/upost`, {
        headers: {
          "Content-Type": "application/json",
        },
        Cpost,
      })
      .then((res) => {
        console.log("response : ", res);
      })
      .catch((err) => {
        console.log(err);
      });

    console.log(Cpost);

    props.setAp(false);

    navigate("/home");
    navigate("/dashboard");
  }

  return (
    <div className="absolute md:w-[100%] fd:left-[214px] flex items-center justify-center fd:w-[81.8%] top-[52px] fd:bottom-0 md:bottom-[48px] backdrop-blur-lg  bg-white/10 p-8 rounded-lg z-40">
      <div className="bg-white/60  p-4 flex flex-col gap-2 md:w-[100%] fd:w-[65%] fd:h-[50%]   rounded-xl  shadow-md shadow-zinc-500/25">
        <div className="fd:grid fd:grid-cols-2 fd:gap-2">
          <div>
            <div>
              <input
                type="file"
                accept="image/*"
                onChange={uploadImage}
                name="photo"
                ref={imageUploader}
                multiple="false"
                style={{ display: "none" }}
              />
            </div>

            <div className="w-full flex flex-col gap-2 mb-2 rounded-lg fd:h-[100%]">
              <input
                className="w-full p-2 px-4 rounded-3xl fd:h-11 "
                type="text"
                placeholder="Title"
                name="title"
                value={Cpost.title}
                onChange={changeHandler}
              ></input>

              <textarea
                className="w-full  p-2  rounded-lg fd:h-48 md:h-32 "
                type="text"
                name="content"
                onChange={changeHandler}
                placeholder="Enter your message here"
              />
            </div>
          </div>

          <div>
            {show && (
              <div className="img-con-cr relative  flex items-center justify-center rounded-xl bg-white/60">
                <button
                  className="absolute top-1 right-2 opacity-50"
                  onClick={deleteImage}
                >
                  <i class="fa-solid fa-x"></i>
                </button>
                <img className="img-sel-cr" src={baseImage} />
              </div>
            )}
          </div>
        </div>

        {show && (
          <div className="  px-3 text-[20px] fd:flex flex-row justify-between rounded-lg ">
            <button
              type="button"
              name="photo"
              onClick={() => imageUploader.current.click()}
            >
              <i class="fa fa-camera" aria-hidden="true"></i>
            </button>

            <button type="submit" name="send" onClick={sendPost}>
              <i class="fa fa-paper-plane" aria-hidden="true"></i>
            </button>
          </div>
        )}
        {!show && (
          <div className="  px-3 text-[20px] fd:flex flex-row justify-between rounded-lg fd:w-[50%] ">
            <button
              type="button"
              name="photo"
              onClick={() => imageUploader.current.click()}
            >
              <i class="fa fa-camera" aria-hidden="true"></i>
            </button>

            <button type="submit" name="send" onClick={sendPost}>
              <i class="fa fa-paper-plane" aria-hidden="true"></i>
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default PostCreate;
