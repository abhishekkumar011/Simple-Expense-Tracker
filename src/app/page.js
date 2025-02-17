export default function Home() {
  return (
    <div className="max-w-2xl mx-auto mt-16 py-6 px-4 bg-gray-100 rounded-lg shadow-md">
      <h1 className="text-3xl font-sans font-semibold text-center mb-4">
        Expense Tracker
      </h1>

      <div className="flex mb-4">
        <input
          type="number"
          className="w-1/4 p-2 border rounded-l-md"
          placeholder="Amount"
        />
        <input
          type="text"
          className="w-2/4 p-2 border"
          placeholder="Description"
        />
        <input type="date" className="w-1/4 p-2 border" />
        <button className="bg-blue-500 text-white px-4 py-2 rounded-r-md">
          Add
        </button>
      </div>

      <ul>
        <li className="flex justify-between items-center bg-white p-2 rounded-md shadow-sm mb-2">
          <span>Home Rent - {"₹8000"}</span>
          <button className="bg-red-500 text-white px-2 py-1 rounded-md">
            Delete
          </button>
        </li>
        <li className="flex justify-between items-center bg-white p-2 rounded-md shadow-sm mb-2">
          <span>Food - {"₹20000"}</span>
          <button className="bg-red-500 text-white px-2 py-1 rounded-md">
            Delete
          </button>
        </li>
      </ul>
    </div>
  );
}
