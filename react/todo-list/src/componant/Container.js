/** @jsxImportSource @emotion/react */
import ListItem from "./ListItem";

function Container(props) {
  return (
    <div>
      {props.list
        .filter((item) => props.status === item.status)
        .map((item, index) => (
          <ListItem
            key={index}
            index={index}
            item={item}
            list={props.list}
            setList={props.setList}
          />
        ))}
    </div>
  );
}

export default Container;
