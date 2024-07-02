
export const PostCard = (props) => {
  return (
    <div>
        <h3>{props.title}</h3>
        <h4>{props.author}</h4>
        <p>{props.content}</p>
        <p>
            {
                props.published ? 'Published': 'Not Published'
            }
        </p>
        <p>{props.date}</p>
    </div>
  )
}



