import MyButton from "../components/MyButtons";
import Headers from "../components/Headers";
import Footers from "../components/Footer";
import Count from "../components/Count";
import "./index.css";

export default function MyApp() {
  return (
    <div>
      <Headers />
      <MyButton name="Dollars" />
      <Footers />
      <Count />

      <h1 className="text-3xl font-bold underline bg-blue-500 ">
        Hello world!
      </h1>
    </div>
  );
}
