import MyButton from "../components/MyButtons";
import Headers from "../components/Headers";
import Footers from "../components/Footer";
import Count from "../components/Count";

export default function MyApp() {
  return (
    <div>
      <Headers />
      <MyButton name="Dollars" />
      <Footers />
      <Count />
    </div>
  );
}
