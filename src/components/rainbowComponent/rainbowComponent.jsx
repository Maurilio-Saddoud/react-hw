import ColorComponent from "./colorComponent"

const RainbowComponent = () => {
    return(
        <div>
            <ColorComponent divColor={"red"}/>
            <ColorComponent divColor={"orange"}/>
            <ColorComponent divColor={"yellow"}/>
            <ColorComponent divColor={"green"}/>
            <ColorComponent divColor={"blue"}/>
            <ColorComponent divColor={"indigo"}/>
            <ColorComponent divColor={"violet"}/>
            {/* test */}
        </div>
    )
}

export default RainbowComponent