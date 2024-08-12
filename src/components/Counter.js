import { useDispatch, useSelector } from "react-redux";
import {
  decrementCounter,
  incrementCounter,
  resetCounter,
  setInputValue,
} from "../utils/counterSlice";

const Counter = () => {
  const counter = useSelector((store) => store.count.counter);
  const inputVal = useSelector((store) => store.count.inputValue);
  const dispatch = useDispatch();

  const handleInput = (e) => {
    dispatch(setInputValue(e.target.value));
  };
  return (
    <div>
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <p className="text-2xl font-semibold mb-4 text-center">
            Count: {counter}
          </p>
          <input
            type="number"
            value={inputVal}
            placeholder="Lets Count"
            onChange={(e) => handleInput(e)}
            className="border border-gray-300 p-2 rounded mb-4 text-center w-full"
          />
          <div className="flex gap-2">
            <button
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
              onClick={() => dispatch(incrementCounter())}
            >
              Increment
            </button>
            <button
              className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition"
              onClick={() => dispatch(decrementCounter())}
            >
              Decrement
            </button>
            <button
              className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600 transition"
              onClick={() => dispatch(resetCounter())}
            >
              Reset
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Counter;
