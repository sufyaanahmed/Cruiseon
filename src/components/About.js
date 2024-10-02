function About() {
  return (
      <section id="about" className="py-16 bg-gray-800">
          <div className="container mx-auto flex flex-wrap items-center justify-between">
              <div className="w-full md:w-1/2 mb-6 md:mb-0 flex justify-center">
                  <img
                      src={require('../Archive/Logo.jpg')} // Ensure the path is correct
                      alt="About Us"
                      className="w-96 h-auto rounded-lg" // Smaller size and rotation effect
                  />
              </div>
              <div className="w-full md:w-1/2 md:pl-10">
                  <h2 className="text-3xl text-orange-500 font-bold mb-4 transition-colors duration-300 px-2 hover:text-orange-300">
                      About Us
                  </h2>
                  <p className="text-gray-400 text-lg transition-opacity duration-300 px-2 hover:opacity-80">
                      Welcome to Cruiseon Cars, your trusted partner for exceptional car rental services. 
                      With a vast fleet of top-quality vehicles, we provide unmatched flexibility and convenience 
                      for your travels. Whether you are planning a road trip, business journey, or leisure vacation, 
                      Cruiseon Cars guarantees the perfect vehicle for every occasion. Our commitment to customer 
                      satisfaction and a seamless rental experience makes us the go-to car rental service for travelers 
                      around the world.
                  </p>
              </div>
          </div>
      </section>
  );
}

export default About;
