type Props = {
  name: string;
  detail: string;
  photo: any;
  description: string;
}

const LandOwnerItem = ({ name, detail, photo, description }: Props) => {
  return (
    <div className="flex flex-col sm:flex-row gap-6 md:gap-12">
      <div className="flex flex-col">
        <img src={photo} alt={name} />
      </div>
      <div className="flex flex-col w-full sm:w-1/2 gap-6">
        <div className="text-lg-4 text-white">{name}</div>
        <div className="font-soralight text-sm text-white">{detail}</div>
        <div className="font-soralight text-app-dark-400">{description}</div>
      </div>
    </div>
  )
}

export default LandOwnerItem;