const Home = () => {
  return (
    <div className="w-full px-4 py-16 bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <h1 className="text-5xl font-extrabold text-center mb-8 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
          Welcome to ShareMate!
        </h1>
        <p className="text-xl text-center mb-12 max-w-3xl mx-auto">
          <strong>ShareMate</strong> is the easiest way to track, manage, and
          split shared expenses with friends, family, and colleagues. Whether
          you’re going on a trip, sharing rent, or simply pooling money for a
          gift, ShareMate ensures that everyone pays their fair share.
        </p>

        {/* Why Choose ShareMate Section */}
        <h2 className="text-3xl font-semibold mb-6 text-center text-blue-400">
          Why Choose ShareMate?
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="flex items-center justify-center bg-gray-800 bg-opacity-60 p-6 rounded-lg shadow-xl">
            <div className="text-center">
              <svg
                className="w-12 h-12 text-blue-500 mb-4"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 4v16m8-8H4"
                />
              </svg>
              <h3 className="text-lg font-semibold text-white">
                Simple Expense Tracking
              </h3>
              <p className="text-sm text-gray-300 mt-2">
                Effortlessly add expenses and let ShareMate calculate who owes
                what.
              </p>
            </div>
          </div>

          <div className="flex items-center justify-center bg-gray-800 bg-opacity-60 p-6 rounded-lg shadow-xl">
            <div className="text-center">
              <svg
                className="w-12 h-12 text-blue-500 mb-4"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 4v16m8-8H4"
                />
              </svg>
              <h3 className="text-lg font-semibold text-white">
                Automatic Calculations
              </h3>
              <p className="text-sm text-gray-300 mt-2">
                Forget the hassle of manual calculations. ShareMate
                automatically splits costs and balances accounts.
              </p>
            </div>
          </div>

          <div className="flex items-center justify-center bg-gray-800 bg-opacity-60 p-6 rounded-lg shadow-xl">
            <div className="text-center">
              <svg
                className="w-12 h-12 text-blue-500 mb-4"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 4v16m8-8H4"
                />
              </svg>
              <h3 className="text-lg font-semibold text-white">
                Real-Time Updates
              </h3>
              <p className="text-sm text-gray-300 mt-2">
                Everyone can view updates in real-time, ensuring no one is left
                out.
              </p>
            </div>
          </div>
        </div>

        {/* Plan Your Trip Using AI Section */}
        <h2 className="text-3xl font-semibold mt-16 mb-8 text-center text-green-400">
          Plan Your Trip Using AI
        </h2>
        <div className="bg-gray-800 p-8 rounded-lg shadow-xl mb-12">
          <div className="flex items-center justify-between">
            <div className="text-center sm:text-left">
              <h3 className="text-2xl font-semibold text-white mb-4">
                Let AI Create Your Perfect Trip
              </h3>
              <p className="text-sm text-gray-300 mb-4">
                Planning a trip can be overwhelming. Let ShareMate&apos;s AI
                help you create the ideal itinerary based on your preferences,
                budget, and travel style.
              </p>
              <p className="text-sm text-gray-300 mb-4">
                Choose your destination, preferences, and ShareMate will
                recommend the best destinations, activities, and accommodations
                tailored just for you!
              </p>
              <a
                href="/plan-your-trip"
                className="inline-block px-6 py-3 text-xl font-semibold text-gray-900 bg-green-500 rounded-full shadow-lg hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 transition duration-200"
              >
                Plan My Trip
              </a>
            </div>
            <div className="w-28 h-28 sm:w-48 sm:h-48 bg-blue-500 rounded-full flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="w-24 h-24 text-white"
              >
                <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm0 18c-4.418 0-8-3.582-8-8s3.582-8 8-8 8 3.582 8 8-3.582 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z" />
              </svg>
            </div>
          </div>
        </div>

        {/* How It Works Section */}
        <h2 className="text-3xl font-semibold mt-16 mb-8 text-center text-blue-400">
          How It Works
        </h2>
        <div className="bg-gray-800 p-8 rounded-lg shadow-xl">
          <ol className="list-decimal pl-8 space-y-4 text-lg text-gray-300">
            <li>
              <strong className="text-white">Create a Group:</strong> Start by
              creating a group with your friends or family.
            </li>
            <li>
              <strong className="text-white">Add Expenses:</strong> Whenever a
              new expense occurs, add it to the group and indicate who paid
              what.
            </li>
            <li>
              <strong className="text-white">Get Balanced:</strong> ShareMate
              will automatically calculate how much each member owes or is owed.
            </li>
            <li>
              <strong className="text-white">Settle Up:</strong> Once everything
              is balanced, ShareMate helps you keep track of payments and
              settles debts.
            </li>
          </ol>
        </div>

        {/* Key Features Section */}
        <h2 className="text-3xl font-semibold mt-16 mb-8 text-center text-blue-400">
          Key Features
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-gray-800 bg-opacity-60 p-6 rounded-lg shadow-xl">
            <h3 className="text-lg font-semibold text-white">
              Seamless Integration
            </h3>
            <p className="text-sm text-gray-300 mt-2">
              ShareMate can easily integrate with your bank accounts for
              automatic expense tracking.
            </p>
          </div>

          <div className="bg-gray-800 bg-opacity-60 p-6 rounded-lg shadow-xl">
            <h3 className="text-lg font-semibold text-white">
              Customizable Notifications
            </h3>
            <p className="text-sm text-gray-300 mt-2">
              Stay updated with payment reminders and group activity
              notifications.
            </p>
          </div>

          <div className="bg-gray-800 bg-opacity-60 p-6 rounded-lg shadow-xl">
            <h3 className="text-lg font-semibold text-white">
              Expense History
            </h3>
            <p className="text-sm text-gray-300 mt-2">
              Access a full history of your shared expenses and see how much
              you’ve spent over time.
            </p>
          </div>

          <div className="bg-gray-800 bg-opacity-60 p-6 rounded-lg shadow-xl">
            <h3 className="text-lg font-semibold text-white">
              Multi-Currency Support
            </h3>
            <p className="text-sm text-gray-300 mt-2">
              ShareMate supports multiple currencies, making it perfect for
              international trips or groups.
            </p>
          </div>
        </div>

        {/* Call to Action Section */}
        <div className="mt-12 text-center">
          <p className="text-2xl font-bold mb-4">
            Start managing your shared expenses today with{" "}
            <span className="text-blue-400">ShareMate</span>!
          </p>
          <a
            href="/signup"
            className="inline-block px-6 py-3 text-xl font-semibold text-gray-900 bg-blue-500 rounded-full shadow-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
          >
            Get Started
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
