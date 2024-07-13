import React from "react";
const Login = () => {
  return (
    <div>
      <section className="pt-0" id="main">
        <div className="container pt- pl-8">
          <div className="md:flex items-center justify-between sm:flex-col md:flex-row">
            {/* Left Content */}
            <div className="w full md:basis-1/2">
              <h5
                data-aos="fade-right"
                data-aos-duration="1500"
                className="text-headingColor font-[600] text-[100px]"
              >
                Circle Hub
              </h5>
              <p className="flex gap-2 text-headingColor font-[500] text-[15px] leading-7 sm:pl-5 sm:pr-10 ">
                Circle Hub adalah aplikasi chat komunitas yang bertujuan untuk
                memfasilitasi komunikasi dan kolaborasi di antara pengguna yang
                memiliki minat yang sama. Dengan fitur seperti obrolan
                real-time, forum diskusi, berbagi media, dan notifikasi, Circle
                Hub menyediakan platform yang lengkap untuk berinteraksi dan
                bekerja sama.
              </p>
              <div className="flex items-center gap-6 mt-7">
                <a className="flex gap-6" href="#contact">
                  <p className="mt-2 pl-5">Got Any Problem?</p>
                  <button className="bg-primaryColor text-white font-[500] flex items-center gap-2 hover:bg-smallTextColor ease-in duration-300 py-2 px-4 rounded-[8px]">
                    <i className="ri-mail-line"></i> Contact Admin
                  </button>
                </a>
              </div>
            </div>
            {/* End Left Content*/}
            {/* Right Login */}
            <div className="w-full basis-1/2 mt-10 sm:mt-0">
              <div className="bg-white">
                <div className="flex h-screen flex-col items-center justify-center">
                  <div className="max-h-auto mx-auto max-w-xl pt-16">
                    <div className="mb-8 space-y-3">
                      <p className="text-xl font-semibold">Login</p>
                      <p className="text-gray-500">
                        Silahkan Login jika telah memiliki Akun
                      </p>
                    </div>

                    <form className="w-full">
                      <div className="mb-10 space-y-3">
                        <div className="space-y-1">
                          <div className="space-y-2">
                            <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                              Email
                            </label>
                            <input
                              className="border-input bg-background ring-offset-background placeholder:text-muted-foreground focus-visible:ring-ring flex h-10 w-full rounded-md border px-3 py-2 text-sm file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                              id="email"
                              placeholder="mail@example.com"
                              name="email"
                            />
                            <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                              Password
                            </label>
                            <input
                              className="border-input bg-background ring-offset-background placeholder:text-muted-foreground focus-visible:ring-ring flex h-10 w-full rounded-md border px-3 py-2 text-sm file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                              id="password"
                              placeholder="*******"
                              name="passowrd"
                              type="password"
                            />
                          </div>
                        </div>

                        <button
                          className="ring-offset-background focus-visible:ring-ring flex h-10 w-full items-center justify-center whitespace-nowrap rounded-md bg-black px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-black/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
                          type="submit"
                        >
                          Login
                        </button>
                      </div>
                    </form>

                    <div className="text-center items-center justify-center flex gap-2">
                      Not Registered Yet?
                      <a className="text-blue-500" href="/signup">
                        Create one
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* End Right Form*/}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Login;
