import Person from "../Persons/Person";

const App = () => {
  const firstName = "Mohsen"
  const lastName = "Ghandali"
  const age = "35"

  return (
    <div className=" col-6 offset-3 p-5 bg-dark text-white mt-2 ">

      <Person firstName={firstName} lastName={lastName} age={age} />
      <Person  />

    </div>
  );
};


export default App;