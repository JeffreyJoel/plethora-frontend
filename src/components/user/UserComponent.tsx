import Image from "next/image";
import React from "react";
import PostCard from "../posts/PostsCard";

interface UserComponentProps {
  name?: string;
  age?: number;
}

const UserComponent: React.FC<UserComponentProps> = () => {
  return (
    <>
    <div className="relative">
      <div
        className="mb-4 md:mb-0 w-full mx-auto relative"
        style={{ height: "150px" }}
      >
        <div className="absolute left-0 bottom-0 w-full h-full z-10 bg-[#7248EE]"></div>
      </div>

      <div className="absolute top-[75px] z-10 mx-auto w-full">
        <div className="flex items-center justify-between w-10/12 mx-auto bg-[#f9f9f9] rounded-2xl px-6">
          <div className="text-center flex items-center">
            <Image
              className="h-20 w-20 rounded-2xl border-4 border-white mx-auto my-4"
              src="https://media.istockphoto.com/id/1209654046/vector/user-avatar-profile-icon-black-vector-illustration.jpg?s=612x612&w=0&k=20&c=EOYXACjtZmZQ5IsZ0UUp1iNmZ9q2xl1BD1VvN6tZ2UI="
              alt=""
              width={100}
              height={100}
            />
            <div className="ml-2">
              <p className="text-xl text-gray-700 items-center">
                {"untitled"}
              </p>
              <p className="text-sm text-gray-700 items-center">
                @{"Untitled"}
              </p>
            </div>
          </div>
          <div className="flex">
            <div className="flex gap-2 items-center text-gray-800">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-stickies"
                viewBox="0 0 16 16"
              >
                <path d="M1.5 0A1.5 1.5 0 0 0 0 1.5V13a1 1 0 0 0 1 1V1.5a.5.5 0 0 1 .5-.5H14a1 1 0 0 0-1-1H1.5z" />
                <path d="M3.5 2A1.5 1.5 0 0 0 2 3.5v11A1.5 1.5 0 0 0 3.5 16h6.086a1.5 1.5 0 0 0 1.06-.44l4.915-4.914A1.5 1.5 0 0 0 16 9.586V3.5A1.5 1.5 0 0 0 14.5 2h-11zM3 3.5a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 .5.5V9h-4.5A1.5 1.5 0 0 0 9 10.5V15H3.5a.5.5 0 0 1-.5-.5v-11zm7 11.293V10.5a.5.5 0 0 1 .5-.5h4.293L10 14.793z" />
              </svg>
              <span>
                <strong className="text-black">{0}</strong>post(s)
              </span>
            </div>
            <div className="flex gap-2  items-center text-gray-800 ml-10">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-coin"
                viewBox="0 0 16 16"
              >
                <path d="M5.5 9.511c.076.954.83 1.697 2.182 1.785V12h.6v-.709c1.4-.098 2.218-.846 2.218-1.932 0-.987-.626-1.496-1.745-1.76l-.473-.112V5.57c.6.068.982.396 1.074.85h1.052c-.076-.919-.864-1.638-2.126-1.716V4h-.6v.719c-1.195.117-2.01.836-2.01 1.853 0 .9.606 1.472 1.613 1.707l.397.098v2.034c-.615-.093-1.022-.43-1.114-.9H5.5zm2.177-2.166c-.59-.137-.91-.416-.91-.836 0-.47.345-.822.915-.925v1.76h-.005zm.692 1.193c.717.166 1.048.435 1.048.91 0 .542-.412.914-1.135.982V8.518l.087.02z" />
                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                <path d="M8 13.5a5.5 5.5 0 1 1 0-11 5.5 5.5 0 0 1 0 11zm0 .5A6 6 0 1 0 8 2a6 6 0 0 0 0 12z" />
              </svg>
              <strong className="text-black text-1xl">{0}</strong>
              token(s)
            </div>
          </div>
          <button className="w-[200px] h-12 rounded-lg bg-[#7248EE] text-white antialiased font-bold hover:bg-indigo-800 px-4">
            Follow
          </button>
        </div>
        {/* <div className=" max-w-lg mx-auto  px-4 pb-6">
     
          <div className="flex gap-2 px-2">
            <button
              className="flex-1 rounded-lg bg-indigo-600 text-white antialiased font-bold hover:bg-indigo-800 px-4 py-2"
            >
              Claim token
            </button>
  
          </div>
        </div> */}
        <div>
          {" "}
          <h3 className="text-2xl w-full xl:w-9/12 xl:mx-auto mt-8 px-6 xl:px-0 font-medium">Latest Posts</h3>
          <div className="mx-auto grid max-w-7xl  grid-cols-1 gap-6 p-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 mt-3">
          <PostCard />
          <PostCard />
          <PostCard />
          <PostCard />
          <PostCard />
          <PostCard />
        </div>
        </div>
  
      </div>
    </div>
    </>
  );
};

export default UserComponent;
