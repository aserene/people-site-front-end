import {Form, Link, useLoaderData } from "react-router-dom";
function Index(props){
    const people=useLoaderData()
    return (
        <div>
            <h2>Create a Person</h2>
            <Form action="/create" method="post">
                <input type="input" name="name" placeholder="person's name"/>
                <input type="input" name="image" placeholder="person's image"/>
                <input type="input" name="title" placeholder="person's title"/>
                <input type="submit" value="Create Person"/>
            </Form>
            <h2>People</h2>
                <div className="container">
                {people.map(person => (
                    <div className="card">
                        <Link to={`/${person._id}`} className="person">
                            <h1>{person.name}</h1>
                        </Link>
                        <img src={person.image} alt={person.name}/>
                        <h3>{person.title}</h3>
                    </div>
                ))}
                </div>
        </div>
    )
}
export default Index