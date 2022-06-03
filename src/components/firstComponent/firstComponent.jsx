

const FirstComponent = ({textColor, name}) => {
  return (
    <div style={{color: textColor, textAlign: "center"}}>
    {name}.
    </div>
  );
}

export default FirstComponent;
