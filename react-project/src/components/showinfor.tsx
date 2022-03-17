import react from "react";

type ShowInfoProps = {
    name: String,
    age: Number,
}
const ShowInfo = ({name}: ShowInfoProps) => {
    return (
        <div>Hi {name}</div>
    )
}
export default ShowInfo;