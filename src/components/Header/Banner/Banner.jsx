import { useState } from "react";

const Banner = () => {
  const [search ,setSearch] = useState('');
  const [searchResults, setSearchResults] = useState([]);

    return (
      <div
        className="hero h-[70vh]"
        style={{
          backgroundImage: `url('https://i.ibb.co/qgpZ9xm/banner.jpg')`,
        }}
      >
        <div className="hero-overlay bg-white bg-opacity-95"></div>
        <div className="hero-content text-center text-neutral-content">
          <div>
            <h1 className="mb-5 text-xl md:text-3xl lg:text-5xl font-bold text-[#0B0B0B]">
              I Grow By Helping People In Need
            </h1>

            <div className="form-control">
              <div className="input-group  justify-center">
                <input
                  onChange={e => setSearch(e.target.value)}
                  type="text"
                  placeholder="Search here by category..."
                  className="input md:w-[400px] input-bordered text-black font-semibold"
                />
                <button className="btn bg-[#FF444A] text-white font-semibold">
                 Search
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Banner;
