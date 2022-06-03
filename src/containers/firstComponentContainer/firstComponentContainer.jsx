import FirstComponent from "../../components/firstComponent";

const FirstComponentContainer = () => {
    return (
        <div>
            <FirstComponent name={"Maurilio"} textColor={"red"}/>
            <FirstComponent name={"Soroush"} textColor={"blue"}/>
            <FirstComponent name={"Billy"} textColor={"green"}/>
        </div>
    )
}

export default FirstComponentContainer