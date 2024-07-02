import React from "react";
import Layout from "../components/Layout";
import Sidebar from "../components/Sidebar";

const Friends = () => {
  return (
    <div>
      <Layout />
      <div
        className="
     flex"
      >
        <Sidebar />
        <div className="grow">
          <div className="w-full">
            <div className="relative rounded overflow-hidden border border-grey-light mb-8 bg-white">
              <div className="border-b border-grey-light p-4 bg-grey-lighter py-8">
                <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                  <div className="sm:flex sm:items-center px-2 py-4">
                    <div className="flex-grow">
                      <h3 className="font-normal px-2 py-3 leading-tight">
                        Contacts
                      </h3>
                      <input
                        type="text"
                        placeholder="Search teams or members"
                        className="my-2 w-full text-sm bg-grey-light text-grey-darkest rounded h-10 p-3 focus:outline-none"
                      />
                      <div className="w-full">
                        <div className="flex cursor-pointer my-1 hover:bg-blue-lightest rounded">
                          <div className="w-8 h-10 text-center py-1">
                            <p className="text-3xl p-0 text-green-dark">
                              &bull;
                            </p>
                          </div>
                          <div className="w-4/5 h-10 py-3 px-1">
                            <p className="hover:text-blue-dark">Kevin Durant</p>
                          </div>
                          <div className="w-1/5 h-10 text-right p-3">
                            <p className="text-sm text-grey-dark">Member</p>
                          </div>
                        </div>
                        <div className="flex cursor-pointer my-1 hover:bg-blue-lightest rounded">
                          <div className="w-8 h-10 text-center py-1">
                            <p className="text-3xl p-0 text-grey-dark">
                              &bull;
                            </p>
                          </div>
                          <div className="w-4/5 h-10 py-3 px-1">
                            <p className="hover:text-blue-dark">James Harden</p>
                          </div>
                          <div className="w-1/5 h-10 text-right p-3">
                            <p className="text-sm text-grey-dark">Team</p>
                          </div>
                        </div>
                        <div className="flex cursor-pointer my-1 hover:bg-blue-lightest rounded">
                          <div className="w-8 h-10 text-center py-1">
                            <p className="text-3xl p-0 text-green-dark">
                              &bull;
                            </p>
                          </div>
                          <div className="w-4/5 h-10 py-3 px-1">
                            <p className="hover:text-blue-dark">
                              Michael Jordan
                            </p>
                          </div>
                          <div className="w-1/5 h-10 text-right p-3">
                            <p className="text-sm text-grey-dark">Member</p>
                          </div>
                        </div>
                        <div className="flex cursor-pointer my-1 hover:bg-blue-lightest rounded">
                          <div className="w-8 h-10 text-center py-1">
                            <p className="text-3xl p-0 text-grey-dark">
                              &bull;
                            </p>
                          </div>
                          <div className="w-4/5 h-10 py-3 px-1">
                            <p className="hover:text-blue-dark">Tim Duncan</p>
                          </div>
                          <div className="w-1/5 h-10 text-right p-3">
                            <p className="text-sm text-grey-dark">Team</p>
                          </div>
                        </div>
                        <div className="flex my-1 cursor-pointer hover:bg-blue-lightest rounded">
                          <div className="w-8 h-10 text-center py-1">
                            <p className="text-3xl p-0 text-grey-dark">
                              &bull;
                            </p>
                          </div>
                          <div className="w-4/5  h-10 py-3 px-1">
                            <p className="hover:text-blue-dark">Lebrr James</p>
                          </div>
                          <div className="w-1/5 h-10 text-right p-3">
                            <p className="text-sm text-grey-dark">Member</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Friends;
