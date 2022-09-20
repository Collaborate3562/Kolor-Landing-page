declare type NewsItemProps = {
  image: any;
  title: string;
  date: string;
  link: string;
}

const NewsItem = (props:NewsItemProps) => {
  return (
    <>
      <div className="flex flex-col gap-6">
        <img src={props.image} alt={props.title} />
        <div className="font-soralight text-sm">
          {props.title}
        </div>
        <div className="font-sorathin text-sm text-app-dark-400 italic">
          {props.date}
        </div>
        <button className="button-gradient rounded-full h-12 w-48">
          Learn More
        </button>
      </div>
    </>
  )
}

export default NewsItem;