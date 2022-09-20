import { useNavigate } from "react-router-dom";

type Props = {
  title: string;
  link: string;
}

const MenuItem = ({ title, link }: Props) => {
  const navigate = useNavigate();

  const handleClicked = (link: string) => {
    navigate(link);
  }
  return (
    <div className="font-sorasemibold cursor-pointer text-white" onClick={() =>  handleClicked(link) }>
      {title}
    </div>
  )
}

export default MenuItem;