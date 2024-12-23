//import { Fragment} from 'react';
//There is no need of importing the fragment tag from react.

function ListGroup() {
  const items = ["New York", "Los Angeles", "Tokyo", "Paris"];

  
  return (
    //This is one way to write the code quickly with the Fragment tag
    //The Fragment tag is used to group elements together
    //By having an empty tag you can group elements together without having to use a div tag ; the same function as importing a fragment tag from react.
    <>
      <h1>List</h1>
      <ul className="list-group">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
