import React from "react";
import Layout from "./Layout";

const Profile = () => {
  return (
    <div>
      <section id="profile">
        <div className="container lg:pt-7">
          <div className="flex flex-col justify-center sm:py-12">
            <div className="w-full flex gap-10 py-3 px-2 sm:max-w-xl sm:mx-auto sm:px-0">
              <div className="w full md:basis-1/2">
                <div className="relative">
                  <img
                    src=""
                    alt=""
                    className="w-72 h-72 rounded-full border-2"
                  />
                </div>
                <div className="text-center">
                  {" "}
                  <h1 className="text-3xl font-semibold mt-6">
                    Irmansyah Muslimin
                  </h1>
                  <div className="flex justify-center mt-2 gap-2">
                    <i className="ri-edit-circle-line"></i> Edit Profile
                  </div>
                </div>
              </div>
              <div className="w-full basis-1/2 mt-10 sm:mt-0">
                <div className="container">
                  <div className="space-y-1">
                    <label className="text-xl font-semibold">Bio :</label>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Quae veritatis omnis id, rem ut necessitatibus minima
                      excepturi, reprehenderit, deleniti quis aliquam
                      repudiandae odio ipsum laudantium maiores fugiat fugit.
                      Possimus, beatae?
                    </p>
                    <label className="text-xl font-semibold">Email</label>
                    <p>Irmansyahmuslimin05@gmail.com</p>
                    <label className="text-xl font-semibold">
                      Current City :
                    </label>
                    <p>Parepare</p>
                    <label className="text-xl font-semibold">
                      Interested To :
                    </label>
                    <div className="">
                      <span className="bg-blue-100 text-blue-800 text-lg font-medium me-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">
                        Sport
                      </span>
                      <span className="bg-gray-100 text-gray-800 text-lg font-medium me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300">
                        Gaming
                      </span>
                      <span className="bg-red-100 text-red-800 text-lg font-medium me-2 px-2.5 py-0.5 rounded dark:bg-red-900 dark:text-red-300">
                        Reading
                      </span>
                      <span className="bg-green-100 text-green-800 text-lg font-medium me-2 px-2.5 py-0.5 rounded dark:bg-green-900 dark:text-green-300">
                        Coding
                      </span>
                      <span className="bg-yellow-100 text-yellow-800 text-lg font-medium me-2 px-2.5 py-0.5 rounded dark:bg-yellow-900 dark:text-yellow-300">
                        Travelling
                      </span>
                      <span className="bg-indigo-100 text-indigo-800 text-lg font-medium me-2 px-2.5 py-0.5 rounded dark:bg-indigo-900 dark:text-indigo-300">
                        Music
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Profile;
