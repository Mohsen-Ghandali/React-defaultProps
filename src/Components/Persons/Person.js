const Person = (props) => {
    const { firstName, lastName, age } = props
    return (
        <>
            <h1>{firstName}</h1>
            <h1>{lastName}</h1>
            <h1>{age}</h1>
            <hr />
        </>
    );
};

Person.defaultProps = {
    firstName: "max",
    lastName: "Müller",
    age: 25
}
export default Person;