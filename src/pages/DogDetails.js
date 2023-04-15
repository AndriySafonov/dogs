import { Link, useParams, Outlet } from 'react-router-dom';

const DogDetails = () => {
  const { dogId } = useParams();

  // useEffect(() => {
  //    HTTP запрос
  // },[])

  return (
    <>
      <h1>DogDetails: {dogId}</h1>
      <ul>
        <li>
          <Link to="subbreeds">Dog subbreeds</Link>
        </li>
        <li>
          <Link to="gallery">Gallery</Link>
        </li>
      </ul>
      <Outlet />
    </>
  );
};
export default DogDetails;
