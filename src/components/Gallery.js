import { useParams } from "react-router-dom";

export const Gallery = () => {
    const { dogId } = useParams()
    
     // useEffect(() => {
  //    HTTP запрос
  // },[])
    
    return <div>Immage Gallety: {dogId}</div>;
};
