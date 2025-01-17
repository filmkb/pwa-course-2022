import '../css/Avatar.css';

export function Avatar(props) {
  return (
    <div className="avatar">
      <img src={`https://avatars.dicebear.com/api/micah/${props.name}.svg`} alt={props.name}/>
    </div>
  );
}