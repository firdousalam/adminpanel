import { FC}  from 'react'
interface NotFoundProps {
  text: string;
}


const NotFound: FC<NotFoundProps> = ({ text }: NotFoundProps) => {
  return (
    <div>
      <p>{text}</p>
    </div>
  )
}

export default NotFound;
