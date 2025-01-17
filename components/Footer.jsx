function Footers() {
  const User = {
    firstname: "Mamosh",
    lasname: "Mustafa",
  };

  let Show = true;
  return <>{Show ? User.firstname : User.lasname}</>;
}

export default Footers;
