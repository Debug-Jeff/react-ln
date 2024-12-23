//import { Fragment} from 'react';
//There is no need of importing the fragment tag from react.

function ListGroup() {
  let items = ["New York", "Los Angeles", "Tokyo", "Paris"];
  // items = [];

  // const message = items.length === 0 ? <p>No item found</p> : null;;

  //const getMessage = () => {
  //return items.length === 0 ? <p>No item found</p> : null;;
  //}

  return (
    //This is one way to write the code quickly with the Fragment tag
    //The Fragment tag is used to group elements together
    //By having an empty tag you can group elements together without having to use a div tag ; the same function as importing a fragment tag from react.
    <>
      <h1>List</h1>
      {items.length === 0 ? <p>No item found</p> : null}
      {items.length === 0 && <p>No item</p>}
      <ul className="list-group">
        {items.map((item) => (
          <li
            className="list-group-item"
            key={item}
            onClick={() => console.log("Clicked")}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
